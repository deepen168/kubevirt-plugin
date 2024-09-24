import { VirtualMachineClusterPreferenceModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var useClusterPreferences = function (fieldSelector, selector) {
    var _a = useK8sWatchResource({
        fieldSelector: fieldSelector,
        groupVersionKind: VirtualMachineClusterPreferenceModelGroupVersionKind,
        isList: true,
        selector: selector,
    }), preferences = _a[0], loaded = _a[1], loadError = _a[2];
    return [preferences || [], loaded || !!loadError, loadError];
};
export default useClusterPreferences;
//# sourceMappingURL=useClusterPreferences.js.map