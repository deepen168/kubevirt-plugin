import React from 'react';
import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { getDataVolumeTemplates, getVolumes } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import usePVCDiskSource from './hooks/usePVCDiskSource';
import { modalsBySource } from './utils/constants';
import { getSourceFromVolume } from './utils/helpers';
var DiskModal = function (_a) {
    var _b, _c;
    var createDiskSource = _a.createDiskSource, createdPVCName = _a.createdPVCName, editDiskName = _a.editDiskName, isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, onUploadedDataVolume = _a.onUploadedDataVolume, vm = _a.vm;
    var diskVolume = (_b = getVolumes(vm)) === null || _b === void 0 ? void 0 : _b.find(function (volume) { return volume.name === editDiskName; });
    var dataVolumeTemplate = (_c = getDataVolumeTemplates(vm)) === null || _c === void 0 ? void 0 : _c.find(function (dv) { var _a; return getName(dv) === ((_a = diskVolume === null || diskVolume === void 0 ? void 0 : diskVolume.dataVolume) === null || _a === void 0 ? void 0 : _a.name); });
    var namespace = getNamespace(vm);
    var pvc = usePVCDiskSource(createdPVCName, namespace)[0];
    var editDiskSource = getSourceFromVolume(diskVolume, dataVolumeTemplate);
    var Modal = modalsBySource[createDiskSource || editDiskSource];
    return (React.createElement(Modal, { createDiskSource: createDiskSource, editDiskName: editDiskName, isCreated: !isEmpty(createdPVCName), isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, onUploadedDataVolume: onUploadedDataVolume, pvc: pvc, vm: vm }));
};
export default DiskModal;
//# sourceMappingURL=DiskModal.js.map