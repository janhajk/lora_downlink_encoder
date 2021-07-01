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


// Helper
(function() {
      const twoComplementsEncoding = function(num) {

            const orig = bin.split('').reverse();
            const bits = orig.length;
            let comp = [];

            let i = 0;
            while (i < bits && orig[i] !== '1') {
                  comp[i] = orig[i];
                  ++i;
            }
            if (i >= bits) {
                  return comp.reverse().join('');
            }
            comp[i] = '1';
            ++i;
            while (i < bits) {
                  if (orig[i] === '1') {
                        comp[i] = '0';
                  }
                  else if (orig[i] === '0') {
                        comp[i] = '1';
                  }
                  else {
                        comp[i] = orig[i];
                  }
                  ++i;
            }
            return comp.reverse().join('');
      };

      const abeeway_all_firmware = {
            pod: {
                  title: 'POD',
                  value: 0x01,
                  description: 'Position on Demand',
                  child: { title: 'ack' }
            },
            setmode: {
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
            reqconf: {
                  title: 'Request configuaration',
                  value: 0x03,
                  description: 'Request the actual configuration of the tracker',
                  child: {
                        title: 'ack',
                        child: {
                              title: 'Parameter ID list (optional)',
                              value: [
                                    { title: 'Tracker orientation', description: 'get the X Axis accelerometer value in mG', value: 0xFA },
                                    //  ToDo: more ...
                                    { title: 'Firmware Version', description: 'get BLE Firmware Verison', value: 0xFD },
                                    { title: 'Firmware Version', description: 'MCU Application Firmware Version', value: 0xFE },
                                    { title: 'Operation Mode', description: '', value: 0xF9 },
                              ]
                        }
                  }
            },
            sosstart: { title: 'Start SOS', value: 0x04, description: 'Turn on SOS mode', child: { title: 'ack' } },
            sosstop: { title: 'Stop SOS mode', value: 0x05, description: 'Turn off SOS mode', child: { title: 'ack' } },
            reqtemp: {
                  title: 'Temperature Request',
                  value: 0x06,
                  description: 'Request Template status',
                  child: { title: 'ack' }
            },

            debug: {
                  title: 'Debug Command',
                  value: 0xFF,
                  description: 'Reset the Tracker',
                  child: {
                        title: 'ack',
                        child: {
                              title: 'Debug CMD ID',
                              value: [{
                                          title: 'Reset the device',
                                          value: 0x01,
                                          child: {
                                                title: 'Action',
                                                value: [{
                                                            title: 'Reset the deivce',
                                                            value: 0x00
                                                      },
                                                      {
                                                            title: 'Rest the Device and go back to initial configuration of the tracker',
                                                            value: 0x01
                                                      }
                                                ]
                                          }
                                    },
                                    {
                                          title: 'Trigger a heartbeat message',
                                          value: 0x05
                                    }, {
                                          title: 'Entering in BLE bootloader',
                                          value: 0x08
                                    }
                              ]
                        }
                  }
            }
      };


      let Scheme = {
            'abeeway_asset-tracker_2.1': {
                  device: 'abeeway_tracker',
                  supportedVersions: ['2.1.0', '2.1.3', '2.1.5'],
                  defaultPort: 2,
                  config: {
                        title: 'Message Type',
                        value: [
                              abeeway_all_firmware.pod,
                              abeeway_all_firmware.setmode,
                              abeeway_all_firmware.reqconf,
                              abeeway_all_firmware.sosstart,
                              abeeway_all_firmware.sosstop,
                              abeeway_all_firmware.debug,
                              {
                                    title: 'Set Param',
                                    value: 0x0B,
                                    description: 'Modify parameter(s)',
                                    child: {
                                          title: 'ack',
                                          child: {
                                                title: 'Parameter ID',
                                                value: [
                                                      //
                                                      // Parameters for operational modes
                                                      //
                                                      // {
                                                      //       title: 'mode',
                                                      //       value: 0xF9,
                                                      //       description: 'Operational mode of the tracker',
                                                      //       child: {
                                                      //             title: 'mode',
                                                      //             value: [
                                                      //                   { title: 'Standby', value: 0x00 },
                                                      //                   { title: 'Motion tracking', value: 0x01 },
                                                      //                   { title: 'Permanent tracking', value: 0x02 },
                                                      //                   { title: 'Motion start/end tracking', value: 0x03 },
                                                      //                   { title: 'activity tracking', value: 0x04 },
                                                      //                   { title: 'Off mode', value: 0x05 }
                                                      //             ],
                                                      //             len: 4
                                                      //       }
                                                      // },
                                                      {
                                                            title: 'ul_period',
                                                            value: 0x00,
                                                            child: {
                                                                  type: 'multi',
                                                                  multiform: [{
                                                                        type: 'integer',
                                                                        label: 'ul_period',
                                                                        description: 'Period of position or activity messages in motion, start/end, activity or permanent operating mode<br />min: 60, max: 86400',
                                                                        datatype: 'bit',
                                                                        defaultValue: 60,
                                                                        len: 32
                                                                  }],
                                                                  len: 4
                                                            }
                                                      }, {
                                                            title: 'lora_period',
                                                            value: 0x01,
                                                            description: 'Period of LoRa Heartbeat messages',
                                                            child: {
                                                                  type: 'multi',
                                                                  multiform: [{
                                                                        type: 'integer',
                                                                        label: 'Period',
                                                                        description: 'Period of LoRa heartbeat messages (min: 300, max: 86400)',
                                                                        datatype: 'bit',
                                                                        defaultValue: 300,
                                                                        len: 32
                                                                  }],
                                                                  len: 4
                                                            }
                                                      }, {
                                                            title: 'geoloc_sensor',
                                                            value: 0x05,
                                                            description: 'Geolocation sensor profile used in main operating mode and SOS mode',
                                                            child: {
                                                                  title: 'gnss_constellation',
                                                                  type: 'multi',
                                                                  multiform: [{
                                                                        type: 'option',
                                                                        label: '',
                                                                        datatype: 'bit',
                                                                        defaultValue: 'GPS, GLONASS and Galileo',
                                                                        description: 'Geolocation sensor profile used in main operating mode and SOS mode',
                                                                        len: 32,
                                                                        options: {
                                                                              'WIFI only': 0,
                                                                              'GPS only': 1,
                                                                              'LPGPS': 2,
                                                                              'Wifi-GPS only': 6,
                                                                              'WiFi-LPGPS only': 7,
                                                                              'WIFI-LPGPS first, then WIFI-GPS until timeout, then back to WIFI-LPGPS': 9,
                                                                              'BLE scan only': 10,
                                                                              'BLE-GPS only': 11
                                                                        }
                                                                  }, ],
                                                                  len: 4

                                                            }
                                                      },
                                                      {
                                                            title: 'motion_nb_pos',
                                                            value: 0x08,
                                                            description: 'Number of positions to report during motion events (motion start/end mode only).',
                                                            child: {
                                                                  type: 'range::1:60',
                                                                  value: i => { parseInt(i, 10).toString(16) },
                                                                  len: 4

                                                            }
                                                      }, {
                                                            title: 'motion_duration',
                                                            description: 'Period of time required to detect the end of a motion',
                                                            value: 0x17,
                                                            child: {
                                                                  title: 'seconds',
                                                                  type: 'range::60:3600',
                                                                  len: 4
                                                            }
                                                      },


                                                      //
                                                      // Parameters for side operation modes
                                                      //
                                                      {
                                                            title: 'periodic_pos_period',
                                                            value: 0x03,
                                                            description: 'Period of the periodic position report. When set to 0, the reporting is disabled.',
                                                            child: {
                                                                  title: 'seconds',
                                                                  value: i => { parseInt(i, 10).toString(16) },
                                                                  type: 'range:seconds:900:604800',
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'geoloc_method',
                                                            value: 0x06,
                                                            description: 'Geolocation policy used for the side operating modes',
                                                            child: {
                                                                  title: 'gnss_constellation',
                                                                  type: 'multi',
                                                                  multiform: [{
                                                                        type: 'option',
                                                                        label: '',
                                                                        datatype: 'bit',
                                                                        defaultValue: 'GPS, GLONASS and Galileo',
                                                                        description: 'Geolocation sensor profile used in main operating mode and SOS mode',
                                                                        len: 32,
                                                                        options: {
                                                                              'WIFI only': 0,
                                                                              'GPS only': 1,
                                                                              'LPGPS (AGPS/GPS)': 2,
                                                                              'Wifi-GPS only (WIFI then GPS if WIFI fails in onegeolocation cycle)': 3,
                                                                              'WiFi-LPGPS only': 4,
                                                                              'BLE scan only': 6,
                                                                              'BLE-GPS only': 11
                                                                        }
                                                                  }, ],

                                                            }
                                                      },
                                                      {
                                                            title: 'periodic_activity_period',
                                                            description: 'Period of the periodic activity report. The value must be a multiple of 6(1) When set to 0, the reporting is disabled',
                                                            value: 0x16,
                                                            child: {
                                                                  title: 'seconds',
                                                                  value: i => { parseInt(i, 10).toString(16) },
                                                                  type: 'range:seconds:1800:86400',
                                                                  len: 4
                                                            }
                                                      },



                                                      //
                                                      // Parameters for collections
                                                      //
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
                                                            description: 'Works only for iBeacon. Apply to the first 4 bytes of the UUID field. UUID[0..3]',
                                                            value: 0x24,
                                                            child: {
                                                                  title: 'Part 1 BLE filter',
                                                                  type: 'input:8',
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'collection_ble_filter_main_2',
                                                            description: 'Works only for iBeacon. Apply to the next 4 bytes of the UUID field. UUID[3..7]',
                                                            value: 0x25,
                                                            child: {
                                                                  title: 'Part 2 BLE filter',
                                                                  type: 'input:8',
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'collection_ble_filter_sec_value',
                                                            description: 'Only works for iBeacon Mode. Apply to the following 4 bytes of the UUID field. UUID[8..11]',
                                                            value: 0x26,
                                                            child: {
                                                                  title: 'BLE secondary value.',
                                                                  type: 'input:8',
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'collection_ble_filter_sec_mask',
                                                            description: 'Only works for iBeacon Mode. Apply to the following 4 bytes of the UUID field. UUID[8..11]',
                                                            value: 0x27,
                                                            child: {
                                                                  title: 'BLE secondary mask',
                                                                  type: 'input:8',
                                                                  len: 4
                                                            }
                                                      },



                                                      //
                                                      // Parameter for GPS and low power GPS geolocation modes
                                                      //
                                                      {
                                                            title: 'gnss_constellation',
                                                            value: 0x2A,
                                                            child: {
                                                                  title: 'gnss_constellation',
                                                                  type: 'multi',
                                                                  multiform: [{
                                                                        type: 'option',
                                                                        label: '',
                                                                        datatype: 'bit',
                                                                        defaultValue: 'GPS, GLONASS and Galileo',
                                                                        description: 'If a value is set out of the range, configuration "GPS. GLONASS and Galileo" is used.',
                                                                        len: 32,
                                                                        options: { 'GPS only': 0, 'GLONASS only': 1, 'GPS and GLONASS': 2, 'GPS and Galileo': 3, 'GPS, GLONASS and Galileo': 4, 'Beidou only': 5, 'GPS and Beidou': 6 }
                                                                  }, ],

                                                            }
                                                      },
                                                      {
                                                            title: 'gps_timeout',
                                                            description: 'Timeout for GPS scans before sending a GPS timeout message.',
                                                            value: 0x09,
                                                            child: {
                                                                  type: 'range:s:30:300',
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'gps_ehpe',
                                                            description: 'Acceptable GPS horizontal error for GPS geolocation',
                                                            value: 0x0B,
                                                            child: {
                                                                  type: 'range:m:0:100',
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'gps_convergence',
                                                            description: 'Time let to the GPS module to refine the calculated position',
                                                            value: 0x0C,
                                                            child: {
                                                                  type: 'range:s:0:300',
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'gps_standby_timeout',
                                                            description: 'Duration of the GPS standby mode before going OFF.When 0, no standby timeout is applied',
                                                            value: 0x11,
                                                            child: {
                                                                  type: 'range:s:0:28800',
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'agps_timeout',
                                                            description: 'Timeout for LPGPSscans before sending thetimeout message',
                                                            value: 0x0A,
                                                            child: {
                                                                  type: 'range:s:30:250',
                                                                  len: 4
                                                            }
                                                      },




                                                      //
                                                      // LoRa Parameters
                                                      //
                                                      {
                                                            title: 'Lora: transmit_strat',
                                                            value: 0x0E,
                                                            child: {
                                                                  title: 'DEV CFG LoRa',
                                                                  type: 'multi',
                                                                  multiform: [{
                                                                        type: 'option',
                                                                        label: 'LoRa parameters',
                                                                        datatype: 'bit',
                                                                        defaultValue: 'Single fixed. Single TX. Using a fixed data rate',
                                                                        len: 32,
                                                                        options: {
                                                                              'Single fixed. Single TX. Using a fixed data rate': 0,
                                                                              'Single random: Single TX. Using a random data rate within [DR0-DR5]': 1,
                                                                              'Dual random: First TX using a random data rate within [DR4-DR5], next TX using a random data rate within[DR0-DR3]': 2,
                                                                              'Dual fixed: First TX using a random data rate within [DR4-DR5]. Next Using a fixeddata rate. (not recommended)': 3,
                                                                              'Network ADR. The LoRaWANTMnetwork controls the number oftransmissions': 4,
                                                                              'Activate the strategy defined with transmit_strat_customparameter': 5
                                                                        }
                                                                  }],
                                                            }
                                                      },
                                                      {
                                                            title: 'confirmed_ul_bitmap',
                                                            description: '',
                                                            value: 0x12,
                                                            // child: {
                                                            //       type: 'range:s:0:28800',
                                                            //       len: 4
                                                            // }
                                                      },
                                                      {
                                                            title: 'confirmed_ul_retry',
                                                            description: 'The number of retries for each confirmed uplinkwhen the confirmation is not received',
                                                            value: 0x13,
                                                            child: {
                                                                  type: 'range::0:8',
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'network_timeout_check ',
                                                            description: 'Time without received downlink, before asking a link check request 0: No timeout check is done',
                                                            value: 0x1F,
                                                            child: {
                                                                  type: 'range:s:0:5184000',
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'network_timeout_reset',
                                                            description: 'Time after network_timeout_checkwithout received downlink\n before the tracker resets 0: feature deactivated',
                                                            value: 0x20,
                                                            child: {
                                                                  type: 'range:s:0:2592000',
                                                                  len: 4
                                                            }
                                                      },




                                                      //
                                                      // BLE Parameters
                                                      //
                                                      {
                                                            title: 'ble_beacon_cnt',
                                                            description: 'This parameter provides the maximum number of BLE beacons to provide in payload',
                                                            value: 0x0F,
                                                            child: {
                                                                  type: 'range::1:4',
                                                                  value: i => { parseInt(i, 10).toString(16) },
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'ble_beacon_timeout',
                                                            description: 'BLE Scan Duration in Seconds',
                                                            value: 0x10,
                                                            child: {
                                                                  type: 'range: s:1:5',
                                                                  value: i => { parseInt(i, 10).toString(16) },
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'ble_rssi_filter',
                                                            description: 'RSSI value to filter BLE beacons with BLE-GPS geolocation mode. (negative value, refer to the section Two’s complement Encoding for information for the encoding).',
                                                            value: 0x1A,
                                                            child: {
                                                                  type: 'range: s:-100:-40',
                                                                  value: i => { parseInt(i, 10).toString(16) },
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'position_ble_filter_type',
                                                            description: '',
                                                            value: 0x4D,
                                                            child: {

                                                                  title: 'Type',
                                                                  type: 'multi',
                                                                  multiform: [{
                                                                        type: 'option',
                                                                        label: '',
                                                                        defaultValue: 'No Filter',
                                                                        description: 'Beacon type to scan and report when position Scan Type is BLE',
                                                                        len: 32,
                                                                        options: {
                                                                              'No Filter': 0,
                                                                              'Eddystone UID only': 1,
                                                                              'Eddystone URL only': 2,
                                                                              'All Eddystone': 3,
                                                                              'iBeacon UID only': 4,
                                                                              'AltBeacon only': 5,
                                                                        }
                                                                  }],
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'postition_ble_filter_main_1',
                                                            description: 'Works only for iBeacon. Apply to the first 4 bytes of the UUID field. UUID[0..3]',
                                                            value: 0x4E,
                                                            child: {
                                                                  title: 'Part 1 BLE filter',
                                                                  type: 'input:8',
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'position_ble_filter_main_2',
                                                            description: 'Works only for iBeacon. Apply to the next 4 bytes of the UUID field. UUID[3..7]',
                                                            value: 0x4F,
                                                            child: {
                                                                  title: 'Part 2 BLE filter',
                                                                  type: 'input:8',
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'position_ble_filter_sec_value',
                                                            description: 'Only works for iBeacon Mode. Apply to the following 4 bytes of the UUID field. UUID[8..11]',
                                                            value: 0x50,
                                                            child: {
                                                                  title: 'BLE secondary value.',
                                                                  type: 'input:8',
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'position_ble_filter_sec_mask',
                                                            description: 'Only works for iBeacon Mode. Apply to the following 4 bytes of the UUID field. UUID[8..11]',
                                                            value: 0x51,
                                                            child: {
                                                                  title: 'BLE secondary mask',
                                                                  type: 'input:8',
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'position_ble_report_type',
                                                            description: 'Configure the BLE data to report in payloads.',
                                                            value: 0x52,
                                                            child: {

                                                                  title: 'Filter Type',
                                                                  type: 'multi',
                                                                  multiform: [{
                                                                        type: 'option',
                                                                        label: '',
                                                                        defaultValue: 'No Filter',
                                                                        description: 'Beacon type to scan and report when position Scan Type is BLE',
                                                                        len: 32,
                                                                        options: {
                                                                              'MAC Adress': 0,
                                                                              'Short ID': 1,
                                                                              'Long ID': 2,
                                                                              'Short beacon ID including the Major and Minor field (iBeacon only)': 3
                                                                        }
                                                                  }],
                                                                  len: 4
                                                            }
                                                      },





                                                      //
                                                      // 7.7.7 Miscellaneous parameters
                                                      //
                                                      {
                                                            title: 'config_flags',
                                                            value: 0x0D,
                                                            description: '',
                                                            child: {
                                                                  title: 'Config Flags',
                                                                  type: 'multi',
                                                                  multiform: [{
                                                                        type: 'bool',
                                                                        label: 'Frame pending mechanism',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'Activate long button press to switch to off mode',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'Three short presses configuration: Alert (Off) vs SOS (On)',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'Send a configuration uplink message in response to a configuration modification downlink.',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'WIFI payload with Cypher (Off) or without Cypher (On)',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'Activate BLE communication interface',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'First WIFI scan when geolocation starts. If disabled (Off), WIFI position is replaced by a geoloc start message',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'LED blinks when a GPS fix is received. Set to enable the feature, reset to disable',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'Set to enable the sending of a motion start message',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'Set to enable the sending of a motion end message',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'Set to enable a new OTA join when leaving the mode OFF',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'Asymmetric BLE pairing: Off accepted, On rejected',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'Set to enable Long WIFI payload',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'Set to enable Collection Long Report',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'Set to enable the autostart of the tracker',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'Set to forbid the mode OFF',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'Set to enable a melody during SOS mode',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }, {
                                                                        type: 'bool',
                                                                        label: 'Set to enable the automatic datarate selection in case of too long payloads',
                                                                        defaultValue: 0,
                                                                        len: 1
                                                                  }],
                                                                  len: 4,
                                                                  endianness: 'lsb'
                                                            }
                                                      },
                                                      {
                                                            title: 'battery_capacity',
                                                            value: 0x28,
                                                            child: {
                                                                  title: 'Battery Setting',
                                                                  type: 'input:8',
                                                                  len: 4
                                                            }
                                                      },

                                                      {
                                                            title: 'pw_stat_period',
                                                            value: 0x02,
                                                            description: '<no more used>',
                                                            // child: {
                                                            //       title: 'seconds',
                                                            //       value: i => { parseInt(i, 10).toString(16) },
                                                            //       type: 'range:seconds:300:86400',
                                                            //       len: 4
                                                            // }
                                                      },




                                                      //
                                                      // Accelerometer parameters
                                                      //
                                                      {
                                                            title: 'motion_sensivity',
                                                            description: '',
                                                            value: 0x14,
                                                            child: {
                                                                  type: 'range:%:0:100',
                                                                  len: 4
                                                            }
                                                      },
                                                      {
                                                            title: 'shock_detection',
                                                            description: '',
                                                            value: 0x15,
                                                            // child: {
                                                            //       type: 'range::0:8',
                                                            //       len: 4
                                                            // }
                                                      },



                                                      //
                                                      // Temperature monitoring parameters
                                                      //
                                                      {
                                                            title: 'Reserved, do not use',
                                                            value: 0x1B
                                                      },
                                                      {
                                                            title: 'Reserved, do not use',
                                                            value: 0x1C
                                                      },
                                                      {
                                                            title: 'Reserved, do not use',
                                                            value: 0x1D
                                                      },




                                                      //
                                                      //  unused / reserved
                                                      {
                                                            title: 'Reserved, do not use',
                                                            value: 0x04
                                                      },
                                                      {
                                                            title: 'Reserved, do not use',
                                                            value: 0x07,
                                                            description: ''
                                                      },

                                                      {
                                                            title: 'Reserved, do not use',
                                                            description: '',
                                                            value: 0x18
                                                      },
                                                      {
                                                            title: 'Reserved, do not use',
                                                            description: '',
                                                            value: 0x19
                                                      },

                                                ]
                                          }
                                    }
                              }
                        ]
                  }
            },
            'abeeway_asset-tracker_2.0.0': {
                  title: 'Message Type',
                  value: [
                        abeeway_all_firmware.pod,
                        abeeway_all_firmware.setmode,
                        abeeway_all_firmware.reqconf,
                        abeeway_all_firmware.sosstart,
                        abeeway_all_firmware.sosstop,
                        abeeway_all_firmware.debug,
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
                                                      description: 'Geolocation sensor profile used in main operating mode and SOS mode',
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
                                                                  title: 'WIFI-LPGPS only',
                                                                  description: '(WIFI then LPGPS if WIFI fails in one geolocation cycle)',
                                                                  value: 0x07
                                                            }, {
                                                                  title: 'WIFI-LPGPS first, then WIFI-GPS until timeout, then back to WIFI-LPGPS',
                                                                  value: 0x09
                                                            }, {
                                                                  title: 'BLE scan only',
                                                                  value: 0x10
                                                            }, {
                                                                  title: 'BLE-GPS only',
                                                                  value: 0x11,
                                                                  description: '(BLE then GPS if BLE fails in one geolocation cycle)'
                                                            }],
                                                            len: 4
                                                      }
                                                }, {
                                                      title: 'motion_nb_pos',
                                                      value: 0x08,
                                                      description: 'Number of positions to report during motion events (motion start/end mode only).',
                                                      child: {
                                                            type: 'range::1:60',
                                                            value: i => { parseInt(i, 10).toString(16) },
                                                            len: 4

                                                      }
                                                }, {
                                                      title: 'ble_beacon_cnt',
                                                      description: 'This parameter provides the maximum number of BLE beacons to provide in payload',
                                                      value: 0x0F,
                                                      child: {
                                                            type: 'range::1:4',
                                                            value: i => { parseInt(i, 10).toString(16) },
                                                            len: 4
                                                      }
                                                }, {
                                                      title: 'ble_beacon_timeout',
                                                      description: 'BLE Scan Duration in Seconds',
                                                      value: 0x10,
                                                      child: {
                                                            type: 'range: s:1:5',
                                                            value: i => { parseInt(i, 10).toString(16) },
                                                            len: 4
                                                      }
                                                }, {
                                                      title: 'ble_rssi_filter',
                                                      description: 'RSSI value to filter BLE beacons with BLE-GPS geolocation mode. (negative value, refer to the section Two’s complement Encoding for information for the encoding).',
                                                      value: 0x1A,
                                                      child: {
                                                            type: 'range: s:-100:-40',
                                                            value: i => { parseInt(i, 10).toString(16) },
                                                            len: 4
                                                      }
                                                }, {
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
                                                }, {
                                                      title: 'collection_ble_filter_main_1',
                                                      description: 'Works only for iBeacon. Apply to the first 4 bytes of the UUID field. UUID[0..3]',
                                                      value: 0x24,
                                                      child: {
                                                            title: 'Part 1 BLE filter',
                                                            type: 'input:8',
                                                            len: 4
                                                      }
                                                }, {
                                                      title: 'collection_ble_filter_main_2',
                                                      description: 'Works only for iBeacon. Apply to the next 4 bytes of the UUID field. UUID[3..7]',
                                                      value: 0x25,
                                                      child: {
                                                            title: 'Part 2 BLE filter',
                                                            type: 'input:8',
                                                            len: 4
                                                      }
                                                }, {
                                                      title: 'collection_ble_filter_sec_value',
                                                      description: 'Only works for iBeacon Mode. Apply to the following 4 bytes of the UUID field. UUID[8..11]',
                                                      value: 0x26,
                                                      child: {
                                                            title: 'BLE secondary value.',
                                                            type: 'input:8',
                                                            len: 4
                                                      }
                                                }, {
                                                      title: 'collection_ble_filter_sec_mask',
                                                      description: 'Only works for iBeacon Mode. Apply to the following 4 bytes of the UUID field. UUID[8..11]',
                                                      value: 0x27,
                                                      child: {
                                                            title: 'BLE secondary mask',
                                                            type: 'input:8',
                                                            len: 4
                                                      }
                                                }, {
                                                      title: 'position_ble_filter_type',
                                                      description: '',
                                                      value: 0x4D,
                                                      child: {
                                                            title: 'Filter Type',
                                                            child: [],
                                                            len: 4
                                                      }
                                                },
                                                {
                                                      title: 'position_ble_report_type',
                                                      description: 'Configure the BLE data to report in payloads.',
                                                      value: 0x52,
                                                      child: {
                                                            title: 'Filter Type',
                                                            value: [{
                                                                  title: 'MAC Adress',
                                                                  value: 0x00
                                                            }, {
                                                                  title: 'Short ID',
                                                                  value: 0x01
                                                            }, {
                                                                  title: 'Long ID',
                                                                  value: 0x02
                                                            }],
                                                            len: 4
                                                      }
                                                }, {
                                                      title: 'battery_capacity',
                                                      value: 0x28,
                                                      child: {
                                                            title: 'Battery Setting',
                                                            type: 'input:8',
                                                            len: 4
                                                      }
                                                }, {
                                                      title: 'gnss_constellation',
                                                      value: 0x2A,
                                                      child: {
                                                            title: 'Beacon type to scan',
                                                            value: [{
                                                                  title: 'GPS only',
                                                                  value: 0x00
                                                            }, {
                                                                  title: 'GLONASS only',
                                                                  value: 0x01
                                                            }, {
                                                                  title: 'GPS and GLONASS',
                                                                  value: 0x02
                                                            }, {
                                                                  title: 'GPS and Galileo',
                                                                  value: 0x03
                                                            }, {
                                                                  title: 'GPS, GLONASS and Galileo',
                                                                  value: 0x04
                                                            }, {
                                                                  title: 'Beidou only',
                                                                  value: 0x05
                                                            }, {
                                                                  title: 'GPS and Beidou',
                                                                  value: 0x06
                                                            }],
                                                            len: 4
                                                      }
                                                }, {
                                                      title: 'gps_timeout',
                                                      description: 'Timeout for GPS scans before sending a GPS timeout message.',
                                                      value: 0x09,
                                                      child: {
                                                            type: 'range:s:30:300',
                                                            len: 4
                                                      }
                                                }, {
                                                      title: 'gps_ehpe',
                                                      description: 'Acceptable GPS horizontal error for GPS geolocation',
                                                      value: 0x0B,
                                                      child: {
                                                            type: 'range:m:0:100',
                                                            len: 4
                                                      }
                                                },
                                                {
                                                      title: 'gps_convergence',
                                                      description: 'Time let to the GPS module to refine the calculated position',
                                                      value: 0x0C,
                                                      child: {
                                                            type: 'range:s:0:300',
                                                            len: 4
                                                      }
                                                },
                                                {
                                                      title: 'gps_standby_timeout',
                                                      description: 'Duration of the GPS standby mode before going OFF.When 0, no standby timeout is applied',
                                                      value: 0x11,
                                                      child: {
                                                            type: 'range:s:0:28800',
                                                            len: 4
                                                      }
                                                },
                                                {
                                                      title: 'agps_timeout',
                                                      description: 'Timeout for LPGPSscans before sending thetimeout message',
                                                      value: 0x0A,
                                                      child: {
                                                            type: 'range:s:30:250',
                                                            len: 4
                                                      }
                                                },
                                                {
                                                      title: 'Lora: transmit_strat',
                                                      value: 0x0E,
                                                      child: {
                                                            title: 'LoRa parameters',
                                                            value: [{
                                                                  title: 'Single fixed. Single TX. Using a fixed data rate',
                                                                  value: 0x00
                                                            }, {
                                                                  title: 'Single random: Single TX. Using a random data rate within [DR0-DR5]',
                                                                  value: 0x01
                                                            }, {
                                                                  title: 'Dual random: First TX using a random data rate within [DR4-DR5], next TX using a random data rate within[DR0-DR3]',
                                                                  value: 0x02
                                                            }, {
                                                                  title: 'Dual fixed: First TX using a random data rate within [DR4-DR5]. Next Using a fixeddata rate. (not recommended)',
                                                                  value: 0x03
                                                            }, {
                                                                  title: 'Network ADR. The LoRaWANTMnetwork controls the number oftransmissions',
                                                                  value: 0x04
                                                            }, {
                                                                  title: 'Activate the strategy defined with transmit_strat_customparameter',
                                                                  value: 0x05
                                                            }],
                                                            len: 4
                                                      }
                                                },
                                                {
                                                      title: 'confirmed_ul_retry',
                                                      description: 'The number of retries for each confirmed uplinkwhen the confirmation is not received',
                                                      value: 0x13,
                                                      child: {
                                                            type: 'range::0:8',
                                                            len: 4
                                                      }
                                                },
                                                {
                                                      title: 'network_timeout_check ',
                                                      description: 'Time without received downlink, before asking a link check request 0: No timeout check is done',
                                                      value: 0x1F,
                                                      child: {
                                                            type: 'range:s:0:5184000',
                                                            len: 4
                                                      }
                                                },
                                                {
                                                      title: 'network_timeout_reset',
                                                      description: 'Time after network_timeout_checkwithout received downlink\n before the tracker resets 0: feature deactivated',
                                                      value: 0x20,
                                                      child: {
                                                            type: 'range:s:0:2592000',
                                                            len: 4
                                                      }
                                                }

                                          ]
                                    }
                              }
                        }
                  ]
            }
      };


      schemes.add(Scheme['abeeway_asset-tracker_2.1']);
      // schemes['abeeway_asset-tracker_2.1'] = scheme['abeeway_asset-tracker_2.1'];
})();
