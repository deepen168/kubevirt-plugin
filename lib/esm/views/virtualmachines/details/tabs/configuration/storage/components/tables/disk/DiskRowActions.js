import React, { useState } from 'react';
import DiskModal from '@kubevirt-utils/components/DiskModal/DiskModal';
import { produceVMDisks } from '@kubevirt-utils/components/DiskModal/utils/helpers';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import KebabToggle from '@kubevirt-utils/components/toggles/KebabToggle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName } from '@kubevirt-utils/resources/shared';
import { getDataVolumeTemplates, getDisks, getVolumes } from '@kubevirt-utils/resources/vm';
import { getContentScrollableElement } from '@kubevirt-utils/utils/utils';
import { ButtonVariant, Dropdown, DropdownItem, DropdownList } from '@patternfly/react-core';
import { updateDisks } from '@virtualmachines/details/tabs/configuration/details/utils/utils';
import { isRunning } from '@virtualmachines/utils';
import DeleteDiskModal from '../../modal/DeleteDiskModal';
import DetachModal from '../../modal/DetachModal';
import MakePersistentModal from '../../modal/MakePersistentModal';
import { isHotplugVolume, isPVCSource } from './utils/helpers';
var DiskRowActions = function (_a) {
    var _b;
    var _c = _a.customize, customize = _c === void 0 ? false : _c, obj = _a.obj, onDiskUpdate = _a.onDiskUpdate, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _d = useState(false), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];
    var diskName = obj === null || obj === void 0 ? void 0 : obj.name;
    var isVMRunning = isRunning(vm);
    var isHotplug = isHotplugVolume(vm, diskName, vmi);
    var volumes = isVMRunning ? (_b = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _b === void 0 ? void 0 : _b.volumes : getVolumes(vm);
    var volume = volumes === null || volumes === void 0 ? void 0 : volumes.find(function (_a) {
        var name = _a.name;
        return name === diskName;
    });
    var editBtnText = t('Edit');
    var deleteBtnText = t('Detach');
    var removeHotplugBtnText = t('Make persistent');
    var onCustomizeDeleteDisk = function () {
        var newVM = produceVMDisks(vm, function (draftVM) {
            var _a, _b, _c;
            var volumeToDelete = getVolumes(vm).find(function (v) { return v.name === diskName; });
            draftVM.spec.template.spec.domain.devices.disks = (_a = getDisks(draftVM)) === null || _a === void 0 ? void 0 : _a.filter(function (disk) { return disk.name !== volumeToDelete.name; });
            draftVM.spec.template.spec.volumes = (_b = getVolumes(draftVM)) === null || _b === void 0 ? void 0 : _b.filter(function (v) { return v.name !== volumeToDelete.name; });
            draftVM.spec.dataVolumeTemplates = (_c = getDataVolumeTemplates(draftVM)) === null || _c === void 0 ? void 0 : _c.filter(function (dataVolume) { var _a; return getName(dataVolume) !== ((_a = volumeToDelete === null || volumeToDelete === void 0 ? void 0 : volumeToDelete.dataVolume) === null || _a === void 0 ? void 0 : _a.name); });
        });
        return onDiskUpdate(newVM);
    };
    var createEditDiskModal = function () {
        return createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(DiskModal, { createdPVCName: isPVCSource(obj) ? obj === null || obj === void 0 ? void 0 : obj.source : null, editDiskName: diskName, isOpen: isOpen, onClose: onClose, onSubmit: onDiskUpdate || updateDisks, vm: vm }));
        });
    };
    var createDeleteDiskModal = function () {
        return createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return customize ? (React.createElement(DetachModal, { diskName: diskName, headerText: t('Detach disk?'), isOpen: isOpen, obj: vm, onClose: onClose, onSubmit: onCustomizeDeleteDisk, submitBtnText: deleteBtnText, submitBtnVariant: ButtonVariant.danger })) : (React.createElement(DeleteDiskModal, { isHotPluginVolume: isHotplug, isOpen: isOpen, onClose: onClose, vm: vm, volume: volume }));
        });
    };
    var makePersistent = function () {
        return createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(MakePersistentModal, { isOpen: isOpen, onClose: onClose, vm: vm, volume: volume }));
        });
    };
    var onModalOpen = function (createModalCallback) {
        createModalCallback();
        setIsDropdownOpen(false);
    };
    var onToggle = function () { return setIsDropdownOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    return (React.createElement(Dropdown, { isOpen: isDropdownOpen, onOpenChange: function (open) { return setIsDropdownOpen(open); }, onSelect: function () { return setIsDropdownOpen(false); }, popperProps: { appendTo: getContentScrollableElement, position: 'right' }, toggle: KebabToggle({ id: 'toggle-id-6', isExpanded: isDropdownOpen, onClick: onToggle }) },
        React.createElement(DropdownList, null,
            React.createElement(DropdownItem, { key: "disk-edit", onClick: function () { return onModalOpen(createEditDiskModal); } }, editBtnText),
            React.createElement(DropdownItem, { key: "disk-delete", onClick: function () { return onModalOpen(createDeleteDiskModal); } }, deleteBtnText),
            isHotplug && (React.createElement(DropdownItem, { description: t('Will make disk persistent on next reboot'), key: "make-persistent", onClick: function () { return onModalOpen(makePersistent); } }, removeHotplugBtnText)))));
};
export default DiskRowActions;
//# sourceMappingURL=DiskRowActions.js.map