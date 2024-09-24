import { DataSourceModelGroupVersionKind, modelToGroupVersionKind, PersistentVolumeClaimModel, } from '@kubevirt-utils/models';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var usePVCSourceSize = function (dataSourceRef, pvcClaimName, pvcClaimNamespace) {
    var _a, _b, _c, _d, _e, _f;
    var _g = useK8sWatchResource(dataSourceRef
        ? {
            groupVersionKind: DataSourceModelGroupVersionKind,
            name: dataSourceRef === null || dataSourceRef === void 0 ? void 0 : dataSourceRef.name,
            namespace: dataSourceRef === null || dataSourceRef === void 0 ? void 0 : dataSourceRef.namespace,
        }
        : null), dataSource = _g[0], dsLoaded = _g[1], dsError = _g[2];
    var pvcWathcResource = pvcClaimName
        ? {
            groupVersionKind: modelToGroupVersionKind(PersistentVolumeClaimModel),
            name: pvcClaimName,
            namespace: pvcClaimNamespace,
        }
        : null;
    var dataSourcePVCWatchRequest = ((_c = (_b = (_a = dataSource === null || dataSource === void 0 ? void 0 : dataSource.spec) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.pvc) === null || _c === void 0 ? void 0 : _c.name)
        ? {
            groupVersionKind: modelToGroupVersionKind(PersistentVolumeClaimModel),
            name: dataSource.spec.source.pvc.name,
            namespace: dataSource.spec.source.pvc.namespace,
        }
        : null;
    var _h = useK8sWatchResource(pvcWathcResource || dataSourcePVCWatchRequest), pvc = _h[0], loaded = _h[1], error = _h[2];
    return [(_f = (_e = (_d = pvc === null || pvc === void 0 ? void 0 : pvc.spec) === null || _d === void 0 ? void 0 : _d.resources) === null || _e === void 0 ? void 0 : _e.requests) === null || _f === void 0 ? void 0 : _f.storage, loaded && dsLoaded, error || dsError];
};
export default usePVCSourceSize;
//# sourceMappingURL=usePVCSourceSize.js.map