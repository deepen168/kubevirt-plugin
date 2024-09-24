import DurationOption from '@kubevirt-utils/components/DurationOption/DurationOption';
export var getFilteredDurationVMIMS = function (vmims, selectedDuration) {
    var filteredVMIMS = (vmims || []).filter(function (vmim) {
        var _a;
        var vmimCreateDurationMs = new Date().getTime() - new Date((_a = vmim === null || vmim === void 0 ? void 0 : vmim.metadata) === null || _a === void 0 ? void 0 : _a.creationTimestamp).getTime();
        if (vmimCreateDurationMs < (DurationOption === null || DurationOption === void 0 ? void 0 : DurationOption.getMilliseconds(selectedDuration)))
            return vmim;
    });
    return filteredVMIMS;
};
export var getMigrationsTableData = function (vmims, vmis, mps, migrationsDefaultConfigurations, selectedDuration) {
    var filteredVMIMS = getFilteredDurationVMIMS(vmims, selectedDuration);
    var migrationsData = (filteredVMIMS || []).map(function (vmim) {
        var _a, _b, _c;
        var vmiObj = (vmis || []).find(function (vmi) {
            var _a, _b, _c, _d;
            return ((_a = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _a === void 0 ? void 0 : _a.name) === ((_b = vmim === null || vmim === void 0 ? void 0 : vmim.spec) === null || _b === void 0 ? void 0 : _b.vmiName) &&
                ((_c = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _c === void 0 ? void 0 : _c.namespace) === ((_d = vmim === null || vmim === void 0 ? void 0 : vmim.metadata) === null || _d === void 0 ? void 0 : _d.namespace);
        });
        var mpObj = ((_b = (_a = vmiObj === null || vmiObj === void 0 ? void 0 : vmiObj.status) === null || _a === void 0 ? void 0 : _a.migrationState) === null || _b === void 0 ? void 0 : _b.migrationPolicyName)
            ? (mps || []).find(function (mp) { var _a, _b, _c; return ((_a = mp === null || mp === void 0 ? void 0 : mp.metadata) === null || _a === void 0 ? void 0 : _a.name) === ((_c = (_b = vmiObj === null || vmiObj === void 0 ? void 0 : vmiObj.status) === null || _b === void 0 ? void 0 : _b.migrationState) === null || _c === void 0 ? void 0 : _c.migrationPolicyName); })
            : null;
        return {
            metadata: { name: (_c = vmim === null || vmim === void 0 ? void 0 : vmim.metadata) === null || _c === void 0 ? void 0 : _c.name },
            migrationsDefaultConfigurations: migrationsDefaultConfigurations,
            mpObj: mpObj,
            vmim: vmim,
            vmiObj: vmiObj,
        };
    });
    return migrationsData || [];
};
//# sourceMappingURL=utils.js.map