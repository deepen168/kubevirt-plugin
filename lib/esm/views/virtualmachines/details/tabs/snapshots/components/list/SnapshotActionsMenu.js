import React, { useCallback, useState } from 'react';
import VirtualMachineCloneModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineCloneModel';
import VirtualMachineSnapshotModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineSnapshotModel';
import CloneVMModal from '@kubevirt-utils/components/CloneVMModal/CloneVMModal';
import ConfirmActionMessage from '@kubevirt-utils/components/ConfirmActionMessage/ConfirmActionMessage';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import RestoreModal from '@kubevirt-utils/components/SnapshotModal/RestoreModal';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import KebabToggle from '@kubevirt-utils/components/toggles/KebabToggle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sDelete, useAccessReview } from '@openshift-console/dynamic-plugin-sdk';
import { ButtonVariant, Dropdown, DropdownItem, DropdownList } from '@patternfly/react-core';
var SnapshotActionsMenu = function (_a) {
    var isRestoreDisabled = _a.isRestoreDisabled, snapshot = _a.snapshot;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _b = useState(false), isDropdownOpen = _b[0], setIsDropdownOpen = _b[1];
    var canClone = useAccessReview({
        group: VirtualMachineCloneModel.apiGroup,
        namespace: snapshot.metadata.namespace,
        resource: VirtualMachineCloneModel.plural,
        verb: 'create',
    })[0];
    var deleteLabel = t('Delete snapshot');
    var onRestoreModalToggle = useCallback(function () {
        createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(RestoreModal, { isOpen: isOpen, onClose: onClose, snapshot: snapshot }));
        });
        setIsDropdownOpen(false);
    }, [createModal, snapshot]);
    var onClone = useCallback(function () {
        createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(CloneVMModal, { headerText: t('Create VirtualMachine from snapshot'), isOpen: isOpen, onClose: onClose, source: snapshot }));
        });
        setIsDropdownOpen(false);
    }, [createModal, snapshot, t]);
    var onDeleteModalToggle = useCallback(function () {
        createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(TabModal, { onSubmit: function (obj) {
                    return k8sDelete({
                        model: VirtualMachineSnapshotModel,
                        resource: obj,
                    });
                }, headerText: t('Delete VirtualMachineSnapshot?'), isOpen: isOpen, obj: snapshot, onClose: onClose, submitBtnText: deleteLabel, submitBtnVariant: ButtonVariant.danger },
                React.createElement(ConfirmActionMessage, { obj: snapshot })));
        });
        setIsDropdownOpen(false);
    }, [createModal, deleteLabel, snapshot, t]);
    var onToggle = function () { return setIsDropdownOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    return (React.createElement(Dropdown, { isOpen: isDropdownOpen, onSelect: function () { return setIsDropdownOpen(false); }, popperProps: { position: 'right' }, toggle: KebabToggle({ id: 'toggle-id-6', isExpanded: isDropdownOpen, onClick: onToggle }) },
        React.createElement(DropdownList, null,
            React.createElement(DropdownItem, { description: t('Create a copy of the VirtualMachine from snapshot'), isDisabled: !canClone, key: "snapshot-clone", onClick: onClone }, t('Create VirtualMachine')),
            React.createElement(DropdownItem, { description: t('Restore the VirtualMachine to this snapshot`s state'), isDisabled: isRestoreDisabled, key: "snapshot-restore", onClick: onRestoreModalToggle }, t('Restore VirtualMachine from snapshot')),
            React.createElement(DropdownItem, { key: "snapshot-delete", onClick: onDeleteModalToggle }, deleteLabel))));
};
export default SnapshotActionsMenu;
//# sourceMappingURL=SnapshotActionsMenu.js.map