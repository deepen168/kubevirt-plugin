import React, { useCallback, useState } from 'react';
import { produceVMDisks } from '@catalog/utils/WizardVMContext';
import ConfirmActionMessage from '@kubevirt-utils/components/ConfirmActionMessage/ConfirmActionMessage';
import DiskModal from '@kubevirt-utils/components/DiskModal/DiskModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import KebabToggle from '@kubevirt-utils/components/toggles/KebabToggle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getContentScrollableElement } from '@kubevirt-utils/utils/utils';
import { ButtonVariant, Dropdown, DropdownItem, DropdownList } from '@patternfly/react-core';
var DiskRowActions = function (_a) {
    var diskName = _a.diskName, isDisabled = _a.isDisabled, onUpdate = _a.onUpdate, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _b = useState(false), isDropdownOpen = _b[0], setIsDropdownOpen = _b[1];
    var deleteBtnText = t('Detach');
    var onDelete = useCallback(function () {
        var vmWithDeletedDisk = produceVMDisks(vm, function (draftVM) {
            var _a;
            var volumeToDelete = draftVM.spec.template.spec.volumes.find(function (volume) { return volume.name === diskName; });
            if ((_a = volumeToDelete === null || volumeToDelete === void 0 ? void 0 : volumeToDelete.dataVolume) === null || _a === void 0 ? void 0 : _a.name) {
                draftVM.spec.dataVolumeTemplates = draftVM.spec.dataVolumeTemplates.filter(function (dataVolume) { return dataVolume.metadata.name !== volumeToDelete.dataVolume.name; });
            }
            draftVM.spec.template.spec.volumes = draftVM.spec.template.spec.volumes.filter(function (volume) { return volume.name !== diskName; });
            draftVM.spec.template.spec.domain.devices.disks =
                draftVM.spec.template.spec.domain.devices.disks.filter(function (disk) { return disk.name !== diskName; });
        });
        return onUpdate(vmWithDeletedDisk);
    }, [diskName, onUpdate, vm]);
    var onDeleteModalToggle = function () {
        createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(TabModal, { headerText: t('Detach disk?'), isOpen: isOpen, obj: vm, onClose: onClose, onSubmit: onDelete, submitBtnText: deleteBtnText, submitBtnVariant: ButtonVariant.danger },
                React.createElement(ConfirmActionMessage, { action: "detach", obj: { metadata: { name: diskName } } })));
        });
    };
    var onEditModalToggle = function () {
        createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(DiskModal, { editDiskName: diskName, isOpen: isOpen, onClose: onClose, onSubmit: onUpdate, vm: vm }));
        });
    };
    var onToggle = function () { return setIsDropdownOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    return (React.createElement(Dropdown, { isOpen: isDropdownOpen, onOpenChange: function (open) { return setIsDropdownOpen(open); }, onSelect: function () { return setIsDropdownOpen(false); }, popperProps: { appendTo: getContentScrollableElement, position: 'right' }, toggle: KebabToggle({ id: 'toggle-id-disk', isDisabled: isDisabled, onClick: onToggle }) },
        React.createElement(DropdownList, null,
            React.createElement(DropdownItem, { key: "disk-edit", onClick: onEditModalToggle }, t('Edit')),
            React.createElement(DropdownItem, { key: "disk-delete", onClick: onDeleteModalToggle }, deleteBtnText))));
};
export default DiskRowActions;
//# sourceMappingURL=DiskRowActions.js.map