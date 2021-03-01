/* global deviceSelector, $ */
(function() {

      let container = document.getElementById('decoder');

      const Decoder = {
            'abeeway_asset-tracker_2.1': function(payload) {
                  payload = payload.toUpperCase();
                  let bytes = [];
                  for (let i = 0; i < payload.length; i = i + 2) {
                        bytes.push(parseInt(payload.substr(i, 2), 16));
                  }


                  this.decode = function() {
                        let res = {};
                        const message_type = payload.substr(0, 2);
                        // console.log(payload);
                        // console.log(message_type);
                        switch (message_type) {
                              case '00':
                                    res.message_type = 'Frame pending';
                                    break;
                              case '03':
                                    res.message_type = 'Position';
                                    break;
                              case '04':
                                    res.message_type = 'Energy status';
                                    break;
                              case '05':
                                    res.message_type = 'Heartbeat';
                                    break;
                              case '07':
                                    res.message_type = 'Activity Status/Configuration/Shock detection';
                                    break;
                              case '09':
                                    res.message_type = 'Shutdown';
                                    break;
                              case '0A':
                                    res.message_type = 'Event';
                                    break;
                              case '0B':
                                    res.message_type = 'Collection scan';
                                    break;
                              case '0F':
                                    res.message_type = 'Debug/Error';
                                    break;
                              default:
                                    res.message_type = 'unknown message type';
                        }
                        res.battery_voltage = bytes[2] * 0.0055 + 2.8 + ' Volt';
                        res.battery_percentage = parseInt((bytes[2] / 255) * 100);
                        res.temperature = (bytes[3] * 0.5) - 44;
                        res.ack_token = bytes[4] >> 4;
                        if (bytes[1] & 0x10) res.sos_mode = true;
                        if (bytes[1] & 0x08) res.tracking_state = true;
                        if (bytes[1] & 0x04) res.moving = true;
                        if (bytes[1] & 0x02) res.periodic_pos = true;
                        if (bytes[1] & 0x01) res.pos_on_demand = true;
                        res.operating_mode = bytes[1] >> 5;
                        // decode rest of message
                        if ((bytes[0] === 0x03) && ((bytes[4] & 0x0F) === 0x00)) { // position message & GPS type
                              var lat_raw = ((bytes[6] << 16) | (bytes[7] << 8) | bytes[8]);
                              lat_raw = lat_raw << 8;
                              if (lat_raw > 0x7FFFFFFF) {
                                    lat_raw = lat_raw - 0x100000000;
                              }
                              res.latitude = lat_raw / 10000000;
                              var lng_raw = ((bytes[9] << 16) | (bytes[10] << 8) | bytes[11]);
                              lng_raw = lng_raw << 8;
                              if (lng_raw > 0x7FFFFFFF) {
                                    lng_raw = lng_raw - 0x100000000;
                              }
                              res.longitude = lng_raw / 10000000;
                              res.accuracy = bytes[12] * 3.9;
                              res.age = bytes[5] * 8;
                        }
                        else if ((bytes[0] === 0x03) && ((bytes[4] & 0x0F) === 0x09)) { // position message & wifi bssid type
                              res.bssid0 = bytes.slice(6, 12).map(function(b) { return ("0" + b.toString(16)).substr(-2); }).join(":");
                              res.bssid1 = bytes.slice(13, 19).map(function(b) { return ("0" + b.toString(16)).substr(-2); }).join(":");
                              res.bssid2 = bytes.slice(20, 26).map(function(b) { return ("0" + b.toString(16)).substr(-2); }).join(":");
                              res.bssid3 = bytes.slice(27, 33).map(function(b) { return ("0" + b.toString(16)).substr(-2); }).join(":");

                              res.rssi0 = (bytes[12] > 127 ? bytes[12] - 256 : bytes[12]);
                              res.rssi1 = (bytes[19] > 127 ? bytes[19] - 256 : bytes[19]);
                              res.rssi2 = (bytes[26] > 127 ? bytes[26] - 256 : bytes[26]);
                              res.rssi3 = (bytes[33] > 127 ? bytes[33] - 256 : bytes[33]);
                        }
                        else if ((bytes[0] === 0x03) && ((bytes[4] & 0x0F) === 0x07)) { // position message & BLE macaddr type
                              res.macadr0 = bytes.slice(6, 12).map(function(b) { return ("0" + b.toString(16)).substr(-2); }).join(":");
                              res.macadr1 = bytes.slice(13, 19).map(function(b) { return ("0" + b.toString(16)).substr(-2); }).join(":");
                              res.macadr2 = bytes.slice(20, 26).map(function(b) { return ("0" + b.toString(16)).substr(-2); }).join(":");
                              res.macadr3 = bytes.slice(27, 33).map(function(b) { return ("0" + b.toString(16)).substr(-2); }).join(":");
                              res.rssi0 = (bytes[12] > 127 ? bytes[12] - 256 : bytes[12]);
                              res.rssi1 = (bytes[19] > 127 ? bytes[19] - 256 : bytes[19]);
                              res.rssi2 = (bytes[26] > 127 ? bytes[26] - 256 : bytes[26]);
                              res.rssi3 = (bytes[33] > 127 ? bytes[33] - 256 : bytes[33]);
                        }
                        else if ((bytes[0] === 0x03) && ((bytes[4] & 0x0F) === 0x01)) { // position message & GPS timeout (failure)
                              res.gpstimeout = true;
                        }
                        else if (bytes[0] === 0x09) { // shutdown message
                              res.shutdown = true;
                        }
                        else if (bytes[0] === 0x0A) {
                              res.geoloc_start = true;
                        }
                        else if (bytes[0] === 0x05) {
                              res.heartbeat = true;
                              res.reset_cause = bytes[5];
                              res.firmware_ver = bytes.slice(6, 9);
                        }
                        return res;
                  };
            }
      };




      let decoderForm = function() {

            let textfield = function(title, value) {
                  let group = document.createElement('div');
                  group.className = 'col-sm-12 form-group';
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
                  return [group, input];
            };
            let rowDom = function() {
                  let row = document.createElement('div');
                  row.className = 'row';
                  return row;
            };
            let row = rowDom();
            container.append(row);
            let [hexcontainer, hex] = textfield('HEX Payload for ' + deviceSelector.scheme(), '');
            row.appendChild(hexcontainer);
            row = rowDom();
            container.appendChild(row);
            $(hex).on('keyup', function() {
                  let val = $(hex).val();
                  let decoded = new Decoder[deviceSelector.scheme()](val).decode();
                  row.innerHTML = '';
                  for (let i in decoded) {
                        let div = document.createElement('div');
                        div.className = 'col-sm-12 form-group';
                        div.style.margin = '0';
                        div.innerHTML = i + ': ' + decoded[i];
                        row.appendChild(div);
                  }
            });


      };
      decoderForm();






})();
