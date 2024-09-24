var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export var CPUInputType;
(function (CPUInputType) {
    CPUInputType["editTopologyManually"] = "editTopologyManually";
    CPUInputType["editVCPU"] = "editVCPU";
})(CPUInputType || (CPUInputType = {}));
export var CPUComponent;
(function (CPUComponent) {
    CPUComponent["cores"] = "cores";
    CPUComponent["sockets"] = "sockets";
    CPUComponent["threads"] = "threads";
})(CPUComponent || (CPUComponent = {}));
export var getUpdatedCPU = function (cpu, newValue, fieldChanged) {
    var _a;
    return __assign(__assign({}, cpu), (_a = {}, _a[fieldChanged] = newValue > 0 ? newValue : cpu === null || cpu === void 0 ? void 0 : cpu[fieldChanged], _a));
};
export var convertTopologyToVCPUs = function (cpu) {
    return (cpu === null || cpu === void 0 ? void 0 : cpu.cores) * (cpu === null || cpu === void 0 ? void 0 : cpu.sockets) * (cpu === null || cpu === void 0 ? void 0 : cpu.threads);
};
export var formatVCPUsAsSockets = function (cpu) {
    var numVCPUs = convertTopologyToVCPUs(cpu);
    return __assign(__assign({}, cpu), { cores: 1, sockets: numVCPUs, threads: 1 });
};
//# sourceMappingURL=utils.js.map