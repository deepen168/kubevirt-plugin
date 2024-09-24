import React from 'react';
import { useState } from 'react';
import ConfirmActionMessage from '@kubevirt-utils/components/ConfirmActionMessage/ConfirmActionMessage';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { deleteNetworkInterface } from '@kubevirt-utils/components/NetworkInterfaceModal/utils/helpers';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import KebabToggle from '@kubevirt-utils/components/toggles/KebabToggle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Alert, AlertVariant, ButtonVariant, Dropdown, DropdownItem, DropdownList, } from '@patternfly/react-core';
import { isRunning } from '@virtualmachines/utils';
import VirtualMachinesEditNetworkInterfaceModal from '../modal/VirtualMachinesEditNetworkInterfaceModal';
var NetworkInterfaceActions = function (_a) {
    var _b;
    var nicName = _a.nicName, nicPresentation = _a.nicPresentation, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _c = useState(false), isDropdownOpen = _c[0], setIsDropdownOpen = _c[1];
    var deleteModalHeader = t('Delete NIC?');
    var editBtnText = t('Edit');
    var deleteBtnText = t('Delete');
    var isHotPlugNIC = Boolean((_b = nicPresentation === null || nicPresentation === void 0 ? void 0 : nicPresentation.iface) === null || _b === void 0 ? void 0 : _b.bridge);
    var onEditModalOpen = function () {
        createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(VirtualMachinesEditNetworkInterfaceModal, { isOpen: isOpen, nicPresentation: nicPresentation, onClose: onClose, vm: vm }));
        });
        setIsDropdownOpen(false);
    };
    var onDeleteModalOpen = function () {
        createModal(function (_a) {
            var _b;
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(TabModal, { headerText: deleteModalHeader, isOpen: isOpen, onClose: onClose, onSubmit: function () { return deleteNetworkInterface(vm, nicName, nicPresentation); }, submitBtnText: deleteBtnText, submitBtnVariant: ButtonVariant.danger },
                React.createElement("span", null,
                    isRunning(vm) && isHotPlugNIC && (React.createElement(Alert, { title: t('Deleting a network interface is supported only on VirtualMachines that were created in versions greater than 4.13.'), component: 'h6', isInline: true, variant: AlertVariant.warning })),
                    React.createElement("br", null),
                    React.createElement(ConfirmActionMessage, { obj: { metadata: { name: nicName, namespace: (_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.namespace } } }))));
        });
        setIsDropdownOpen(false);
    };
    var onToggle = function () { return setIsDropdownOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    return (React.createElement(Dropdown, { toggle: KebabToggle({
            id: 'toggle-id-6',
            isExpanded: isDropdownOpen,
            onClick: onToggle,
        }), isOpen: isDropdownOpen, onOpenChange: function (open) { return setIsDropdownOpen(open); }, onSelect: function () { return setIsDropdownOpen(false); }, popperProps: { position: 'right' } },
        React.createElement(DropdownList, null,
            React.createElement(DropdownItem, { key: "network-interface-edit", onClick: onEditModalOpen }, editBtnText),
            React.createElement(DropdownItem, { key: "network-interface-delete", onClick: onDeleteModalOpen }, deleteBtnText))));
};
export default NetworkInterfaceActions;
//# sourceMappingURL=NetworkInterfaceActions.js.map