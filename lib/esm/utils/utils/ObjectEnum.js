import cloneDeepWith from 'lodash.clonedeepwith';
var ObjectEnum = /** @class */ (function () {
    function ObjectEnum(value) {
        var _this = this;
        this.getValue = function () { return _this.value; };
        if (!value) {
            throw new Error("ObjectEnum: value can't be empty");
        }
        this.value = value;
    }
    ObjectEnum.prototype.toString = function () {
        if (this.value === null || this.value === undefined) {
            return '';
        }
        return this.value.toString();
    };
    ObjectEnum.getAll = function () { return Object.freeze([]); };
    ObjectEnum.getAllClassEnumProperties = function (Clazz) {
        var usedValues = new Set();
        return Object.keys(Clazz)
            .filter(function (value) { return Clazz[value] instanceof Clazz; })
            .map(function (key) {
            var result = Clazz[key];
            if (usedValues.has(result.getValue())) {
                throw new Error("".concat(result, ": value must be unique"));
            }
            usedValues.add(result.getValue());
            return result;
        });
    };
    return ObjectEnum;
}());
export { ObjectEnum };
export var cloneDeepWithEnum = function (object) {
    return cloneDeepWith(object, function (value) {
        if (value instanceof ObjectEnum) {
            return value;
        }
        return undefined;
    });
};
//# sourceMappingURL=ObjectEnum.js.map