import React from 'react';
import { getEvictionStrategy } from 'src/views/templates/utils/selectors';
import ShowEvictionStrategy from '@kubevirt-utils/components/EvictionStrategy/ShowEvictionStrategy';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import EvictionStrategyModal from './EvictionStrategyModal';
var EvictionStrategy = function (_a) {
    var editable = _a.editable, onSubmit = _a.onSubmit, template = _a.template;
    var createModal = useModal().createModal;
    var t = useKubevirtTranslation().t;
    var strategy = getEvictionStrategy(template) || t('No eviction strategy');
    var onEditClick = function () {
        return createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(EvictionStrategyModal, { isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, template: template }));
        });
    };
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(ShowEvictionStrategy, { evictionStrategy: strategy }), descriptionHeader: t('Eviction strategy'), isEdit: editable, onEditClick: onEditClick }));
};
export default EvictionStrategy;
//# sourceMappingURL=EvictionStrategy.js.map