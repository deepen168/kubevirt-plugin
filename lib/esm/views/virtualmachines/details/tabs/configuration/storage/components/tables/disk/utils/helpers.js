import { CONTAINER_EPHERMAL, OTHER, } from '@kubevirt-utils/components/DiskModal/components/utils/constants';
import { getVolumes } from '@kubevirt-utils/resources/vm';
export var isHotplugVolume = function (vm, diskName, vmi) {
    var _a, _b, _c, _d, _e;
    var volumeStatus = (_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _a === void 0 ? void 0 : _a.volumeStatus) === null || _b === void 0 ? void 0 : _b.find(function (volStatus) { return volStatus.name === diskName; });
    var vmVolume = (_c = getVolumes(vm)) === null || _c === void 0 ? void 0 : _c.find(function (vol) { return (vol === null || vol === void 0 ? void 0 : vol.name) === diskName; });
    var hotplugStatus = (volumeStatus === null || volumeStatus === void 0 ? void 0 : volumeStatus.hotplugVolume) ||
        ((_d = vmVolume === null || vmVolume === void 0 ? void 0 : vmVolume.dataVolume) === null || _d === void 0 ? void 0 : _d.hotpluggable) ||
        ((_e = vmVolume === null || vmVolume === void 0 ? void 0 : vmVolume.persistentVolumeClaim) === null || _e === void 0 ? void 0 : _e.hotpluggable);
    return !!hotplugStatus;
};
export var isPVCSource = function (obj) {
    return ![CONTAINER_EPHERMAL, OTHER].includes(obj === null || obj === void 0 ? void 0 : obj.source);
};
export var isPVCStatusBound = function (obj) { return (obj === null || obj === void 0 ? void 0 : obj.sourceStatus) === 'Bound'; };
//# sourceMappingURL=helpers.js.map