import { useMemo } from 'react';
import { useK8sWatchResources } from '@openshift-console/dynamic-plugin-sdk';
import { buildDataVolumeResources, buildDVStatus, conditionsTransformer, volumeSnapshotStatusesTransformer, } from '../utils/utils';
var useDiagnosticData = function (vm) {
    var _a, _b;
    var dataVolumesData = useK8sWatchResources(buildDataVolumeResources(vm));
    var data = useMemo(function () {
        var _a, _b;
        var volumeSnapshotStatuses = volumeSnapshotStatusesTransformer((_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.volumeSnapshotStatuses);
        var conditions = conditionsTransformer((_b = vm === null || vm === void 0 ? void 0 : vm.status) === null || _b === void 0 ? void 0 : _b.conditions);
        var dataVolumesStatuses = buildDVStatus(dataVolumesData);
        return { conditions: conditions, dataVolumesStatuses: dataVolumesStatuses, volumeSnapshotStatuses: volumeSnapshotStatuses };
    }, [dataVolumesData, (_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.conditions, (_b = vm === null || vm === void 0 ? void 0 : vm.status) === null || _b === void 0 ? void 0 : _b.volumeSnapshotStatuses]);
    return data;
};
export default useDiagnosticData;
//# sourceMappingURL=useDianosticData.js.map