import React, { useCallback, useState } from 'react';
import { produceVMNetworks, useWizardVMContext } from '@catalog/utils/WizardVMContext';
import ConfirmActionMessage from '@kubevirt-utils/components/ConfirmActionMessage/ConfirmActionMessage';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import KebabToggle from '@kubevirt-utils/components/toggles/KebabToggle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getInterfaces, getNetworks } from '@kubevirt-utils/resources/vm';
import { vmSignal } from '@kubevirt-utils/store/customizeInstanceType';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ButtonVariant, Dropdown, DropdownItem, DropdownList } from '@patternfly/react-core';
import WizardEditNetworkInterfaceModal from '../modal/WizardEditNetworkInterfaceModal';
var NetworkInterfaceActions = function (_a) {
    var nicName = _a.nicName, nicPresentation = _a.nicPresentation, onUpdateVM = _a.onUpdateVM;
    var t = useKubevirtTranslation().t;
    var _b = useWizardVMContext(), updateVM = _b.updateVM, vmContext = _b.vm;
    var createModal = useModal().createModal;
    var vm = vmSignal.value || vmContext;
    var onUpdate = onUpdateVM || updateVM;
    var _c = useState(false), isDropdownOpen = _c[0], setIsDropdownOpen = _c[1];
    var label = t('Delete NIC?');
    var editBtnText = t('Edit');
    var submitBtnText = t('Delete');
    var onEditModalOpen = function () {
        createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(WizardEditNetworkInterfaceModal, { isOpen: isOpen, nicPresentation: nicPresentation, onClose: onClose, updateVM: onUpdate, vm: vm }));
        });
        setIsDropdownOpen(false);
    };
    var onDelete = useCallback(function () {
        var updatedVM = produceVMNetworks(vm, function (draftVM) {
            var _a;
            var vmInterfaces = getInterfaces(draftVM);
            if (isEmpty(vmInterfaces)) {
                draftVM.spec.template.spec.domain.devices.autoattachPodInterface = false;
                return;
            }
            draftVM.spec.template.spec.networks = (_a = getNetworks(draftVM)) === null || _a === void 0 ? void 0 : _a.filter(function (_a) {
                var name = _a.name;
                return name !== nicName;
            });
            draftVM.spec.template.spec.domain.devices.interfaces = vmInterfaces === null || vmInterfaces === void 0 ? void 0 : vmInterfaces.filter(function (_a) {
                var name = _a.name;
                return name !== nicName;
            });
        });
        return onUpdate(updatedVM);
    }, [nicName, onUpdate, vm]);
    var onDeleteModalToggle = function () {
        createModal(function (_a) {
            var _b;
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(TabModal, { headerText: label, isOpen: isOpen, obj: vm, onClose: onClose, onSubmit: onDelete, submitBtnText: submitBtnText, submitBtnVariant: ButtonVariant.danger },
                React.createElement(ConfirmActionMessage, { obj: { metadata: { name: nicName, namespace: (_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.namespace } } })));
        });
        setIsDropdownOpen(false);
    };
    var onToggle = function () { return setIsDropdownOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    return (React.createElement(Dropdown, { isOpen: isDropdownOpen, onOpenChange: function (open) { return setIsDropdownOpen(open); }, onSelect: function () { return setIsDropdownOpen(false); }, toggle: KebabToggle({ id: 'toggle-id-network', onClick: onToggle }) },
        React.createElement(DropdownList, null,
            React.createElement(DropdownItem, { key: "network-interface-edit", onClick: onEditModalOpen }, editBtnText),
            React.createElement(DropdownItem, { key: "network-interface-delete", onClick: onDeleteModalToggle }, submitBtnText))));
};
export default NetworkInterfaceActions;
//# sourceMappingURL=NetworkInterfaceActions.js.map