import { ConfigMapModel } from '@kubevirt-ui/kubevirt-api/console';
import { generateNewSysprepConfig, removeSysprepConfig, } from '@kubevirt-utils/components/SysprepModal/sysprep-utils';
import { getVolumes } from '@kubevirt-utils/resources/vm';
export var isSysprepConfig = function (name) { return function (object) { var _a; return ((_a = object === null || object === void 0 ? void 0 : object.metadata) === null || _a === void 0 ? void 0 : _a.name) === name && (object === null || object === void 0 ? void 0 : object.kind) === ConfigMapModel.kind; }; };
export var editSysprepObject = function (updateTabsData, sysprepName, sysprepData) {
    updateTabsData(function (tabsDraft) {
        var _a;
        var sysprepToEdit = (_a = tabsDraft === null || tabsDraft === void 0 ? void 0 : tabsDraft.additionalObjects) === null || _a === void 0 ? void 0 : _a.find(function (object) { var _a; return ((_a = object === null || object === void 0 ? void 0 : object.metadata) === null || _a === void 0 ? void 0 : _a.name) === sysprepName; });
        sysprepToEdit.data = sysprepData;
    });
};
export var pushSysprepObject = function (vm, updateTabsData, sysprepData, sysprepName) {
    updateTabsData(function (tabsDraft) {
        if (!(tabsDraft === null || tabsDraft === void 0 ? void 0 : tabsDraft.additionalObjects))
            tabsDraft.additionalObjects = [];
        tabsDraft.additionalObjects.push(generateNewSysprepConfig({ data: sysprepData, sysprepName: sysprepName }));
    });
};
export var removeSysprepObject = function (updateVM, updateTabsData, sysprepName) {
    var filterSysprepByName = isSysprepConfig(sysprepName);
    updateTabsData(function (tabsDraft) {
        tabsDraft.additionalObjects = ((tabsDraft === null || tabsDraft === void 0 ? void 0 : tabsDraft.additionalObjects) || []).filter(function (object) { return !filterSysprepByName(object); });
    });
    return updateVM(function (vmDraft) {
        var sysprepVolume = getVolumes(vmDraft).find(function (volume) { var _a, _b; return (_b = (_a = volume === null || volume === void 0 ? void 0 : volume.sysprep) === null || _a === void 0 ? void 0 : _a.configMap) === null || _b === void 0 ? void 0 : _b.name; });
        removeSysprepConfig(vmDraft, sysprepVolume.name);
    });
};
//# sourceMappingURL=sysprep-utils.js.map