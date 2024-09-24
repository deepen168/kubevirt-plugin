import React from 'react';
import { isDedicatedCPUPlacement } from 'src/views/templates/utils/utils';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import DedicatedResourcesModal from './DedicatedResourcesModal';
var DedicatedResources = function (_a) {
    var editable = _a.editable, onSubmit = _a.onSubmit, template = _a.template;
    var createModal = useModal().createModal;
    var t = useKubevirtTranslation().t;
    var dedicatedResourcesText = isDedicatedCPUPlacement(template)
        ? t('Workload scheduled with dedicated resources (guaranteed policy)')
        : t('No dedicated resources applied');
    var onEditClick = function () {
        return createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(DedicatedResourcesModal, { isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, template: template }));
        });
    };
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: dedicatedResourcesText, descriptionHeader: t('Dedicated resources'), isEdit: editable, onEditClick: onEditClick }));
};
export default DedicatedResources;
//# sourceMappingURL=DedicatedResources.js.map