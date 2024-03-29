/* global $, schemes, alrtStatus, ack, deviceSelector,batchDownlink  */

// This software is free for personal use.
// For commercial use fees apply. Please contact hello@thingware.ch for licensing this software.
// Created by: Jan Schär | https://shopofthings.ch

function isFunction(functionToCheck) {
      return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}


let ConfItem = function(properties, parent, level) {
      let self = this;
      this.level = level;
      this.currentSelectionByte = null;
      // format a value to readable hex-Format
      // amount is the total bytes and if too short, zeros are added at the beginning
      let formatHex = function(hex, amount) {
            if (amount === undefined || amount === null) { amount = 2; }
            else amount = 2 * amount;
            // let len = hex.toString(16).length;
            let precidingZeros = '0';
            for (let i = 0; i < amount; i++) precidingZeros += '0';
            return (precidingZeros + hex.toString(16)).substr(-amount).toUpperCase();
      };

      // safe all properties for this conf level
      for (let i in properties) {
            if (properties.hasOwnProperty(i)) {
                  this[i] = properties[i];
            }
      }

      // return DOM of current confItem
      this.dom = function() {
            let titleOption = function() {
                  let o = document.createElement('option');
                  o.innerHTML = '------ Select One -------';
                  o.value = 'null';
                  return o;
            };
            let descriptionDom = function(text, parent) {
                  if (text === undefined) return;
                  let description = document.createElement('div');
                  description.style.fontSize = '0.8em';
                  description.style.fontStyle = 'italic';
                  description.innerHTML = text;
                  parent.appendChild(description);
            };
            let widget; // class variable of widget

            // ACK
            if (self.title === 'ack') {
                  widget = new dropdown();
                  widget.addOption(titleOption());
                  let option = document.createElement('option');
                  option.value = ack.get();
                  option.innerHTML = '0x' + formatHex(ack.get()) + ' - ack';
                  widget.addOption(option);
            }
            // // value is function()
            // else if (isFunction(self.value)) {
            //       widget = new dropdown();
            //       widget.addOption(titleOption());
            //       let option = document.createElement('option');
            //       option.value = self.value(deviceSelector.value()[0]);
            //       option.innerHTML = '0x' + formatHex(parseInt(option.value, 10)) + ' - Pin';
            //       widget.addOption(option);
            // }

            // Type field
            else if (self.type !== undefined) {
                  let type = self.type.split(':'); // Format: range:unit:min:max
                  // Range slider
                  if (type[0] === 'range') {
                        let slider1 = slider(type[2], type[3]); // slide(min, max), returns [ slidercointainer <div>, input <input>, value <span> ]
                        widget = slider1[0];
                        slider1[1].oninput = function() {
                              let unit = type[1];
                              slider1[2].innerHTML = this.value + unit; // show value
                              self.currentSelectionByte = formatHex(Number(this.value).toString(16), self.len);
                              // has parent item
                              if (parent.level !== undefined) {
                                    parent.update(self.currentSelectionByte);
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
                  // multi field (for exp. bit config fields)
                  else if (type[0] === 'multi') {
                        let value = function() {
                              let bitstring = '';
                              let mf = self.multiform;
                              // if (self.endianness === 'lsb') {
                              //       mf = [];
                              //       for (let i = self.multiform.length - 1; i >= 0; i--) {
                              //             mf.push(self.multiform[i]);
                              //       }
                              // }
                              for (let i in mf) {
                                    let val = mf[i].value();
                                    if (mf[i].type === 'bool') {
                                          bitstring += val ? 1 : 0;
                                    }
                                    else if (mf[i].type === 'options') {
                                          bitstring += ('00000000000000000000000000000000' + (val >>> 0).toString(2)).substr(-mf[i].len);
                                    }
                                    // default: input
                                    else {
                                          bitstring += ('00000000000000000000000000000000' + (val >>> 0).toString(2)).substr(-mf[i].len);
                                    }
                              }
                              let val = bitstring.match(/.{1,8}/g); // split in byte-packages
                              if (self.endianness === 'lsb'){ val = val.map(i => i.toString().split('').reverse().join(''));
                                    val.reverse();
                              }
                              val = val.map(i => parseInt(i, 2)); // convert every byte-package in byte
                              val = val.map(i => formatHex(i, 1)); // format every byte in hex-string
                              val = val.join('');
                              val = formatHex(val, self.len);
                              self.currentSelectionByte = val;
                              // has parent item
                              if (parent.level !== undefined) {
                                    parent.update(val);
                              }
                              return val;
                        };
                        widget = document.createElement('div');
                        for (let i = 0; i < self.multiform.length; i++) {
                              let container = document.createElement('div');
                              container.className = 'multiform-part-container';
                              let id = 'multifield_' + new Date().valueOf();
                              // bool
                              if (self.multiform[i].type === 'bool') {
                                    let input = document.createElement('input');
                                    input.id = id + '_' + i;
                                    input.className = 'form-check-input';
                                    container.className = 'form-check form-switch';
                                    input.type = 'checkbox';
                                    input.onchange = () => value();
                                    self.multiform[i].value = () => input.checked;
                                    let label = document.createElement('label');
                                    label.for = id + '_' + i;
                                    label.className = 'form-check-label';
                                    label.innerHTML = self.multiform[i].label;
                                    input.value = self.multiform[i].defaultValue || 0;
                                    container.appendChild(label);
                                    container.appendChild(input);
                                    // Description
                                    descriptionDom(self.multiform[i].description, container);
                              }
                              // options
                              else if (self.multiform[i].type === 'option') {
                                    let title = document.createElement('h4');
                                    title.innerHTML = self.multiform[i].label;
                                    container.appendChild(title);
                                    descriptionDom(self.multiform[i].description, container);
                                    for (let r in self.multiform[i].options) {
                                          let subContainer = document.createElement('div');
                                          subContainer.className = 'form-check form-check-inline';
                                          let input = document.createElement('input');
                                          let label = document.createElement('label');
                                          input.type = 'radio';
                                          input.name = id + '_' + i;
                                          input.className = 'form-check-input';
                                          input.value = self.multiform[i].options[r];
                                          $(input).change(() => value());
                                          label.innerHTML = r;
                                          subContainer.appendChild(label);
                                          subContainer.appendChild(input);
                                          container.appendChild(subContainer);
                                    }
                                    self.multiform[i].value = () => $("input[type='radio'][name='" + id + '_' + i + "']:checked").val();
                              }
                              // textfield
                              else {
                                    container.className += ' form-outline';
                                    let input = document.createElement('input');
                                    input.type = 'text';
                                    input.id = id + '_' + i;
                                    input.className = 'form-control';
                                    $(input).keyup(() => value());
                                    self.multiform[i].value = () => input.value;
                                    let label = document.createElement('label');
                                    label.for = id + '_' + i;
                                    label.className = 'form-label';
                                    label.innerHTML = self.multiform[i].label;
                                    input.value = self.multiform[i].defaultValue || 0;
                                    container.appendChild(label);
                                    container.appendChild(input);
                                    descriptionDom(self.multiform[i].description, container);

                              }
                              widget.appendChild(container);
                        }
                        value();
                        if (self.child !== undefined) {
                              self.navigate(value(), self);
                        }
                  }
            }
            // value is array => Dropdwon <SELECT>
            // add values as options
            else if (self.value !== undefined && self.value.length) {
                  widget = new dropdown();
                  widget.addOption(titleOption());
                  for (let i = 0; i < self.value.length; i++) {
                        let option = document.createElement('option');
                        let value;
                        if (isFunction(self.value[i].value)) {
                              value = formatHex(self.value[i].value(deviceSelector.value()[0]), self.value[i].len || 1);
                        }
                        else {
                              value = formatHex(self.value[i].value.toString(16), self.value[i].len || 1);
                        }
                        option.value = value;
                        option.setAttribute('title', self.value[i].description);
                        option.innerHTML = '0x' + formatHex(value, self.value[i].len || 1) + ' - ' + self.value[i].title;
                        widget.addOption(option);
                  }
            }
            else {
                  widget = document.createElement('div');
            }

            // select2 for all dropdowns
            if (widget.type === 'dropdown') {
                  $(widget.select).on('select2:select', function() { self.navigate(this.value, self) });
                  self.select2select2(widget.select); // transform select into select2 object

            }

            return widget;
      };






      // fired after select has been selected
      // in case a multiform is loaded, this gets fired automatically
      // value: value selected from last state for variable/flex continuation
      // confItem: parent that fired the navigation
      this.navigate = function(value, confItem) {
            if (value === 'null') return; // empty select (or title); we don't want to load anything when last selection was a title

            if (confItem.port !== undefined) $('#port').text(confItem.port);

            confItem.currentSelectionByte = value;
            let conf;
            let index;

            // since we only get a value, but not the scheme-item, we must find the selected scheme item in the selection through the given value
            if (confItem.value !== undefined && Array.isArray(confItem.value)) {
                  for (let i = 0; i < confItem.value.length; i++) {
                        let v;

                        // if value is a function, feed it with first device
                        if (isFunction(confItem.value[i].value)) {
                              v = confItem.value[i].value(deviceSelector.value()[0]).toString().toUpperCase();
                        }
                        else {
                              v = formatHex(Number(confItem.value[i].value).toString(16), confItem.value[i].len);
                        }

                        if (v === confItem.currentSelectionByte) {
                              index = i;
                              break;
                        }
                  }

                  // attach new children
                  if (confItem.value[index].child !== undefined) {
                        conf = new ConfItem(confItem.value[index].child, confItem, level + 1);
                  }
                  // End of tree has been reached; should never be reached
                  else {
                        conf = null;
                  }
            }
            // conf item has further children
            else if (confItem.child !== undefined) {
                  conf = new ConfItem(confItem.child, confItem, level + 1);
            }
            else {
                  conf = null;
            }
            // Setup next dropdown
            let div = document.getElementById('dropdown' + (level + 2));
            div.style.marginTop = '10px';
            div.innerHTML = '';
            if (conf !== null) {
                  let dom = conf.dom();
                  if (dom.container !== undefined) div.appendChild(dom.container);
                  else div.appendChild(dom);
            }


            // Update tree backwards

            // if item has parent, then update the whole hexcode up the tree ( true for every level but first/top level)
            if (parent.level !== undefined) {
                  parent.update(formatHex(confItem.currentSelectionByte, confItem.len !== undefined ? confItem.len : null));
            }
            // top level item
            else {
                  confItem.update('');
            }
      };

      // transform a select into select2 object
      this.select2select2 = function(selectDom) {
            $(selectDom).select2({
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
      };

      // Update HEX-Code (recursive function)
      this.update = function(previous) {
            // parent is a parent item > go up the tree
            if (parent.level !== undefined) {
                  parent.update(formatHex(this.currentSelectionByte, this.len !== undefined ? this.len : null) + previous);
            }
            // Top Element > output HEX String
            else {
                  parent.innerHTML = hexFormatWithSpaces('0x' + formatHex(this.currentSelectionByte, this.currentSelectionByte.length !== undefined ? this.currentSelectionByte.length / 2 : null) + previous);
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
      // resetAll();
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
      conf = new ConfItem(deviceSelector.scheme().config, encoded, 0);
      div.appendChild(conf.dom().container);
      encoded.setAttribute('placeholder', '<HEX>');
      encoded.innerHTML = '';
}

// send Downlink button
document.getElementById('btnDownlink').onclick = function() {
      let tf = document.getElementById('encoded');
      let value = tf.value.replace(/\s/gim, '').substr(2); // remove all "hex"-spaces and skip "0x"
      let port = deviceSelector.scheme().defaultPort;
      batchDownlink(value, port, deviceSelector.value(), 3600)
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
      tf.innerHTML = value;
      tf.select();
      tf.setSelectionRange(0, 99999);
      document.execCommand('copy');
      tf.innerHTML = hexFormatWithSpaces('0x' + value);
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
