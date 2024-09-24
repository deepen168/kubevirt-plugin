import { PersistentVolumeClaimModel, VolumeSnapshotModel } from '@kubevirt-ui/kubevirt-api/console';
import DataImportCronModel from '@kubevirt-ui/kubevirt-api/console/models/DataImportCronModel';
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import VirtualMachineClusterPreferenceModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineClusterPreferenceModel';
import { useAccessReview } from '@openshift-console/dynamic-plugin-sdk';
var useCanCreateBootableVolume = function (namespace) {
    var _a = useAccessReview({
        group: PersistentVolumeClaimModel.apiGroup,
        namespace: namespace,
        resource: PersistentVolumeClaimModel.plural,
        verb: 'create',
    }), canCreatePVC = _a[0], loadingPVC = _a[1];
    var _b = useAccessReview({
        group: VolumeSnapshotModel.apiGroup,
        namespace: namespace,
        resource: VolumeSnapshotModel.plural,
        verb: 'create',
    }), canCreateSnapshots = _b[0], loadingShapshots = _b[1];
    var _c = useAccessReview({
        group: DataSourceModel.apiGroup,
        namespace: namespace,
        resource: DataSourceModel.plural,
        verb: 'create',
    }), canCreateDS = _c[0], loadingDS = _c[1];
    var _d = useAccessReview({
        group: DataImportCronModel.apiGroup,
        namespace: namespace,
        resource: DataImportCronModel.plural,
        verb: 'create',
    }), canCreateDIC = _d[0], loadingDIC = _d[1];
    var _e = useAccessReview({
        group: VirtualMachineClusterPreferenceModel.apiGroup,
        resource: VirtualMachineClusterPreferenceModel.plural,
        verb: 'list',
    }), canListInstanceTypesPreference = _e[0], loadingInstanceTypesPreference = _e[1];
    return {
        canCreateDS: canCreateDS && canCreateDIC,
        canCreatePVC: canCreatePVC,
        canCreateSnapshots: canCreateSnapshots,
        canListInstanceTypesPreference: canListInstanceTypesPreference,
        loading: loadingPVC || loadingDS || loadingDIC || loadingInstanceTypesPreference || loadingShapshots,
    };
};
export default useCanCreateBootableVolume;
//# sourceMappingURL=useCanCreateBootableVolume.js.map