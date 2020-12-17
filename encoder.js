/* global $, schemes, DEVICES, APP_TOKEN, deviceWiseEndpoint, APP_ID, THING_KEY */

let curAck = 0;
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
                  option.value = curAck + 1;
                  option.innerHTML = '0x' + formatHex(curAck + 1) + ' - ack';
                  widget.addOption(option);
            }
            // Range slider <DIV>
            else if (self.type !== undefined) {
                  let type = self.type.split(':');
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
                        option.innerHTML = '0x' + formatHex(self.value[i].value) + ' - ' + self.value[i].title;
                        widget.addOption(option);
                  }
            }
            else {
                  widget = '<div></div>';
            }
            if (widget.type === 'dropdown') {
                  widget.select.onclick = function() {
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
                  };
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
let slcDevice = document.getElementById('slcDevice');
for (let i = 0; i < DEVICES.length; i++) {
      let option = document.createElement('option');
      option.innerHTML = DEVICES[i].name + ' - ' + DEVICES[i].devEui;
      option.value = DEVICES[i].devEui;
      slcDevice.appendChild(option);
}
let conf;
let alrtStatus = new Status(document.getElementsByTagName('body')[0]);
resetAll();
$(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
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
      conf = new ConfItem(schemes, encoded, 0);
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
      downlink(value, 2, slcDevice.value, 3600, function(e, success) {
            curAck++;
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
      curAck++;
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





function downlink(payload, port, thingId, validity, next) {
      $.ajax({
                  type: "POST",
                  url: deviceWiseEndpoint,
                  data: JSON.stringify({
                        auth: {
                              command: "api.authenticate",
                              params: {
                                    appToken: APP_TOKEN,
                                    appId: APP_ID,
                                    thingKey: THING_KEY
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
                        url: deviceWiseEndpoint,
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
