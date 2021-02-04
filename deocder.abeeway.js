! function(e, r) {
    for (var t in r) e[t] = r[t];
    r.__esModule && Object.defineProperty(e, "__esModule", {
        value: !0
    })
}(this, (() => {
    var e = {
            172: e => {
                e.exports = Object.freeze({
                    PRINTED: "PRINTED",
                    CERAMIC: "CERAMIC",
                    DYNAMIC: "DYNAMIC"
                })
            },
            455: e => {
                e.exports = Object.freeze({
                    CHARGING: "CHARGING",
                    OPERATING: "OPERATING",
                    UNKNOWN: "UNKNOWN"

                })
            },
            509: e => {
                e.exports = Object.freeze({
                    BLE_NOT_RESPONDING: "BLE_NOT_RESPONDING",
                    INTERNAL_ERROR: "INTERNAL_ERROR",
                    SHARED_ANTENNA_NOT_AVAILABLE: "SHARED_ANTENNA_NOT_AVAILABLE",
                    BLE_BUSY: "BLE_BUSY",
                    SCAN_ALREADY_ON_GOING: "SCAN_ALREADY_ON_GOING",
                    NO_BEACON_DETECTED: "NO_BEACON_DETECTED",
                    HARDWARE_INCOMPATIBILITY: "HARDWARE_INCOMPATIBILITY",
                    UNKNOWN_BLE_FIRMWARE_VERSION: "UNKNOWN_BLE_FIRMWARE_VERSION"
                })
            },
            970: e => {
                e.exports = Object.freeze({
                    NOT_BONDED: "NOT_BONDED",
                    BONDED: "BONDED",
                    UNKNOWN: "UNKNOWN"
                })
            },
            118: e => {
                e.exports = Object.freeze({
                    MAC_ADDRESS: "MAC_ADDRESS",
                    SHORT_ID: "SHORT_ID",
                    LONG_ID: "LONG_ID"
                })
            },
            40: e => {
                e.exports = Object.freeze({
                    NO_FILTER: "NO_FILTER",
                    EDDYSTONE_UID: "EDDYSTONE_UID",
                    EDDYSTONE_URL: "EDDYSTONE_URL",
                    ALL_EDDYSTONE: "ALL_EDDYSTONE",
                    IBEACON_ONLY: "IBEACON_ONLY",
                    ALTBEACON_ONLY: "ALTBEACON_ONLY"
                })
            },
            768: e => {
                e.exports = Object.freeze({
                    NO_COLLECTION_SCAN: "NO_COLLECTION_SCAN",
                    BLE_BEACONS: "BLE_BEACONS",
                    WIFI_BSSID: "WIFI_BSSID"
                })
            },
            784: e => {
                e.exports = Object.freeze({
                    DEBUG_CRASH_INFORMATION: "DEBUG_CRASH_INFORMATION",
                    TX_POWER_INDEX_VALUE: "TX_POWER_INDEX_VALUE",
                    UPLINK_LENGTH_ERR: "UPLINK_LENGTH_ERR",
                    GENERIC_ERROR: "GENERIC_ERROR",
                    UNKNOWN: "UNKNOWN"
                })
            },
            697: e => {
                e.exports = Object.freeze({
                    RESET: "RESET",
                    READ_CURRENT_ERROR_AND_SEND_IT: "READ_CURRENT_ERROR_AND_SEND_IT",
                    MAKE_TRACKER_RING: "MAKE_TRACKER_RING",
                    TRIGGER_AN_ERROR: "TRIGGER_AN_ERROR",
                    RESET_BLE_PAIRING: "RESET_BLE_PAIRING",
                    TRIGGER_HEARTBEAT_MESSAGE: "TRIGGER_HEARTBEAT_MESSAGE",
                    READ_TX_POWER_INDEX: "READ_TX_POWER_INDEX",
                    WRITE_TX_POWER_INDEX: "WRITE_TX_POWER_INDEX",
                    TRIGGER_BLE_BOOTLOADER: "TRIGGER_BLE_BOOTLOADER"
                })
            },
            7: e => {
                e.exports = Object.freeze({
                    POS_ON_DEMAND: "POS_ON_DEMAND",
                    SET_MODE: "SET_MODE",
                    REQUEST_CONFIG: "REQUEST_CONFIG",
                    START_SOS: "START_SOS",
                    STOP_SOS: "STOP_SOS",
                    REQUEST_TEMPERATURE_STATUS: "REQUEST_TEMPERATURE_STATUS",
                    PROXIMITY: "PROXIMITY",
                    SET_PARAM: "SET_PARAM",
                    DEBUG_COMMAND: "DEBUG_COMMAND"
                })
            },
            659: e => {
                e.exports = Object.freeze({
                    STATIC: "STATIC",
                    MOVING: "MOVING"
                })
            },
            109: e => {
                e.exports = Object.freeze({
                    GEOLOC_START: "GEOLOC_START",
                    MOTION_START: "MOTION_START",
                    MOTION_END: "MOTION_END",
                    BLE_CONNECTED: "BLE_CONNECTED",
                    BLE_DISCONNECTED: "BLE_DISCONNECTED",
                    TEMPERATURE_ALERT: "TEMPERATURE_ALERT",
                    BLE_BOND_DELETED: "BLE_BOND_DELETED",
                    SOS_MODE_START: "SOS_MODE_START",
                    SOS_MODE_END: "SOS_MODE_END"
                })
            },
            651: e => {
                e.exports = Object.freeze({
                    WIFI_ONLY: "WIFI_ONLY",
                    GPS_ONLY: "GPS_ONLY",
                    XGPS_ONLY: "XGPS_ONLY",
                    WIFI_FALLBACK_XGPS: "WIFI_FALLBACK_XGPS",
                    SELF_GOVERNING_HISTORY: "SELF_GOVERNING_HISTORY",
                    SELF_GOVERNING_TIMEOUT: "SELF_GOVERNING_TIMEOUT",
                    WGPS_ONLY: "WGPS_ONLY",
                    WXGPS_ONLY: "WXGPS_ONLY",
                    WGPS_WXGPS_FAILURE: "WGPS_WXGPS_FAILURE",
                    WGPS_WXGPS_TIMEOUT: "WGPS_WXGPS_TIMEOUT",
                    BLE: "BLE",
                    BGPS_ONLY: "BGPS_ONLY"
                })
            },
            228: e => {
                e.exports = Object.freeze({
                    GPS_ONLY: "GPS_ONLY",
                    GLONASS_ONLY: "GLONASS_ONLY",
                    GPS_GLONASS: "GPS_GLONASS",
                    GPS_GALILEO: "GPS_GALILEO",
                    GPS_GLONASS_GALILEO: "GPS_GLONASS_GALILEO",
                    BEIDOU_ONLY: "BEIDOU_ONLY",
                    GPS_BEIDOU: "GPS_BEIDOU"
                })
            },
            493: e => {
                e.exports = Object.freeze({
                    SWITCH_ON: "SWITCH_ON",
                    SWITCH_OFF: "SWITCH_OFF",
                    FLAT_BATTERY: "FLAT_BATTERY",
                    ALERT: "ALERT",
                    SOS_MODE: "SOS_MODE",
                    SOS_MODE_CLEAR: "SOS_MODE_CLEAR",
                    RESET: "RESET",
                    BLE_ADVERTISING: "BLE_ADVERTISING",
                    BLE_BONDED: "BLE_BONDED",
                    BLE_DEBONDED: "BLE_DEBONDED",
                    BLE_LINK_LOSS: "BLE_LINK_LOSS",
                    PROX_WARNING: "PROX_WARNING",
                    PROX_WARNING_REMINDER: "PROX_WARNING_REMINDER",
                    PROX_ALARM: "PROX_ALARM",
                    PROX_ALARM_REMINDER: "PROX_ALARM_REMINDER"
                })
            },
            161: e => {
                e.exports = Object.freeze({
                    POSITION_MESSAGE: "POSITION_MESSAGE",
                    HEARTBEAT: "HEARTBEAT",
                    ENERGY_STATUS: "ENERGY_STATUS",
                    SHUTDOWN: "SHUTDOWN",
                    FRAME_PENDING: "FRAME_PENDING",
                    DEBUG: "DEBUG",
                    ACTIVITY_STATUS: "ACTIVITY_STATUS",
                    CONFIGURATION: "CONFIGURATION",
                    SHOCK_DETECTION: "SHOCK_DETECTION",
                    HEARTBEAT: "HEARTBEAT",
                    EVENT: "EVENT",
                    DATA_SCAN_COLLECTION: "DATA_SCAN_COLLECTION",
                    PROXIMITY_DETECTION: "PROXIMITY_DETECTION",
                    UNKNOWN: "UNKNOWN"
                })
            },
            101: e => {
                e.exports = Object.freeze({
                    ACTIVITY_COUNTER: "ACTIVITY_COUNTER",
                    DEVICE_CONFIGURATION: "DEVICE_CONFIGURATION",
                    SHOCK_DETECTION: "SHOCK_DETECTION",
                    PERIODIC_ACTIVITY: "PERIODIC_ACTIVITY"
                })
            },
            137: e => {
                e.exports = Object.freeze({
                    STAND_BY: "STAND_BY",
                    MOTION_TRACKING: "MOTION_TRACKING",
                    PERMANENT_TRACKING: "PERMANENT_TRACKING",
                    MOTION_START_END_TRACKING: "MOTION_START_END_TRACKING",
                    ACTIVITY_TRACKING: "ACTIVITY_TRACKING",
                    OFF: "OFF",
                    UNKNOWN: "UNKNOWN"
                })
            },
            501: e => {
                e.exports = Object.freeze({
                    WIFI: "WIFI",
                    GPS: "GPS",
                    XGPS: "XGPS",
                    WGPS: "WGPS",
                    WGPS_ONLY: "WGPS_ONLY",
                    WXGPS: "WXGPS",
                    BLE: "BLE",
                    BGPS: "BGPS"
                })
            },
            486: e => {
                e.exports = Object.freeze({
                    TRACKING_UL_PERIOD: "TRACKING_UL_PERIOD",
                    LORALIVE_PERIOD: "LORALIVE_PERIOD",
                    ENERGY_STATUS_PERIOD: "ENERGY_STATUS_PERIOD",
                    PERIODIC_POSITION_INTERVAL: "PERIODIC_POSITION_INTERVAL",
                    GPS_SCAN_MODE: "GPS_SCAN_MODE",
                    GEOLOC_SENSOR_PROFILE: "GEOLOC_SENSOR_PROFILE",
                    ONESHOT_GEOLOC_METHOD: "ONESHOT_GEOLOC_METHOD",
                    EXT_ANTENNA_PROFILE: "EXT_ANTENNA_PROFILE",
                    MOTION_START_END_NB_TX: "MOTION_START_END_NB_TX",
                    GPS_TIMEOUT: "GPS_TIMEOUT",
                    XGPS_TIMEOUT: "XGPS_TIMEOUT",
                    GPS_EHPE: "GPS_EHPE",
                    GPS_CONVERGENCE: "GPS_CONVERGENCE",
                    CONFIG_FLAGS: "CONFIG_FLAGS",
                    TRANSMIT_STRAT: "TRANSMIT_STRAT",
                    BLE_BEACON_COUNT: "BLE_BEACON_COUNT",
                    BLE_BEACON_TIMEOUT: "BLE_BEACON_TIMEOUT",
                    GPS_STANDBY_TIMEOUT: "GPS_STANDBY_TIMEOUT",
                    CONFIRMED_UL_BITMAP: "CONFIRMED_UL_BITMAP",
                    CONFIRMED_UL_RETRY: "CONFIRMED_UL_RETRY",
                    MOTION_SENSITIVITY: "MOTION_SENSITIVITY",
                    SHOCK_DETECTION: "SHOCK_DETECTION",
                    PERIODIC_ACTIVITY_PERIOD: "PERIODIC_ACTIVITY_PERIOD",
                    MOTION_DURATION: "MOTION_DURATION",
                    GEOFENCING_SCAN_PERIOD: "GEOFENCING_SCAN_PERIOD",
                    GEOFENCING_UL_PERIOD: "GEOFENCING_UL_PERIOD",
                    BLE_RSSI_FILTER: "BLE_RSSI_FILTER",
                    TEMPERATURE_HIGH: "TEMPERATURE_HIGH",
                    TEMPERATURE_LOW: "TEMPERATURE_LOW",
                    TEMPERATURE_ACTION: "TEMPERATURE_ACTION",
                    TRANSMIT_STRAT_CUSTOM: "TRANSMIT_STRAT_CUSTOM",
                    X_ACCELEROMETER_VALUE: "X_ACCELEROMETER_VALUE",
                    Y_ACCELEROMETER_VALUE: "Y_ACCELEROMETER_VALUE",
                    Z_ACCELEROMETER_VALUE: "Z_ACCELEROMETER_VALUE",
                    BLE_VERSION: "BLE_VERSION",
                    FW_VERSION: "FW_VERSION",
                    GET_MODE: "GET_MODE",
                    BLE_BOND: "BLE_BOND",
                    NETWORK_TIMEOUT_CHECK: "NETWORK_TIMEOUT_CHECK",
                    NETWORK_TIMEOUT_RESET: "NETWORK_TIMEOUT_RESET",
                    COLLECTION_SCAN_TYPE: "COLLECTION_SCAN_TYPE",
                    COLLECTION_NB_ENTRY: "COLLECTION_NB_ENTRY",
                    COLLECTION_BLE_FILTER_TYPE: "COLLECTION_BLE_FILTER_TYPE",
                    COLLECTION_BLE_FILTER_MAIN_1: "COLLECTION_BLE_FILTER_MAIN_1",
                    COLLECTION_BLE_FILTER_MAIN_2: "COLLECTION_BLE_FILTER_MAIN_2",
                    COLLECTION_BLE_FILTER_SEC_VALUE: "COLLECTION_BLE_FILTER_SEC_VALUE",
                    COLLECTION_BLE_FILTER_SEC_MASK: "COLLECTION_BLE_FILTER_SEC_MASK",
                    BATTERY_CAPACITY: "BATTERY_CAPACITY",
                    REED_SWITCH_CONFIGURATION: "REED_SWITCH_CONFIGURATION",
                    GNSS_CONSTELLATION: "GNSS_CONSTELLATION",
                    PROXIMITY_MINIMUM_SCAN_POWER: "PROXIMITY_MINIMUM_SCAN_POWER",
                    PROXIMITY_DISTANCE_COEFFICIENT: "PROXIMITY_DISTANCE_COEFFICIENT",
                    PROXIMITY_SCAN_FREQUENCY: "PROXIMITY_SCAN_FREQUENCY",
                    PROXIMITY_BACKTRACE_MAXIMUM_AGE: "PROXIMITY_BACKTRACE_MAXIMUM_AGE",
                    PROXIMITY_DISTANCE_SLIDING_WINDOW: "PROXIMITY_DISTANCE_SLIDING_WINDOW",
                    PROXIMITY_EXPOSURE_50: "PROXIMITY_EXPOSURE_50",
                    PROXIMITY_EXPOSURE_100: "PROXIMITY_EXPOSURE_100",
                    PROXIMITY_EXPOSURE_150: "PROXIMITY_EXPOSURE_150",
                    PROXIMITY_EXPOSURE_200: "PROXIMITY_EXPOSURE_200",
                    PROXIMITY_EXPOSURE_250: "PROXIMITY_EXPOSURE_250",
                    PROXIMITY_EXPOSURE_300: "PROXIMITY_EXPOSURE_300",
                    PROXIMITY_EXPOSURE_400: "PROXIMITY_EXPOSURE_400",
                    PROXIMITY_IMMEDIATE_ALARM_DISTANCE: "PROXIMITY_IMMEDIATE_ALARM_DISTANCE",
                    PROXIMITY_ALARM_EXPOSURE: "PROXIMITY_ALARM_EXPOSURE",
                    PROXIMITY_IMMEDIATE_WARNING_DISTANCE: "PROXIMITY_IMMEDIATE_WARNING_DISTANCE",
                    PROXIMITY_WARNING_EXPOSURE: "PROXIMITY_WARNING_EXPOSURE",
                    PROXIMITY_IMMEDIATE_RECORD_DISTANCE: "PROXIMITY_IMMEDIATE_RECORD_DISTANCE",
                    PROXIMITY_RECORD_EXPOSURE: "PROXIMITY_RECORD_EXPOSURE",
                    PROXIMITY_ALARM_BUZZER_DURATION: "PROXIMITY_ALARM_BUZZER_DURATION",
                    PROXIMITY_WARNING_BUZZER_DURATION: "PROXIMITY_WARNING_BUZZER_DURATION",
                    PROXIMITY_CONTACT_POLICY: "PROXIMITY_CONTACT_POLICY",
                    PROXIMITY_SCAN_DURATION: "PROXIMITY_SCAN_DURATION",
                    PROXIMITY_SCAN_WINDOW: "PROXIMITY_SCAN_WINDOW",
                    PROXIMITY_SCAN_INTERVAL: "PROXIMITY_SCAN_INTERVAL",
                    PROXIMITY_ALARM_REMANENCE: "PROXIMITY_ALARM_REMANENCE",
                    PROXIMITY_WARNING_REMANENCE: "PROXIMITY_WARNING_REMANENCE",
                    PROXIMITY_BEACON_REPEAT: "PROXIMITY_BEACON_REPEAT",
                    PROXIMITY_BEACON_TX_POWER: "PROXIMITY_BEACON_TX_POWER",
                    PROXIMITY_REMINDER_PERIOD: "PROXIMITY_REMINDER_PERIOD",
                    PROXIMITY_REMINDER_DISTANCE: "PROXIMITY_REMINDER_DISTANCE",
                    PROXIMITY_WARNING_DISABLE_DISTANCE: "PROXIMITY_WARNING_DISABLE_DISTANCE",
                    PROXIMITY_ALARM_DISABLE_DISTANCE: "PROXIMITY_ALARM_DISABLE_DISTANCE",
                    PROXIMITY_MAX_SPEED_FILTER: "PROXIMITY_MAX_SPEED_FILTER",
                    PROXIMITY_MAX_UPDATE: "PROXIMITY_MAX_UPDATE",
                    BLE_FILTER_TYPE: "BLE_FILTER_TYPE",
                    BLE_FILTER_MAIN_1: "BLE_FILTER_MAIN_1",
                    BLE_FILTER_MAIN_2: "BLE_FILTER_MAIN_2",
                    BLE_FILTER_SEC_FILTER_VALUE: "BLE_FILTER_SEC_FILTER_VALUE",
                    BLE_FILTER_SEC_FILTER_MASK: "BLE_FILTER_SEC_FILTER_MASK",
                    BLE_FILTER_REPORT_TYPE: "BLE_FILTER_REPORT_TYPE",
                    BUZZER_VOLUME: "BUZZER_VOLUME",
                    POWER_CONSUMPTION: "POWER_CONSUMPTION"
                })
            },
            158: e => {
                e.exports = Object.freeze({
                    GPS: "GPS",
                    GPS_TIMEOUT: "GPS_TIMEOUT",
                    ENCRYPTED_WIFI_BSSIDS: "ENCRYPTED_WIFI_BSSIDS",
                    WIFI_TIMEOUT: "WIFI_TIMEOUT",
                    WIFI_FAILURE: "WIFI_FAILURE",
                    XGPS_DATA: "XGPS_DATA",
                    XGPS_DATA_WITH_GPS_SW_TIME: "XGPS_DATA_WITH_GPS_SW_TIME",
                    BLE_BEACON_SCAN: "BLE_BEACON_SCAN",
                    BLE_BEACON_FAILURE: "BLE_BEACON_FAILURE",
                    WIFI_BSSIDS_WITH_NO_CYPHER: "WIFI_BSSIDS_WITH_NO_CYPHER",
                    BLE_BEACON_SCAN_SHORT_ID: "BLE_BEACON_SCAN_SHORT_ID",
                    BLE_BEACON_SCAN_LONG_ID: "BLE_BEACON_SCAN_LONG_ID",
                    UNKNOWN: "UNKNOWN"
                })
            },
            683: e => {
                e.exports = Object.freeze({
                    DISABLE_REED_SWITCH: "DISABLE_REED_SWITCH",
                    NORMAL_REED_SWITCH: "NORMAL_REED_SWITCH",
                    BUTTON_REED_SWITCH: "BUTTON_REED_SWITCH",
                    OTHER_REED_SWITCH: "OTHER_REED_SWITCH"
                })
            },
            347: e => {
                e.exports = Object.freeze({
                    RESET_DEVICE: "RESET_DEVICE",
                    DELETE_CONFIG_RESET: "DELETE_CONFIG_RESET",
                    DELETE_CONFIG_BLE_BOND_RESET: "DELETE_CONFIG_BLE_BOND_RESET"
                })
            },
            396: e => {
                e.exports = Object.freeze({
                    USER_ACTION: "USER_ACTION",
                    LOW_BATTERY: "LOW_BATTERY",
                    DOWNLINK_REQUEST: "DOWNLINK_REQUEST",
                    BLE_REQUEST: "BLE_REQUEST",
                    BLE_CONNECTED: "BLE_CONNECTED"
                })
            },
            656: e => {
                e.exports = Object.freeze({
                    NO_ACTION: "NO_ACTION",
                    TEMPERATURE_HIGH: "TEMPERATURE_HIGH",
                    TEMPERATURE_LOW: "TEMPERATURE_LOW",
                    TEMPERATURE_HIGH_TEMPERATURE_LOW: "TEMPERATURE_HIGH_TEMPERATURE_LOW",
                    UNKNOWN: "UNKNOWN"
                })
            },
            927: e => {
                e.exports = Object.freeze({
                    USER_TIMEOUT: "USER_TIMEOUT",
                    UNKNOWN: "UNKNOWN"
                })
            },
            318: e => {
                e.exports = Object.freeze({
                    SINGLE_FIXED: "SINGLE_FIXED",
                    SINGLE_RANDOM: "SINGLE_RANDOM",
                    DOUBLE_FIXED: "DOUBLE_FIXED",
                    DOUBLE_RANDOM: "DOUBLE_RANDOM",
                    NETWORK_ADR: "NETWORK_ADR",
                    CUSTOM_STRATEGY: "CUSTOM_STRATEGY"
                })
            },
            649: (e, r, t) => {
                let a = t(896),
                    i = t(130),
                    n = t(700),
                    o = t(50),
                    s = t(606),
                    E = t(660),
                    c = t(709),
                    l = t(842),
                    T = t(129),
                    _ = t(527),
                    I = t(778),
                    u = t(781),
                    R = t(530),
                    p = t(973),
                    O = t(893),
                    S = t(159),
                    m = t(890);
                const N = t(161),
                    A = t(101),
                    h = t(137),
                    d = t(659),
                    D = t(455),
                    C = t(158),
                    P = t(927),
                    k = t(509),
                    y = t(651),
                    b = t(501),
                    L = t(318),
                    M = t(656),
                    g = t(172),
                    f = t(768),
                    x = t(40),
                    w = t(228),
                    U = t(683),
                    B = t(118),
                    G = t(970),
                    F = t(784),
                    W = t(396),
                    V = t(109),
                    Y = t(7),
                    X = t(697),
                    v = t(486),
                    H = t(347),
                    K = t(493);

                function z(e) {
                    for (var r = [], t = (e.length, 0); t < e.length; t += 2) r[t / 2] = 255 & parseInt(e.substring(t, t + 2), 16);
                    return r
                }
                z("FF0205");
                const j = e => (Object.keys(e).forEach((r => e[r] && "object" == typeof e[r] && j(e[r]) || !e[r] && (null === e[r] || void 0 === e[r]) && delete e[r])), e);

                function Z(e) {
                    if (e.length < 1) throw new Error("The payload is not valid to determine Message Type");
                    switch (7 & e[5]) {
                        case 1:
                            return A.ACTIVITY_COUNTER;
                        case 2:
                            return A.DEVICE_CONFIGURATION;
                        case 3:
                            return A.SHOCK_DETECTION;
                        case 4:
                            return A.PERIODIC_ACTIVITY;
                        default:
                            throw new Error("The Misc Data Tag is unknown")
                    }
                }

                function Q(e) {
                    if (e.length < 6) throw new Error("The payload is not valid to determine Age");
                    return ae(e[5], 0, 2040, 8, 0)
                }

                function q(e) {
                    if (e.length < 11) throw new Error("The payload is not valid to determine Battery Voltage Measures");
                    for (var r = [], t = 0; t < 6; t++) {
                        let a = ae(e[5 + t], 2.8, 4.2, 8, 2);
                        r.push(Math.floor(100 * a) / 100)
                    }
                    return r
                }

                function J(e) {
                    for (var r = 0, t = []; e.length >= 13 + 7 * r;) {
                        let a = te(e[6 + 7 * r]) + ":" + te(e[7 + 7 * r]) + ":" + te(e[8 + 7 * r]) + ":" + te(e[9 + 7 * r]) + ":" + te(e[10 + 7 * r]) + ":" + te(e[11 + 7 * r]),
                            i = e[12 + 7 * r];
                        i > 127 && (i -= 256), t.push(new n.BssidInfo(a, i)), r++
                    }
                    return t
                }

                function $(e, r) {
                    if (e.length < r + 2) throw new Error("The payload is not valid to determine axis value");
                    let t = (e[r] << 8) + e[r + 1];
                    return t > 32767 && (t -= 65536), t
                }

                function ee(e, r, t, a) {
                    switch (r) {
                        case 0:
                            c.checkParamValueRange("trackingUlPeriod", t) && (e.trackingUlPeriod = t);
                            break;
                        case 1:
                            c.checkParamValueRange("loralivePeriod", t) && (e.loralivePeriod = t);
                            break;
                        case 2:
                            c.checkParamValueRange("energyStatusPeriod", t) && (e.energyStatusPeriod = t);
                            break;
                        case 3:
                            c.checkParamValueRange("periodicPositionInterval", t) && (e.periodicPositionInterval = t);
                            break;
                        case 4:
                            c.checkParamValueRange("gpsScanMode", t) && (e.gpsScanMode = t);
                            break;
                        case 5:
                            switch (t) {
                                case 0:
                                    e.geolocSensorProfile = y.WIFI_ONLY;
                                    break;
                                case 1:
                                    e.geolocSensorProfile = y.GPS_ONLY;
                                    break;
                                case 2:
                                    e.geolocSensorProfile = y.XGPS_ONLY;
                                    break;
                                case 3:
                                    e.geolocSensorProfile = y.WIFI_FALLBACK_XGPS;
                                    break;
                                case 4:
                                    e.geolocSensorProfile = y.SELF_GOVERNING_HISTORY;
                                    break;
                                case 5:
                                    e.geolocSensorProfile = y.SELF_GOVERNING_TIMEOUT;
                                    break;
                                case 6:
                                    e.geolocSensorProfile = y.WGPS_ONLY;
                                    break;
                                case 7:
                                    e.geolocSensorProfile = y.WXGPS_ONLY;
                                    break;
                                case 8:
                                    e.geolocSensorProfile = y.WGPS_WXGPS_FAILURE;
                                    break;
                                case 9:
                                    e.geolocSensorProfile = y.WGPS_WXGPS_TIMEOUT;
                                    break;
                                case 10:
                                    e.geolocSensorProfile = y.BLE;
                                    break;
                                case 11:
                                    e.geolocSensorProfile = y.BGPS_ONLY;
                                    break;
                                default:
                                    throw new Error("GeoLoc_Sensor_Profile value is unknown")
                            }
                            break;
                        case 6:
                            switch (t) {
                                case 0:
                                    e.oneshotGeolocMethod = b.WIFI;
                                    break;
                                case 1:
                                    e.oneshotGeolocMethod = b.GPS;
                                    break;
                                case 2:
                                    e.oneshotGeolocMethod = b.XGPS;
                                    break;
                                case 3:
                                    e.oneshotGeolocMethod = b.WGPS;
                                    break;
                                case 4:
                                    e.oneshotGeolocMethod = b.WXGPS;
                                    break;
                                case 5:
                                    e.oneshotGeolocMethod = b.BLE;
                                    break;
                                case 6:
                                    e.oneshotGeolocMethod = b.BGPS;
                                    break;
                                default:
                                    throw new Error("One_Shot_GeoLoc_Method value is unknown")
                            }
                            break;
                        case 7:
                            switch (t) {
                                case 0:
                                    e.extAntennaProfile = g.PRINTED;
                                    break;
                                case 1:
                                    e.extAntennaProfile = g.CERAMIC;
                                    break;
                                case 2:
                                    e.extAntennaProfile = g.DYNAMIC;
                                    break;
                                default:
                                    throw new Error("EXT_ANTENNA_PROFILE value is unknown")
                            }
                            break;
                        case 8:
                            c.checkParamValueRange("motionStartEndNbTx", t) && (e.motionStartEndNbTx = t);
                            break;
                        case 9:
                            c.checkParamValueRange("gpsTimeout", t) && (e.gpsTimeout = t);
                            break;
                        case 10:
                            c.checkParamValueRange("xgpsTimeout", t) && (e.xgpsTimeout = t);
                            break;
                        case 11:
                            c.checkParamValueRange("gpsEHPE", t) && (e.gpsEHPE = t);
                            break;
                        case 12:
                            c.checkParamValueRange("gpsConvergence", t) && (e.gpsConvergence = t);
                            break;
                        case 13:
                            let r = new s.ConfigFlags(1 == (1 & t), 1 == (t >> 1 & 1), 1 == (t >> 2 & 1), 1 == (t >> 3 & 1), 1 == (t >> 4 & 1), 1 == (t >> 5 & 1), 1 == (t >> 6 & 1), 1 == (t >> 7 & 1), 1 == (t >> 8 & 1), 1 == (t >> 9 & 1), 1 == (t >> 10 & 1), 1 == (t >> 11 & 1), 1 == (t >> 12 & 1), 1 == (t >> 13 & 1), 1 == (t >> 14 & 1), 1 == (t >> 15 & 1), 1 == (t >> 16 & 1), 1 == (t >> 17 & 1));
                            e.configFlags = r;
                            break;
                        case 14:
                            switch (t) {
                                case 0:
                                    e.transmitStrat = L.SINGLE_FIXED;
                                    break;
                                case 1:
                                    e.transmitStrat = L.SINGLE_RANDOM;
                                    break;
                                case 2:
                                    e.transmitStrat = L.DOUBLE_FIXED;
                                    break;
                                case 3:
                                    e.transmitStrat = L.DOUBLE_RANDOM;
                                    break;
                                case 4:
                                    e.transmitStrat = L.NETWORK_ADR;
                                    break;
                                case 5:
                                    e.transmitStrat = L.CUSTOM_STRATEGY;
                                    break;
                                default:
                                    throw new Error("TRANSMIT_STRAT value is unknown")
                            }
                            break;
                        case 15:
                            c.checkParamValueRange("bleBeaconCount", t) && (e.bleBeaconCount = t);
                            break;
                        case 16:
                            c.checkParamValueRange("bleBeaconTimeout", t) && (e.bleBeaconTimeout = t);
                            break;
                        case 17:
                            c.checkParamValueRange("gpsStandbyTimeout", t) && (e.gpsStandbyTimeout = t);
                            break;
                        case 18:
                            let i;
                            i = null != e.confirmedUplink ? e.confirmedUplink : new E.ConfirmedUplink, i.confirmedUlBitmap = t, i.framePending = 1 == (1 & t), i.position = 1 == (t >> 3 & 1), i.energyStatus = 1 == (t >> 4 & 1), i.heartbeat = 1 == (t >> 5 & 1), i.activityStatus = 1 == (t >> 7 & 1), i.configuration = 1 == (t >> 7 & 1), i.shockDetection = 1 == (t >> 7 & 1), i.shutdown = 1 == (t >> 9 & 1), i.event = 1 == (t >> 10 & 1), i.scanCollection = 1 == (t >> 11 & 1), i.debug = 1 == (t >> 15 & 1), e.confirmedUplink = i;
                            break;
                        case 19:
                            let n;
                            n = null != e.confirmedUplink ? e.confirmedUplink : new E.ConfirmedUplink, c.checkParamValueRange("confirmedUlRetry", t) && (n.confirmedUlRetry = t), e.confirmedUplink = n;
                            break;
                        case 20:
                            c.checkParamValueRange("motionSensitivity", t) && (e.motionSensitivity = t);
                            break;
                        case 21:
                            c.checkParamValueRange("shockDetection", t) && (e.shockDetection = t);
                            break;
                        case 22:
                            c.checkParamValueRange("periodicActivityPeriod", t) && (e.periodicActivityPeriod = t);
                            break;
                        case 23:
                            c.checkParamValueRange("motionDuration", t) && (e.motionDuration = t);
                            break;
                        case 24:
                            c.checkParamValueRange("geofencingScanPeriod", t) && (e.geofencingScanPeriod = t);
                            break;
                        case 25:
                            c.checkParamValueRange("geofencingUlPeriod", t) && (e.geofencingUlPeriod = t);
                            break;
                        case 26:
                            t > 2147483647 && (t -= 4294967296), c.checkParamValueRange("bleRssiFilter", t) && (e.bleRssiFilter = t);
                            break;
                        case 27:
                            t > 2147483647 && (t -= 4294967296), c.checkParamValueRange("temperatureHigh", t) && (e.temperatureHigh = t);
                            break;
                        case 28:
                            t > 2147483647 && (t -= 4294967296), c.checkParamValueRange("temperatureLow", t) && (e.temperatureLow = t);
                            break;
                        case 29:
                            switch (t) {
                                case 0:
                                    e.temperatureAction = M.NO_ACTION;
                                    break;
                                case 1:
                                    e.temperatureAction = M.TEMPERATURE_HIGH;
                                    break;
                                case 2:
                                    e.temperatureAction = M.TEMPERATURE_LOW;
                                    break;
                                case 3:
                                    e.temperatureAction = M.TEMPERATURE_HIGH_TEMPERATURE_LOW;
                                    break;
                                default:
                                    e.temperatureAction = M.UNKNOWN
                            }
                            break;
                        case 30:
                            let o = new T.CustomTransmitStrat,
                                I = t >> 16 & 255,
                                u = t >> 8 & 255,
                                R = new l.TransmissionDatarate(1 == (1 & u), 1 == (u >> 1 & 1), 1 == (u >> 2 & 1), 1 == (u >> 3 & 1), 1 == (u >> 4 & 1), 1 == (u >> 5 & 1), 1 == (u >> 6 & 1), 1 == (u >> 7 & 1));
                            o.firstTransmissionDatarate = R;
                            let p = new l.TransmissionDatarate(1 == (1 & I), 1 == (I >> 1 & 1), 1 == (I >> 2 & 1), 1 == (I >> 3 & 1), 1 == (I >> 4 & 1), 1 == (I >> 5 & 1), 1 == (I >> 6 & 1), 1 == (I >> 7 & 1));
                            o.secondTransmissionDatarate = p;
                            let O = 255 & t,
                                S = O >> 5 & 7;
                            switch (O >> 2 & 7) {
                                case 0:
                                    o.firstTransmissionDatarateDistribution = T.TransmissionDatarateDistribution.RANDOM;
                                    break;
                                case 1:
                                    o.firstTransmissionDatarateDistribution = T.TransmissionDatarateDistribution.BELL_CURVE;
                                    break;
                                case 2:
                                    o.firstTransmissionDatarateDistribution = T.TransmissionDatarateDistribution.RING;
                                    break;
                                default:
                                    o.firstTransmissionDatarateDistribution = T.TransmissionDatarateDistribution.RANDOM
                            }
                            switch (S) {
                                case 0:
                                    o.secondTransmissionDatarateDistribution = T.TransmissionDatarateDistribution.RANDOM;
                                    break;
                                case 1:
                                    o.secondTransmissionDatarateDistribution = T.TransmissionDatarateDistribution.BELL_CURVE;
                                    break;
                                case 2:
                                    o.secondTransmissionDatarateDistribution = T.TransmissionDatarateDistribution.RING;
                                    break;
                                default:
                                    o.secondTransmissionDatarateDistribution = T.TransmissionDatarateDistribution.RANDOM
                            }
                            o.transmissionType = 0 == (O >> 1 & 1) ? T.TransmissionType.SINGLE : T.TransmissionType.DOUBLE, o.adrenabled = 0 == (1 & O), e.transmitStratCustom = o;
                            break;
                        case 31:
                            c.checkParamValueRange("networkTimeoutCheck", t) && (e.networkTimeoutCheck = t);
                            break;
                        case 32:
                            c.checkParamValueRange("networkTimeoutReset", t) && (e.networkTimeoutReset = t);
                            break;
                        case 33:
                            switch (t) {
                                case 0:
                                    e.collectionScanType = f.NO_COLLECTION_SCAN;
                                    break;
                                case 1:
                                    e.collectionScanType = f.BLE_BEACONS;
                                    break;
                                case 2:
                                    e.collectionScanType = f.WIFI_BSSID;
                                    break;
                                default:
                                    throw new Error("CollectionScanType value is unknown")
                            }
                            break;
                        case 34:
                            c.checkParamValueRange("collectionNbEntry", t) && (e.collectionNbEntry = t);
                            break;
                        case 35:
                            switch (t) {
                                case 0:
                                    e.collectionBleFilterType = x.NO_FILTER;
                                    break;
                                case 1:
                                    e.collectionBleFilterType = x.EDDYSTONE_UID;
                                    break;
                                case 2:
                                    e.collectionBleFilterType = x.EDDYSTONE_URL;
                                    break;
                                case 3:
                                    e.collectionBleFilterType = x.ALL_EDDYSTONE;
                                    break;
                                case 4:
                                    e.collectionBleFilterType = x.IBEACON_ONLY;
                                    break;
                                case 5:
                                    e.collectionBleFilterType = x.ALTBEACON_ONLY;
                                    break;
                                default:
                                    throw new Error("CollectionScanType value is unknown")
                            }
                            break;
                        case 36:
                            c.checkParamValueRange("collectionBleFilterMain1", t) && (e.collectionBleFilterMain1 = t);
                            break;
                        case 37:
                            c.checkParamValueRange("collectionBleFilterMain2", t) && (e.collectionBleFilterMain2 = t);
                            break;
                        case 38:
                            c.checkParamValueRange("collectionBleFilterSecValue", t) && (e.collectionBleFilterSecValue = t);
                            break;
                        case 39:
                            c.checkParamValueRange("collectionBleFilterSecMask", t) && (e.collectionBleFilterSecMask = t);
                            break;
                        case 40:
                            t > 2147483647 && (t -= 4294967296), c.checkParamValueRange("batteryCapacity", t) && (e.batteryCapacity = t);
                            break;
                        case 41:
                            switch (t) {
                                case 0:
                                    e.reedSwitchConfiguration = U.DISABLE_REED_SWITCH;
                                    break;
                                case 1:
                                    e.reedSwitchConfiguration = U.NORMAL_REED_SWITCH;
                                    break;
                                case 2:
                                    e.reedSwitchConfiguration = U.BUTTON_REED_SWITCH;
                                    break;
                                case 3:
                                    e.reedSwitchConfiguration = U.OTHER_REED_SWITCH;
                                    break;
                                default:
                                    throw new Error("ReedSwitchConfiguration value is unknown")
                            }
                            break;
                        case 42:
                            switch (t) {
                                case 0:
                                    e.gnssConstellation = w.GPS_ONLY;
                                    break;
                                case 1:
                                    e.gnssConstellation = w.GLONASS_ONLY;
                                    break;
                                case 2:
                                    e.gnssConstellation = w.GPS_GLONASS;
                                    break;
                                case 3:
                                    e.gnssConstellation = w.GPS_GALILEO;
                                    break;
                                case 4:
                                    e.gnssConstellation = w.GPS_GLONASS_GALILEO;
                                    break;
                                case 5:
                                    e.gnssConstellation = w.BEIDOU_ONLY;
                                    break;
                                case 6:
                                    e.gnssConstellation = w.GPS_BEIDOU;
                                    break;
                                default:
                                    throw new Error("GnssConstellation value is unknown")
                            }
                            break;
                        case 43:
                            t > 2147483647 && (t -= 4294967296), c.checkParamValueRange("proximityMinimumScanPower", t) && (e.proximityMinimumScanPower = t);
                            break;
                        case 44:
                            c.checkParamValueRange("proximityDistanceCoefficient", t) && (e.proximityDistanceCoefficient = t);
                            break;
                        case 45:
                            c.checkParamValueRange("proximityScanFrequency", t) && (e.proximityScanFrequency = t);
                            break;
                        case 46:
                            c.checkParamValueRange("proximityBacktraceMaximumAge", t) && (e.proximityBacktraceMaximumAge = t);
                            break;
                        case 47:
                            c.checkParamValueRange("proximityDistanceSlidingWindow", t) && (e.proximityDistanceSlidingWindow = t);
                            break;
                        case 48:
                            c.checkParamValueRange("proximityExposure50", t) && (e.proximityExposure50 = t);
                            break;
                        case 49:
                            c.checkParamValueRange("proximityExposure100", t) && (e.proximityExposure100 = t);
                            break;
                        case 50:
                            c.checkParamValueRange("proximityExposure150", t) && (e.proximityExposure150 = t);
                            break;
                        case 51:
                            c.checkParamValueRange("proximityExposure200", t) && (e.proximityExposure200 = t);
                            break;
                        case 52:
                            c.checkParamValueRange("proximityExposure250", t) && (e.proximityExposure250 = t);
                            break;
                        case 53:
                            c.checkParamValueRange("proximityExposure300", t) && (e.proximityExposure300 = t);
                            break;
                        case 54:
                            c.checkParamValueRange("proximityExposure400", t) && (e.proximityExposure400 = t);
                            break;
                        case 55:
                            c.checkParamValueRange("proximityImmediateAlarmDistance", t) && (e.proximityImmediateAlarmDistance = t / 10);
                            break;
                        case 56:
                            c.checkParamValueRange("proximityAlarmExposure", t) && (e.proximityAlarmExposure = t);
                            break;
                        case 57:
                            c.checkParamValueRange("proximityImmediateWarningDistance", t) && (e.proximityImmediateWarningDistance = t / 10);
                            break;
                        case 58:
                            c.checkParamValueRange("proximityWarningExposure", t) && (e.proximityWarningExposure = t);
                            break;
                        case 59:
                            c.checkParamValueRange("proximityImmediateRecordDistance", t) && (e.proximityImmediateRecordDistance = t / 10);
                            break;
                        case 60:
                            c.checkParamValueRange("proximityRecordExposure", t) && (e.proximityRecordExposure = t);
                            break;
                        case 61:
                            c.checkParamValueRange("proximityAlarmBuzzerDuration", t) && (e.proximityAlarmBuzzerDuration = t);
                            break;
                        case 62:
                            c.checkParamValueRange("proximityWarningBuzzerDuration", t) && (e.proximityWarningBuzzerDuration = t);
                            break;
                        case 63:
                            let m = 255 & t,
                                N = new _.ProximityContactPolicy(1 == (1 & m), 1 == (m >> 1 & 1), 1 == (m >> 2 & 1));
                            e.proximityContactPolicy = N;
                            break;
                        case 64:
                            c.checkParamValueRange("proximityScanDuration", t) && (e.proximityScanDuration = t / 10);
                            break;
                        case 65:
                            c.checkParamValueRange("proximityScanWindow", t) && (e.proximityScanWindow = t);
                            break;
                        case 66:
                            c.checkParamValueRange("proximityScanInterval", t) && (e.proximityScanInterval = t);
                            break;
                        case 67:
                            c.checkParamValueRange("proximityAlarmRemanence", t) && (e.proximityAlarmRemanence = t);
                            break;
                        case 68:
                            c.checkParamValueRange("proximityWarningRemanence", t) && (e.proximityWarningRemanence = t);
                            break;
                        case 69:
                            c.checkParamValueRange("proximityBeaconRepeat", t) && (e.proximityBeaconRepeat = t);
                            break;
                        case 70:
                            t > 2147483647 && (t -= 4294967296), c.checkParamValueRange("proximityBeaconTXPower", t) && (e.proximityBeaconTXPower = t);
                            break;
                        case 71:
                            c.checkParamValueRange("proximityReminderPeriod", t) && (e.proximityReminderPeriod = t);
                            break;
                        case 72:
                            c.checkParamValueRange("proximityReminderDistance", t) && (e.proximityReminderDistance = t / 10);
                            break;
                        case 73:
                            c.checkParamValueRange("proximityWarningDisableDistance", t) && (e.proximityWarningDisableDistance = t / 10);
                            break;
                        case 74:
                            c.checkParamValueRange("proximityAlarmDisableDistance", t) && (e.proximityAlarmDisableDistance = t / 10);
                            break;
                        case 75:
                            c.checkParamValueRange("proximityMaxSpeedFilter", t) && (e.proximityMaxSpeedFilter = t / 10);
                            break;
                        case 76:
                            c.checkParamValueRange("proximityMaxUpdate", t) && (e.proximityMaxUpdate = t);
                            break;
                        case 77:
                            switch (t) {
                                case 0:
                                    e.bleFilterType = x.NO_FILTER;
                                    break;
                                case 1:
                                    e.bleFilterType = x.EDDYSTONE_UID;
                                    break;
                                case 2:
                                    e.bleFilterType = x.EDDYSTONE_URL;
                                    break;
                                case 3:
                                    e.bleFilterType = x.ALL_EDDYSTONE;
                                    break;
                                case 4:
                                    e.bleFilterType = x.IBEACON_ONLY;
                                    break;
                                case 5:
                                    e.bleFilterType = x.ALTBEACON_ONLY;
                                    break;
                                default:
                                    throw new Error("bleFilterType value is unknown")
                            }
                            break;
                        case 78:
                            c.checkParamValueRange("bleFilterMain1", t) && (e.bleFilterMain1 = t);
                            break;
                        case 79:
                            c.checkParamValueRange("bleFilterMain2", t) && (e.bleFilterMain2 = t);
                            break;
                        case 80:
                            c.checkParamValueRange("bleFilterSecValue", t) && (e.bleFilterSecValue = t);
                            break;
                        case 81:
                            c.checkParamValueRange("bleFilterSecMask", t) && (e.bleFilterSecMask = t);
                            break;
                        case 82:
                            switch (t) {
                                case 0:
                                    e.bleFilterReportType = B.MAC_ADDRESS;
                                    break;
                                case 1:
                                    e.bleFilterReportType = B.SHORT_ID;
                                    break;
                                case 2:
                                    e.bleFilterReportType = B.LONG_ID;
                                    break;
                                default:
                                    throw new Error("BleFilterReportType value is unknown")
                            }
                            break;
                        case 83:
                            c.checkParamValueRange("buzzerVolume", t) && (e.buzzerVolume = t);
                            break;
                        case 247:
                            c.checkParamValueRange("powerConsumption", t) && (e.powerConsumption = t);
                            break;
                        case 248:
                            switch (t) {
                                case 0:
                                    e.bleBond = G.NOT_BONDED;
                                    break;
                                case 1:
                                    e.bleBond = G.BONDED;
                                    break;
                                case 2:
                                    e.bleBond = G.UNKNOWN
                            }
                            break;
                        case 249:
                            switch (t) {
                                case 0:
                                    e.mode = h.STAND_BY;
                                    break;
                                case 1:
                                    e.mode = h.MOTION_TRACKING;
                                    break;
                                case 2:
                                    e.mode = h.PERMANENT_TRACKING;
                                    break;
                                case 3:
                                    e.mode = h.MOTION_START_END_TRACKING;
                                    break;
                                case 4:
                                    e.mode = h.ACTIVITY_TRACKING;
                                    break;
                                case 5:
                                    e.mode = h.OFF;
                                    break;
                                default:
                                    throw new Error("Mode value is unknown")
                            }
                            break;
                        case 250:
                            if (!a) throw new Error("Parameter is read only, not allowed to be set");
                            t > 2147483647 && (t -= 4294967296), e.xAccelerometerValue = t;
                            break;
                        case 251:
                            if (!a) throw new Error("Parameter is read only, not allowed to be set");
                            t > 2147483647 && (t -= 4294967296), e.yAccelerometerValue = t;
                            break;
                        case 252:
                            if (!a) throw new Error("Parameter is read only, not allowed to be set");
                            t > 2147483647 && (t -= 4294967296), e.zAccelerometerValue = t;
                            break;
                        case 253:
                            if (!a) throw new Error("Parameter is read only, not allowed to be set");
                            e.bleFirmwareVersion = (t >> 16 & 255).toString() + "." + (t >> 8 & 255).toString() + "." + (255 & t).toString();
                        case 254:
                            if (!a) throw new Error("Parameter is read only, not allowed to be set");
                            e.firmwareVersion = (t >> 16 & 255).toString() + "." + (t >> 8 & 255).toString() + "." + (255 & t).toString();
                            break;
                        default:
                            throw new Error("Parameter is unknown")
                    }
                }

                function re(e) {
                    for (var r = "", t = 0; t < e.length; t++) r += te(e[t]);
                    return r
                }

                function te(e) {
                    let r = e.toString(16);
                    return r.length < 2 && (r = "0" + r), r
                }

                function ae(e, r, t, a, i) {
                    return (e - i / 2) / (((1 << a) - 1 - i) / (t - r)) + r
                }
                e.exports = {
                    decodeUplink: function(e) {
                        var r = new a.AbeewayUplinkPayload,
                            t = e.bytes;
                        switch (r.messageType = function(e) {
                            if (e.length < 1) throw new Error("The payload is not valid to determine Message Type");
                            switch (e[0]) {
                                case 0:
                                    return N.FRAME_PENDING;
                                case 3:
                                    return N.POSITION_MESSAGE;
                                case 4:
                                    return N.ENERGY_STATUS;
                                case 5:
                                    return N.HEARTBEAT;
                                case 7:
                                    switch (Z(e)) {
                                        case A.ACTIVITY_COUNTER:
                                            return N.ACTIVITY_STATUS;
                                        case A.DEVICE_CONFIGURATION:
                                            return N.CONFIGURATION;
                                        case A.SHOCK_DETECTION:
                                            return N.SHOCK_DETECTION;
                                        case A.PERIODIC_ACTIVITY:
                                            return N.ACTIVITY_STATUS
                                    }
                                case 9:
                                    return N.SHUTDOWN;
                                case 10:
                                    return N.EVENT;
                                case 11:
                                    return N.DATA_SCAN_COLLECTION;
                                case 12:
                                    return N.PROXIMITY_DETECTION;
                                case 15:
                                    return N.DEBUG;
                                default:
                                    return N.UNKNOWN
                            }
                        }(t), r.messageType != N.FRAME_PENDING && (r.trackingMode = function(e) {
                            if (e.length < 2) throw new Error("The payload is not valid to determine Tracking mode");
                            switch (e[1] >> 5 & 7) {
                                case 0:
                                    return h.STAND_BY;
                                case 1:
                                    return h.MOTION_TRACKING;
                                case 2:
                                    return h.PERMANENT_TRACKING;
                                case 3:
                                    return h.MOTION_START_END_TRACKING;
                                case 4:
                                    return h.ACTIVITY_TRACKING;
                                case 5:
                                    return h.OFF;
                                default:
                                    throw new Error("The Mode is unknown")
                            }
                        }(t), r.deviceConfiguration = new c.Parameters, r.deviceConfiguration.mode = r.trackingMode, r.sosFlag = function(e) {
                            if (e.length < 2) throw new Error("The payload is not valid to determine User Action");
                            return e[1] >> 4 & 1
                        }(t), r.appState = function(e) {
                            if (e.length < 2) throw new Error("The payload is not valid to determine App State");
                            return e[1] >> 3 & 1
                        }(t), r.dynamicMotionState = function(e) {
                            if (e.length < 2) throw new Error("The payload is not valid to determine Moving");
                            switch (e[1] >> 2 & 1) {
                                case 0:
                                    return d.STATIC;
                                case 1:
                                    return d.MOVING;
                                default:
                                    throw new Error("The Dynamic Motion State is unknown")
                            }
                        }(t), 18 == e.fPort ? (r.batteryLevel = function(e) {
                            if (e.length < 3) throw new Error("The payload is not valid to determine Battery Level");
                            var r = e[2];
                            return 0 == r || 255 == r ? null : r
                        }(t), r.batteryStatus = function(e) {
                            if (e.length < 3) throw new Error("The payload is not valid to determine Battery Status");
                            var r = e[2];
                            return 0 == r ? D.CHARGING : 255 == r ? D.UNKNOWN : D.OPERATING
                        }(t)) : r.batteryVoltage = function(e) {
                            if (e.length < 3) throw new Error("The payload is not valid to determine Battery Voltage");
                            if (0 == e[2]) return 0;
                            var r = ae(e[2], 2.8, 4.2, 8, 2);
                            return Math.round(100 * r) / 100
                        }(t), r.temperatureMeasure = function(e) {
                            if (e.length < 4) throw new Error("The payload is not valid to determine Temperature");
                            var r = ae(e[3], -44, 85, 8, 0);
                            return Math.round(10 * r) / 10
                        }(t), r.periodicPosition = function(e) {
                            if (e.length < 2) throw new Error("The payload is not valid to determine Periodic Position");
                            return 1 == (e[1] >> 1 & 1)
                        }(t), r.onDemand = function(e) {
                            if (e.length < 2) throw new Error("The payload is not valid to determine On Demand Position");
                            return 1 == (1 & e[1])
                        }(t), r.ackToken = function(e) {
                            if (e.length < 5) throw new Error("The payload is not valid to determine Ack Token");
                            return e[4] >> 4 & 15
                        }(t)), r.payload = re(t), r.messageType) {
                            case N.POSITION_MESSAGE:
                                switch (r.rawPositionType = function(e) {
                                    if (e.length < 5) throw new Error("The payload is not valid to determine Raw Position Type");
                                    switch (15 & e[4]) {
                                        case 0:
                                            return C.GPS;
                                        case 1:
                                            return C.GPS_TIMEOUT;
                                        case 2:
                                            return C.ENCRYPTED_WIFI_BSSIDS;
                                        case 3:
                                            return C.WIFI_TIMEOUT;
                                        case 4:
                                            return C.WIFI_FAILURE;
                                        case 5:
                                            return C.XGPS_DATA;
                                        case 6:
                                            return C.XGPS_DATA_WITH_GPS_SW_TIME;
                                        case 7:
                                            return C.BLE_BEACON_SCAN;
                                        case 8:
                                            return C.BLE_BEACON_FAILURE;
                                        case 9:
                                            return C.WIFI_BSSIDS_WITH_NO_CYPHER;
                                        case 10:
                                            return C.BLE_BEACON_SCAN_SHORT_ID;
                                        case 11:
                                            return C.BLE_BEACON_SCAN_LONG_ID;
                                        default:
                                            return C.UNKNOWN
                                    }
                                }(t), r.rawPositionType) {
                                    case C.GPS:
                                        r.age = Q(t), r.gpsLatitude = function(e) {
                                            if (e.length < 9) throw new Error("The payload is not valid to determine GPS Latitude");
                                            let r = re(e.slice(6, 9)) + "00";
                                            var t = parseInt(r, 16);
                                            return t > 2147483647 && (t -= 4294967296), t / Math.pow(10, 7)
                                        }(t), r.gpsLongitude = function(e) {
                                            if (e.length < 12) throw new Error("The payload is not valid to determine GPS Longitude");
                                            let r = re(e.slice(9, 12)) + "00";
                                            var t = parseInt(r, 16);
                                            return t > 2147483647 && (t -= 4294967296), t / Math.pow(10, 7)
                                        }(t), r.horizontalAccuracy = function(e) {
                                            if (e.length < 13) throw new Error("The payload is not valid to determine GPS Horizontal Accuracy");
                                            return Math.floor(ae(e[12], 0, 1e3, 8, 0))
                                        }(t);
                                        break;
                                    case C.GPS_TIMEOUT:
                                        r.timeoutCause = function(e) {
                                            if (e.length < 6) throw new Error("The payload is not valid to determine Timeout cause");
                                            if (0 == e[5]) return P.USER_TIMEOUT;
                                            throw new Error("The Timeout Cause is unknown")
                                        }(t), r.bestSatellitesCOverN = function(e) {
                                            if (e.length < 10) throw new Error("The payload is not valid to determine Best Satellites C/N");
                                            var r = [];
                                            return r.push(Math.round(ae(e[6], 0, 50, 8, 0))), r.push(Math.round(ae(e[7], 0, 50, 8, 0))), r.push(Math.round(ae(e[8], 0, 50, 8, 0))), r.push(Math.round(ae(e[9], 0, 50, 8, 0))), r
                                        }(t);
                                        break;
                                    case C.ENCRYPTED_WIFI_BSSIDS:
                                        break;
                                    case C.WIFI_TIMEOUT:
                                        r.batteryVoltageMeasures = q(t);
                                        break;
                                    case C.WIFI_FAILURE:
                                        r.batteryVoltageMeasures = q(t), r.errorCode = function(e) {
                                            if (e.length < 12) throw new Error("The payload is not valid to determine Error Code");
                                            return e[11]
                                        }(t);
                                        break;
                                    case C.XGPS_DATA:
                                    case C.XGPS_DATA_WITH_GPS_SW_TIME:
                                        break;
                                    case C.WIFI_BSSIDS_WITH_NO_CYPHER:
                                        r.age = Q(t), r.wifiBssids = J(t);
                                        break;
                                    case C.BLE_BEACON_SCAN:
                                        r.age = Q(t), r.bleBssids = J(t);
                                        break;
                                    case C.BLE_BEACON_FAILURE:
                                        r.bleBeaconFailure = function(e) {
                                            if (e.length < 6) throw new Error("The payload is not valid to determine Ble Beacon Failure");
                                            switch (e[5]) {
                                                case 0:
                                                    return k.BLE_NOT_RESPONDING;
                                                case 1:
                                                    return k.INTERNAL_ERROR;
                                                case 2:
                                                    return k.SHARED_ANTENNA_NOT_AVAILABLE;
                                                case 3:
                                                    return k.SCAN_ALREADY_ON_GOING;
                                                case 4:
                                                    return k.BLE_BUSY;
                                                case 5:
                                                    return k.NO_BEACON_DETECTED;
                                                case 6:
                                                    return k.HARDWARE_INCOMPATIBILITY;
                                                case 7:
                                                    return k.UNKNOWN_BLE_FIRMWARE_VERSION;
                                                default:
                                                    throw new Error("The Ble Beacon Failure is unknown")
                                            }
                                        }(t);
                                        break;
                                    case C.BLE_BEACON_SCAN_SHORT_ID:
                                        r.age = Q(t), r.bleBeaconIds = function(e) {
                                            for (var r = 0, t = []; e.length >= 13 + 7 * r;) {
                                                let a = te(e[6 + 7 * r]) + "-" + te(e[7 + 7 * r]) + "-" + te(e[8 + 7 * r]) + "-" + te(e[9 + 7 * r]) + "-" + te(e[10 + 7 * r]) + "-" + te(e[11 + 7 * r]),
                                                    i = e[12 + 7 * r];
                                                i > 127 && (i -= 256), t.push(new o.BeaconIdInfo(a, i)), r++
                                            }
                                            return t
                                        }(t);
                                        break;
                                    case C.BLE_BEACON_SCAN_LONG_ID:
                                        r.age = Q(t), r.bleBeaconIds = function(e) {
                                            for (var r = 0, t = []; e.length >= 23 + 7 * r;) {
                                                let a = te(e[6 + 7 * r]) + "-" + te(e[7 + 7 * r]) + "-" + te(e[8 + 7 * r]) + "-" + te(e[9 + 7 * r]) + "-" + te(e[10 + 7 * r]) + "-" + te(e[11 + 7 * r]) + "-" + te(e[12 + 7 * r]) + "-" + te(e[13 + 7 * r]) + "-" + te(e[14 + 7 * r]) + "-" + te(e[15 + 7 * r]) + "-" + te(e[16 + 7 * r]) + "-" + te(e[17 + 7 * r]) + "-" + te(e[18 + 7 * r]) + "-" + te(e[19 + 7 * r]) + "-" + te(e[20 + 7 * r]) + "-" + te(e[21 + 7 * r]),
                                                    i = e[22 + 7 * r];
                                                i > 127 && (i -= 256), t.push(new o.BeaconIdInfo(a, i)), r++
                                            }
                                            return t
                                        }(t);
                                        break;
                                    default:
                                        throw new Error("The Fix Type is unknown")
                                }
                                break;
                            case N.HEARTBEAT:
                                r.resetCause = function(e) {
                                    if (e.length < 6) throw new Error("The payload is not valid to determine Reset Cause");
                                    return e[5]
                                }(t), t.length > 6 && (r.firmwareVersion = function(e) {
                                    if (e.length < 9) throw new Error("The payload is not valid to determine HeartBeat Firmware Version");
                                    return e[6].toString() + "." + e[7].toString() + "." + e[8].toString()
                                }(t)), t.length > 9 && (r.bleFirmwareVersion = function(e) {
                                    if (e.length < 12) throw new Error("The payload is not valid to determine HeartBeat BLE Firmware Version");
                                    return e[9].toString() + "." + e[10].toString() + "." + e[11].toString()
                                }(t));
                                break;
                            case N.ENERGY_STATUS:
                                r.gpsOnRuntime = function(e) {
                                    if (e.length < 9) throw new Error("The payload is not valid to determine GPS On Runtime");
                                    return parseInt(re(e.slice(5, 9)), 16)
                                }(t), r.gpsStandbyRuntime = function(e) {
                                    if (e.length < 13) throw new Error("The payload is not valid to determine GPS Standby Runtime");
                                    return parseInt(re(e.slice(9, 13)), 16)
                                }(t), r.wifiScanCount = function(e) {
                                    if (e.length < 17) throw new Error("The payload is not valid to determine Wifi Scan Count");
                                    return parseInt(re(e.slice(13, 17)), 16)
                                }(t);
                                break;
                            case N.ACTIVITY_STATUS:
                                switch (r.miscDataTag = Z(t), r.miscDataTag) {
                                    case A.ACTIVITY_COUNTER:
                                        r.activityCount = function(e) {
                                            if (e.length < 10) throw new Error("The payload is not valid to determine activity counter");
                                            return parseInt(re(e.slice(6, 10)), 16)
                                        }(t);
                                        break;
                                    case A.PERIODIC_ACTIVITY:
                                        r.activityReportingWindow = function(e) {
                                            if (e.length < 18) throw new Error("The payload is not valid to determine periodic activity");
                                            let r = [];
                                            for (var t = 0; t < 6; t++) r.push((e[6 + 2 * t] << 8) + e[7 + 2 * t]);
                                            return r
                                        }(t), r.activityCount = function(e) {
                                            if (e.length < 22) throw new Error("The payload is not valid to determine activity counter in periodic report");
                                            return parseInt(re(e.slice(18, 22)), 16)
                                        }(t)
                                }
                                break;
                            case N.SHOCK_DETECTION:
                                r.miscDataTag = Z(t), r.nbOfshock = function(e) {
                                    if (e.length < 7) throw new Error("The payload is not valid to determine Nb of shocks");
                                    return e[6]
                                }(t), r.accelerometerShockData = function(e) {
                                    return [$(e, 7), $(e, 9), $(e, 11)]
                                }(t);
                                break;
                            case N.CONFIGURATION:
                                r.miscDataTag = Z(t), r.deviceConfiguration = function(e) {
                                    let r = 0,
                                        t = new c.Parameters;
                                    if ((e.length - 6) % 5 != 0) throw new Error("The payload is not valid to determine configuration parameters");
                                    for (; e.length >= 11 + 5 * r;) {
                                        let a = e[6 + 5 * r],
                                            i = re(e.slice(7 + 5 * r, 11 + 5 * r));
                                        ee(t, a, parseInt(i, 16), !0), r++
                                    }
                                    return t
                                }(t), null == r.deviceConfiguration.mode && (r.deviceConfiguration.mode = r.trackingMode);
                                break;
                            case N.DEBUG:
                                switch (r.debugCommandTag = function(e) {
                                    if (e.length < 5) throw new Error("The payload is not valid to determine determine Debug Command Tag");
                                    switch (15 & e[4]) {
                                        case 0:
                                            return F.DEBUG_CRASH_INFORMATION;
                                        case 1:
                                            return F.TX_POWER_INDEX_VALUE;
                                        case 2:
                                            return F.UPLINK_LENGTH_ERR;
                                        case 3:
                                            return F.GENERIC_ERROR;
                                        default:
                                            throw new Error("The Debug Command Tag is unknown")
                                    }
                                }(t), r.debugCommandTag) {
                                    case F.DEBUG_CRASH_INFORMATION:
                                        r.debugErrorCode = function(e) {
                                            if (e.length < 6) throw new Error("The payload is not valid to determine determine Debug Error Code");
                                            return e[5]
                                        }(t), r.debugCrashInfo = function(e) {
                                            if (e.length < 6) throw new Error("The payload is not valid to determine determine Debug Error Info");
                                            let r = "";
                                            for (var t = 6; t < e.length; t++) r += String.fromCharCode(e[t]);
                                            return r
                                        }(t);
                                        break;
                                    case F.TX_POWER_INDEX_VALUE:
                                        r.txPowerIndex = function(e) {
                                            if (e.length < 6) throw new Error("The payload is not valid to determine determine TxIndex Power");
                                            return e[5]
                                        }(t);
                                        break;
                                    case F.UPLINK_LENGTH_ERR:
                                        r.lengthErrCounter = function(e) {
                                            if (e.length < 7) throw new Error("The payload is not valid to determine determine Ul Length Error counter");
                                            return (e[5] << 8) + e[6]
                                        }(t);
                                        break;
                                    case F.GENERIC_ERROR:
                                        r.genericErrorCode = function(e) {
                                            if (e.length < 6) throw new Error("The payload is not valid to determine determine generic error code");
                                            return e[5]
                                        }(t);
                                        break;
                                    default:
                                        throw new Error("The Debug Command Tag is unknown")
                                }
                                break;
                            case N.SHUTDOWN:
                                r.shutdownCause = function(e) {
                                    if (e.length < 6) throw new Error("The payload is not valid to determine determine ShutDown Cause");
                                    switch (e[5]) {
                                        case 0:
                                            return W.USER_ACTION;
                                        case 1:
                                            return W.LOW_BATTERY;
                                        case 2:
                                            return W.DOWNLINK_REQUEST;
                                        case 3:
                                            return W.BLE_REQUEST;
                                        case 4:
                                            return W.BLE_CONNECTED;
                                        default:
                                            throw new Error("The ShutDown Cause is unknown")
                                    }
                                }(t);
                                break;
                            case N.FRAME_PENDING:
                                r.currentAckTokenValue = function(e) {
                                    if (e.length < 2) throw new Error("The payload is not valid to determine determine Ack Token value");
                                    return e[1]
                                }(t);
                                break;
                            case N.EVENT:
                                switch (r.eventType = function(e) {
                                    if (e.length < 6) throw new Error("The payload is not valid to determine determine Ack Token value");
                                    switch (e[5]) {
                                        case 0:
                                            return V.GEOLOC_START;
                                        case 1:
                                            return V.MOTION_START;
                                        case 2:
                                            return V.MOTION_END;
                                        case 3:
                                            return V.BLE_CONNECTED;
                                        case 4:
                                            return V.BLE_DISCONNECTED;
                                        case 5:
                                            return V.TEMPERATURE_ALERT;
                                        case 6:
                                            return V.BLE_BOND_DELETED;
                                        case 7:
                                            return V.SOS_MODE_START;
                                        case 8:
                                            return V.SOS_MODE_END;
                                        default:
                                            throw new Error("The Event Type is unknown")
                                    }
                                }(t), r.eventType) {
                                    case V.MOTION_END:
                                        r.trackerOrientation = function(e) {
                                            if (e.length < 12) throw new Error("The payload is not valid to determine determine Tracker Orientation");
                                            return [$(e, 6), $(e, 8), $(e, 10)]
                                        }(t);
                                        break;
                                    case V.TEMPERATURE_ALERT:
                                        r.measuredTemperature = function(e) {
                                            if (e.length < 13) throw new Error("The payload is not valid to determine determine measured temperature");
                                            let r = new I.MeasuredTemperature;
                                            switch (e[6]) {
                                                case 0:
                                                    r.state = I.TemperatureState.NORMAL;
                                                    break;
                                                case 1:
                                                    r.state = I.TemperatureState.HIGH;
                                                    break;
                                                case 2:
                                                    r.state = I.TemperatureState.LOW;
                                                    break;
                                                case 3:
                                                    r.state = I.TemperatureState.FEATURE_NOT_ACTIVATED;
                                                default:
                                                    throw new Error("The Temperature state is unknown")
                                            }
                                            return r.max = Math.round(10 * ae(e[7], -44, 85, 8, 0)) / 10, r.min = Math.round(10 * ae(e[8], -44, 85, 8, 0)) / 10, r.highCounter = (e[9] << 8) + e[10], r.lowCounter = (e[11] << 8) + e[12], r
                                        }(t)
                                }
                                break;
                            case N.DATA_SCAN_COLLECTION:
                                r.dataScanCollection = function(e) {
                                    if (e.length < 8) throw new Error("The payload is not valid to determine determine scan collection");
                                    let r = new u.ScanCollection;
                                    switch (15 & e[4]) {
                                        case 0:
                                            r.scanType = u.ScanType.BLE_BEACONS;
                                            break;
                                        case 1:
                                            r.scanType = u.ScanType.WIFI_BSSID;
                                            break;
                                        default:
                                            throw new Error("ScanType is unknown")
                                    }
                                    let t = e[5] >> 7 & 1;
                                    switch (r.again = 1 == t, e[5] >> 6 & 1) {
                                        case 0:
                                            r.dataFormat = u.DataFormat.BEACON_ID;
                                            break;
                                        case 1:
                                            r.dataFormat = u.DataFormat.MAC_ADDRESS;
                                            break;
                                        default:
                                            throw new Error("DataFormat is unknown")
                                    }
                                    switch (r.fragmentIdentification = 31 & e[5], r.collectionIdentifier = e[6], r.hash = e[7], r.dataFormat) {
                                        case u.DataFormat.BEACON_ID:
                                            if ((e.length - 8) % 4 != 0) throw new Error("The payload is not valid to determine 4-byte scan result");
                                            let t = 0,
                                                a = [];
                                            for (; e.length >= 12 + 4 * t;) {
                                                let r = re(e.slice(10 + 4 * t, 12 + 4 * t)),
                                                    i = e[8 + 4 * t];
                                                i > 127 && (i -= 256), a.push(new o.BeaconIdInfo(r, i)), t++
                                            }
                                            r.beaconIdData = a;
                                            break;
                                        case u.DataFormat.MAC_ADDRESS:
                                            if ((e.length - 8) % 7 != 0) throw new Error("The payload is not valid to determine 7-byte scan result");
                                            let i = 0,
                                                s = [];
                                            for (; e.length >= 15 + 7 * i;) {
                                                let r = te(e[9 + 7 * i]) + ":" + te(e[10 + 7 * i]) + ":" + te(e[11 + 7 * i]) + ":" + te(e[12 + 7 * i]) + ":" + te(e[13 + 7 * i]) + ":" + te(e[14 + 7 * i]),
                                                    t = e[8 + 7 * i];
                                                t > 127 && (t -= 256), s.push(new n.BssidInfo(r, t)), i++
                                            }
                                            r.macAddressData = s
                                    }
                                    return r
                                }(t);
                                break;
                            case N.PROXIMITY_DETECTION:
                                if (t.length < 6) throw new AbeewayException("The payload is not valid to determine proximity payload Type");
                                let e, a;
                                switch (7 & t[5]) {
                                    case 0:
                                        e = R.NotificationType.WARNING_MESSAGE;
                                        break;
                                    case 1:
                                        e = R.NotificationType.ALERT_MESSAGE;
                                        break;
                                    case 2:
                                        e = R.NotificationType.RECORD_MESSAGE;
                                        break;
                                    case 3:
                                        r.proximityDailyReport = function(e) {
                                            if (e.length < 42) throw new Error("The payload is not valid to determine proximity daily report");
                                            let r = new p.ProximityDailyReport;
                                            return r.dailyAlertDay0 = parseInt(re(e.slice(6, 10)), 16), r.dailyWarningDay0 = parseInt(re(e.slice(10, 14)), 16), r.dailyExposureDay0 = parseInt(re(e.slice(14, 18)), 16), r.dailyAlertDay1 = parseInt(re(e.slice(18, 22)), 16), r.dailyWarningDay1 = parseInt(re(e.slice(22, 26)), 16), r.dailyExposureDay1 = parseInt(re(e.slice(26, 30)), 16), r.dailyAlertDay2 = parseInt(re(e.slice(30, 34)), 16), r.dailyWarningDay2 = parseInt(re(e.slice(34, 38)), 16), r.dailyExposureDay2 = parseInt(re(e.slice(38, 42)), 16), r
                                        }(t);
                                        break;
                                    case 4:
                                        a = !1;
                                        break;
                                    case 5:
                                        a = !0;
                                        break;
                                    case 6:
                                        r.proximityDailyResponse = function(e) {
                                            if (e.length < 19) throw new Error("The payload is not valid to determine proximity daily response");
                                            let r = new O.ProximityDailyResponse;
                                            return r.dayIdentifier = e[6], r.dailyAlert = parseInt(re(e.slice(7, 11)), 16), r.dailyWarning = parseInt(re(e.slice(11, 15)), 16), r.dailyExposure = parseInt(re(e.slice(15, 19)), 16), r
                                        }(t);
                                        break;
                                    default:
                                        throw new Error("The Proximity Notification Type is unknown")
                                }
                                null != e && (r.proximityNotification = function(e, r) {
                                    if (e.length < 38) throw new Error("The payload is not valid to determine proximity notification");
                                    let t = new(0, R.ProximityNotification);
                                    switch (t.notificationType = r, t.encrypted = 0 != (e[5] >> 7 & 1), e[5] >> 5 & 3) {
                                        case 0:
                                            t.recordAction = R.RecordAction.RECORD_START;
                                            break;
                                        case 1:
                                            t.recordAction = R.RecordAction.RECORD_UPDATE;
                                            break;
                                        case 2:
                                            t.recordAction = R.RecordAction.RECORD_STOP;
                                            break;
                                        default:
                                            throw new Error("The proximity notification record action is unknown")
                                    }
                                    return t.rollingProximityIdentifier = re(e.slice(6, 22)), t.closestDistanceRecording = ((e[22] << 8) + e[23]) / 10, t.distanceAverageRecorded = ((e[24] << 8) + e[25]) / 10, t.cumulatedExposure = (e[26] << 8) + e[27], t.metadata = re(e.slice(28, 32)), t.cumulatedContactDuration = 65535 * (e[5] >> 3 & 3) + (e[32] << 8) + e[33], t.currentDailyExposure = parseInt(re(e.slice(34, 38)), 16), t
                                }(t, e)), null != a && (r.proximityWhiteListing = function(e, r) {
                                    if (e.length < 23) throw new Error("The payload is not valid to determine proximity white listing");
                                    let t = new S.ProximityWhiteListing;
                                    switch (t.solicited = r, t.encrypted = 0 != (e[5] >> 7 & 1), t.rollingProximityIdentifier = re(e.slice(6, 22)), 7 & e[22]) {
                                        case 0:
                                            t.list = S.List.PEER_LIST;
                                            break;
                                        case 1:
                                            t.list = S.List.WARNING_LIST;
                                            break;
                                        case 2:
                                            t.list = S.List.ALERT_LIST;
                                            break;
                                        default:
                                            throw new Error("The payload is not valid to determine proximity white listing list")
                                    }
                                    switch (e[22] >> 3 & 1) {
                                        case 0:
                                            t.recordStatus = S.RecordStatus.NOT_WHITE_LISTED;
                                            break;
                                        case 1:
                                            t.recordStatus = S.RecordStatus.WHITE_LISTED
                                    }
                                    return t
                                }(t, a));
                                break;
                            default:
                                throw new Error("The message type is unknown")
                        }
                        return j(r)
                    },
                    decodeDownlink: function(e) {
                        var r = new i.AbeewayDownlinkPayload,
                            t = e.bytes;
                        switch (r.payload = re(t), r.ackToken = function(e) {
                            if (e.length < 2) throw new Error("The payload is not valid to determine Ack Token");
                            return 15 & e[1]
                        }(t), r.downMessageType = function(e) {
                            if (e.length < 2) throw new Error("The payload is not valid to determine Downlink Message Type");
                            switch (e[0]) {
                                case 1:
                                    return Y.POS_ON_DEMAND;
                                case 2:
                                    return Y.SET_MODE;
                                case 3:
                                    return Y.REQUEST_CONFIG;
                                case 4:
                                    return Y.START_SOS;
                                case 5:
                                    return Y.STOP_SOS;
                                case 6:
                                    return Y.REQUEST_TEMPERATURE_STATUS;
                                case 7:
                                    return Y.PROXIMITY;
                                case 11:
                                    return Y.SET_PARAM;
                                case 255:
                                    return Y.DEBUG_COMMAND;
                                default:
                                    throw new Error("The Downlink Message Type is Unknown")
                            }
                        }(t), r.downMessageType) {
                            case Y.POS_ON_DEMAND:
                                break;
                            case Y.SET_MODE:
                                r.modeValue = function(e) {
                                    if (e.length < 3) throw new Error("The payload is not valid to determine Operational Mode");
                                    switch (e[2]) {
                                        case 0:
                                            return h.STAND_BY;
                                        case 1:
                                            return h.MOTION_TRACKING;
                                        case 2:
                                            return h.PERMANENT_TRACKING;
                                        case 3:
                                            return h.MOTION_START_END_TRACKING;
                                        case 4:
                                            return h.ACTIVITY_TRACKING;
                                        case 5:
                                            return h.OFF;
                                        default:
                                            throw new Error("The Mode is unknown")
                                    }
                                }(t);
                                break;
                            case Y.REQUEST_CONFIG:
                                t.length > 2 && (r.listParameterID = function(e) {
                                    if (e.length < 3 || e.length > 22) throw new Error("The payload is not valid to determine Parameters");
                                    let r = [];
                                    for (var t = 2; t < e.length; t++) r.push(e[t]);
                                    return r
                                }(t), r.listParameterIDNames = function(e) {
                                    if (e.length < 3 || e.length > 22) throw new Error("The payload is not valid to determine Parameters");
                                    let r = [];
                                    for (var t = 2; t < e.length; t++) switch (e[t]) {
                                        case 0:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.TRACKING_UL_PERIOD);
                                            break;
                                        case 1:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.LORALIVE_PERIOD);
                                            break;
                                        case 2:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.ENERGY_STATUS_PERIOD);
                                            break;
                                        case 3:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PERIODIC_POSITION_INTERVAL);
                                            break;
                                        case 4:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.GPS_SCAN_MODE);
                                            break;
                                        case 5:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.GEOLOC_SENSOR_PROFILE);
                                            break;
                                        case 6:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.ONESHOT_GEOLOC_METHOD);
                                            break;
                                        case 7:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.EXT_ANTENNA_PROFILE);
                                            break;
                                        case 8:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.MOTION_START_END_NB_TX);
                                            break;
                                        case 9:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.GPS_TIMEOUT);
                                            break;
                                        case 10:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.XGPS_TIMEOUT);
                                            break;
                                        case 11:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.GPS_EHPE);
                                            break;
                                        case 12:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.GPS_CONVERGENCE);
                                            break;
                                        case 13:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.CONFIG_FLAGS);
                                            break;
                                        case 14:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.TRANSMIT_STRAT);
                                            break;
                                        case 15:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.BLE_BEACON_COUNT);
                                            break;
                                        case 16:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.BLE_BEACON_TIMEOUT);
                                            break;
                                        case 17:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.GPS_STANDBY_TIMEOUT);
                                            break;
                                        case 18:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.CONFIRMED_UL_BITMAP);
                                            break;
                                        case 19:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.CONFIRMED_UL_RETRY);
                                            break;
                                        case 20:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.MOTION_SENSITIVITY);
                                            break;
                                        case 21:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.SHOCK_DETECTION);
                                            break;
                                        case 22:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PERIODIC_ACTIVITY_PERIOD);
                                            break;
                                        case 23:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.MOTION_DURATION);
                                            break;
                                        case 24:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.GEOFENCING_SCAN_PERIOD);
                                            break;
                                        case 25:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.GEOFENCING_UL_PERIOD);
                                            break;
                                        case 26:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.BLE_RSSI_FILTER);
                                            break;
                                        case 27:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.TEMPERATURE_HIGH);
                                            break;
                                        case 28:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.TEMPERATURE_LOW);
                                            break;
                                        case 29:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.TEMPERATURE_ACTION);
                                            break;
                                        case 30:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.TRANSMIT_STRAT_CUSTOM);
                                            break;
                                        case 31:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.NETWORK_TIMEOUT_CHECK);
                                            break;
                                        case 32:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.NETWORK_TIMEOUT_RESET);
                                            break;
                                        case 33:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.COLLECTION_SCAN_TYPE);
                                            break;
                                        case 34:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.COLLECTION_NB_ENTRY);
                                            break;
                                        case 35:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.COLLECTION_BLE_FILTER_TYPE);
                                            break;
                                        case 36:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.COLLECTION_BLE_FILTER_MAIN_1);
                                            break;
                                        case 37:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.COLLECTION_BLE_FILTER_MAIN_2);
                                            break;
                                        case 38:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.COLLECTION_BLE_FILTER_SEC_VALUE);
                                            break;
                                        case 39:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.COLLECTION_BLE_FILTER_SEC_MASK);
                                            break;
                                        case 40:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.BATTERY_CAPACITY);
                                            break;
                                        case 41:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.REED_SWITCH_CONFIGURATION);
                                            break;
                                        case 42:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.GNSS_CONSTELLATION);
                                            break;
                                        case 43:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_MINIMUM_SCAN_POWER);
                                            break;
                                        case 44:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_DISTANCE_COEFFICIENT);
                                            break;
                                        case 45:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_SCAN_FREQUENCY);
                                            break;
                                        case 46:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_BACKTRACE_MAXIMUM_AGE);
                                            break;
                                        case 47:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_DISTANCE_SLIDING_WINDOW);
                                            break;
                                        case 48:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_EXPOSURE_50);
                                            break;
                                        case 49:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_EXPOSURE_100);
                                            break;
                                        case 50:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_EXPOSURE_150);
                                            break;
                                        case 51:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_EXPOSURE_200);
                                            break;
                                        case 52:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_EXPOSURE_250);
                                            break;
                                        case 53:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_EXPOSURE_300);
                                            break;
                                        case 54:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_EXPOSURE_400);
                                            break;
                                        case 55:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_IMMEDIATE_ALARM_DISTANCE);
                                            break;
                                        case 56:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_ALARM_EXPOSURE);
                                            break;
                                        case 57:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_IMMEDIATE_WARNING_DISTANCE);
                                            break;
                                        case 58:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_WARNING_EXPOSURE);
                                            break;
                                        case 59:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_IMMEDIATE_RECORD_DISTANCE);
                                            break;
                                        case 60:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_RECORD_EXPOSURE);
                                            break;
                                        case 61:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_ALARM_BUZZER_DURATION);
                                            break;
                                        case 62:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_WARNING_BUZZER_DURATION);
                                            break;
                                        case 63:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_CONTACT_POLICY);
                                            break;
                                        case 64:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_SCAN_DURATION);
                                            break;
                                        case 65:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_SCAN_WINDOW);
                                            break;
                                        case 66:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_SCAN_INTERVAL);
                                            break;
                                        case 67:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_ALARM_REMANENCE);
                                            break;
                                        case 68:
                                        case 69:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_WARNING_REMANENCE);
                                            break;
                                        case 70:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_BEACON_TX_POWER);
                                            break;
                                        case 71:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_REMINDER_PERIOD);
                                            break;
                                        case 72:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_REMINDER_DISTANCE);
                                            break;
                                        case 73:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_WARNING_DISABLE_DISTANCE);
                                            break;
                                        case 74:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_ALARM_DISABLE_DISTANCE);
                                            break;
                                        case 75:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_MAX_SPEED_FILTER);
                                            break;
                                        case 76:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.PROXIMITY_MAX_UPDATE);
                                            break;
                                        case 77:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.BLE_FILTER_TYPE);
                                            break;
                                        case 78:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.BLE_FILTER_MAIN_1);
                                            break;
                                        case 79:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.BLE_FILTER_MAIN_2);
                                            break;
                                        case 80:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.BLE_FILTER_SEC_FILTER_VALUE);
                                            break;
                                        case 81:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.BLE_FILTER_SEC_FILTER_MASK);
                                            break;
                                        case 82:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.BLE_FILTER_REPORT_TYPE);
                                            break;
                                        case 83:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.BUZZER_VOLUME);
                                            break;
                                        case 247:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.POWER_CONSUMPTION);
                                            break;
                                        case 248:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.BLE_BOND);
                                            break;
                                        case 249:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.GET_MODE);
                                            break;
                                        case 250:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.X_ACCELEROMETER_VALUE);
                                            break;
                                        case 251:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.Y_ACCELEROMETER_VALUE);
                                            break;
                                        case 252:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.Z_ACCELEROMETER_VALUE);
                                            break;
                                        case 253:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.BLE_VERSION);
                                            break;
                                        case 254:
                                            r.push(te(e[t]).toUpperCase() + ":" + v.FW_VERSION);
                                            break;
                                        default:
                                            throw new Error("Parameter name is unknown")
                                    }
                                    return r
                                }(t));
                                break;
                            case Y.START_SOS:
                            case Y.STOP_SOS:
                            case Y.REQUEST_TEMPERATURE_STATUS:
                                break;
                            case Y.PROXIMITY:
                                r.proximityMessage = function(e) {
                                    if (e.length < 3) throw new Error("The payload is not valid to determine proximity message");
                                    let r = new m.ProximityMessage;
                                    switch (e[2]) {
                                        case 0:
                                            r.type = m.Type.GET_RECORD_STATUS;
                                            break;
                                        case 1:
                                            r.type = m.Type.SET_WHITE_LIST_STATUS;
                                            break;
                                        case 2:
                                            r.type = m.Type.GET_DAILY_INFORMATION;
                                            break;
                                        case 3:
                                            r.type = m.Type.CLEAR_DAILY_INFORMATION;
                                            break;
                                        default:
                                            throw new Error("The proximity message type is Unknown")
                                    }
                                    if (r.type == m.Type.GET_RECORD_STATUS || r.type == m.Type.SET_WHITE_LIST_STATUS) {
                                        if (e.length < 19) throw new Error("The payload is not valid to determine rolling proximity identifier");
                                        r.rollingProximityIdentifier = re(e.slice(3, 19))
                                    }
                                    if (r.type == m.Type.SET_WHITE_LIST_STATUS) {
                                        if (e.length < 20) throw new Error("The payload is not valid to determine record status");
                                        switch (e[19]) {
                                            case 0:
                                                r.recordStatus = m.SetRecordStatus.RESET_WHITE_LISTING;
                                                break;
                                            case 1:
                                                r.recordStatus = m.SetRecordStatus.SET_WHITE_LISTING;
                                                break;
                                            default:
                                                throw new Error("The record status is unknown")
                                        }
                                    }
                                    if (r.type == m.Type.GET_DAILY_INFORMATION || r.type == m.Type.CLEAR_DAILY_INFORMATION) {
                                        if (e.length < 4) throw new Error("The payload is not valid to determine day identifier");
                                        r.dayIdentifier = e[3]
                                    }
                                    return r
                                }(t);
                                break;
                            case Y.SET_PARAM:
                                r.setParameters = function(e) {
                                    if (e.length < 7 || e.length > 27) throw new Error("The payload is not valid to determine Parameter IDs");
                                    let r = new c.Parameters,
                                        t = (e.length - 2) / 5;
                                    for (var a = 0; a < t; a++) {
                                        let t = e[2 + 5 * a],
                                            i = re(e.slice(3 + 5 * a, 7 + 5 * a));
                                        ee(r, t, parseInt(i, 16), !1)
                                    }
                                    return r
                                }(t);
                                break;
                            case Y.DEBUG_COMMAND:
                                switch (r.debugCommandType = function(e) {
                                    if (e.length < 3) throw new Error("The payload is not valid to determine Debug command");
                                    switch (e[2]) {
                                        case 1:
                                            return X.RESET;
                                        case 2:
                                            return X.RESET_BLE_PAIRING;
                                        case 3:
                                            return X.MAKE_TRACKER_RING;
                                        case 4:
                                            return X.READ_CURRENT_ERROR_AND_SEND_IT;
                                        case 5:
                                            return X.TRIGGER_HEARTBEAT_MESSAGE;
                                        case 6:
                                            return X.READ_TX_POWER_INDEX;
                                        case 7:
                                            return X.WRITE_TX_POWER_INDEX;
                                        case 8:
                                            return X.TRIGGER_BLE_BOOTLOADER;
                                        case 241:
                                            return X.TRIGGER_AN_ERROR;
                                        default:
                                            throw new Error("The Debug Command is unknown")
                                    }
                                }(t), r.debugCommandType) {
                                    case X.RESET:
                                        r.resetAction = function(e) {
                                            if (4 == e.length) switch (e[3]) {
                                                case 0:
                                                    return H.RESET_DEVICE;
                                                case 1:
                                                    return H.DELETE_CONFIG_RESET;
                                                case 2:
                                                    return H.DELETE_CONFIG_BLE_BOND_RESET;
                                                default:
                                                    throw new Error("The ResetAction is unknown")
                                            }
                                        }(t);
                                        break;
                                    case X.WRITE_TX_POWER_INDEX:
                                        r.txPowerIndex = function(e) {
                                            if (e.length < 4) throw new Error("The payload is not valid to determine Tx Index Power");
                                            return e[3]
                                        }(t);
                                        break;
                                    case X.MAKE_TRACKER_RING:
                                        r.melodyId = function(e) {
                                            if (e.length > 3) switch (e[3]) {
                                                case 0:
                                                    return K.SWITCH_ON;
                                                case 1:
                                                    return K.SWITCH_OFF;
                                                case 2:
                                                    return K.FLAT_BATTERY;
                                                case 3:
                                                    return K.ALERT;
                                                case 4:
                                                    return K.SOS_MODE;
                                                case 5:
                                                    return K.SOS_MODE_CLEAR;
                                                case 6:
                                                    return K.RESET;
                                                case 7:
                                                    return K.BLE_ADVERTISING;
                                                case 8:
                                                    return K.BLE_BONDED;
                                                case 9:
                                                    return K.BLE_DEBONDED;
                                                case 10:
                                                    return K.BLE_LINK_LOSS;
                                                case 11:
                                                    return K.PROX_WARNING;
                                                case 12:
                                                    return K.PROX_WARNING_REMINDER;
                                                case 13:
                                                    return K.PROX_ALARM;
                                                case 14:
                                                    return K.PROX_ALARM_REMINDER;
                                                default:
                                                    throw new Error("The melody ID is unknown")
                                            }
                                        }(t), r.buzzerDuration = function(e) {
                                            if (e.length > 4) return e[4]
                                        }(t)
                                }
                                break;
                            default:
                                throw new Error("The Downlink Message Type is unknown")
                        }
                        return r
                    },
                    encodeDownlink: function(e) {
                        var r = {},
                            t = [];
                        if (null == e) throw new Error("No data to encode");
                        if (null == e.downMessageType) throw new Error("No downlink message type");
                        switch (e.downMessageType) {
                            case Y.POS_ON_DEMAND:
                                t = function(e) {
                                    let r = [];
                                    return r[0] = 1, r[1] = 15 & e.ackToken, r
                                }(e);
                                break;
                            case Y.SET_MODE:
                                t = function(e) {
                                    let r = [];
                                    if (r[0] = 2, r[1] = 15 & e.ackToken, null == e.modeValue) throw new Error("No mode value");
                                    switch (e.modeValue) {
                                        case h.STAND_BY:
                                            r[2] = 0;
                                            break;
                                        case h.MOTION_TRACKING:
                                            r[2] = 1;
                                            break;
                                        case h.PERMANENT_TRACKING:
                                            r[2] = 2;
                                            break;
                                        case h.MOTION_START_END_TRACKING:
                                            r[2] = 3;
                                            break;
                                        case h.ACTIVITY_TRACKING:
                                            r[2] = 4;
                                            break;
                                        case h.OFF:
                                            r[2] = 5
                                    }
                                    return r
                                }(e);
                                break;
                            case Y.REQUEST_CONFIG:
                                t = function(e) {
                                    let r = [];
                                    r[0] = 3, r[1] = 15 & e.ackToken;
                                    let t = 0;
                                    null != e.listParameterID && (t = e.listParameterID.length);
                                    for (var a = 0; a < t; a++) r[2 + a] = e.listParameterID[a];
                                    return r
                                }(e);
                                break;
                            case Y.START_SOS:
                                t = function(e) {
                                    let r = [];
                                    return r[0] = 4, r[1] = 15 & e.ackToken, r
                                }(e);
                                break;
                            case Y.STOP_SOS:
                                t = function(e) {
                                    let r = [];
                                    return r[0] = 5, r[1] = 15 & e.ackToken, r
                                }(e);
                                break;
                            case Y.REQUEST_TEMPERATURE_STATUS:
                                t = function(e) {
                                    let r = [];
                                    return r[0] = 6, r[1] = 15 & e.ackToken, r
                                }(e);
                                break;
                            case Y.PROXIMITY:
                                t = function(e) {
                                    let r = [];
                                    if (r[0] = 7, r[1] = 15 & e.ackToken, null == e.proximityMessage) throw new Error("No Proximity Message");
                                    switch (e.proximityMessage.type) {
                                        case m.Type.GET_RECORD_STATUS:
                                            if (r[2] = 0, null == e.proximityMessage.rollingProximityIdentifier) throw new Error("Missing rolling proximity identifier");
                                            r = r.concat(z(e.proximityMessage.rollingProximityIdentifier));
                                            break;
                                        case m.Type.SET_WHITE_LIST_STATUS:
                                            if (r[2] = 1, null == e.proximityMessage.rollingProximityIdentifier) throw new Error("Missing rolling proximity identifier");
                                            if (r = r.concat(z(e.proximityMessage.rollingProximityIdentifier)), null == e.proximityMessage.recordStatus) throw new Error("Missing record status");
                                            switch (e.proximityMessage.recordStatus) {
                                                case m.SetRecordStatus.RESET_WHITE_LISTING:
                                                    r[19] = 0;
                                                    break;
                                                case m.SetRecordStatus.SET_WHITE_LISTING:
                                                    r[19] = 1
                                            }
                                            break;
                                        case m.Type.GET_DAILY_INFORMATION:
                                            if (r[2] = 2, null == e.proximityMessage.dayIdentifier) throw new Error("Missing day identifier");
                                            r[3] = 255 & e.proximityMessage.dayIdentifier;
                                            break;
                                        case m.Type.CLEAR_DAILY_INFORMATION:
                                            if (null == e.proximityMessage.dayIdentifier) throw new Error("Missing day identifier");
                                            r[3] = 255 & e.proximityMessage.dayIdentifier, r[2] = 3;
                                            break;
                                        default:
                                            r[2] = 3
                                    }
                                    return r
                                }(e);
                                break;
                            case Y.SET_PARAM:
                                t = function(e) {
                                    let r = Object.assign(new c.Parameters, e.setParameters);
                                    if (c.countParameterNumber(r) > 5) throw new Error("Too many parameters for one downlink message");
                                    let t = [];
                                    t[0] = 11, t[1] = 15 & e.ackToken;
                                    let a = 0;
                                    if (null != r.trackingUlPeriod) {
                                        t[2 + 5 * a] = 0;
                                        let e = r.trackingUlPeriod;
                                        c.checkParamValueRange("trackingUlPeriod", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.loralivePeriod) {
                                        t[2 + 5 * a] = 1;
                                        let e = r.loralivePeriod;
                                        c.checkParamValueRange("loralivePeriod", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.energyStatusPeriod) {
                                        t[2 + 5 * a] = 2;
                                        let e = r.energyStatusPeriod;
                                        c.checkParamValueRange("energyStatusPeriod", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.periodicPositionInterval) {
                                        t[2 + 5 * a] = 3;
                                        let e = r.periodicPositionInterval;
                                        c.checkParamValueRange("periodicPositionInterval", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.gpsScanMode) {
                                        t[2 + 5 * a] = 4;
                                        let e = r.gpsScanMode;
                                        c.checkParamValueRange("gpsScanMode", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.geolocSensorProfile) {
                                        switch (t[2 + 5 * a] = 5, t[3 + 5 * a] = 0, t[4 + 5 * a] = 0, t[5 + 5 * a] = 0, r.geolocSensorProfile) {
                                            case y.WIFI_ONLY:
                                                t[6 + 5 * a] = 0;
                                                break;
                                            case y.GPS_ONLY:
                                                t[6 + 5 * a] = 1;
                                                break;
                                            case y.XGPS_ONLY:
                                                t[6 + 5 * a] = 2;
                                                break;
                                            case y.WIFI_FALLBACK_XGPS:
                                                t[6 + 5 * a] = 3;
                                                break;
                                            case y.SELF_GOVERNING_HISTORY:
                                                t[6 + 5 * a] = 4;
                                                break;
                                            case y.SELF_GOVERNING_TIMEOUT:
                                                t[6 + 5 * a] = 5;
                                                break;
                                            case y.WGPS_ONLY:
                                                t[6 + 5 * a] = 6;
                                                break;
                                            case y.WXGPS_ONLY:
                                                t[6 + 5 * a] = 7;
                                                break;
                                            case y.WGPS_WXGPS_FAILURE:
                                                t[6 + 5 * a] = 8;
                                                break;
                                            case y.WGPS_WXGPS_TIMEOUT:
                                                t[6 + 5 * a] = 9;
                                                break;
                                            case y.BLE:
                                                t[6 + 5 * a] = 10;
                                                break;
                                            case y.BGPS_ONLY:
                                                t[6 + 5 * a] = 11;
                                                break;
                                            default:
                                                throw new Error("Invalid geolocation type")
                                        }
                                        a++
                                    }
                                    if (null != r.oneshotGeolocMethod) {
                                        switch (t[2 + 5 * a] = 6, t[3 + 5 * a] = 0, t[4 + 5 * a] = 0, t[5 + 5 * a] = 0, r.oneshotGeolocMethod) {
                                            case b.WIFI:
                                                t[6 + 5 * a] = 0;
                                                break;
                                            case b.GPS:
                                                t[6 + 5 * a] = 1;
                                                break;
                                            case b.XGPS:
                                                t[6 + 5 * a] = 2;
                                                break;
                                            case b.WGPS:
                                                t[6 + 5 * a] = 3;
                                                break;
                                            case b.WXGPS:
                                                t[6 + 5 * a] = 4;
                                                break;
                                            case b.BLE:
                                                t[6 + 5 * a] = 5;
                                                break;
                                            case b.BGPS:
                                                t[6 + 5 * a] = 6;
                                                break;
                                            default:
                                                throw new Error("Invalid geolocation type")
                                        }
                                        a++
                                    }
                                    if (null != r.extAntennaProfile) {
                                        switch (t[2 + 5 * a] = 7, t[3 + 5 * a] = 0, t[4 + 5 * a] = 0, t[5 + 5 * a] = 0, r.extAntennaProfile) {
                                            case g.PRINTED:
                                                t[6 + 5 * a] = 0;
                                                break;
                                            case g.CERAMIC:
                                                t[6 + 5 * a] = 1;
                                                break;
                                            case g.DYNAMIC:
                                                t[6 + 5 * a] = 2;
                                                break;
                                            default:
                                                throw new Error("Invalid antenna profile")
                                        }
                                        a++
                                    }
                                    if (null != r.motionStartEndNbTx) {
                                        t[2 + 5 * a] = 8;
                                        let e = r.motionStartEndNbTx;
                                        c.checkParamValueRange("motionStartEndNbTx", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.gpsTimeout) {
                                        t[2 + 5 * a] = 9;
                                        let e = r.gpsTimeout;
                                        c.checkParamValueRange("gpsTimeout", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.xgpsTimeout) {
                                        t[2 + 5 * a] = 10;
                                        let e = r.xgpsTimeout;
                                        c.checkParamValueRange("xgpsTimeout", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.gpsEHPE) {
                                        t[2 + 5 * a] = 11;
                                        let e = r.gpsEHPE;
                                        c.checkParamValueRange("gpsEHPE", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.gpsConvergence) {
                                        t[2 + 5 * a] = 12;
                                        let e = r.gpsConvergence;
                                        c.checkParamValueRange("gpsConvergence", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.configFlags) {
                                        t[2 + 5 * a] = 13, t[3 + 5 * a] = 0, t[4 + 5 * a] = 0, t[5 + 5 * a] = 0, t[6 + 5 * a] = 0;
                                        let e = Object.assign(new s.ConfigFlags, r.configFlags);
                                        e.framePendingMechanism && (t[6 + 5 * a] += 1), e.buttonPressToTurnOFF && (t[6 + 5 * a] += 2), e.doubleClickIsSosModeOrAlert && (t[6 + 5 * a] += 4), e.downlinkSetParameterConfirmation && (t[6 + 5 * a] += 8), e.wifiPayloadWithNoCypher && (t[6 + 5 * a] += 16), e.bleAdvertisingAtStart && (t[6 + 5 * a] += 32), e.selectWifiScanOrGeolocStartMessage && (t[6 + 5 * a] += 64), e.ledBlinkWithGpsFix && (t[6 + 5 * a] += 128), e.startMotionEventUplink && (t[5 + 5 * a] += 1), e.endMotionEventUplink && (t[5 + 5 * a] += 2), e.otaJoinWhenLeavingModeOff && (t[5 + 5 * a] += 4), e.rejectAsymmetricPairing && (t[5 + 5 * a] += 8), e.enableLongWifiPayload && (t[5 + 5 * a] += 16), e.collectionLongReport && (t[5 + 5 * a] += 32), e.autoStart && (t[5 + 5 * a] += 64), e.forbidModeOff && (t[5 + 5 * a] += 128), e.sosModeSound && (t[4 + 5 * a] += 1), e.automaticDatarateSelection && (t[4 + 5 * a] += 2), a++
                                    }
                                    if (null != r.transmitStrat) {
                                        switch (t[2 + 5 * a] = 14, t[3 + 5 * a] = 0, t[4 + 5 * a] = 0, t[5 + 5 * a] = 0, t[6 + 5 * a] = 0, r.transmitStrat) {
                                            case L.SINGLE_FIXED:
                                                t[6 + 5 * a] += 0;
                                                break;
                                            case L.SINGLE_RANDOM:
                                                t[6 + 5 * a] += 1;
                                                break;
                                            case L.DOUBLE_FIXED:
                                                t[6 + 5 * a] += 2;
                                                break;
                                            case L.DOUBLE_RANDOM:
                                                t[6 + 5 * a] += 3;
                                                break;
                                            case L.NETWORK_ADR:
                                                t[6 + 5 * a] += 4;
                                                break;
                                            case L.CUSTOM_STRATEGY:
                                                t[6 + 5 * a] += 5;
                                                break;
                                            default:
                                                throw new Error("Unknown Transmit Strat")
                                        }
                                        a++
                                    }
                                    if (null != r.bleBeaconCount) {
                                        t[2 + 5 * a] = 15;
                                        let e = r.bleBeaconCount;
                                        c.checkParamValueRange("bleBeaconCount", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.bleBeaconTimeout) {
                                        t[2 + 5 * a] = 16;
                                        let e = r.bleBeaconTimeout;
                                        c.checkParamValueRange("bleBeaconTimeout", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.gpsStandbyTimeout) {
                                        t[2 + 5 * a] = 17;
                                        let e = r.gpsStandbyTimeout;
                                        c.checkParamValueRange("gpsStandbyTimeout", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.confirmedUplink) {
                                        let e = Object.assign(new E.ConfirmedUplink, r.confirmedUplink);
                                        if (null != e.confirmedUlBitmap) {
                                            t[2 + 5 * a] = 18;
                                            let r = e.confirmedUlBitmap;
                                            t[3 + 5 * a] = r >> 24 & 255, t[4 + 5 * a] = r >> 16 & 255, t[5 + 5 * a] = r >> 8 & 255, t[6 + 5 * a] = 255 & r, a++
                                        }
                                        if (null != e.confirmedUlRetry) {
                                            t[2 + 5 * a] = 19;
                                            let r = e.confirmedUlRetry;
                                            c.checkParamValueRange("confirmedUlRetry", r) && (t[3 + 5 * a] = r >> 24 & 255, t[4 + 5 * a] = r >> 16 & 255, t[5 + 5 * a] = r >> 8 & 255, t[6 + 5 * a] = 255 & r), a++
                                        }
                                    }
                                    if (null != r.motionSensitivity) {
                                        t[2 + 5 * a] = 20;
                                        let e = r.motionSensitivity;
                                        c.checkParamValueRange("motionSensitivity", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.shockDetection) {
                                        t[2 + 5 * a] = 21;
                                        let e = r.shockDetection;
                                        c.checkParamValueRange("shockDetection", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.periodicActivityPeriod) {
                                        t[2 + 5 * a] = 22;
                                        let e = r.periodicActivityPeriod;
                                        c.checkParamValueRange("periodicActivityPeriod", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.motionDuration) {
                                        t[2 + 5 * a] = 23;
                                        let e = r.motionDuration;
                                        c.checkParamValueRange("motionDuration", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.geofencingScanPeriod) {
                                        t[2 + 5 * a] = 24;
                                        let e = r.geofencingScanPeriod;
                                        c.checkParamValueRange("geofencingScanPeriod", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.geofencingUlPeriod) {
                                        t[2 + 5 * a] = 25;
                                        let e = r.geofencingUlPeriod;
                                        c.checkParamValueRange("geofencingUlPeriod", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.bleRssiFilter) {
                                        t[2 + 5 * a] = 26;
                                        let e = r.bleRssiFilter;
                                        c.checkParamValueRange("bleRssiFilter", e) && (e < 0 && (e += 4294967296), t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.temperatureHigh) {
                                        t[2 + 5 * a] = 27;
                                        let e = r.temperatureHigh;
                                        c.checkParamValueRange("temperatureHigh", e) && (e < 0 && (e += 4294967296), t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.temperatureLow) {
                                        t[2 + 5 * a] = 28;
                                        let e = r.temperatureLow;
                                        c.checkParamValueRange("temperatureLow", e) && (e < 0 && (e += 4294967296), t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.temperatureAction) {
                                        switch (t[2 + 5 * a] = 29, t[3 + 5 * a] = 0, t[4 + 5 * a] = 0, t[5 + 5 * a] = 0, r.temperatureAction) {
                                            case M.NO_ACTION:
                                                t[6 + 5 * a] = 0;
                                                break;
                                            case M.TEMPERATURE_HIGH:
                                                t[6 + 5 * a] = 1;
                                                break;
                                            case M.TEMPERATURE_LOW:
                                                t[6 + 5 * a] = 2;
                                                break;
                                            case M.TEMPERATURE_HIGH_TEMPERATURE_LOW:
                                                t[6 + 5 * a] = 3;
                                                break;
                                            default:
                                                throw new Error("Invalid Temperature Action Action Value")
                                        }
                                        a++
                                    }
                                    if (null != r.transmitStratCustom) {
                                        t[2 + 5 * a] = 30, t[3 + 5 * a] = 0, t[4 + 5 * a] = 0, t[5 + 5 * a] = 0, t[6 + 5 * a] = 0;
                                        let e = Object.assign(new T.CustomTransmitStrat, r.transmitStratCustom),
                                            i = Object.assign(new l.TransmissionDatarate, e.secondTransmissionDatarate),
                                            n = Object.assign(new l.TransmissionDatarate, e.firstTransmissionDatarate);
                                        switch (i.dr0 && (t[4 + 5 * a] += 1), i.dr1 && (t[4 + 5 * a] += 2), i.dr2 && (t[4 + 5 * a] += 4), i.dr3 && (t[4 + 5 * a] += 8), i.dr4 && (t[4 + 5 * a] += 16), i.dr5 && (t[4 + 5 * a] += 32), i.dr6 && (t[4 + 5 * a] += 64), i.dr7 && (t[4 + 5 * a] += 128), n.dr0 && (t[5 + 5 * a] += 1), n.dr1 && (t[5 + 5 * a] += 2), n.dr2 && (t[5 + 5 * a] += 4), n.dr3 && (t[5 + 5 * a] += 8), n.dr4 && (t[5 + 5 * a] += 16), n.dr5 && (t[5 + 5 * a] += 32), n.dr6 && (t[5 + 5 * a] += 64), n.dr7 && (t[5 + 5 * a] += 128), e.secondTransmissionDatarateDistribution) {
                                            case T.TransmissionDatarateDistribution.RANDOM:
                                                break;
                                            case T.TransmissionDatarateDistribution.BELL_CURVE:
                                                t[6 + 5 * a] += 32;
                                                break;
                                            case T.TransmissionDatarateDistribution.RING:
                                                t[6 + 5 * a] += 64
                                        }
                                        switch (e.firstTransmissionDatarateDistribution) {
                                            case T.TransmissionDatarateDistribution.RANDOM:
                                                break;
                                            case T.TransmissionDatarateDistribution.BELL_CURVE:
                                                t[6 + 5 * a] += 4;
                                                break;
                                            case T.TransmissionDatarateDistribution.RING:
                                                t[6 + 5 * a] += 8
                                        }
                                        switch (e.transmissionType) {
                                            case T.TransmissionType.SINGLE:
                                                break;
                                            case T.TransmissionType.DOUBLE:
                                                t[6 + 5 * a] += 2
                                        }
                                        e.adrenabled || (t[6 + 5 * a] += 1), a++
                                    }
                                    if (null != r.bleBond) {
                                        if (t[2 + 5 * a] = 248, r.bleBond != G.NOT_BONDED) throw new Error("Invalid BLE Bond Value");
                                        t[3 + 5 * a] = 0, t[4 + 5 * a] = 0, t[5 + 5 * a] = 0, t[6 + 5 * a] = 0, a++
                                    }
                                    if (null != r.mode) {
                                        t[2 + 5 * a] = 249;
                                        let e = 0;
                                        switch (r.mode) {
                                            case h.STAND_BY:
                                                e = 0;
                                                break;
                                            case h.MOTION_TRACKING:
                                                e = 1;
                                                break;
                                            case h.PERMANENT_TRACKING:
                                                e = 2;
                                                break;
                                            case h.MOTION_START_END_TRACKING:
                                                e = 3;
                                                break;
                                            case h.ACTIVITY_TRACKING:
                                                e = 4;
                                                break;
                                            case h.OFF:
                                                e = 5
                                        }
                                        t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e, a++
                                    }
                                    if (null != r.networkTimeoutCheck) {
                                        t[2 + 5 * a] = 31;
                                        let e = r.networkTimeoutCheck;
                                        c.checkParamValueRange("networkTimeoutCheck", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.networkTimeoutReset) {
                                        t[2 + 5 * a] = 32;
                                        let e = r.networkTimeoutReset;
                                        c.checkParamValueRange("networkTimeoutReset", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.collectionScanType) {
                                        t[2 + 5 * a] = 33;
                                        let e = 0;
                                        switch (r.collectionScanType) {
                                            case f.NO_COLLECTION_SCAN:
                                                e = 0;
                                                break;
                                            case f.BLE_BEACONS:
                                                e = 1;
                                                break;
                                            case f.WIFI_BSSID:
                                                e = 2
                                        }
                                        t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e, a++
                                    }
                                    if (null != r.collectionNbEntry) {
                                        t[2 + 5 * a] = 34;
                                        let e = r.collectionNbEntry;
                                        c.checkParamValueRange("collectionNbEntry", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.collectionBleFilterType) {
                                        t[2 + 5 * a] = 35;
                                        let e = 0;
                                        switch (r.collectionBleFilterType) {
                                            case x.NO_FILTER:
                                                e = 0;
                                                break;
                                            case x.EDDYSTONE_UID:
                                                e = 1;
                                                break;
                                            case x.EDDYSTONE_URL:
                                                e = 2;
                                                break;
                                            case x.ALL_EDDYSTONE:
                                                e = 3;
                                                break;
                                            case x.IBEACON_ONLY:
                                                e = 4;
                                                break;
                                            case x.ALTBEACON_ONLY:
                                                e = 5
                                        }
                                        t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e, a++
                                    }
                                    if (null != r.collectionBleFilterMain1) {
                                        t[2 + 5 * a] = 36;
                                        let e = r.collectionBleFilterMain1;
                                        c.checkParamValueRange("collectionBleFilterMain1", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.collectionBleFilterMain2) {
                                        t[2 + 5 * a] = 37;
                                        let e = r.collectionBleFilterMain2;
                                        c.checkParamValueRange("collectionBleFilterMain2", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.collectionBleFilterSecValue) {
                                        t[2 + 5 * a] = 38;
                                        let e = r.collectionBleFilterSecValue;
                                        c.checkParamValueRange("collectionBleFilterSecValue", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.collectionBleFilterSecMask) {
                                        t[2 + 5 * a] = 39;
                                        let e = r.collectionBleFilterSecMask;
                                        c.checkParamValueRange("collectionBleFilterSecMask", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.batteryCapacity) {
                                        t[2 + 5 * a] = 40;
                                        let e = r.batteryCapacity;
                                        c.checkParamValueRange("batteryCapacity", e) && (e < 0 && (e += 4294967296), t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.reedSwitchConfiguration) {
                                        t[2 + 5 * a] = 41;
                                        let e = 0;
                                        switch (r.reedSwitchConfiguration) {
                                            case U.DISABLE_REED_SWITCH:
                                                e = 0;
                                                break;
                                            case U.NORMAL_REED_SWITCH:
                                                e = 1;
                                                break;
                                            case U.BUTTON_REED_SWITCH:
                                                e = 2;
                                                break;
                                            case U.OTHER_REED_SWITCH:
                                                e = 3
                                        }
                                        t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e, a++
                                    }
                                    if (null != r.gnssConstellation) {
                                        t[2 + 5 * a] = 42;
                                        let e = 0;
                                        switch (r.gnssConstellation) {
                                            case w.GPS_ONLY:
                                                e = 0;
                                                break;
                                            case w.GLONASS_ONLY:
                                                e = 1;
                                                break;
                                            case w.GPS_GLONASS:
                                                e = 2;
                                                break;
                                            case w.GPS_GALILEO:
                                                e = 3;
                                                break;
                                            case w.GPS_GLONASS_GALILEO:
                                                e = 4;
                                                break;
                                            case w.BEIDOU_ONLY:
                                                e = 5;
                                                break;
                                            case w.GPS_BEIDOU:
                                                e = 6
                                        }
                                        t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e, a++
                                    }
                                    if (null != r.proximityMinimumScanPower) {
                                        t[2 + 5 * a] = 43;
                                        let e = r.proximityMinimumScanPower;
                                        c.checkParamValueRange("proximityMinimumScanPower", e) && (e < 0 && (e += 4294967296), t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityDistanceCoefficient) {
                                        t[2 + 5 * a] = 44;
                                        let e = r.proximityDistanceCoefficient;
                                        c.checkParamValueRange("proximityDistanceCoefficient", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityScanFrequency) {
                                        t[2 + 5 * a] = 45;
                                        let e = r.proximityScanFrequency;
                                        c.checkParamValueRange("proximityScanFrequency", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityBacktraceMaximumAge) {
                                        t[2 + 5 * a] = 46;
                                        let e = r.proximityBacktraceMaximumAge;
                                        c.checkParamValueRange("proximityBacktraceMaximumAge", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityDistanceSlidingWindow) {
                                        t[2 + 5 * a] = 47;
                                        let e = r.proximityDistanceSlidingWindow;
                                        c.checkParamValueRange("proximityDistanceSlidingWindow", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityExposure50) {
                                        t[2 + 5 * a] = 48;
                                        let e = r.proximityExposure50;
                                        c.checkParamValueRange("proximityExposure50", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityExposure100) {
                                        t[2 + 5 * a] = 49;
                                        let e = r.proximityExposure100;
                                        c.checkParamValueRange("proximityExposure100", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityExposure150) {
                                        t[2 + 5 * a] = 50;
                                        let e = r.proximityExposure150;
                                        c.checkParamValueRange("proximityExposure150", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityExposure200) {
                                        t[2 + 5 * a] = 51;
                                        let e = r.proximityExposure200;
                                        c.checkParamValueRange("proximityExposure200", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityExposure250) {
                                        t[2 + 5 * a] = 52;
                                        let e = r.proximityExposure250;
                                        c.checkParamValueRange("proximityExposure250", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityExposure300) {
                                        t[2 + 5 * a] = 53;
                                        let e = r.proximityExposure300;
                                        c.checkParamValueRange("proximityExposure300", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityExposure400) {
                                        t[2 + 5 * a] = 54;
                                        let e = r.proximityExposure400;
                                        c.checkParamValueRange("proximityExposure400", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityImmediateAlarmDistance) {
                                        t[2 + 5 * a] = 55;
                                        let e = 10 * r.proximityImmediateAlarmDistance;
                                        c.checkParamValueRange("proximityImmediateAlarmDistance", e / 10) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityAlarmExposure) {
                                        t[2 + 5 * a] = 56;
                                        let e = r.proximityAlarmExposure;
                                        c.checkParamValueRange("proximityAlarmExposure", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityImmediateWarningDistance) {
                                        t[2 + 5 * a] = 57;
                                        let e = 10 * r.proximityImmediateWarningDistance;
                                        c.checkParamValueRange("proximityImmediateWarningDistance", e / 10) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityWarningExposure) {
                                        t[2 + 5 * a] = 58;
                                        let e = r.proximityWarningExposure;
                                        c.checkParamValueRange("proximityWarningExposure", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityImmediateRecordDistance) {
                                        t[2 + 5 * a] = 59;
                                        let e = 10 * r.proximityImmediateRecordDistance;
                                        c.checkParamValueRange("proximityImmediateRecordDistance", e / 10) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityRecordExposure) {
                                        t[2 + 5 * a] = 60;
                                        let e = r.proximityRecordExposure;
                                        c.checkParamValueRange("proximityRecordExposure", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityAlarmBuzzerDuration) {
                                        t[2 + 5 * a] = 61;
                                        let e = r.proximityAlarmBuzzerDuration;
                                        c.checkParamValueRange("proximityAlarmBuzzerDuration", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityWarningBuzzerDuration) {
                                        t[2 + 5 * a] = 62;
                                        let e = r.proximityWarningBuzzerDuration;
                                        c.checkParamValueRange("proximityWarningBuzzerDuration", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityContactPolicy) {
                                        t[2 + 5 * a] = 63, t[3 + 5 * a] = 0, t[4 + 5 * a] = 0, t[5 + 5 * a] = 0, t[6 + 5 * a] = 0;
                                        let e = Object.assign(new _.ProximityContactPolicy, r.proximityContactPolicy);
                                        e.enable && (t[6 + 5 * a] += 1), e.store && (t[6 + 5 * a] += 2), e.uplink && (t[6 + 5 * a] += 4), a++
                                    }
                                    if (null != r.proximityScanDuration) {
                                        t[2 + 5 * a] = 64;
                                        let e = 10 * r.proximityScanDuration;
                                        c.checkParamValueRange("proximityScanDuration", e / 10) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityScanWindow) {
                                        t[2 + 5 * a] = 65;
                                        let e = r.proximityScanWindow;
                                        c.checkParamValueRange("proximityScanWindow", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityScanInterval) {
                                        t[2 + 5 * a] = 66;
                                        let e = r.proximityScanInterval;
                                        c.checkParamValueRange("proximityScanInterval", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityAlarmRemanence) {
                                        t[2 + 5 * a] = 67;
                                        let e = r.proximityAlarmRemanence;
                                        c.checkParamValueRange("proximityAlarmRemanence", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityWarningRemanence) {
                                        t[2 + 5 * a] = 68;
                                        let e = r.proximityWarningRemanence;
                                        c.checkParamValueRange("proximityWarningRemanence", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityBeaconRepeat) {
                                        t[2 + 5 * a] = 69;
                                        let e = r.proximityBeaconRepeat;
                                        c.checkParamValueRange("proximityBeaconRepeat", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityBeaconTXPower) {
                                        t[2 + 5 * a] = 70;
                                        let e = r.proximityBeaconTXPower;
                                        c.checkParamValueRange("proximityBeaconTXPower", e) && (e < 0 && (e += 4294967296), t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityReminderPeriod) {
                                        t[2 + 5 * a] = 71;
                                        let e = r.proximityReminderPeriod;
                                        c.checkParamValueRange("proximityReminderPeriod", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityReminderDistance) {
                                        t[2 + 5 * a] = 72;
                                        let e = 10 * r.proximityReminderDistance;
                                        c.checkParamValueRange("proximityReminderDistance", e / 10) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityWarningDisableDistance) {
                                        t[2 + 5 * a] = 73;
                                        let e = 10 * r.proximityWarningDisableDistance;
                                        c.checkParamValueRange("proximityWarningDisableDistance", e / 10) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityAlarmDisableDistance) {
                                        t[2 + 5 * a] = 74;
                                        let e = 10 * r.proximityAlarmDisableDistance;
                                        c.checkParamValueRange("proximityAlarmDisableDistance", e / 10) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityMaxSpeedFilter) {
                                        t[2 + 5 * a] = 75;
                                        let e = 10 * r.proximityMaxSpeedFilter;
                                        c.checkParamValueRange("proximityMaxSpeedFilter", e / 10) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.proximityMaxUpdate) {
                                        t[2 + 5 * a] = 76;
                                        let e = r.proximityMaxUpdate;
                                        c.checkParamValueRange("proximityMaxUpdate", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.bleFilterType) {
                                        t[2 + 5 * a] = 77;
                                        let e = 0;
                                        switch (r.bleFilterType) {
                                            case x.NO_FILTER:
                                                e = 0;
                                                break;
                                            case x.EDDYSTONE_UID:
                                                e = 1;
                                                break;
                                            case x.EDDYSTONE_URL:
                                                e = 2;
                                                break;
                                            case x.ALL_EDDYSTONE:
                                                e = 3;
                                                break;
                                            case x.IBEACON_ONLY:
                                                e = 4;
                                                break;
                                            case x.ALTBEACON_ONLY:
                                                e = 5
                                        }
                                        t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e, a++
                                    }
                                    if (null != r.bleFilterMain1) {
                                        t[2 + 5 * a] = 78;
                                        let e = r.bleFilterMain1;
                                        c.checkParamValueRange("bleFilterMain1", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.bleFilterMain2) {
                                        t[2 + 5 * a] = 79;
                                        let e = r.bleFilterMain2;
                                        c.checkParamValueRange("bleFilterMain2", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.bleFilterSecValue) {
                                        t[2 + 5 * a] = 80;
                                        let e = r.bleFilterSecValue;
                                        c.checkParamValueRange("bleFilterSecValue", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.bleFilterSecMask) {
                                        t[2 + 5 * a] = 81;
                                        let e = r.bleFilterSecMask;
                                        c.checkParamValueRange("bleFilterSecMask", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    if (null != r.bleFilterReportType) {
                                        t[2 + 5 * a] = 82;
                                        let e = 0;
                                        switch (r.bleFilterReportType) {
                                            case B.MAC_ADDRESS:
                                                e = 0;
                                                break;
                                            case B.SHORT_ID:
                                                e = 1;
                                                break;
                                            case B.LONG_ID:
                                                e = 2
                                        }
                                        t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e, a++
                                    }
                                    if (null != r.buzzerVolume) {
                                        t[2 + 5 * a] = 83;
                                        let e = r.buzzerVolume;
                                        c.checkParamValueRange("buzzerVolume", e) && (t[3 + 5 * a] = e >> 24 & 255, t[4 + 5 * a] = e >> 16 & 255, t[5 + 5 * a] = e >> 8 & 255, t[6 + 5 * a] = 255 & e), a++
                                    }
                                    return t
                                }(e);
                                break;
                            case Y.DEBUG_COMMAND:
                                t = function(e) {
                                    let r = [];
                                    if (r[0] = 255, r[1] = 15 & e.ackToken, null == e.debugCommandType) throw new Error("No debug command type");
                                    switch (e.debugCommandType) {
                                        case X.RESET:
                                            if (r[2] = 1, null != e.resetAction) switch (e.resetAction) {
                                                case H.RESET_DEVICE:
                                                    r[3] = 0;
                                                    break;
                                                case H.DELETE_CONFIG_RESET:
                                                    r[3] = 1;
                                                    break;
                                                case H.DELETE_CONFIG_BLE_BOND_RESET:
                                                    r[3] = 2;
                                                    break;
                                                default:
                                                    throw new Error("Invalid Reset Action Value")
                                            }
                                            return r;
                                        case X.MAKE_TRACKER_RING:
                                            if (r[2] = 3, null != e.melodyId) {
                                                switch (e.melodyId) {
                                                    case K.SWITCH_ON:
                                                        r[3] = 0;
                                                        break;
                                                    case K.SWITCH_OFF:
                                                        r[3] = 1;
                                                        break;
                                                    case K.FLAT_BATTERY:
                                                        r[3] = 2;
                                                        break;
                                                    case K.ALERT:
                                                        r[3] = 3;
                                                        break;
                                                    case K.SOS_MODE:
                                                        r[3] = 4;
                                                        break;
                                                    case K.SOS_MODE_CLEAR:
                                                        r[3] = 5;
                                                        break;
                                                    case K.RESET:
                                                        r[3] = 6;
                                                        break;
                                                    case K.BLE_ADVERTISING:
                                                        r[3] = 7;
                                                        break;
                                                    case K.BLE_BONDED:
                                                        r[3] = 8;
                                                        break;
                                                    case K.BLE_DEBONDED:
                                                        r[3] = 9;
                                                        break;
                                                    case K.BLE_LINK_LOSS:
                                                        r[3] = 10;
                                                        break;
                                                    case K.PROX_WARNING:
                                                        r[3] = 11;
                                                        break;
                                                    case K.PROX_WARNING_REMINDER:
                                                        r[3] = 12;
                                                        break;
                                                    case K.PROX_ALARM:
                                                        r[3] = 13;
                                                        break;
                                                    case K.PROX_ALARM_REMINDER:
                                                        r[3] = 14;
                                                        break;
                                                    default:
                                                        throw new Error("Invalid Melody Id Value")
                                                }
                                                null != e.buzzerDuration && (r[4] = e.buzzerDuration)
                                            }
                                            return r;
                                        case X.READ_CURRENT_ERROR_AND_SEND_IT:
                                            return r[2] = 4, r;
                                        case X.TRIGGER_AN_ERROR:
                                            return r[2] = 241, r;
                                        case X.RESET_BLE_PAIRING:
                                            return r[2] = 2, r;
                                        case X.TRIGGER_HEARTBEAT_MESSAGE:
                                            return r[2] = 5, r;
                                        case X.READ_TX_POWER_INDEX:
                                            return r[2] = 6, r;
                                        case X.WRITE_TX_POWER_INDEX:
                                            return r[2] = 7, r[3] = e.txPowerIndex, r;
                                        case X.TRIGGER_BLE_BOOTLOADER:
                                            return r[2] = 8, r
                                    }
                                }(e);
                                break;
                            default:
                                throw new Error("Invalid downlink message type")
                        }
                        return r.bytes = t, r.fPort = 2, r
                    }
                }
            },
            130: e => {
                e.exports = {
                    AbeewayDownlinkPayload: function(e, r, t, a, i, n, o, s, E, c, l, T, _) {
                        this.downMessageType = e, this.ackToken = r, this.modeValue = t, this.debugCommandType = a, this.listParameterID = i, this.listParameterIDNames = n, this.setParameters = o, this.resetAction = s, this.txPowerIndex = E, this.melodyId = c, this.buzzerDuration = l, this.proximityMessage = T, this.payload = _
                    }
                }
            },
            896: e => {
                e.exports = {
                    AbeewayUplinkPayload: function(e, r, t, a, i, n, o, s, E, c, l, T, _, I, u, R, p, O, S, m, N, A, h, d, D, C, P, k, y, b, L, M, g, f, x, w, U, B, G, F, W, V, Y, X, v, H, K, z, j, Z, Q, q, J, $) {
                        this.gpsLatitude = e, this.gpsLongitude = r, this.horizontalAccuracy = t, this.messageType = a, this.age = i, this.trackingMode = n, this.batteryVoltage = o, this.batteryLevel = s, this.batteryStatus = E, this.ackToken = c, this.firmwareVersion = l, this.bleFirmwareVersion = T, this.resetCause = _, this.rawPositionType = I, this.periodicPosition = u, this.gpsOnRuntime = R, this.gpsStandbyRuntime = p, this.wifiScanCount = O, this.timeoutCause = S, this.bestSatellitesCOverN = m, this.temperatureMeasure = N, this.miscDataTag = A, this.sosFlag = h, this.appState = d, this.dynamicMotionState = D, this.onDemand = C, this.batteryVoltageMeasures = P, this.errorCode = k, this.debugErrorCode = y, this.genericErrorCode = b, this.shutdownCause = L, this.currentAckTokenValue = M, this.payload = g, this.debugCrashInfo = f, this.activityCount = x, this.deviceConfiguration = w, this.wifiBssids = U, this.bleBssids = B, this.bleBeaconIds = G, this.bleBeaconFailure = F, this.eventType = W, this.debugCommandTag = V, this.txPowerIndex = Y, this.nbOfshock = X, this.accelerometerShockData = v, this.trackerOrientation = H, this.activityReportingWindow = K, this.measuredTemperature = z, this.lengthErrCounter = j, this.dataScanCollection = Z, this.proximityNotification = Q, this.proximityDailyReport = q, this.proximityWhiteListing = J, this.proximityDailyResponse = $
                    }
                }
            },
            50: e => {
                e.exports = {
                    BeaconIdInfo: function(e, r) {
                        this.beaconId = e, this.rssi = r
                    }
                }
            },
            700: e => {
                e.exports = {
                    BssidInfo: function(e, r) {
                        this.bssid = e, this.rssi = r
                    }
                }
            },
            606: e => {
                e.exports = {
                    ConfigFlags: function(e, r, t, a, i, n, o, s, E, c, l, T, _, I, u, R, p, O) {
                        this.framePendingMechanism = e, this.buttonPressToTurnOFF = r, this.doubleClickIsSosModeOrAlert = t, this.wifiPayloadWithNoCypher = i, this.bleAdvertisingAtStart = n, this.selectWifiScanOrGeolocStartMessage = o, this.downlinkSetParameterConfirmation = a, this.ledBlinkWithGpsFix = s, this.startMotionEventUplink = E, this.endMotionEventUplink = c, this.otaJoinWhenLeavingModeOff = l, this.rejectAsymmetricPairing = T, this.enableLongWifiPayload = _, this.collectionLongReport = I, this.autoStart = u, this.forbidModeOff = R, this.sosModeSound = p, this.automaticDatarateSelection = O
                    }
                }
            },
            660: e => {
                e.exports = {
                    ConfirmedUplink: function(e, r, t, a, i, n, o, s, E, c, l, T, _) {
                        this.confirmedUlBitmap = e, this.confirmedUlRetry = r, this.framePending = t, this.position = a, this.energyStatus = i, this.heartbeat = n, this.activityStatus = o, this.configuration = s, this.shockDetection = E, this.shutdown = c, this.event = l, this.scanCollection = T, this.debug = _
                    }
                }
            },
            129: e => {
                e.exports = {
                    CustomTransmitStrat: function(e, r, t, a, i, n) {
                        this.adrenabled = e, this.transmissionType = r, this.firstTransmissionDatarateDistribution = t, this.secondTransmissionDatarateDistribution = a, this.firstTransmissionDatarate = i, this.secondTransmissionDatarate = n
                    },
                    TransmissionType: {
                        SINGLE: "SINGLE",
                        DOUBLE: "DOUBLE"
                    },
                    TransmissionDatarateDistribution: {
                        RANDOM: "RANDOM",
                        BELL_CURVE: "BELL_CURVE",
                        RING: "RING"
                    }
                }
            },
            778: e => {
                e.exports = {
                    MeasuredTemperature: function(e, r, t, a, i) {
                        this.state = e, this.max = r, this.min = t, this.highCounter = a, this.lowCounter = i
                    },
                    TemperatureState: {
                        NORMAL: "NORMAL",
                        HIGH: "HIGH",
                        LOW: "LOW",
                        FEATURE_NOT_ACTIVATED: "FEATURE_NOT_ACTIVATED"
                    }
                }
            },
            709: e => {
                const r = {
                    trackingUlPeriod: "60:86400",
                    loralivePeriod: "300:86400",
                    energyStatusPeriod: "0,300:604800",
                    periodicPositionInterval: "0,900:604800",
                    gpsScanMode: "0",
                    geolocSensorProfile: "0:11",
                    oneshotGeolocMethod: "0:6",
                    extAntennaProfile: "0",
                    motionStartEndNbTx: "1:60",
                    gpsTimeout: "30:300",
                    xgpsTimeout: "30:250",
                    gpsEHPE: "0:100",
                    gpsConvergence: "0:300",
                    configFlags: "0:0x1FFFF",
                    transmitStrat: "0:5",
                    bleBeaconCount: "0:4",
                    bleBeaconTimeout: "1:5",
                    gpsStandbyTimeout: "0:28800",
                    confirmedUlBitmap: "0x0000:0xFFFF",
                    confirmedUlRetry: "0:8",
                    motionSensitivity: "0:300",
                    shockDetection: "0:100",
                    periodicActivityPeriod: "0,1800:86400",
                    motionDuration: "60:3600",
                    geofencingScanPeriod: "0:300",
                    geofencingUlPeriod: "60:86400",
                    bleRssiFilter: "-100:-40",
                    temperatureHigh: "-44:85,255",
                    temperatureLow: "-44:85,255",
                    temperatureAction: "0:3",
                    transmitStratCustom: "0:0xFFFFFFFF",
                    networkTimeoutCheck: "0,86400:5184000",
                    networkTimeoutReset: "0,21600:2592000",
                    collectionScanType: "0:2",
                    collectionNbEntry: "1:20",
                    collectionBleFilterType: "0:5",
                    collectionBleFilterMain1: "0:0xFFFFFFFF",
                    collectionBleFilterMain2: "0:0xFFFFFFFF",
                    collectionBleFilterSecValue: "0:0xFFFFFFFF",
                    collectionBleFilterSecMask: "0:0xFFFFFFFF",
                    batteryCapacity: "-1,0:65535",
                    reedSwitchConfiguration: "0:2",
                    gnssConstellation: "0:6",
                    proximityMinimumScanPower: "-90:10",
                    proximityDistanceCoefficient: "1:256",
                    proximityScanFrequency: "2:3600",
                    proximityBacktraceMaximumAge: "1:256",
                    proximityDistanceSlidingWindow: "1:256",
                    proximityExposure50: "0:256",
                    proximityExposure100: "0:256",
                    proximityExposure150: "0:256",
                    proximityExposure200: "0:256",
                    proximityExposure250: "0:256",
                    proximityExposure300: "0:256",
                    proximityExposure400: "0:256",
                    proximityImmediateAlarmDistance: "0:100",
                    proximityAlarmExposure: "1:65535",
                    proximityImmediateWarningDistance: "0:100",
                    proximityWarningExposure: "1:65535",
                    proximityImmediateRecordDistance: "0:100",
                    proximityRecordExposure: "1:65535",
                    proximityAlarmBuzzerDuration: "0:256",
                    proximityWarningBuzzerDuration: "0:256",
                    proximityContactPolicy: "0:7",
                    proximityScanDuration: "1:600",
                    proximityScanWindow: "10:10245",
                    proximityScanInterval: "15:10245",
                    proximityAlarmRemanence: "0:256",
                    proximityWarningRemanence: "0:256",
                    proximityBeaconRepeat: "0:65535",
                    proximityBeaconTXPower: "-60:-20",
                    proximityReminderPeriod: "0:256",
                    proximityReminderDistance: "0:256",
                    proximityWarningDisableDistance: "1:256",
                    proximityAlarmDisableDistance: "1:256",
                    proximityMaxSpeedFilter: "0:40",
                    proximityMaxUpdate: "300:43200",
                    bleFilterType: "0:5",
                    bleFilterMain1: "0:0xFFFFFFFF",
                    bleFilterMain2: "0:0xFFFFFFFF",
                    bleFilterSecValue: "0:0xFFFFFFFF",
                    bleFilterSecMask: "0:0xFFFFFFFF",
                    bleFilterReportType: "0:2",
                    buzzerVolume: "0:100",
                    mode: "0:5",
                    bleBond: "0",
                    powerConsumption: "0:4294967295"
                };
                e.exports = {
                    Parameters: function(e, r, t, a, i, n, o, s, E, c, l, T, _, I, u, R, p, O, S, m, N, A, h, d, D, C, P, k, y, b, L, M, g, f, x, w, U, B, G, F, W, V, Y, X, v, H, K, z, j, Z, Q, q, J, $, ee, re, te, ae, ie, ne, oe, se, Ee, ce, le, Te, _e, Ie, ue, Re, pe, Oe, Se, me, Ne, Ae, he, de, De, Ce, Pe, ke, ye, be, Le, Me, ge, fe, xe, we, Ue) {
                        this.trackingUlPeriod = e, this.loralivePeriod = r, this.energyStatusPeriod = t, this.periodicPositionInterval = a, this.gpsScanMode = i, this.geolocSensorProfile = n, this.oneshotGeolocMethod = o, this.extAntennaProfile = s, this.motionStartEndNbTx = E, this.gpsTimeout = c, this.xgpsTimeout = l, this.gpsEHPE = T, this.gpsConvergence = _, this.configFlags = I, this.transmitStrat = u, this.bleBeaconCount = R, this.bleBeaconTimeout = p, this.gpsStandbyTimeout = O, this.confirmedUplink = S, this.motionSensitivity = m, this.shockDetection = N, this.periodicActivityPeriod = A, this.motionDuration = h, this.geofencingScanPeriod = d, this.geofencingUlPeriod = D, this.bleRssiFilter = C, this.temperatureHigh = P, this.temperatureLow = k, this.temperatureAction = y, this.transmitStratCustom = b, this.networkTimeoutCheck = L, this.networkTimeoutReset = M, this.collectionScanType = g, this.collectionNbEntry = f, this.collectionBleFilterType = x, this.collectionBleFilterMain1 = w, this.collectionBleFilterMain2 = U, this.collectionBleFilterSecValue = B, this.collectionBleFilterSecMask = G, this.batteryCapacity = F, this.reedSwitchConfiguration = W, this.gnssConstellation = V, this.proximityMinimumScanPower = Y, this.proximityDistanceCoefficient = X, this.proximityScanFrequency = v, this.proximityBacktraceMaximumAge = H, this.proximityDistanceSlidingWindow = K, this.proximityExposure50 = z, this.proximityExposure100 = j, this.proximityExposure150 = Z, this.proximityExposure200 = Q, this.proximityExposure250 = q, this.proximityExposure300 = J, this.proximityExposure400 = $, this.proximityImmediateAlarmDistance = ee, this.proximityAlarmExposure = re, this.proximityImmediateWarningDistance = te, this.proximityWarningExposure = ae, this.proximityImmediateRecordDistance = ie, this.proximityRecordExposure = ne, this.proximityAlarmBuzzerDuration = oe, this.proximityWarningBuzzerDuration = se, this.proximityContactPolicy = Ee, this.proximityScanDuration = ce, this.proximityScanWindow = le, this.proximityScanInterval = Te, this.proximityAlarmRemanence = _e, this.proximityWarningRemanence = Ie, this.proximityBeaconRepeat = ue, this.proximityBeaconTXPower = Re, this.proximityReminderPeriod = pe, this.proximityReminderDistance = Oe, this.proximityWarningDisableDistance = Se, this.proximityAlarmDisableDistance = me, this.proximityMaxSpeedFilter = Ne, this.proximityMaxUpdate = Ae, this.bleFilterType = he, this.bleFilterMain1 = de, this.bleFilterMain2 = De, this.bleFilterSecValue = Ce, this.bleFilterSecMask = Pe, this.bleFilterReportType = ke, this.buzzerVolume = ye, this.mode = be, this.bleBond = Le, this.xAccelerometerValue = Me, this.yAccelerometerValue = ge, this.zAccelerometerValue = fe, this.bleFirmwareVersion = xe, this.firmwareVersion = we, this.powerConsumption = Ue
                    },
                    countParameterNumber: function(e) {
                        let r = 0;
                        return r += null != e.trackingUlPeriod ? 1 : 0, r += null != e.loralivePeriod ? 1 : 0, r += null != e.energyStatusPeriod ? 1 : 0, r += null != e.periodicPositionInterval ? 1 : 0, r += null != e.gpsScanMode ? 1 : 0, r += null != e.geolocSensorProfile ? 1 : 0, r += null != e.oneshotGeolocMethod ? 1 : 0, r += null != e.extAntennaProfile ? 1 : 0, r += null != e.motionStartEndNbTx ? 1 : 0, r += null != e.gpsTimeout ? 1 : 0, r += null != e.xgpsTimeout ? 1 : 0, r += null != e.gpsEHPE ? 1 : 0, r += null != e.gpsConvergence ? 1 : 0, r += null != e.configFlags ? 1 : 0, r += null != e.transmitStrat ? 1 : 0, r += null != e.bleBeaconCount ? 1 : 0, r += null != e.bleBeaconTimeout ? 1 : 0, r += null != e.gpsStandbyTimeout ? 1 : 0, null != e.confirmedUplink && (r += null != e.confirmedUplink.confirmedUlBitmap ? 1 : 0, r += null != e.confirmedUplink.confirmedUlRetry ? 1 : 0), r += null != e.motionSensitivity ? 1 : 0, r += null != e.shockDetection ? 1 : 0, r += null != e.periodicActivityPeriod ? 1 : 0, r += null != e.motionDuration ? 1 : 0, r += null != e.geofencingScanPeriod ? 1 : 0, r += null != e.geofencingUlPeriod ? 1 : 0, r += null != e.bleRssiFilter ? 1 : 0, r += null != e.temperatureHigh ? 1 : 0, r += null != e.temperatureLow ? 1 : 0, r += null != e.temperatureAction ? 1 : 0, r += null != e.transmitStratCustom ? 1 : 0, r += null != e.reedSwitchConfiguration ? 1 : 0, r += null != e.batteryCapacity ? 1 : 0, r += null != e.collectionScanType ? 1 : 0, r += null != e.collectionBleFilterType ? 1 : 0, r += null != e.collectionBleFilterMain1 ? 1 : 0, r += null != e.collectionBleFilterMain2 ? 1 : 0, r += null != e.collectionBleFilterSecValue ? 1 : 0, r += null != e.collectionBleFilterSecMask ? 1 : 0, r += null != e.collectionNbEntry ? 1 : 0, r += null != e.networkTimeoutCheck ? 1 : 0, r += null != e.networkTimeoutReset ? 1 : 0, r += null != e.gnssConstellation ? 1 : 0, r += null != e.proximityMinimumScanPower ? 1 : 0, r += null != e.proximityDistanceCoefficient ? 1 : 0, r += null != e.proximityScanFrequency ? 1 : 0, r += null != e.proximityBacktraceMaximumAge ? 1 : 0, r += null != e.proximityDistanceSlidingWindow ? 1 : 0, r += null != e.proximityExposure50 ? 1 : 0, r += null != e.proximityExposure100 ? 1 : 0, r += null != e.proximityExposure150 ? 1 : 0, r += null != e.proximityExposure200 ? 1 : 0, r += null != e.proximityExposure250 ? 1 : 0, r += null != e.proximityExposure300 ? 1 : 0, r += null != e.proximityExposure400 ? 1 : 0, r += null != e.proximityImmediateAlarmDistance ? 1 : 0, r += null != e.proximityAlarmExposure ? 1 : 0, r += null != e.proximityImmediateWarningDistance ? 1 : 0, r += null != e.proximityWarningExposure ? 1 : 0, r += null != e.proximityImmediateRecordDistance ? 1 : 0, r += null != e.proximityRecordExposure ? 1 : 0, r += null != e.proximityAlarmBuzzerDuration ? 1 : 0, r += null != e.proximityWarningBuzzerDuration ? 1 : 0, r += null != e.proximityContactPolicy ? 1 : 0, r += null != e.proximityScanDuration ? 1 : 0, r += null != e.proximityScanWindow ? 1 : 0, r += null != e.proximityScanInterval ? 1 : 0, r += null != e.proximityAlarmRemanence ? 1 : 0, r += null != e.proximityWarningRemanence ? 1 : 0, r += null != e.proximityBeaconRepeat ? 1 : 0, r += null != e.proximityBeaconTXPower ? 1 : 0, r += null != e.proximityReminderPeriod ? 1 : 0, r += null != e.proximityReminderDistance ? 1 : 0, r += null != e.proximityWarningDisableDistance ? 1 : 0, r += null != e.proximityAlarmDisableDistance ? 1 : 0, r += null != e.proximityMaxSpeedFilter ? 1 : 0, r += null != e.proximityMaxUpdate ? 1 : 0, r += null != e.bleFilterType ? 1 : 0, r += null != e.bleFilterMain1 ? 1 : 0, r += null != e.bleFilterMain2 ? 1 : 0, r += null != e.bleFilterSecValue ? 1 : 0, r += null != e.bleFilterSecMask ? 1 : 0, r += null != e.bleFilterReportType ? 1 : 0, r += null != e.buzzerVolume ? 1 : 0, r += null != e.xAccelerometerValue ? 1 : 0, r += null != e.yAccelerometerValue ? 1 : 0, r += null != e.zAccelerometerValue ? 1 : 0, r += null != e.bleFirmwareVersion ? 1 : 0, r += null != e.firmwareVersion ? 1 : 0, r += null != e.bleBond ? 1 : 0, r += null != e.mode ? 1 : 0, r += null != e.powerConsumption ? 1 : 0, r
                    },
                    checkParamValueRange: function(e, t) {
                        let a = "",
                            i = !1;
                        if (!(e in r)) throw new Error("No range for the given param " + e);
                        a = r[e];
                        let n = new RegExp("^([-A-Fa-fx0-9]+):([-A-Fa-fx0-9]+)$");
                        if (a.split(",").forEach((e => {
                                let r = e.match(n);
                                if (null == r) e.startsWith("0x") ? t == parseInt(e, 16) && (i = !0) : t == parseInt(e) && (i = !0);
                                else {
                                    let e, a, n = r[1],
                                        o = r[2];
                                    e = n.startsWith("0x") ? parseInt(n, 16) : parseInt(n), a = o.startsWith("0x") ? parseInt(o, 16) : parseInt(o), t >= e && t <= a && (i = !0)
                                }
                            })), !i) throw new Error("param " + e + " value out of range");
                        return i
                    }
                }
            },
            527: e => {
                e.exports = {
                    ProximityContactPolicy: function(e, r, t) {
                        this.enable = e, this.store = r, this.uplink = t
                    }
                }
            },
            973: e => {
                e.exports = {
                    ProximityDailyReport: function(e, r, t, a, i, n, o, s, E) {
                        this.dailyAlertDay0 = e, this.dailyWarningDay0 = r, this.dailyExposureDay0 = t, this.dailyAlertDay1 = a, this.dailyWarningDay1 = i, this.dailyExposureDay1 = n, this.dailyAlertDay2 = o, this.dailyWarningDay2 = s, this.dailyExposureDay2 = E
                    }
                }
            },
            893: e => {
                e.exports = {
                    ProximityDailyResponse: function(e, r, t, a) {
                        this.dayIdentifier = e, this.dailyAlert = r, this.dailyWarning = t, this.dailyExposure = a
                    }
                }
            },
            890: e => {
                e.exports = {
                    ProximityMessage: function(e, r, t, a) {
                        this.type = e, this.rollingProximityIdentifier = r, this.recordStatus = t, this.dayIdentifier = a
                    },
                    Type: {
                        GET_RECORD_STATUS: "GET_RECORD_STATUS",
                        SET_WHITE_LIST_STATUS: "SET_WHITE_LIST_STATUS",
                        GET_DAILY_INFORMATION: "GET_DAILY_INFORMATION",
                        CLEAR_DAILY_INFORMATION: "CLEAR_DAILY_INFORMATION"
                    },
                    SetRecordStatus: {
                        RESET_WHITE_LISTING: "RESET_WHITE_LISTING",
                        SET_WHITE_LISTING: "SET_WHITE_LISTING"
                    }
                }
            },
            530: e => {
                e.exports = {
                    ProximityNotification: function(e, r, t, a, i, n, o, s, E, c) {
                        this.notificationType = e, this.encrypted = r, this.recordAction = t, this.rollingProximityIdentifier = a, this.closestDistanceRecording = i, this.distanceAverageRecorded = n, this.cumulatedExposure = o, this.metadata = s, this.cumulatedContactDuration = E, this.currentDailyExposure = c
                    },
                    NotificationType: {
                        WARNING_MESSAGE: "WARNING_MESSAGE",
                        ALERT_MESSAGE: "ALERT_MESSAGE",
                        RECORD_MESSAGE: "RECORD_MESSAGE"
                    },
                    RecordAction: {
                        RECORD_START: "RECORD_START",
                        RECORD_UPDATE: "RECORD_UPDATE",
                        RECORD_STOP: "RECORD_STOP"
                    }
                }
            },
            159: e => {
                e.exports = {
                    ProximityWhiteListing: function(e, r, t, a, i) {
                        this.encrypted = e, this.rollingProximityIdentifier = r, this.list = t, this.recordStatus = a, this.solicited = i
                    },
                    List: {
                        PEER_LIST: "PEER_LIST",
                        WARNING_LIST: "WARNING_LIST",
                        ALERT_LIST: "ALERT_LIST"
                    },
                    RecordStatus: {
                        NOT_WHITE_LISTED: "NOT_WHITE_LISTED",
                        WHITE_LISTED: "WHITE_LISTED"
                    }
                }
            },
            781: e => {
                e.exports = {
                    ScanCollection: function(e, r, t, a, i, n, o, s) {
                        this.scanType = e, this.again = r, this.dataFormat = t, this.fragmentIdentification = a, this.collectionIdentifier = i, this.hash = n, this.beaconIdData = o, this.macAddressData = s
                    },
                    ScanType: {
                        BLE_BEACONS: "BLE_BEACONS",
                        WIFI_BSSID: "WIFI_BSSID"
                    },
                    DataFormat: {
                        BEACON_ID: "BEACON_ID",
                        MAC_ADDRESS: "MAC_ADDRESS"
                    }
                }
            },
            842: e => {
                e.exports = {
                    TransmissionDatarate: function(e, r, t, a, i, n, o, s) {
                        this.dr0 = e, this.dr1 = r, this.dr2 = t, this.dr3 = a, this.dr4 = i, this.dr5 = n, this.dr6 = o, this.dr7 = s
                    }
                }
            }
        },
        r = {};
    return function t(a) {
        if (r[a]) return r[a].exports;
        var i = r[a] = {
            exports: {}
        };
        return e[a](i, i.exports, t), i.exports
    }(649)
})());