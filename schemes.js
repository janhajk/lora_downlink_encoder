/**
 * Jedes Level hat die folgenden Parameter
 *
 * title string Title of the Value
 * value/s array|byte the value of the selected item
 * description string As helper
 * child object sub config item of that item
 * [optional] type string range:seconds:min:max|range:distance:min:max
 * [optional] len number length of value, defaults to 2; if len>value it filled with preciding zeros
 *
 *
 *
 */


const schemes = {
      title: 'Message Type',
      value: [{
                  title: 'POD',
                  value: 0x01,
                  description: 'Position on Demand',
                  child: { title: 'ack' }
            },
            {
                  title: 'Set Mode',
                  value: 0x02,
                  description: 'Change the tracker operational mode',
                  child: {
                        title: 'ack',
                        child: {
                              title: 'Mode',
                              value: [
                                    { title: 'Standby', value: 0x00 },
                                    { title: 'Motion tracking', value: 0x01 },
                                    { title: 'Permanent tracking', value: 0x02 },
                                    { title: 'Motion start/end tracking', value: 0x03 },
                                    { title: 'activity tracking', value: 0x04 },
                                    { title: 'Off mode', value: 0x05 }
                              ]
                        }
                  }
            },
            {
                  title: 'Request configuaration',
                  value: 0x03,
                  description: 'Request the actual configuration of the tracker',
                  child: {
                        title: 'ack'
                  }
            },
            { title: 'Start SOS', value: 0x04, description: 'Turn on SOS mode', child: { title: 'ack' } },
            { title: 'Stop SOS mode', value: 0x05, description: 'Turn off SOS mode', child: { title: 'ack' } },
            {
                  title: 'Temperature Request',
                  value: 0x06,
                  description: 'Request Template status',
                  child: { title: 'ack' }
            },
            {
                  title: 'Set Param',
                  value: 0x0B,
                  description: 'Modify parameter(s)',
                  child: {
                        title: 'ack',
                        child: {
                              title: 'Parameter ID',
                              value: [{
                                          title: 'ul_period',
                                          value: 0x00,
                                          description: 'Period of position or activity messages in motion, start/end, activity or permanent operating mode',
                                          child: {
                                                title: 'seconds',
                                                value: i => { parseInt(i, 10).toString(16) },
                                                type: 'range:seconds:60:86400',
                                                len: 4,
                                                description: 'Period of position or activity messages in motion, start/end, activity or permanent operating mode'
                                          }
                                    }, {
                                          title: 'lora_period',
                                          value: 0x01,
                                          description: 'Period of LoRa Heartbeat messages',
                                          child: {
                                                title: 'seconds',
                                                value: i => { parseInt(i, 10).toString(16) },
                                                type: 'range:seconds:300:86400',
                                                len: 4
                                          }
                                    }, {
                                          title: 'geoloc_sensor',
                                          value: 0x05,
                                          description: 'Period of LoRaheartbeat messages',
                                          child: {
                                                title: 'mode',
                                                value: [{
                                                      title: 'WIFI only',
                                                      value: 0x00
                                                }, {
                                                      title: 'GPS only',
                                                      value: 0x01
                                                }, {
                                                      title: 'LPGPS',
                                                      value: 0x02
                                                }, {
                                                      title: 'WIFI-GPS only',
                                                      value: 0x06
                                                }, {
                                                      title: 'WIFI-LPGPS first, then WIFI-GPS until timeout, then back to WIFI-LPGPS',
                                                      value: 0x09
                                                }, {
                                                      title: 'WIFI-LPGPS first, then',
                                                      value: 0x09
                                                }, {
                                                      title: 'BLE scan only',
                                                      value: 0x10
                                                }, {
                                                      title: 'BLE-GPS only',
                                                      value: 0x11
                                                }],
                                                len: 4
                                          }
                                    },
                                    {
                                          title: 'collection_scan_type',
                                          value: 0x21,
                                          child: {
                                                title: 'Collection scan type',
                                                value: [{
                                                      title: 'No collection scan',
                                                      value: 0x00
                                                }, {
                                                      title: 'BLE collection scan',
                                                      value: 0x01
                                                }, {
                                                      title: 'WIFI collection scan',
                                                      value: 0x02
                                                }],
                                                len: 4
                                          }
                                    },
                                    {
                                          title: 'collection_nb_entry',
                                          value: 0x22,
                                          child: {
                                                type: 'range::1:20',
                                                len: 4
                                          }
                                    },
                                    {
                                          title: 'collection_ble_filter_type',
                                          value: 0x23,
                                          child: {
                                                title: 'Beacon type to scan',
                                                value: [{
                                                      title: 'No Filter',
                                                      value: 0x00
                                                }, {
                                                      title: 'Eddystone UID only',
                                                      value: 0x01
                                                }, {
                                                      title: 'Eddystone URL only',
                                                      value: 0x02
                                                }, {
                                                      title: 'All Eddystone',
                                                      value: 0x03
                                                }, {
                                                      title: 'iBeacon UID only',
                                                      value: 0x04
                                                }, {
                                                      title: 'altBeacon only',
                                                      value: 0x05
                                                }],
                                                len: 4
                                          }
                                    },
                                    {
                                          title: 'collection_ble_filter_main_1',
                                          value: 0x24,
                                          child: {
                                                title: 'Part 1 BLE filter',
                                                type: 'input:8',
                                                len: 4
                                          }
                                    },
                                    {
                                          title: 'collection_ble_filter_main_2',
                                          value: 0x25,
                                          child: {
                                                title: 'Part 2 BLE filter',
                                                type: 'input:8',
                                                len: 4
                                          }
                                    }
                              ]
                        }
                  }
            },
            {
                  title: 'Debug Command',
                  value: 0xFF,
                  description: 'Reset the Tracker'
            }
      ]
};
