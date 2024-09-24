var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useCallback, useState } from 'react';
import { produceVMDisks, useWizardVMContext } from '@catalog/utils/WizardVMContext';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import ConfirmActionMessage from '@kubevirt-utils/components/ConfirmActionMessage/ConfirmActionMessage';
import DiskModal from '@kubevirt-utils/components/DiskModal/DiskModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import KebabToggle from '@kubevirt-utils/components/toggles/KebabToggle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ensurePath, kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { k8sDelete } from '@openshift-console/dynamic-plugin-sdk';
import { ButtonVariant, Dropdown, DropdownItem, DropdownList } from '@patternfly/react-core';
var DiskRowActions = function (_a) {
    var _b;
    var diskName = _a.diskName;
    var t = useKubevirtTranslation().t;
    var _c = useWizardVMContext(), tabsData = _c.tabsData, updateTabsData = _c.updateTabsData, updateVM = _c.updateVM, vm = _c.vm;
    var createModal = useModal().createModal;
    var _d = useState(false), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];
    var deleteBtnText = t('Detach');
    var onDelete = useCallback(function () {
        var _a, _b;
        var volumeToDelete = vm.spec.template.spec.volumes.find(function (volume) { return volume.name === diskName; });
        var vmWithDeletedDisk = produceVMDisks(vm, function (draftVM) {
            var _a;
            if ((_a = volumeToDelete === null || volumeToDelete === void 0 ? void 0 : volumeToDelete.dataVolume) === null || _a === void 0 ? void 0 : _a.name) {
                draftVM.spec.dataVolumeTemplates = draftVM.spec.dataVolumeTemplates.filter(function (dataVolume) { return dataVolume.metadata.name !== volumeToDelete.dataVolume.name; });
            }
            draftVM.spec.template.spec.volumes = draftVM.spec.template.spec.volumes.filter(function (volume) { return volume.name !== diskName; });
            draftVM.spec.template.spec.domain.devices.disks =
                draftVM.spec.template.spec.domain.devices.disks.filter(function (disk) { return disk.name !== diskName; });
        });
        // check if disk has a created dataVolume that needs to be deleted (mainly for uploads)
        var dataVolumeToDelete = (_b = (_a = tabsData === null || tabsData === void 0 ? void 0 : tabsData.disks) === null || _a === void 0 ? void 0 : _a.dataVolumesToAddOwnerRef) === null || _b === void 0 ? void 0 : _b.find(function (dv) { return dv.metadata.name === volumeToDelete.persistentVolumeClaim.claimName; });
        if (dataVolumeToDelete) {
            return k8sDelete({
                model: DataVolumeModel,
                resource: dataVolumeToDelete,
            })
                .catch(kubevirtConsole.error)
                .finally(function () { return updateVM(vmWithDeletedDisk); });
        }
        return updateVM(vmWithDeletedDisk);
    }, [diskName, (_b = tabsData === null || tabsData === void 0 ? void 0 : tabsData.disks) === null || _b === void 0 ? void 0 : _b.dataVolumesToAddOwnerRef, updateVM, vm]);
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
            return (React.createElement(DiskModal, { onUploadedDataVolume: function (dataVolume) {
                    return updateTabsData(function (draft) {
                        var _a;
                        ensurePath(draft, 'disks.dataVolumesToAddOwnerRef');
                        if (draft.disks) {
                            draft.disks.dataVolumesToAddOwnerRef = __spreadArray(__spreadArray([], (((_a = tabsData === null || tabsData === void 0 ? void 0 : tabsData.disks) === null || _a === void 0 ? void 0 : _a.dataVolumesToAddOwnerRef) || []), true), [
                                dataVolume,
                            ], false);
                        }
                    });
                }, editDiskName: diskName, isOpen: isOpen, onClose: onClose, onSubmit: updateVM, vm: vm }));
        });
    };
    var onToggle = function () { return setIsDropdownOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    return (React.createElement(Dropdown, { isOpen: isDropdownOpen, onOpenChange: function (open) { return setIsDropdownOpen(open); }, onSelect: function () { return setIsDropdownOpen(false); }, toggle: KebabToggle({ id: 'toggle-id-disk', onClick: onToggle }) },
        React.createElement(DropdownList, null,
            React.createElement(DropdownItem, { key: "disk-edit", onClick: onEditModalToggle }, t('Edit')),
            React.createElement(DropdownItem, { key: "disk-delete", onClick: onDeleteModalToggle }, deleteBtnText))));
};
export default DiskRowActions;
//# sourceMappingURL=DiskRowActions.js.map