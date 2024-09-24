import { toIECUnit } from '@kubevirt-utils/utils/units';
/**
 * function that checks if rawSize has number
 * @param {string} rawSize raw size
 * @returns the number if exists, otherwise returns null
 */
export var hasNumber = function (rawSize) {
    var number = rawSize === null || rawSize === void 0 ? void 0 : rawSize.match(/\d+/g);
    return Number(number);
};
/**
 * function that checks if rawSize has size unit
 * @param {string} rawSize raw size
 * @returns the unit if exists, otherwise returns null
 */
export var hasSizeUnit = function (rawSize) {
    var unit = rawSize === null || rawSize === void 0 ? void 0 : rawSize.match(/[a-zA-Z]+/g);
    return unit === null || unit === void 0 ? void 0 : unit[0];
};
/**
 * function that recieves a raw size and returns formatted size
 * @param {string} rawSize - size to convert
 * @param {string} unit - unit
 * @returns formatted bytes
 */
export var formatBytes = function (rawSize, unit) {
    if (!rawSize) {
        return '-';
    }
    var size = hasNumber(rawSize);
    var sizeUnit = hasSizeUnit(rawSize) || unit;
    var sizeUnits = ['', 'Ki', 'Mi', 'Gi', 'Ti'];
    var unitIndex = (sizeUnit && sizeUnits.findIndex(function (sUnit) { return sUnit === sizeUnit; })) || 0;
    var convertedSize = size;
    while (convertedSize >= 1024) {
        convertedSize = convertedSize / 1024;
        ++unitIndex;
    }
    var formattedSize = convertedSize.toFixed(2).concat(' ', toIECUnit(sizeUnits[unitIndex]));
    return formattedSize;
};
//# sourceMappingURL=size.js.map