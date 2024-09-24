import produce from 'immer';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
export var getTemplateVMWithNamespace = function (template) {
    var vm = getTemplateVirtualMachineObject(template);
    if (vm) {
        return produce(vm, function (draftVM) {
            var _a, _b;
            draftVM.metadata.namespace =
                ((_a = draftVM === null || draftVM === void 0 ? void 0 : draftVM.metadata) === null || _a === void 0 ? void 0 : _a.namespace) || ((_b = template === null || template === void 0 ? void 0 : template.metadata) === null || _b === void 0 ? void 0 : _b.namespace) || 'default';
        });
    }
};
//# sourceMappingURL=utils.js.map