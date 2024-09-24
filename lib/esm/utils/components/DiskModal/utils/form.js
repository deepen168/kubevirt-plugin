var _a;
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import { getName } from '@kubevirt-utils/resources/shared';
import { getBootDisk, getDataVolumeTemplates, getDisks, getVolumes, } from '@kubevirt-utils/resources/vm';
import { isInstanceTypeVM } from '@kubevirt-utils/resources/vm/utils/instanceTypes';
import { generatePrettyName, isEmpty } from '@kubevirt-utils/utils/utils';
import { isRunning } from '@virtualmachines/utils';
import { DEFAULT_DISK_SIZE } from './constants';
import { doesSourceRequireDataVolume, getDefaultDiskType } from './helpers';
import { SourceTypes } from './types';
var getDefaultDataVolumeTemplate = function (name) { return ({
    metadata: { name: name },
    spec: { source: {}, storage: { resources: { requests: { storage: DEFAULT_DISK_SIZE } } } },
}); };
var createInitialStateFromSource = (_a = {},
    _a[SourceTypes.BLANK] = function (volume, dataVolumeTemplate) {
        return (dataVolumeTemplate.spec.source.blank = {});
    },
    _a[SourceTypes.CLONE_PVC] = function (volume, dataVolumeTemplate) {
        return (dataVolumeTemplate.spec.source.pvc = { name: '', namespace: '' });
    },
    _a[SourceTypes.DATA_SOURCE] = function (volume, dataVolumeTemplate) {
        return (dataVolumeTemplate.spec.sourceRef = { kind: DataSourceModel.kind, name: '', namespace: '' });
    },
    _a[SourceTypes.EPHEMERAL] = function (volume) { return (volume.containerDisk = { image: '' }); },
    _a[SourceTypes.HTTP] = function (volume, dataVolumeTemplate) {
        return (dataVolumeTemplate.spec.source.http = { url: '' });
    },
    _a[SourceTypes.PVC] = function (volume) { return (volume.persistentVolumeClaim = { claimName: '' }); },
    _a[SourceTypes.REGISTRY] = function (volume, dataVolumeTemplate) {
        return (dataVolumeTemplate.spec.source.registry = { url: '' });
    },
    _a[SourceTypes.UPLOAD] = function (volume, dataVolumeTemplate) {
        return (dataVolumeTemplate.spec.source.upload = {});
    },
    _a[SourceTypes.VOLUME_SNAPSHOT] = function (volume, dataVolumeTemplate) {
        return (dataVolumeTemplate.spec.source.snapshot = { name: '', namespace: '' });
    },
    _a);
export var getDefaultEditValues = function (vm, editDiskName) {
    var _a, _b, _c, _d;
    var isBootSource = ((_a = getBootDisk(vm)) === null || _a === void 0 ? void 0 : _a.name) === editDiskName;
    var diskToEdit = (_b = getDisks(vm)) === null || _b === void 0 ? void 0 : _b.find(function (disk) { return disk.name === editDiskName; });
    var volumeToEdit = (_c = getVolumes(vm)) === null || _c === void 0 ? void 0 : _c.find(function (volume) { return volume.name === editDiskName; });
    var dataVolumeTemplate = (_d = getDataVolumeTemplates(vm)) === null || _d === void 0 ? void 0 : _d.find(function (dv) { var _a; return getName(dv) === ((_a = volumeToEdit === null || volumeToEdit === void 0 ? void 0 : volumeToEdit.dataVolume) === null || _a === void 0 ? void 0 : _a.name); });
    if (isEmpty(diskToEdit) && isInstanceTypeVM(vm))
        diskToEdit = { name: editDiskName };
    return {
        dataVolumeTemplate: dataVolumeTemplate,
        disk: diskToEdit,
        isBootSource: isBootSource,
        volume: volumeToEdit,
    };
};
export var getDefaultCreateValues = function (vm, createDiskSource) {
    var _a;
    var newDiskName = generatePrettyName('disk');
    var newDataVolumeName = generatePrettyName("dv-".concat(getName(vm)));
    var withDataVolume = doesSourceRequireDataVolume(createDiskSource);
    var dataVolumeTemplate = withDataVolume
        ? getDefaultDataVolumeTemplate(newDataVolumeName)
        : null;
    var volume = withDataVolume
        ? { dataVolume: { name: newDataVolumeName }, name: newDiskName }
        : { name: newDiskName };
    (_a = createInitialStateFromSource === null || createInitialStateFromSource === void 0 ? void 0 : createInitialStateFromSource[createDiskSource]) === null || _a === void 0 ? void 0 : _a.call(createInitialStateFromSource, volume, dataVolumeTemplate);
    return {
        dataVolumeTemplate: dataVolumeTemplate,
        disk: {
            disk: { bus: getDefaultDiskType(isRunning(vm)) },
            name: newDiskName,
        },
        isBootSource: false,
        storageProfileSettingsApplied: true,
        volume: volume,
    };
};
//# sourceMappingURL=form.js.map