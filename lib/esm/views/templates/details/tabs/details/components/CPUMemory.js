import React, { useCallback } from 'react';
import { useVirtualMachineTemplatesCPUMemory } from 'src/views/templates/list/hooks/useVirtualMachineTemplatesCPUMemory';
import CPUDescription from '@kubevirt-utils/components/CPUDescription/CPUDescription';
import { CpuMemHelperTextResources } from '@kubevirt-utils/components/CPUDescription/utils/utils';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { TemplateModel } from '@kubevirt-utils/models';
import { getTemplateVirtualMachineCPU } from '@kubevirt-utils/resources/template';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import CPUMemoryModal from './CPUMemoryModal/CPUMemoryModal';
var CPUMemory = function (_a) {
    var editable = _a.editable, template = _a.template;
    var t = useKubevirtTranslation().t;
    var CPUMemData = useVirtualMachineTemplatesCPUMemory(template);
    var createModal = useModal().createModal;
    var onSubmitCPU = useCallback(function (updatedTemplate) {
        var _a, _b;
        return k8sUpdate({
            data: updatedTemplate,
            model: TemplateModel,
            name: (_a = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _a === void 0 ? void 0 : _a.name,
            ns: (_b = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        });
    }, []);
    var onEditClick = function () {
        return createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(CPUMemoryModal, { isOpen: isOpen, onClose: onClose, onSubmit: onSubmitCPU, template: template }));
        });
    };
    return (React.createElement(VirtualMachineDescriptionItem, { bodyContent: React.createElement(CPUDescription, { cpu: getTemplateVirtualMachineCPU(template), helperTextResource: CpuMemHelperTextResources.Template }), descriptionData: CPUMemData, descriptionHeader: t('CPU | Memory'), isEdit: editable, isPopover: true, onEditClick: onEditClick }));
};
export default CPUMemory;
//# sourceMappingURL=CPUMemory.js.map