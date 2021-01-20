/* global deviceSelector, $ */
(function() {

      let container = document.getElementById('decoder');

      const Decoder = {
            'abeeway_asset-tracker_2.0.0': function(payload) {
                  payload = payload.toUpperCase();

                  this.decode = function() {
                        let res = {};
                        const message_type = payload.substring(0, 2);
                        console.log(payload);
                        console.log(message_type);
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
                        // const status = payload.substring(2, 10);
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
                  return group;
            };
            let rowDom = function() {
                  let row = document.createElement('div');
                  row.className = 'row';
                  return row;
            };
            let row = rowDom();
            container.append(row);
            let hex = textfield('HEX Payload for ' + deviceSelector.scheme(), '');
            row.appendChild(hex);
            // submit button
            let group = document.createElement('div');
            group.className = 'form-group';
            let button = document.createElement('button');
            button.className = 'btn btn-info';
            button.type = 'submit';
            button.innerHTML = 'Decode';
            group.appendChild(button);
            container.appendChild(group);
            row = rowDom();
            container.appendChild(row);
            button.onclick = function() {
                  let val = $(hex).find('input').val();
                  let decoded = new Decoder[deviceSelector.scheme()](val).decode();
                  row.innerHTML = '';
                  for (let i in decoded) {
                        let div = document.createElement('div');
                        div.className = 'col-sm-12 form-group';
                        div.innerHTML = i + ': ' + decoded[i];
                        row.appendChild(div);
                  }
            };


      };
      decoderForm();






})();
