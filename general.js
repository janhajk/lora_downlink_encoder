/* global $, localStorage, DEVICES, APP_TOKEN, deviceWiseEndpoint, APP_ID, THING_KEY, schemes, resetAll */

const STORAGEKEY = 'cfgDistributor';


/**
 *
 * Status widget on top
 *
 *
 */
function Status(parent) {
      let container = document.createElement('div');
      container.style.margin = '20px 0';
      $(parent).prepend(container);
      container.style.width = '100%';
      // container.style.position = 'absolute';
      container.style.height = '40px';
      this.set = function(message, status) {
            container.className = 'alert alert-' + status;
            $(container).fadeIn(300, () => {
                  container.innerHTML = message;
                  setTimeout(() => { $(container).fadeOut(400) }, 3000);
            });
      };
}
let alrtStatus = new Status(document.getElementsByTagName('body')[0]);



/**
 *
 * Object for ack
 * stores current ack to persistens browser storage
 *
 *
 */
let Ack = function() {
      let frame;
      let lastFrame = localStorage.getItem('loraAck');
      if (lastFrame === null) {
            frame = 0;
            localStorage.setItem('loraAck', 0);
      }
      else frame = lastFrame;
      this.inc = function() {
            let lastFrame = parseInt(localStorage.getItem('loraAck'), 10);
            frame = lastFrame + 1;
            if (frame > 14) frame = 0;
            localStorage.setItem('loraAck', frame);
            return frame;
      };
      this.get = () => parseInt(frame, 10);
};
let ack = new Ack();



/**
 *
 * Retrieve config
 *
 */
let getConfig = function() {
      let cfg = localStorage.getItem(STORAGEKEY);
      if (cfg !== null) {
            try {
                  return JSON.parse(cfg);
            }
            catch (e) {
                  console.log(e);
            }
      }
      // Default fields or from config file
      let fields = {
            endpoint: { value: deviceWiseEndpoint || '' },
            app_token: { value: APP_TOKEN || '' },
            app_id: { value: APP_ID || '' },
            thing_key: { value: THING_KEY || '' },
            devices: DEVICES || [],
      };
      return fields;
};


/**
 * adds new information to config
 * overwrites existing
 *
 */
let updateConfig = function(params) {
      let conf = getConfig();
      if (conf === null) conf = {}; // first time?
      for (let i in params) {
            // devices are not overwritten but extended
            if (i === 'devices') {
                  let isNew = true;
                  for (let r in conf.devices) {
                        if (conf.devices[r].name === params[i].name) {
                              isNew = false;
                              break;
                        }
                  }
                  if (isNew) {
                        conf[i].push(params[i]);
                  }
            }
            else {
                  conf[i].value = params[i];
            }
      }
      conf = JSON.stringify(conf);
      localStorage.setItem(STORAGEKEY, conf);
};


/**
 *
 * Dropdown to select active device
 *
 *
 *
 */
let DeviceSelector = function() {
      let slcDevice = document.getElementById('slcDevice');
      let select;
      let devices = getConfig().devices;
      // Todo: Load last selection
      let curVal = devices.length ? [devices[0].id || devices[0].devEui] : false;

      let update = function() {
            let devicesSelected = $(select).select2('data');
            curVal = [];
            for (let i = 0; i < devicesSelected.length; i++) {
                  for (let r in devices) {
                        if (devices[r].id === devicesSelected[i].id)
                              curVal.push(devices[r]);
                  }
            }
            resetAll();
      };

      // init form
      this.init = function() {
            slcDevice.innerHTML = '';
            select = document.createElement('select');
            select.setAttribute('multiple', 'multiple');
            devices = getConfig().devices;
            for (let i in devices) {
                  let option = document.createElement('option');
                  option.innerHTML = devices[i].name;
                  option.title = devices[i].id || devices[i].devEui;
                  option.value = devices[i].id || devices[i].devEui;
                  select.appendChild(option);
            }
            slcDevice.appendChild(select);
            let helper = document.createElement('span');
            helper.className = 'help-block';
            helper.innerHTML = 'Press Ctrl-B to select everything from filtered list and add it to the selection';
            slcDevice.appendChild(helper);
            $(select).select2({
                  width: '100%',
                  templateResult: i => $('<span>' + i.text + '</span><br /><i><span>' + i.title + '</span></i>')
            });
            $(select).on('select2:select', update);

      };

      // Ctrl-B select all that match current surch
      $(document).on('keypress', $('.select2-search__field'), function(event) {
            if (event.ctrlKey || event.metaKey) {
                  console.log('key pressed');
                  var element = $('.select2-container');
                  console.log(event.which);
                  if (event.which === 2) {
                        var selected = [];
                        element.find('li').each(function(i, e) {
                              selected.push($(e).attr('title'));
                        });
                        $(select).val(selected);
                        $(select).trigger('change');
                        $(select).trigger('select2:select');
                  }
            }
      });
      this.value = () => curVal;
      this.scheme = () => curVal[0].device_type;

};

let deviceSelector = new DeviceSelector();
deviceSelector.init();


const DeviceWiseConnector = function() {
      const getToken = function() {
            return new Promise((resolve, reject) => {

            });
      };
};


let batchDownlink = async function(payload, port, arrThingId, validity) {
      console.log('Devices: ', arrThingId);
      let results = [];
      return new Promise(async(resolve, reject) => {
            if (!arrThingId.length) return reject('You must select at least one device');
            downlinkProgress.show();
            for (let i = 0; i < arrThingId.length; i++) {
                  try {
                        results.push(await downlink(payload, port, arrThingId[i].id, validity));
                        downlinkProgress.update(Math.round((i + 1) / arrThingId.length * 100));
                        console.log('sending downlink for device ' + arrThingId[i].id);
                  }
                  catch (e) {
                        return reject(e);
                  }
            }
            downlinkProgress.hide();
            resolve(results);
      });
};



async function downlink(payload, port, thingId, validity) {
      let config = getConfig();
      let params = {
            type: "POST",
            url: config.endpoint.value,
            data: JSON.stringify({
                  auth: {
                        command: "api.authenticate",
                        params: {
                              appToken: config.app_token.value,
                              appId: config.app_id.value,
                              thingKey: config.thing_key.value
                        }
                  }
            }),
            dataType: 'json'
      };
      return new Promise(async(resolve, reject) => {
            // first request for session-token
            let result;
            try {
                  result = await $.ajax(params);
                  const sessionId = result.auth.params.sessionId;
                  console.log('Your session id from DeviceWise: ' + sessionId);
                  console.log('sending payload: \'' + payload + '\' on port: ' + port);
                  // data for request #2
                  let requestJson2 = JSON.stringify({
                        auth: {
                              sessionId: sessionId
                        },
                        1: {
                              command: 'lora.device.downlink',
                              params: {
                                    thingId: thingId,
                                    //   devEui: $(frmThingId).val(),
                                    validity: validity,
                                    fPort: port,
                                    confirmable: true,
                                    serialize: false,
                                    retries: 5,
                                    payload: payload
                              }
                        }
                  });
                  console.log(requestJson2);
                  try {
                        result = await $.ajax({
                              url: config.endpoint.value,
                              method: 'POST',
                              dataType: 'json',
                              data: requestJson2,
                        });
                        resolve(result);
                  }
                  catch (e) {
                        reject(e);
                  }
            }
            catch (e) {
                  reject(e);
            }
      });
}



function old_downlink(payload, port, thingId, validity, next) {
      let config = getConfig();
      $.ajax({
                  type: "POST",
                  url: config.endpoint.value,
                  data: JSON.stringify({
                        auth: {
                              command: "api.authenticate",
                              params: {
                                    appToken: config.app_token.value,
                                    appId: config.app_id.value,
                                    thingKey: config.thing_key.value
                              }
                        }
                  }),
                  dataType: 'json'
            })
            .then(data => {
                  const sessionId = data.auth.params.sessionId;
                  console.log('Your session id from DeviceWise: ' + sessionId);
                  console.log('sending payload: \'' + payload + '\' on port: ' + port);
                  let requestJson2 = JSON.stringify({
                        auth: {
                              sessionId: sessionId
                        },
                        1: {
                              command: 'lora.device.downlink',
                              params: {
                                    thingId: thingId,
                                    //   devEui: $(frmThingId).val(),
                                    validity: validity,
                                    fPort: port,
                                    confirmable: true,
                                    serialize: false,
                                    retries: 5,
                                    payload: payload
                              }
                        }
                  });
                  console.log(requestJson2);
                  return $.ajax({
                        url: config.endpoint.value,
                        method: 'POST',
                        async: true,
                        dataType: 'json',
                        data: requestJson2,
                  });
            })
            .then(data => {
                  console.log(data['1'].success);
                  return next(null, true);
            })
            .catch((error) => {
                  console.log('There was an Error in your request:');
                  console.log(error);
                  return next(error, false);
            });
}



/**
 *
 * configure form for the distributor
 *
 *
 */

let configDistributor = function() {
      let fields = getConfig();
      delete fields.devices;

      let parentDom = document.getElementById('configFormDistributor');
      parentDom.innerHTML = '';
      let textfield = function(title, value) {
            let group = document.createElement('div');
            group.className = 'col-sm-6 form-group';
            let label = document.createElement('label');
            label.className = 'form-control-label';
            label.innerHTML = title;
            let input = document.createElement('input');
            input.className = 'form-control';
            input.type = 'text';
            input.value = value;
            input.placeholder = title;
            group.appendChild(label);
            group.appendChild(input);
            return group;
      };
      let rowDom = function() {
            let row = document.createElement('div');
            row.className = 'row';
            return row;
      };
      let rowCounter = 0;
      let row = rowDom();
      parentDom.append(row);
      for (let key in fields) {
            let dom;
            dom = textfield(key, fields[key].value);
            fields[key].dom = dom;
            row.appendChild(dom);
            // New row after every two fields
            if (rowCounter % 2 > 0) {
                  row = rowDom();
                  parentDom.appendChild(row);
            }
            rowCounter++;
      }
      // submit button
      let group = document.createElement('div');
      group.className = 'form-group';
      let button = document.createElement('button');
      button.className = 'btn btn-info';
      button.type = 'submit';
      button.innerHTML = 'Save Config';
      group.appendChild(button);
      button.onclick = function() {
            let params = {};
            for (let key in fields) {
                  if (fields[key].type === 'dropdown') {
                        let values = $(fields[key].dom).find('select').select2('data');
                        params[key] = [];
                        for (let i in values) {
                              params[key].push(values[i].id);
                        }
                  }
                  else {
                        params[key] = $(fields[key].dom).find('input').val();
                  }
            }
            console.log(params);
            updateConfig(params);
      };
      parentDom.append(group);

};
configDistributor();


/**
 *
 * configure form for the distributor
 *
 *
 */

let configDevices = function() {
      let fields = {
            name: {},
            id: {},
            device_type: { type: 'dropdown', data: Object.keys(schemes) }
      };

      let parentDom = document.getElementById('configFormDevices');
      parentDom.innerHTML = '';
      let textfield = function(title, placeholder) {
            let group = document.createElement('div');
            group.className = 'col-sm-12 form-group';
            let label = document.createElement('label');
            label.className = 'form-control-label';
            label.innerHTML = title;
            let input = document.createElement('input');
            input.className = 'form-control';
            input.type = 'text';
            input.value = placeholder !== undefined ? placeholder : '';
            input.placeholder = title;
            group.appendChild(label);
            group.appendChild(input);
            return group;
      };
      let dropdown = function(title, source) {
            let group = document.createElement('div');
            group.className = 'col-sm-12 form-group';
            let label = document.createElement('label');
            label.className = 'form-control-label';
            label.innerHTML = title;
            let select = document.createElement('select');
            select.style.width = '100%';
            for (let i in source) {
                  let option = document.createElement('option');
                  option.value = source[i];
                  option.innerHTML = source[i];
                  select.appendChild(option);
            }
            group.appendChild(label);
            group.appendChild(select);
            $(select).select2();
            return group;
      };
      let rowDom = function() {
            let row = document.createElement('div');
            row.className = 'row';
            return row;
      };
      for (let key in fields) {
            let row = rowDom();
            parentDom.append(row);
            let dom;
            if (fields[key].type === 'dropdown') {
                  dom = dropdown(key, fields[key].data);
            }
            else {
                  dom = textfield(key, fields[key].placeholder);
            }
            fields[key].dom = dom;
            row.appendChild(dom);
            // New row after every two fields
            parentDom.appendChild(row);
      }
      // submit button
      let group = document.createElement('div');
      group.className = 'form-group';
      let button = document.createElement('button');
      button.className = 'btn btn-info';
      button.type = 'submit';
      button.innerHTML = 'Add Device';
      group.appendChild(button);
      button.onclick = function() {
            let params = {};
            for (let key in fields) {
                  if (fields[key].type === 'dropdown') {
                        params[key] = $(fields[key].dom).find('select').select2('data')[0].text;
                  }
                  else {
                        params[key] = $(fields[key].dom).find('input').val();
                  }
            }
            console.log(params);
            updateConfig({ devices: params });
      };
      parentDom.append(group);

};
configDevices();



let Progressbar = function(parentDom) {
      let container = document.createElement('div');
      container.className = 'progress';
      let bar = document.createElement('div');
      bar.className = 'progress-bar progress-bar-striped active';
      bar.setAttribute('role', 'progressbar');
      bar.setAttribute('aria-valuenow', 0);
      bar.setAttribute('aria-valuemin', 0);
      bar.setAttribute('aria-valuemax', 100);
      bar.style.width = '0%';
      container.appendChild(bar);
      container.style.display = 'none';
      parentDom.appendChild(container);
      this.update = function(valueNew) {
            container.style.display = 'block';
            bar.setAttribute('aria-valuenow', valueNew);
            bar.style.width = valueNew + '%';
      };
      this.hide = function() {
            container.style.display = 'none';
      };
      this.show = function() {
            container.style.display = 'block';
      };
};

let downlinkProgress = new Progressbar(document.getElementById('slcDownlink'));
