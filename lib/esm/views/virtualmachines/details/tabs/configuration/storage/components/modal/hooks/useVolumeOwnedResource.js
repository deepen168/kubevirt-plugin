import { CDIConfigModelGroupVersionKind, modelToGroupVersionKind } from '@kubevirt-utils/models';
import { buildOwnerReference, compareOwnerReferences } from '@kubevirt-utils/resources/shared';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { mapVolumeTypeToK8sModel } from './utils/constants';
import { convertDataVolumeToPVC, getVolumeResourceName, getVolumeType } from './utils/utils';
var useVolumeOwnedResource = function (vm, volume) {
    var _a, _b;
    var _c = useK8sWatchResource({
        groupVersionKind: CDIConfigModelGroupVersionKind,
        isList: false,
        namespaced: false,
    }), cdiConfig = _c[0], isCdiConfigLoaded = _c[1], isCdiConfigError = _c[2];
    var updatedVolume = volume.dataVolume ? convertDataVolumeToPVC(volume, cdiConfig) : volume;
    var volumeType = getVolumeType(updatedVolume);
    var volumeResourceModel = mapVolumeTypeToK8sModel[volumeType];
    var volumeGroupVersionKind = volumeResourceModel && modelToGroupVersionKind(volumeResourceModel);
    var volumeResourceName = getVolumeResourceName(volume);
    var watchVolumeResource = {
        groupVersionKind: volumeGroupVersionKind,
        isList: false,
        name: volumeResourceName,
        namespace: vm.metadata.namespace,
    };
    var _d = useK8sWatchResource(volumeGroupVersionKind && volumeResourceName && watchVolumeResource), resource = _d[0], loaded = _d[1], error = _d[2];
    if (!volumeResourceModel || !volumeResourceName) {
        return {
            error: error || isCdiConfigError,
            loaded: true,
            volumeResource: null,
            volumeResourceModel: null,
            volumeResourceName: null,
        };
    }
    var volumeResourceReference = (_b = (_a = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _a === void 0 ? void 0 : _a.ownerReferences) === null || _b === void 0 ? void 0 : _b.find(function (ownerRef) {
        var vmOwnerRef = buildOwnerReference(vm);
        return compareOwnerReferences(ownerRef, vmOwnerRef);
    });
    return {
        error: error || isCdiConfigError,
        loaded: loaded && isCdiConfigLoaded,
        volumeResource: volumeResourceReference ? resource : null,
        volumeResourceModel: volumeResourceModel,
        volumeResourceName: volumeResourceName,
    };
};
export default useVolumeOwnedResource;
//# sourceMappingURL=useVolumeOwnedResource.js.map