import { produceVMNetworks } from '@catalog/utils/WizardVMContext';
import { getTemplateVirtualMachineObject, replaceTemplateVM, } from '@kubevirt-utils/resources/template';
export var produceTemplateNetwork = function (template, updateNetwork) {
    var vm = getTemplateVirtualMachineObject(template);
    var updatedVM = produceVMNetworks(vm, updateNetwork);
    return replaceTemplateVM(template, updatedVM);
};
//# sourceMappingURL=utils.js.map