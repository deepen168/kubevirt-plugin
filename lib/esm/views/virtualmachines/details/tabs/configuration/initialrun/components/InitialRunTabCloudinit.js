import React from 'react';
import { CloudInitDescription } from '@kubevirt-utils/components/CloudinitDescription/CloudInitDescription';
import CloudinitModal from '@kubevirt-utils/components/CloudinitModal/CloudinitModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var InitialRunTabCloudinit = function (_a) {
    var canUpdateVM = _a.canUpdateVM, onSubmit = _a.onSubmit, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    return (React.createElement(VirtualMachineDescriptionItem, { onEditClick: function () {
            return createModal(function (_a) {
                var isOpen = _a.isOpen, onClose = _a.onClose;
                return (React.createElement(CloudinitModal, { isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, vm: vm, vmi: vmi }));
            });
        }, descriptionData: React.createElement(CloudInitDescription, { vm: vm }), descriptionHeader: React.createElement(SearchItem, { id: "cloud-init" }, t('Cloud-init')), isEdit: canUpdateVM, showEditOnTitle: true }));
};
export default InitialRunTabCloudinit;
//# sourceMappingURL=InitialRunTabCloudinit.js.map