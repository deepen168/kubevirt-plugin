var GI = 'Gi';
var MI = 'Mi';
var TI = 'Ti';
var unitsConvertor = new Proxy({
    Gi: GI,
    Mi: MI,
    Ti: TI,
}, {
    // eslint-disable-next-line require-jsdoc
    get: function (target, prop) {
        return target[prop] || target.Gi;
    },
});
export var getMemorySize = function (sourceMemory) {
    var _a;
    if (typeof sourceMemory === 'string') {
        var _b = (_a = sourceMemory === null || sourceMemory === void 0 ? void 0 : sourceMemory.split) === null || _a === void 0 ? void 0 : _a.call(sourceMemory, /(\d+)/g).filter(Boolean), size = _b[0], unit = _b[1];
        return { size: +size || 0, unit: unitsConvertor[unit] };
    }
    return { size: +(sourceMemory === null || sourceMemory === void 0 ? void 0 : sourceMemory.size) || 0, unit: unitsConvertor[sourceMemory === null || sourceMemory === void 0 ? void 0 : sourceMemory.unit] };
};
export var memorySizesTypes = [GI, MI, TI];
//# sourceMappingURL=CpuMemoryUtils.js.map