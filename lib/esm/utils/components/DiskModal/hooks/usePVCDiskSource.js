import { modelToGroupVersionKind, PersistentVolumeClaimModel } from '@kubevirt-utils/models';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var usePVCDiskSource = function (pvcName, pvcNamespace) {
    return useK8sWatchResource(pvcName
        ? {
            groupVersionKind: modelToGroupVersionKind(PersistentVolumeClaimModel),
            name: pvcName,
            namespace: pvcNamespace,
        }
        : null);
};
export default usePVCDiskSource;
//# sourceMappingURL=usePVCDiskSource.js.map