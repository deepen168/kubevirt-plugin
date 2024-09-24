export var BinaryUnit;
(function (BinaryUnit) {
    BinaryUnit["B"] = "B";
    BinaryUnit["Gi"] = "Gi";
    BinaryUnit["Ki"] = "Ki";
    BinaryUnit["Mi"] = "Mi";
    BinaryUnit["Ti"] = "Ti";
})(BinaryUnit || (BinaryUnit = {}));
export var multipliers = {};
multipliers.B = 1;
multipliers.Ki = multipliers.B * 1024;
multipliers.Mi = multipliers.Ki * 1024;
multipliers.Gi = multipliers.Mi * 1024;
multipliers.Ti = multipliers.Gi * 1024;
multipliers.Pi = multipliers.Ti * 1024;
multipliers.Ei = multipliers.Pi * 1024;
multipliers.Zi = multipliers.Ei * 1024;
multipliers.K = multipliers.B * 1000;
multipliers.M = multipliers.K * 1000;
multipliers.G = multipliers.M * 1000;
multipliers.T = multipliers.G * 1000;
multipliers.P = multipliers.T * 1000;
multipliers.E = multipliers.P * 1000;
multipliers.Z = multipliers.E * 1000;
export var customUnits = {
    IS: [
        { from: 0, to: multipliers.Ki, unit: 'B' },
        { from: multipliers.Ki, long: 'thousand', to: multipliers.Mi, unit: 'KiB' },
        { from: multipliers.Mi, long: 'million', to: multipliers.Gi, unit: 'MiB' },
        { from: multipliers.Gi, long: 'billion', to: multipliers.Ti, unit: 'GiB' },
        { from: multipliers.Ti, long: 'billion', unit: 'TiB' },
    ],
};
export var binaryUnits = {
    IS: [
        { from: 0, to: multipliers.Ki, unit: 'B' },
        { from: multipliers.Ki, long: 'thousand', to: multipliers.Mi, unit: 'Ki' },
        { from: multipliers.Mi, long: 'million', to: multipliers.Gi, unit: 'Mi' },
        { from: multipliers.Gi, long: 'billion', to: multipliers.Ti, unit: 'Gi' },
        { from: multipliers.Ti, long: 'billion', unit: 'Ti' },
    ],
};
/**
 * A function to return unit for disk size/memory with 'B' suffix.
 * @param {BinaryUnit | string} unit - unit
 * @returns {string}
 */
export var toIECUnit = function (unit) {
    return !unit || unit.endsWith('B') ? unit : "".concat(unit, "B");
};
/**
 * A function to return the string for displaying more readable disk size/memory info
 * @param {string} combinedStr - string containing both the value and the unit
 * @returns {string} string for displaying the value and the unit with 'B' suffix, with the space between them
 */
export var readableSizeUnit = function (combinedStr) {
    var combinedString = combinedStr === null || combinedStr === void 0 ? void 0 : combinedStr.replace(/\s/g, ''); // remove empty spaces if there are any, to split the value and unit correctly
    var index = combinedString === null || combinedString === void 0 ? void 0 : combinedString.search(/([a-zA-Z]+)/g);
    var _a = index === -1
        ? [combinedString, '']
        : [combinedString === null || combinedString === void 0 ? void 0 : combinedString.slice(0, index), combinedString === null || combinedString === void 0 ? void 0 : combinedString.slice(index)], value = _a[0], unit = _a[1];
    // if there isn't any specific value/size present, return the original string, for example for the dynamic disk size
    return !value ? combinedStr : "".concat(value, " ").concat(toIECUnit(unit));
};
//# sourceMappingURL=units.js.map