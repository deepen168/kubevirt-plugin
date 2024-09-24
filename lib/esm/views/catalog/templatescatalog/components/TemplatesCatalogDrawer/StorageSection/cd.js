var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { produceVMDisks } from '@catalog/utils/WizardVMContext';
import { getDisks, getVolumes } from '@kubevirt-utils/resources/vm';
import { ensurePath, removeDockerPrefix } from '@kubevirt-utils/utils/utils';
import { INSTALLATION_CDROM_DISK, INSTALLATION_CDROM_NAME } from './constants';
export var addInstallationCDRom = function (virtualMachine, cdSource) {
    var _a, _b;
    var cdVolume = undefined;
    var cdDataVolumeTemplate = undefined;
    var dataVolumeName = "".concat((_a = virtualMachine === null || virtualMachine === void 0 ? void 0 : virtualMachine.metadata) === null || _a === void 0 ? void 0 : _a.name, "-").concat(INSTALLATION_CDROM_NAME);
    if ('image' in cdSource) {
        cdVolume = {
            containerDisk: {
                image: removeDockerPrefix(cdSource.image),
            },
            name: INSTALLATION_CDROM_NAME,
        };
    }
    var cdDataVolumeSource = cdSource === null || cdSource === void 0 ? void 0 : cdSource.source;
    if (cdDataVolumeSource === null || cdDataVolumeSource === void 0 ? void 0 : cdDataVolumeSource.registry) {
        cdVolume = {
            containerDisk: {
                image: removeDockerPrefix(cdDataVolumeSource === null || cdDataVolumeSource === void 0 ? void 0 : cdDataVolumeSource.registry.url),
            },
            name: INSTALLATION_CDROM_NAME,
        };
    }
    else if ((cdDataVolumeSource === null || cdDataVolumeSource === void 0 ? void 0 : cdDataVolumeSource.http) || (cdDataVolumeSource === null || cdDataVolumeSource === void 0 ? void 0 : cdDataVolumeSource.pvc) || (cdDataVolumeSource === null || cdDataVolumeSource === void 0 ? void 0 : cdDataVolumeSource.upload)) {
        cdVolume = {
            dataVolume: {
                name: dataVolumeName,
            },
            name: INSTALLATION_CDROM_NAME,
        };
        cdDataVolumeTemplate = {
            metadata: { name: dataVolumeName },
            spec: { source: cdDataVolumeSource, storage: cdSource === null || cdSource === void 0 ? void 0 : cdSource.storage },
        };
    }
    if (!cdVolume)
        return virtualMachine;
    var virtualMachineOtherDataVolumes = (((_b = virtualMachine.spec) === null || _b === void 0 ? void 0 : _b.dataVolumeTemplates) || []).filter(function (dv) { return dv.metadata.name !== dataVolumeName; });
    var dataVolumeTemplates = cdDataVolumeTemplate
        ? __spreadArray(__spreadArray([], virtualMachineOtherDataVolumes, true), [cdDataVolumeTemplate], false) : virtualMachineOtherDataVolumes;
    return produceVMDisks(virtualMachine, function (draftVM) {
        var _a, _b;
        ensurePath(draftVM, 'spec.template.spec.domain.devices.disks');
        draftVM.spec.dataVolumeTemplates = dataVolumeTemplates;
        draftVM.spec.template.spec.domain.devices.disks =
            draftVM.spec.template.spec.domain.devices.disks.map(function (disk, index) { return (__assign(__assign({}, disk), { bootOrder: disk.name === INSTALLATION_CDROM_NAME ? 1 : 2 + index })); });
        if (!((_a = getDisks(draftVM)) === null || _a === void 0 ? void 0 : _a.find(function (disk) { return disk.name === INSTALLATION_CDROM_NAME; })))
            draftVM.spec.template.spec.domain.devices.disks.push(INSTALLATION_CDROM_DISK);
        var otherVolumes = (_b = (getVolumes(draftVM) || [])) === null || _b === void 0 ? void 0 : _b.filter(function (volume) { return volume.name !== INSTALLATION_CDROM_NAME; });
        draftVM.spec.template.spec.volumes = __spreadArray(__spreadArray([], otherVolumes, true), [cdVolume], false);
    });
};
export var removeCDInstallation = function (virtualMachine) {
    var _a;
    var cdVolume = (_a = getVolumes(virtualMachine)) === null || _a === void 0 ? void 0 : _a.find(function (volume) { return volume.name === INSTALLATION_CDROM_NAME; });
    if (!cdVolume)
        return virtualMachine;
    return produceVMDisks(virtualMachine, function (draftVM) {
        var _a, _b;
        if ((_a = cdVolume === null || cdVolume === void 0 ? void 0 : cdVolume.dataVolume) === null || _a === void 0 ? void 0 : _a.name)
            draftVM.spec.dataVolumeTemplates = (((_b = draftVM.spec) === null || _b === void 0 ? void 0 : _b.dataVolumeTemplates) || []).filter(function (dataVolume) { return dataVolume.metadata.name !== cdVolume.dataVolume.name; });
        draftVM.spec.template.spec.domain.devices.disks = getDisks(draftVM).filter(function (disk) { return disk.name !== INSTALLATION_CDROM_NAME; });
        draftVM.spec.template.spec.volumes = getVolumes(draftVM).filter(function (volume) { return volume.name !== INSTALLATION_CDROM_NAME; });
        draftVM.spec.template.spec.volumes.push(cdVolume);
    });
};
//# sourceMappingURL=cd.js.map