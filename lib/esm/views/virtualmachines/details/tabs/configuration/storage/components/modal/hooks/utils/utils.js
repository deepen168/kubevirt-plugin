import { VolumeTypes } from '@kubevirt-utils/components/DiskModal/utils/types';
export var convertDataVolumeToPVC = function (volume, cdiConfig) {
    var _a;
    var _b;
    var isDataVolumeGarbageCollector = ((_b = cdiConfig === null || cdiConfig === void 0 ? void 0 : cdiConfig.spec) === null || _b === void 0 ? void 0 : _b.dataVolumeTTLSeconds) !== -1;
    var transformedDataVolumeToPVC = (_a = {
            name: volume.name
        },
        _a[VolumeTypes.PERSISTENT_VOLUME_CLAIM] = {
            claimName: volume.dataVolume.name,
            hotpluggable: volume.dataVolume.hotpluggable,
        },
        _a);
    return isDataVolumeGarbageCollector ? transformedDataVolumeToPVC : volume;
};
export var getVolumeType = function (volume) {
    var _a;
    var volumeType = (_a = Object.keys(volume)) === null || _a === void 0 ? void 0 : _a.find(function (key) {
        return Object.values(VolumeTypes).includes(key);
    });
    return volumeType;
};
export var getVolumeResourceName = function (volume) {
    var _a, _b, _c, _d;
    var volumeType = getVolumeType(volume);
    switch (volumeType) {
        case VolumeTypes.PERSISTENT_VOLUME_CLAIM:
            return (_a = volume === null || volume === void 0 ? void 0 : volume.persistentVolumeClaim) === null || _a === void 0 ? void 0 : _a.claimName;
        case VolumeTypes.DATA_VOLUME:
        case VolumeTypes.CONFIG_MAP:
            return (_b = volume === null || volume === void 0 ? void 0 : volume[volumeType]) === null || _b === void 0 ? void 0 : _b.name;
        case VolumeTypes.SECRET:
            return (_c = volume === null || volume === void 0 ? void 0 : volume[volumeType]) === null || _c === void 0 ? void 0 : _c.secretName;
        case VolumeTypes.SERVICE_ACCOUNT:
            return (_d = volume === null || volume === void 0 ? void 0 : volume[volumeType]) === null || _d === void 0 ? void 0 : _d.serviceAccountName;
        default:
            return null;
    }
};
//# sourceMappingURL=utils.js.map