import byteSize from 'byte-size';
import { customUnits, multipliers, toIECUnit } from '@kubevirt-utils/utils/units';
export var bytesToIECBytes = function (bytes, precision, customizedUnits) {
    if (customizedUnits === void 0) { customizedUnits = customUnits; }
    return byteSize(bytes, {
        customUnits: customizedUnits,
        precision: precision,
        units: 'IS',
    });
};
export var bytesToDiskSize = function (size) {
    var bytesizeresult = bytesFromQuantity(size, 0);
    return [bytesizeresult[0], bytesizeresult[1]].join('');
};
export var bytesFromQuantity = function (quantity, precision) {
    if (precision === void 0) { precision = 0; }
    var byteSizeResult = undefined;
    if (typeof quantity === 'number') {
        byteSizeResult = bytesToIECBytes(quantity, precision);
    }
    if (typeof quantity === 'string') {
        var value = parseFloat(quantity);
        var ISUnit = /[KMGTPEZ]i$/.exec(quantity);
        var bytesUnit = /[KMGTPEZ]iB$/.exec(quantity);
        var decimalUnit = /[KMGTPEZ]$/.exec(quantity.toUpperCase());
        var originalUnit = ISUnit || bytesUnit || decimalUnit;
        if (originalUnit === null || originalUnit === void 0 ? void 0 : originalUnit.length) {
            var bytes = value * multipliers[(bytesUnit === null || bytesUnit === void 0 ? void 0 : bytesUnit[0]) || (ISUnit === null || ISUnit === void 0 ? void 0 : ISUnit[0]) || (decimalUnit === null || decimalUnit === void 0 ? void 0 : decimalUnit[0])];
            byteSizeResult = bytesToIECBytes(bytes, precision);
            // Prevents units from changing to 'B' when user enters 0 or erases existing value
            if (value === 0) {
                byteSizeResult.unit = toIECUnit(originalUnit === null || originalUnit === void 0 ? void 0 : originalUnit[0]) || (byteSizeResult === null || byteSizeResult === void 0 ? void 0 : byteSizeResult.unit);
            }
        }
        else {
            byteSizeResult = bytesToIECBytes(value, precision);
        }
    }
    return [parseFloat(byteSizeResult.value), byteSizeResult.unit];
};
//# sourceMappingURL=quantity.js.map