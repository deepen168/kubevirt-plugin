import React from 'react';
import { getNodeSelector } from 'src/views/templates/utils/selectors';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import NodeSelectorDetailItem from '@kubevirt-utils/components/NodeSelectorDetailItem/NodeSelectorDetailItem';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import NodeSelectorModal from './NodeSelectorModal';
var NodeSelector = function (_a) {
    var editable = _a.editable, onSubmit = _a.onSubmit, template = _a.template;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var onEditClick = function () {
        return createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(NodeSelectorModal, { isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, template: template }));
        });
    };
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(NodeSelectorDetailItem, { nodeSelector: getNodeSelector(template) }), descriptionHeader: t('Node selector'), isEdit: editable, onEditClick: onEditClick }));
};
export default NodeSelector;
//# sourceMappingURL=NodeSelector.js.map