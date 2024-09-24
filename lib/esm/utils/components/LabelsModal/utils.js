export var labelsToArray = function (labels) {
    return Object.entries(labels).map(function (_a) {
        var k = _a[0], v = _a[1];
        return (v ? "".concat(k, "=").concat(v) : k);
    });
};
export var labelsArrayToObject = function (labels) {
    var result = {};
    labels.forEach(function (item) {
        var _a = item.split('='), key = _a[0], _b = _a[1], value = _b === void 0 ? null : _b;
        result[key] = value;
    });
    return result;
};
export var isLabelValid = function (label) {
    return /^[0-9A-Za-z/\-_.]+\s*=?\s*[0-9A-Za-z/\-_.]+$/.test(label) && !/\s/g.test(label);
};
//# sourceMappingURL=utils.js.map