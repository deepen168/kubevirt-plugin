import { modelToGroupVersionKind, PersistentVolumeClaimModel, } from '@kubevirt-ui/kubevirt-api/console';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import VirtualMachineSnapshotModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineSnapshotModel';
import { getVolumes } from '@kubevirt-utils/resources/vm';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import useDataVolumeConvertedVolumeNames from './useDataVolumeConvertedVolumeNames';
var useDeleteVMResources = function (vm) {
    var _a;
    var _b = useDataVolumeConvertedVolumeNames(getVolumes(vm)), dvVolumesNames = _b.dvVolumesNames, isDataVolumeGarbageCollector = _b.isDataVolumeGarbageCollector;
    var namespace = (_a = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _a === void 0 ? void 0 : _a.namespace;
    var _c = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(DataVolumeModel),
        isList: true,
        namespace: namespace,
        namespaced: true,
    }), dataVolumes = _c[0], dataVolumesLoaded = _c[1], dataVolumesLoadError = _c[2];
    var filteredDataVolumes = dataVolumes === null || dataVolumes === void 0 ? void 0 : dataVolumes.filter(function (dv) { var _a; return dvVolumesNames === null || dvVolumesNames === void 0 ? void 0 : dvVolumesNames.includes((_a = dv === null || dv === void 0 ? void 0 : dv.metadata) === null || _a === void 0 ? void 0 : _a.name); });
    var _d = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(PersistentVolumeClaimModel),
        isList: true,
        namespace: namespace,
        namespaced: true,
    }), pvcs = _d[0], pvcsLoaded = _d[1], pvcsLoadError = _d[2];
    var filteredPvcs = isDataVolumeGarbageCollector
        ? pvcs === null || pvcs === void 0 ? void 0 : pvcs.filter(function (pvc) { var _a; return dvVolumesNames === null || dvVolumesNames === void 0 ? void 0 : dvVolumesNames.includes((_a = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _a === void 0 ? void 0 : _a.name); })
        : [];
    var _e = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(VirtualMachineSnapshotModel),
        isList: true,
        namespace: namespace,
        namespaced: true,
    }), snapshots = _e[0], snapshotsLoaded = _e[1], snapshotsLoadError = _e[2];
    return {
        dataVolumes: filteredDataVolumes,
        error: snapshotsLoadError || dataVolumesLoadError || pvcsLoadError,
        loaded: snapshotsLoaded && dataVolumesLoaded && pvcsLoaded,
        pvcs: filteredPvcs,
        snapshots: snapshots === null || snapshots === void 0 ? void 0 : snapshots.filter(function (snapshot) {
            var _a, _b, _c, _d, _e;
            return ((_b = (_a = snapshot === null || snapshot === void 0 ? void 0 : snapshot.metadata) === null || _a === void 0 ? void 0 : _a.ownerReferences) === null || _b === void 0 ? void 0 : _b.some(function (ref) { var _a; return (ref === null || ref === void 0 ? void 0 : ref.name) === ((_a = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _a === void 0 ? void 0 : _a.name); })) ||
                ((_d = (_c = snapshot === null || snapshot === void 0 ? void 0 : snapshot.spec) === null || _c === void 0 ? void 0 : _c.source) === null || _d === void 0 ? void 0 : _d.name) === ((_e = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _e === void 0 ? void 0 : _e.name);
        }),
    };
};
export default useDeleteVMResources;
//# sourceMappingURL=useDeleteVMResources.js.map