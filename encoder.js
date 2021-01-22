/* global $, schemes, alrtStatus, ack, deviceSelector,batchDownlink  */

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
            else if (self.type !== undefined) {
                  let type = self.type.split(':'); // Format: range:unit:min:max
                  // Range slider
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
                  // Input
                  else if (type[0] === 'input') {
                        widget = document.createElement('input');
                        widget.setAttribute('maxlength', type[1] || 8);
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


// DOM of input for HEX Code
let encoded = document.getElementById('encoded');
// DIV of Dropdown area
let div = document.getElementById('dropdown1');


let conf;

$(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
      resetAll();
      // reset Button
      document.getElementById('btnReset').onclick = function() {
            resetAll();
      };
});




function resetAll() {
      for (let i = 0; i < 10; i++) {
            let dom = document.getElementById('dropdown' + i);
            if (dom !== null) dom.innerHTML = '';
      }
      conf = new ConfItem(schemes[deviceSelector.scheme()], encoded, 0);
      div.appendChild(conf.dom().container);
      encoded.value = '<HEX>';
}

// send Downlink button
document.getElementById('btnDownlink').onclick = function() {
      let tf = document.getElementById('encoded');
      let value = tf.value;
      value = value.replace(/\s/g, '');
      value = value.substr(2);
      batchDownlink(value, 2, deviceSelector.value(), 3600)
            .then(data => {
                  ack.inc();
                  resetAll();
                  alrtStatus.set('Downlink sent successfully', 'success');
                  console.log('DeviceWise returned', data);
            })
            .catch(e => {
                  alrtStatus.set('There was an error in your downlink. Check the console for the error.', 'danger');
                  console.log(e);
            });
};

// Button for copying hexcode
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
 *
 *  WIDGETS
 *
/

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
