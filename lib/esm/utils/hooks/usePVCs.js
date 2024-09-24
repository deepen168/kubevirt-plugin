import { useMemo } from 'react';
import { modelToGroupVersionKind, PersistentVolumeClaimModel, } from '@kubevirt-ui/kubevirt-api/console';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var usePVCs = function (namespace) {
    var pvcWathcResource = namespace
        ? {
            groupVersionKind: modelToGroupVersionKind(PersistentVolumeClaimModel),
            isList: true,
            namespace: namespace,
            namespaced: true,
        }
        : null;
    var _a = useK8sWatchResource(pvcWathcResource), pvcsUnsorted = _a[0], loaded = _a[1], error = _a[2];
    var pvcs = useMemo(function () { var _a; return (_a = (pvcsUnsorted || [])) === null || _a === void 0 ? void 0 : _a.sort(function (a, b) { var _a, _b, _c; return (_b = (_a = a === null || a === void 0 ? void 0 : a.metadata) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.localeCompare((_c = b === null || b === void 0 ? void 0 : b.metadata) === null || _c === void 0 ? void 0 : _c.name); }); }, [pvcsUnsorted]);
    return [pvcs, loaded, error];
};
export default usePVCs;
//# sourceMappingURL=usePVCs.js.map