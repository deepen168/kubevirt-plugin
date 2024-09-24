import { modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import StorageProfileModel from '@kubevirt-ui/kubevirt-api/console/models/StorageProfileModel';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var useStorageProfileClaimPropertySets = function (storageClassName) {
    var _a = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(StorageProfileModel),
        isList: false,
        name: storageClassName,
    }), storageProfile = _a[0], loaded = _a[1], error = _a[2];
    var errorState = !storageClassName || !loaded || error;
    var claimPropertySets = ((storageProfile === null || storageProfile === void 0 ? void 0 : storageProfile.status) || {}).claimPropertySets;
    return { claimPropertySets: errorState ? null : claimPropertySets, error: error, loaded: loaded };
};
export default useStorageProfileClaimPropertySets;
//# sourceMappingURL=useStorageProfileClaimPropertySets.js.map