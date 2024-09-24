import { VirtualMachineClusterInstancetypeModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var useClusterInstanceTypes = function (fieldSelector, selector) {
    var _a = useK8sWatchResource({
        fieldSelector: fieldSelector,
        groupVersionKind: VirtualMachineClusterInstancetypeModelGroupVersionKind,
        isList: true,
        selector: selector,
    }), instanceTypes = _a[0], loaded = _a[1], loadError = _a[2];
    return [instanceTypes || [], loaded || !!loadError, loadError];
};
export default useClusterInstanceTypes;
//# sourceMappingURL=useClusterInstanceTypes.js.map