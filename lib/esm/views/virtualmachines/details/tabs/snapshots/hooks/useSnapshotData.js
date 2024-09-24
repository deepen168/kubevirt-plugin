import * as React from 'react';
import { VirtualMachineRestoreModelGroupVersionKind, VirtualMachineSnapshotModelGroupVersionKind, } from '@kubevirt-ui/kubevirt-api/console';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { getVmRestoreSnapshotName, getVmRestoreTime } from '../utils/selectors';
var useSnapshotData = function (vmName, namespace) {
    var _a = useK8sWatchResource({
        groupVersionKind: VirtualMachineSnapshotModelGroupVersionKind,
        isList: true,
        namespace: namespace,
        namespaced: true,
    }), snapshots = _a[0], snapshotsLoaded = _a[1], snapshotsError = _a[2];
    var _b = useK8sWatchResource({
        groupVersionKind: VirtualMachineRestoreModelGroupVersionKind,
        isList: true,
        namespace: namespace,
        namespaced: true,
    }), restores = _b[0], restoresLoaded = _b[1], restoresError = _b[2];
    var loaded = React.useMemo(function () { return snapshotsLoaded && restoresLoaded; }, [snapshotsLoaded, restoresLoaded]);
    var error = React.useMemo(function () { return snapshotsError || restoresError; }, [snapshotsError, restoresError]);
    var restoresMap = React.useMemo(function () {
        // we map each snapshot to its restores array
        var tempMap = restores === null || restores === void 0 ? void 0 : restores.reduce(function (restoreMap, currentRestore) {
            var relevantRestore = restoreMap[getVmRestoreSnapshotName(currentRestore)];
            if (!relevantRestore ||
                new Date(getVmRestoreTime(relevantRestore)).getTime() <
                    new Date(getVmRestoreTime(currentRestore)).getTime()) {
                restoreMap[getVmRestoreSnapshotName(currentRestore)] = currentRestore;
            }
            return restoreMap;
        }, {});
        return tempMap;
    }, [restores]);
    return {
        error: error,
        loaded: loaded,
        restoresMap: restoresMap,
        snapshots: snapshots === null || snapshots === void 0 ? void 0 : snapshots.filter(function (snapshot) { var _a, _b; return ((_b = (_a = snapshot === null || snapshot === void 0 ? void 0 : snapshot.spec) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.name) === vmName; }),
    };
};
export default useSnapshotData;
//# sourceMappingURL=useSnapshotData.js.map