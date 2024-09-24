import produce from 'immer';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { effect, signal } from '@preact/signals-react';
import { getCustomizeInstanceTypeSessionStorage, mergeData, saveCustomizeInstanceTypeSessionStorage, } from './customizeInstanceType/utils/utils';
export var vmSignal = signal(null);
effect(function () {
    if (!isEmpty(vmSignal.value)) {
        saveCustomizeInstanceTypeSessionStorage(vmSignal.value);
        return;
    }
    var vmSessionStorage = getCustomizeInstanceTypeSessionStorage();
    vmSignal.value = vmSessionStorage;
});
export var clearCustomizeInstanceType = function () {
    vmSignal.value = null;
    saveCustomizeInstanceTypeSessionStorage(null);
};
export var updateCustomizeInstanceType = function (updateValues) {
    var vm = vmSignal.value;
    updateValues.forEach(function (_a) {
        var data = _a.data, _b = _a.merge, merge = _b === void 0 ? false : _b, path = _a.path;
        //replace complete vm obj
        if (isEmpty(path)) {
            vm = data;
            return;
        }
        vm = produce(vm, function (vmDraft) {
            var pathParts = path.split('.');
            var obj = vmDraft;
            pathParts.forEach(function (part, index) {
                var _a;
                if (index < pathParts.length - 1) {
                    obj = (obj === null || obj === void 0 ? void 0 : obj[part]) ? obj[part] : Object.assign(obj, (_a = {}, _a[part] = {}, _a))[part];
                    return;
                }
                obj[part] = merge ? mergeData(obj[part], data) : data;
            });
        });
    });
    vmSignal.value = vm;
    return vmSignal.value;
};
export var updateVMCustomizeIT = function (vm) {
    return Promise.resolve(updateCustomizeInstanceType([{ data: vm }]));
};
//# sourceMappingURL=customizeInstanceType.js.map