/* global schemes */


/**
 * Jedes Level hat die folgenden Parameter
 *
 * title string Title of the Value
 * value/s array|byte the value of the selected item
 * description string As helper
 * child object sub config item of that item (sub select)
 * [optional] type string range:seconds:min:max|range:distance:min:max
 * [optional] len number length of value, defaults to 2; if len>value it filled with preciding zeros
 *
 *
 *
 */

/**
 *
 *
 * Swisscom Multisense
 *
 *
 *
 *
 *
 *
 */


let scheme = {
      device: 'multisense',
      supportedVersions: [],
      defaultPort: 100,
      config: {}
};


scheme.config = {
      title: '',
      value: [{
                  title: 'Get Device Info',
                  value: 0x01,
                  description: '',
                  port: 101,
            },
            {
                  title: 'Rejoin Set',
                  value: 0x01,
                  description: '',
                  port: 102,
            },
            {
                  title: 'Set Config',
                  value: function(device) {
                        return device.config_param1.toUpperCase();
                  },
                  len: 4,
                  description: 'Set new Config parameter',
                  child: {
                        title: 'DEV CFG LoRa',
                        type: 'multi',
                        multiform: [{
                                    type: 'bool',
                                    label: 'Confirmed/Unconfirmed',
                                    datatype: 'bit',
                                    defaultValue: 1,
                                    len: 1
                              },
                              {
                                    type: 'option',
                                    label: 'Confirmed tries',
                                    datatype: 'bit',
                                    len: 3,
                                    defaultValue: 3,
                                    options: { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 7: 6, 8: 7 }
                              },
                              {
                                    type: 'bool',
                                    label: 'ADR ON/OFF',
                                    datatype: 'bit',
                                    defaultValue: 0,
                                    len: 1
                              },
                              {
                                    type: 'option',
                                    label: 'Datarate when ADR OFF',
                                    datatype: 'bit',
                                    defaultValue: 'SF12',
                                    len: 3,
                                    options: { 'SF12': 0, 'SF11': 1, 'SF10': 2, 'SF09': 3, 'SF08': 4, 'SF07': 5 }
                              },
                              {
                                    type: 'bool',
                                    label: 'LED ON Tx Rx',
                                    datatype: 'bit',
                                    defaultValue: 0,
                                    len: 1
                              },
                              {
                                    type: 'bool',
                                    label: 'RFU',
                                    datatype: 'bit',
                                    defaultValue: 0,
                                    len: 1
                              },
                              {
                                    type: 'integer',
                                    label: 'Rejoining Trigger',
                                    description: 'Number of uplinks needed to fire a rejoin on next uplink. 0 for no automatic rejoin function, max. 16384',
                                    datatype: 'bit',
                                    defaultValue: 0,
                                    len: 14
                              },
                              {
                                    type: 'bool',
                                    label: 'RFU',
                                    datatype: 'bit',
                                    defaultValue: 0,
                                    len: 6
                              },
                              {
                                    type: 'option',
                                    label: 'RF Power Level',
                                    description: '1 to 3, where 1 equals LOW POWER, 2 equals MEDIUM POWER and 3 equals HIGH POWER',
                                    options: { 'alte Firmware V1 = 0': 0, 'Low Power': 1, 'Medium Power': 2, 'High Power': 3 },
                                    defaultValue: 'Low Power',
                                    datatype: 'bit',
                                    len: 2
                              }
                        ],
                        value: function() {

                        },
                        len: 4,
                        description: '',
                        child: {
                              title: 'Mode Selector',
                              value: [{
                                          title: 'Normal Open (Sensor Mode)',
                                          value: 0x00,
                                          child: {
                                                title: 'Sensor Settings',
                                                type: 'multi',
                                                multiform: [{
                                                            type: 'integer',
                                                            label: 'Measurement Interval',
                                                            description: ' Measurement Interval in minutes (0 for no interval)',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 16
                                                      }, {
                                                            type: 'integer',
                                                            label: 'TX/RX Trigger',
                                                            description: ' Multipleof measurement interval on which a TIMED EVENT uplink will be fired (0 for no TIMED EVENT uplink)',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 8
                                                      }, {
                                                            type: 'bool',
                                                            label: 'Button On/Off',
                                                            description: '',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 1
                                                      }, {
                                                            type: 'bool',
                                                            label: 'Reed on/off',
                                                            description: '',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 1
                                                      }, {
                                                            type: 'bool',
                                                            label: 'Temperature On/Off',
                                                            description: '',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 1
                                                      }, {
                                                            type: 'bool',
                                                            label: 'Humidity On/Off',
                                                            description: '',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 1
                                                      }, {
                                                            type: 'bool',
                                                            label: 'Motion On/Off',
                                                            description: '',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 1
                                                      }, {
                                                            type: 'integer',
                                                            label: 'RFU',
                                                            description: '(reserved for future use)',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 3
                                                      }, {
                                                            type: 'bool',
                                                            label: 'Reed detection rising/falling',
                                                            description: '',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 1
                                                      }, {
                                                            type: 'bool',
                                                            label: 'Reed event On/Off',
                                                            description: '',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 1
                                                      }, {
                                                            type: 'bool',
                                                            label: 'Reed Counter On/Off',
                                                            description: '',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 1
                                                      }, {
                                                            type: 'integer',
                                                            label: 'Reed debounce time',
                                                            description: ' (0 to 31, in100ms steps)',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 5
                                                      }, {
                                                            type: 'integer',
                                                            label: 'Thresold High',
                                                            description: 'TEMP HIGH EVENT Threshold in °C, where 127 means OFF',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 8
                                                      }, {
                                                            type: 'integer',
                                                            label: 'Thresold Low',
                                                            description: 'TEMP LOW EVENT Threshold in °C, where 127 means OFF',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 8
                                                      }, {
                                                            type: 'integer',
                                                            label: 'Humidity High',
                                                            description: 'HUM HIGH EVENT Threshold in %, max. Value 99%, min. Value 1%. Any value outside range means OFF.',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 8
                                                      }, {
                                                            type: 'integer',
                                                            label: 'Humidity Low',
                                                            description: ' HUM LOW EVENT Threshold in %, max. Value 99%, min. Value 1%. Any value outside range means OFF.',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 8
                                                      },
                                                      {
                                                            type: 'integer',
                                                            label: 'RFU',
                                                            description: '(reserved for future use)',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 6
                                                      }, {
                                                            type: 'bool',
                                                            label: 'Humidity history On/Off',
                                                            description: '',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 1
                                                      }, {
                                                            type: 'bool',
                                                            label: 'Temperature history On/Off',
                                                            description: '',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 1
                                                      }, {
                                                            type: 'integer',
                                                            label: ' MOTION Threshold in 16mg steps',
                                                            description: 'max. Value 2000mg (125), 0 for OFF',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 8
                                                      }, {
                                                            type: 'bool',
                                                            label: 'Motion Event On/Off',
                                                            description: '',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 1
                                                      }, {
                                                            type: 'bool',
                                                            label: 'Motion Tx Raw On/Off',
                                                            description: '',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 1
                                                      }, {
                                                            type: 'bool',
                                                            label: 'Motion Counter On/Off',
                                                            description: '',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 1
                                                      }, {
                                                            type: 'bool',
                                                            label: 'RFU',
                                                            description: '(reserved for future use)',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 1
                                                      }, {
                                                            type: 'integer',
                                                            label: 'DELTA X AXISEVENTThreshold',
                                                            description: 'in 100mg steps, 0 for OFF',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 4
                                                      }, {
                                                            type: 'integer',
                                                            label: 'DELTA Y AXISEVENTThreshold',
                                                            description: 'in 100mg steps, 0 for OFF',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 4
                                                      }, {
                                                            type: 'integer',
                                                            label: 'DELTA Z AXISEVENTThreshold',
                                                            description: 'in 100mg steps, 0 for OFF',
                                                            datatype: 'bit',
                                                            defaultValue: 0,
                                                            len: 4
                                                      }
                                                ]
                                          }
                                    },
                                    {
                                          title: 'Workplace detection Mode',
                                          value: 0x01,
                                          child: {
                                                title: 'Workplace Detection Mode Config',
                                                type: 'multi',
                                                multiform: [{
                                                      type: 'integer',
                                                      label: 'Measurement Interval',
                                                      description: 'Measurement Interval in minutes (0 for no interval), acts also as USAGE START EVENT trigger when needed.',
                                                      datatype: 'bit',
                                                      defaultValue: 0,
                                                      len: 16
                                                }, {
                                                      type: 'integer',
                                                      label: 'Motion Check Multiplicator',
                                                      description: 'Multiple of measurement interval on which a USAGE CHECK EVENT is carried out when needed.',
                                                      datatype: 'bit',
                                                      defaultValue: 0,
                                                      len: 8
                                                }, {
                                                      type: 'integer',
                                                      label: 'Motion Options',
                                                      description: 'MOTION Threshold in 16mgsteps, max. Value 2000 mg(125), 0 for OFF.',
                                                      datatype: 'bit',
                                                      defaultValue: 0,
                                                      len: 8
                                                }]
                                          }
                                    }
                              ],
                              description: '',
                              child: {
                                    title: 'Downlink Mode',
                                    value: function() {},
                                    description: ''
                              }
                        }
                  }
            }
      ]
};


schemes.add(scheme);
