import { modelToGroupVersionKind, PersistentVolumeClaimModel, } from '@kubevirt-ui/kubevirt-api/console';
import DataVolumeModel from '@kubevirt-ui/kubevirt-api/console/models/DataVolumeModel';
import { getDataSourcePVCSource } from '@kubevirt-utils/resources/bootableresources/selectors';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var useUnderlyingPVC = function (dataSource) {
    var dataSourcePVC = getDataSourcePVCSource(dataSource);
    var _a = dataSourcePVC || {}, name = _a.name, namespace = _a.namespace;
    var pvc = useK8sWatchResource(dataSourcePVC && {
        groupVersionKind: modelToGroupVersionKind(PersistentVolumeClaimModel),
        name: name,
        namespace: namespace,
    })[0];
    var dv = useK8sWatchResource(dataSourcePVC && {
        groupVersionKind: modelToGroupVersionKind(DataVolumeModel),
        name: name,
        namespace: namespace,
    })[0];
    var sourceExists = !isEmpty(pvc) || !isEmpty(dv);
    return { dv: dv, pvc: pvc, sourceExists: sourceExists };
};
export default useUnderlyingPVC;
//# sourceMappingURL=useUnderlyingPVC.js.map