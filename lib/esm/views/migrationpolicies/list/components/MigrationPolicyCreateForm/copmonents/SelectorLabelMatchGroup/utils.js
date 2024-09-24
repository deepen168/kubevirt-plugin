export var extractKeyValueFromLabel = function (label) { return label === null || label === void 0 ? void 0 : label.split('='); };
export var transformKeyValueToLabel = function (key, value) {
    return value ? "".concat(key, "=").concat(value) : key;
};
//# sourceMappingURL=utils.js.map