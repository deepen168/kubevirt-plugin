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
import produce from 'immer';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { buildOwnerReference, getAnnotation, getName, getNamespace, } from '@kubevirt-utils/resources/shared';
import { ANNOTATIONS } from '@kubevirt-utils/resources/template';
import { getBootDisk, getDataVolumeTemplates, getVolumes } from '@kubevirt-utils/resources/vm';
import { getOperatingSystem } from '@kubevirt-utils/resources/vm/utils/operation-system/operationSystem';
import { ensurePath, isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sCreate } from '@openshift-console/dynamic-plugin-sdk';
import { addPersistentVolume, removeVolume } from '@virtualmachines/actions/actions';
import { InterfaceTypes, SourceTypes } from './types';
export var getEmptyVMDataVolumeResource = function (vm, createOwnerReference) {
    var _a, _b;
    return ({
        apiVersion: "".concat(DataVolumeModel.apiGroup, "/").concat(DataVolumeModel.apiVersion),
        kind: DataVolumeModel.kind,
        metadata: __assign({ name: '', namespace: (_a = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _a === void 0 ? void 0 : _a.namespace }, ((createOwnerReference !== null && createOwnerReference !== void 0 ? createOwnerReference : (_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.uid)
            ? { ownerReferences: [buildOwnerReference(vm, { blockOwnerDeletion: false })] }
            : {})),
        spec: {
            storage: {
                resources: {
                    requests: {
                        storage: '',
                    },
                },
            },
        },
    });
};
export var getRemoveHotplugPromise = function (vm, diskName) {
    var bodyRequestRemoveVolume = {
        name: diskName,
    };
    return removeVolume(vm, bodyRequestRemoveVolume);
};
export var checkDifferentStorageClassFromBootPVC = function (vm, selectedStorageClass) {
    var _a, _b, _c, _d, _e, _f, _g;
    var bootDiskName = (_a = getBootDisk(vm)) === null || _a === void 0 ? void 0 : _a.name;
    var bootVolume = getVolumes(vm).find(function (vol) { return (vol === null || vol === void 0 ? void 0 : vol.name) === bootDiskName; });
    var bootDVT = (_b = getDataVolumeTemplates(vm)) === null || _b === void 0 ? void 0 : _b.find(function (dvt) { var _a; return getName(dvt) === ((_a = bootVolume === null || bootVolume === void 0 ? void 0 : bootVolume.dataVolume) === null || _a === void 0 ? void 0 : _a.name); });
    var source = Boolean(((_d = (_c = bootDVT === null || bootDVT === void 0 ? void 0 : bootDVT.spec) === null || _c === void 0 ? void 0 : _c.source) === null || _d === void 0 ? void 0 : _d.pvc) || ((_e = bootDVT === null || bootDVT === void 0 ? void 0 : bootDVT.spec) === null || _e === void 0 ? void 0 : _e.sourceRef));
    return source && ((_g = (_f = bootDVT === null || bootDVT === void 0 ? void 0 : bootDVT.spec) === null || _f === void 0 ? void 0 : _f.storage) === null || _g === void 0 ? void 0 : _g.storageClassName) !== selectedStorageClass;
};
export var getRunningVMMissingDisksFromVMI = function (vmDisks, vmi) {
    var _a, _b, _c, _d;
    var vmDiskNames = vmDisks === null || vmDisks === void 0 ? void 0 : vmDisks.map(function (disk) { return disk === null || disk === void 0 ? void 0 : disk.name; });
    var missingDisksFromVMI = (_d = (((_c = (_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.domain) === null || _b === void 0 ? void 0 : _b.devices) === null || _c === void 0 ? void 0 : _c.disks) || [])) === null || _d === void 0 ? void 0 : _d.filter(function (disk) { return !(vmDiskNames === null || vmDiskNames === void 0 ? void 0 : vmDiskNames.includes(disk === null || disk === void 0 ? void 0 : disk.name)); });
    return missingDisksFromVMI || [];
};
export var getRunningVMMissingVolumesFromVMI = function (vmVolumes, vmi) {
    var _a, _b;
    var vmVolumeNames = vmVolumes === null || vmVolumes === void 0 ? void 0 : vmVolumes.map(function (vol) { return vol === null || vol === void 0 ? void 0 : vol.name; });
    var missingVolumesFromVMI = (_b = (((_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.volumes) || [])) === null || _b === void 0 ? void 0 : _b.filter(function (vol) { return !(vmVolumeNames === null || vmVolumeNames === void 0 ? void 0 : vmVolumeNames.includes(vol === null || vol === void 0 ? void 0 : vol.name)); });
    return missingVolumesFromVMI || [];
};
var getDataVolumeHotplugPromise = function (vm, resultDataVolume, resultDisk) {
    var bodyRequestAddVolume = {
        disk: resultDisk,
        name: resultDisk.name,
        volumeSource: {
            dataVolume: {
                name: resultDataVolume.metadata.name,
            },
        },
    };
    return k8sCreate({
        data: resultDataVolume,
        model: DataVolumeModel,
        ns: getNamespace(resultDataVolume),
    }).then(function () { return addPersistentVolume(vm, bodyRequestAddVolume); });
};
var getPersistentVolumeClaimHotplugPromise = function (vm, pvcName, resultDisk) {
    var bodyRequestAddVolume = {
        disk: resultDisk,
        name: resultDisk.name,
        volumeSource: {
            dataVolume: {
                name: pvcName,
            },
        },
    };
    return addPersistentVolume(vm, bodyRequestAddVolume);
};
export var hotplugPromise = function (vmObj, diskState) {
    var _a, _b, _c;
    var diskSource = getSourceFromVolume(diskState.volume, diskState.dataVolumeTemplate);
    if (diskSource === SourceTypes.PVC) {
        return getPersistentVolumeClaimHotplugPromise(vmObj, (_b = (_a = diskState === null || diskState === void 0 ? void 0 : diskState.volume) === null || _a === void 0 ? void 0 : _a.persistentVolumeClaim) === null || _b === void 0 ? void 0 : _b.claimName, diskState.disk);
    }
    if (diskSource === SourceTypes.UPLOAD) {
        var pvcName = "".concat((_c = vmObj === null || vmObj === void 0 ? void 0 : vmObj.metadata) === null || _c === void 0 ? void 0 : _c.name, "-").concat(diskState.disk.name);
        return getPersistentVolumeClaimHotplugPromise(vmObj, pvcName, diskState.disk);
    }
    var dataVolume = produce(diskState.dataVolumeTemplate, function (draftDataVolumeTemplate) {
        draftDataVolumeTemplate.metadata.ownerReferences = [
            buildOwnerReference(vmObj, { blockOwnerDeletion: false }),
        ];
        draftDataVolumeTemplate.metadata.namespace = getNamespace(vmObj);
        draftDataVolumeTemplate.kind = DataVolumeModel.kind;
        draftDataVolumeTemplate.apiVersion = "".concat(DataVolumeModel.apiGroup, "/").concat(DataVolumeModel.apiVersion);
    });
    return getDataVolumeHotplugPromise(vmObj, dataVolume, diskState.disk);
};
export var produceVMDisks = function (vm, updateDisks) {
    return produce(vm, function (draftVM) {
        ensurePath(draftVM, ['spec.template.spec.domain.devices']);
        if (!draftVM.spec.template.spec.domain.devices.disks)
            draftVM.spec.template.spec.domain.devices.disks = [];
        if (!draftVM.spec.template.spec.volumes)
            draftVM.spec.template.spec.volumes = [];
        if (!draftVM.spec.dataVolumeTemplates)
            draftVM.spec.dataVolumeTemplates = [];
        updateDisks(draftVM);
    });
};
export var getDefaultDiskType = function (isVMRunning) {
    return isVMRunning ? InterfaceTypes.SCSI : InterfaceTypes.VIRTIO;
};
export var doesSourceRequireDataVolume = function (diskSource) {
    return [
        SourceTypes.BLANK,
        SourceTypes.CLONE_PVC,
        SourceTypes.DATA_SOURCE,
        SourceTypes.HTTP,
        SourceTypes.REGISTRY,
        SourceTypes.UPLOAD,
        SourceTypes.VOLUME_SNAPSHOT,
    ].includes(diskSource);
};
export var getSourceFromVolume = function (volume, dataVolumeTemplate) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    if ((_b = (_a = dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.spec) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.http)
        return SourceTypes.HTTP;
    if ((_d = (_c = dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.spec) === null || _c === void 0 ? void 0 : _c.source) === null || _d === void 0 ? void 0 : _d.pvc)
        return SourceTypes.CLONE_PVC;
    if ((_f = (_e = dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.spec) === null || _e === void 0 ? void 0 : _e.source) === null || _f === void 0 ? void 0 : _f.registry)
        return SourceTypes.REGISTRY;
    if ((_h = (_g = dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.spec) === null || _g === void 0 ? void 0 : _g.source) === null || _h === void 0 ? void 0 : _h.blank)
        return SourceTypes.BLANK;
    if ((_k = (_j = dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.spec) === null || _j === void 0 ? void 0 : _j.source) === null || _k === void 0 ? void 0 : _k.upload)
        return SourceTypes.UPLOAD;
    if ((_m = (_l = dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.spec) === null || _l === void 0 ? void 0 : _l.source) === null || _m === void 0 ? void 0 : _m.snapshot)
        return SourceTypes.VOLUME_SNAPSHOT;
    if ((_o = dataVolumeTemplate === null || dataVolumeTemplate === void 0 ? void 0 : dataVolumeTemplate.spec) === null || _o === void 0 ? void 0 : _o.sourceRef)
        return SourceTypes.DATA_SOURCE;
    if (volume === null || volume === void 0 ? void 0 : volume.persistentVolumeClaim)
        return SourceTypes.PVC;
    if (volume === null || volume === void 0 ? void 0 : volume.containerDisk)
        return SourceTypes.EPHEMERAL;
    return SourceTypes.OTHER;
};
export var diskModalTitle = function (isEditDisk, isVMRunning) {
    if (isEditDisk)
        return t('Edit disk');
    return isVMRunning ? t('Add disk (hot plugged)') : t('Add disk');
};
export var getOS = function (vm) { var _a; return getAnnotation((_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template, ANNOTATIONS.os) || getOperatingSystem(vm); };
export var doesDataVolumeTemplateHaveDisk = function (vm, diskName) {
    var _a, _b;
    var diskVolume = (_a = getVolumes(vm)) === null || _a === void 0 ? void 0 : _a.find(function (volume) { return volume.name === diskName; });
    var dataVolumeTemplate = (_b = getDataVolumeTemplates(vm)) === null || _b === void 0 ? void 0 : _b.find(function (dv) { var _a; return getName(dv) === ((_a = diskVolume === null || diskVolume === void 0 ? void 0 : diskVolume.dataVolume) === null || _a === void 0 ? void 0 : _a.name); });
    return !isEmpty(dataVolumeTemplate);
};
//# sourceMappingURL=helpers.js.map