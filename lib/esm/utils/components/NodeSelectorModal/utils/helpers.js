export var nodeSelectorToIDLabels = function (nodeSelector) {
    return Object.entries(nodeSelector || {}).map(function (_a, id) {
        var key = _a[0], value = _a[1];
        return ({ id: id, key: key, value: value });
    });
};
export var isEqualObject = function (object, otherObject) {
    if (object === otherObject) {
        return true;
    }
    if (object === null || otherObject === null) {
        return false;
    }
    if ((object === null || object === void 0 ? void 0 : object.constructor) !== (otherObject === null || otherObject === void 0 ? void 0 : otherObject.constructor)) {
        return false;
    }
    if (typeof object !== 'object') {
        return false;
    }
    var objectKeys = Object.keys(object);
    var otherObjectKeys = Object.keys(otherObject);
    if (objectKeys.length !== otherObjectKeys.length) {
        return false;
    }
    for (var _i = 0, objectKeys_1 = objectKeys; _i < objectKeys_1.length; _i++) {
        var key = objectKeys_1[_i];
        if (!otherObjectKeys.includes(key) || !isEqualObject(object[key], otherObject[key])) {
            return false;
        }
    }
    return true;
};
//# sourceMappingURL=helpers.js.map