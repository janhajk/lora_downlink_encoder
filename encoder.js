/* global $, schemes, DEVICES, APP_TOKEN, deviceWiseEndpoint, APP_ID, THING_KEY, localStorage */

const STORAGEKEY = 'cfgDistributor';

let Ack, ack, getConfig, updateConfig, DeviceSelector, deviceSelector, configDistributor, configDevices;

let ConfItem = function(properties, parent, level) {
      let self = this;
      this.level = level;
      this.currentSelectionByte = null;
      let formatHex = function(hex, amount) {
            if (amount === undefined || amount === null) { amount = 2; }
            else amount = 2 * amount;
            // let len = hex.toString(16).length;
            let precidingZeros = '0';
            for (let i = 0; i < amount; i++) precidingZeros += '0';
            return (precidingZeros + hex.toString(16)).substr(-amount).toUpperCase();
      };
      for (let i in properties) {
            if (properties.hasOwnProperty(i)) {
                  this[i] = properties[i];
            }
      }

      // return DOM <select> with <options>
      this.dom = function() {
            let titleOption = function() {
                  let o = document.createElement('option');
                  o.innerHTML = '------ Select One -------';
                  o.value = 'null';
                  return o;
            };
            let widget;
            // ACK
            if (self.title === 'ack') {
                  widget = new dropdown();
                  widget.addOption(titleOption());
                  let option = document.createElement('option');
                  option.value = ack.get();
                  option.innerHTML = '0x' + formatHex(parseInt(ack.get(), 10)) + ' - ack';
                  widget.addOption(option);
            }
            // Range slider <DIV>
            else if (self.type !== undefined) {
                  let type = self.type.split(':'); // Format: range:unit:min:max
                  if (type[0] === 'range') {
                        let slider1 = slider(type[2], type[3]); // slide(min, max), returns [ slidercointainer <div>, input <input>, value <span> ]
                        widget = slider1[0];
                        slider1[1].oninput = function() {
                              let unit = type[1];
                              slider1[2].innerHTML = this.value + unit; // show value
                              self.currentSelectionByte = parseInt(this.value, 10);
                              // has parent item
                              if (parent.level !== undefined) {
                                    parent.update(formatHex(self.currentSelectionByte, self.len));
                              }
                        };
                  }
                  else if (type[0] === 'input') {
                        widget = document.createElement('input');
                        widget.setAttribute('maxlength', type[1]);
                        widget.onkeyup = function(key) {
                              self.currentSelectionByte = parseInt(this.value, 16);
                              // has parent item
                              if (parent.level !== undefined) {
                                    parent.update(formatHex(self.currentSelectionByte, self.len));
                              }
                        };

                  }
            }
            // value is array => Dropdwon <SELECT>
            else if (self.value !== undefined && self.value.length) {
                  widget = new dropdown();
                  widget.addOption(titleOption());
                  for (let i = 0; i < self.value.length; i++) {
                        let option = document.createElement('option');
                        option.value = self.value[i].value.toString(10); // 1-255
                        option.setAttribute('title', self.value[i].description);
                        option.innerHTML = '0x' + formatHex(self.value[i].value) + ' - ' + self.value[i].title;
                        widget.addOption(option);
                  }
            }
            else {
                  widget = document.createElement('div');
            }
            if (widget.type === 'dropdown') {
                  $(widget.select).on('select2:select', function() {
                        if (this.value === 'null') return;
                        self.currentSelectionByte = parseInt(this.value, 10);
                        let conf;
                        let i = 0;
                        if (self.value !== undefined && Array.isArray(self.value)) {
                              for (i; i < self.value.length; i++) {
                                    if (parseInt(self.value[i].value, 10) === self.currentSelectionByte) break;
                              }
                              if (self.value[i].child !== undefined) {
                                    conf = new ConfItem(self.value[i].child, self, level + 1);
                              }
                              // End of tree has been reached
                              else {
                                    conf = null;
                              }
                        }
                        else if (self.child !== undefined) {
                              conf = new ConfItem(self.child, self, level + 1);
                        }
                        else {
                              conf = null;
                        }
                        // Setup next dropdown
                        let div = document.getElementById('dropdown' + (level + 2));
                        div.style.marginTop = '10px';
                        div.innerHTML = '';
                        if (conf !== null) {
                              if (conf.dom().container !== undefined) div.appendChild(conf.dom().container);
                              else div.appendChild(conf.dom());
                        }
                        // has parent item
                        if (parent.level !== undefined) {
                              parent.update(formatHex(self.currentSelectionByte, self.len !== undefined ? self.len : null));
                        }
                        // top level item
                        else {
                              self.update('');
                        }
                  });
                  $(widget.select).select2({
                        width: '100%',
                        templateResult: function(state) {
                              if (!state.id) {
                                    return state.text;
                              }
                              var $state = $(
                                    '<span>' + state.text + '</span><br /><i><span>' + state.title + '</span></i>'
                              );
                              return $state;
                        }
                  });
            }
            return widget;
      };

      // Update HEX-Code (recursive function)
      this.update = function(previous) {
            // parent is a parent item > go up the tree
            if (parent.level !== undefined) {
                  parent.update(formatHex(this.currentSelectionByte, this.len !== undefined ? this.len : null) + previous);
            }
            // Top Element > output HEX String
            else {
                  parent.value = hexFormatWithSpaces('0x' + formatHex(this.currentSelectionByte, this.len !== undefined ? this.len : null) + previous);
            }

      };
};



let encoded = document.getElementById('encoded');
let div = document.getElementById('dropdown1');


let conf;
let alrtStatus = new Status(document.getElementsByTagName('body')[0]);

$(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
      resetAll();
});


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

function resetAll() {
      for (let i = 0; i < 10; i++) {
            let dom = document.getElementById('dropdown' + i);
            if (dom !== null) dom.innerHTML = '';
      }
      conf = new ConfItem(schemes[deviceSelector.scheme()], encoded, 0);
      div.appendChild(conf.dom().container);
      encoded.value = '<HEX>';
}

let btnReset = document.getElementById('btnReset');
btnReset.onclick = function() {
      resetAll();
};

let dl = document.getElementById('btnDownlink');
dl.onclick = function() {
      let tf = document.getElementById('encoded');
      let value = tf.value;
      value = value.replace(/\s/g, '');
      value = value.substr(2);
      downlink(value, 2, deviceSelector.value(), 3600, function(e, success) {
            ack.inc();
            resetAll();
            alrtStatus.set(success ? 'Downlink sent successfully' : e, success ? 'success' : 'danger');
      });
};

let clipy = document.getElementById('clipboard');
clipy.onclick = function() {
      let tf = document.getElementById('encoded');
      let value = tf.value;
      value = value.replace(/\s/g, '');
      value = value.substr(2);
      tf.value = value;
      tf.select();
      tf.setSelectionRange(0, 99999);
      document.execCommand('copy');
      tf.value = hexFormatWithSpaces('0x' + value);
      ack.inc();
};

function hexFormatWithSpaces(hexString) {
      let value_split = '';
      for (let i = 0; i < hexString.length; i++) {
            value_split += hexString[i];
            if (i % 2 && i + 1 < hexString.length) value_split += ' ';
      }
      return value_split;
}

/**
 * Widget Dropdown
 *
 */
function dropdown() {
      this.type = 'dropdown';
      this.container = document.createElement('div');
      this.select = document.createElement('select');
      this.container.width = '100%';
      this.select.width = '100%';
      this.label = document.createElement('label');
      this.container.appendChild(this.select);
      this.container.appendChild(this.label);
      this.addOption = function(option) {
            this.select.appendChild(option);
      };
      this.addEvent = function(event) {
            this.select.onclick(event);
      };
}


function slider(min, max) {
      let step = 1;
      let range = max - min;
      if (range > 100) step = 10;
      if (range > 1000) step = 100;
      if (range > 10000) step = 100;
      let container = document.createElement('div');
      container.style.marginTop = '10px';
      container.className = 'slidecontainer';
      let input = document.createElement('input');
      input.setAttribute('type', 'range');
      input.setAttribute('min', min);
      input.setAttribute('max', max);
      input.setAttribute('step', step);
      input.className = 'slider';
      let p = document.createElement('p');
      let span = document.createElement('span');
      p.appendChild(span);
      container.appendChild(input);
      container.appendChild(p);
      return [container, input, span];
}


const DeviceWiseConnector = function() {
      const getToken = function() {
            return new Promise((resolve, reject) => {

            });
      };
};





function downlink(payload, port, thingId, validity, next) {
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
 * Object for ack
 * stores current ack to persistens browser storage
 *
 *
 */
Ack = function() {
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
ack = new Ack();



getConfig = function() {

      let cfg = localStorage.getItem(STORAGEKEY);
      cfg = (cfg !== null) ? JSON.parse(cfg) : {};

      let fields = {
            endpoint: { value: (cfg.endpoint && cfg.endpoint.value) || deviceWiseEndpoint || '' },
            app_token: { value: cfg.app_token.value || APP_TOKEN || '' },
            app_id: { value: cfg.app_id.value || APP_ID || '' },
            thing_key: { value: cfg.thing_key.value || THING_KEY || '' },
            devices: cfg.devices || DEVICES || [],
      };
      return fields;
};


/**
 * adds new information to config
 * overwrites existing
 *
 */
updateConfig = function(params) {
      let conf = getConfig();
      if (conf === null) conf = {}; // first time?
      for (let i in params) {
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
 * Dropdown to select active device
 *
 *
 *
 */
DeviceSelector = function() {
      let slcDevice = document.getElementById('slcDevice');
      let select;
      let devices = getConfig().devices;
      let curVal = devices.length ? (devices[0].id || devices[0].devEui) : false;
      let curScheme = devices.length ? (devices[0].device_type || devices[0].type) : false;
      this.update = function() {
            slcDevice.innerHTML = '';
            select = document.createElement('select');
            devices = getConfig().devices;
            for (let i in devices) {
                  let option = document.createElement('option');
                  option.innerHTML = devices[i].name;
                  option.title = devices[i].id || devices[i].devEui;
                  option.value = devices[i].id || devices[i].devEui;
                  select.appendChild(option);
            }
            slcDevice.appendChild(select);
            $(select).select2({
                  width: '100%',
                  templateResult: function(item) {
                        console.log(item);
                        var $state = $(
                              '<span>' + item.text + '</span><br /><i><span>' + item.title + '</span></i>'
                        );
                        return $state;
                  }
            });
            $(select).on('select2:select', function() {
                  curVal = this.value;
            });

      };
      this.value = () => curVal;
      this.scheme = () => curScheme;

};

deviceSelector = new DeviceSelector();
deviceSelector.update();


/**
 *
 * configure form for the distributor
 *
 *
 */

configDistributor = function() {
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
            if (fields[key].type === 'dropdown') {
                  dom = dropdown(key, fields[key].data, fields[key].key, fields[key].value);
            }
            else {
                  dom = textfield(key, fields[key].value);
            }
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

configDevices = function() {
      let fields = {
            name: {},
            id: {},
            device_type: { type: 'dropdown', data: ['abeeway_asset-tracker_2.0.0'] }
      };

      let parentDom = document.getElementById('configFormDevices');
      parentDom.innerHTML = '';
      let textfield = function(title, placeholder) {
            let group = document.createElement('div');
            group.className = 'col-sm-12   form-group';
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
            let config = getConfig().devices;
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
