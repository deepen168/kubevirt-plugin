import { isRedHatInstanceType } from '@kubevirt-utils/components/AddBootableVolumeModal/components/VolumeMetadata/components/InstanceTypeDrilldownSelect/utils/utils';
export var getUserProvidedInstanceTypes = function (instanceTypes) {
    return instanceTypes.filter(function (it) { return !isRedHatInstanceType(it); });
};
//# sourceMappingURL=utils.js.map