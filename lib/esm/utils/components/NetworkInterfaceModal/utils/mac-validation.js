import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var HEXCH_REGEX = '[0-9A-Fa-f]';
var MAC_REGEX_COLON_DELIMITER = new RegExp("^((".concat(HEXCH_REGEX, "{2}[:]){19}").concat(HEXCH_REGEX, "{2})$|") + // 01:23:45:67:89:ab:cd:ef:00:00:01:23:45:67:89:ab:cd:ef:00:00
    "^((".concat(HEXCH_REGEX, "{2}[:]){7}").concat(HEXCH_REGEX, "{2})$|") + // 01:23:45:67:89:ab:cd:ef
    "^((".concat(HEXCH_REGEX, "{2}[:]){5}").concat(HEXCH_REGEX, "{2})$"));
var MAC_REGEX_DASH_DELIMITER = new RegExp("^((".concat(HEXCH_REGEX, "{2}[-]){19}").concat(HEXCH_REGEX, "{2})$|") + // 01-23-45-67-89-ab-cd-ef-00-00-01-23-45-67-89-ab-cd-ef-00-00
    "^((".concat(HEXCH_REGEX, "{2}[-]){7}").concat(HEXCH_REGEX, "{2})$|") + // 01-23-45-67-89-ab-cd-ef
    "^((".concat(HEXCH_REGEX, "{2}[-]){5}").concat(HEXCH_REGEX, "{2})$"));
var MAC_REGEX_PERIOD_DELIMITER = new RegExp("^((".concat(HEXCH_REGEX, "{4}.){9}").concat(HEXCH_REGEX, "{4})$|") + // 0123.4567.89ab.cdef.0000.0123.4567.89ab.cdef.0000
    "^((".concat(HEXCH_REGEX, "{4}.){3}").concat(HEXCH_REGEX, "{4})$|") + // 0123.4567.89ab.cdef
    "^((".concat(HEXCH_REGEX, "{4}.){2}").concat(HEXCH_REGEX, "{4})$"));
var COLON_DELIMITER = ':';
var DASH_DELIMITER = '-';
var PERIOD_DELIMITER = '.';
// Validates that the provided MAC address meets one of following formats supported by the golang ParseMAC function:
// IEEE 802 MAC-48, EUI-48, EUI-64, or a 20-octet IP over InfiniBand link-layer address
// https://golang.org/pkg/net/#ParseMAC
export var isValidMAC = function (mac) {
    if (mac.length < 14) {
        return false;
    }
    var regex = undefined;
    if (mac[2] === COLON_DELIMITER) {
        regex = MAC_REGEX_COLON_DELIMITER;
    }
    else if (mac[2] === DASH_DELIMITER) {
        regex = MAC_REGEX_DASH_DELIMITER;
    }
    else if (mac[4] === PERIOD_DELIMITER) {
        regex = MAC_REGEX_PERIOD_DELIMITER;
    }
    return regex ? regex.test(mac) : false;
};
export var validateMACAddress = function (macAddress) {
    if (!isValidMAC(macAddress) && (macAddress === null || macAddress === void 0 ? void 0 : macAddress.length) > 0) {
        return t('Invalid MAC address format');
    }
    return null;
};
//# sourceMappingURL=mac-validation.js.map