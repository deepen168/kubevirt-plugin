var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { VirtualMachineInstancetypeModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { useActiveNamespace, useK8sWatchResource, } from '@openshift-console/dynamic-plugin-sdk';
var useVirtualMachineInstanceTypes = function (fieldSelector, selector, fetchAllProjects) {
    var activeNamespace = useActiveNamespace()[0];
    var isAllNamespace = activeNamespace === ALL_NAMESPACES_SESSION_KEY;
    var _a = useK8sWatchResource((fetchAllProjects || !isAllNamespace) && __assign({ fieldSelector: fieldSelector, groupVersionKind: VirtualMachineInstancetypeModelGroupVersionKind, isList: true, selector: selector }, (!isAllNamespace && { namespace: activeNamespace }))), instanceTypes = _a[0], loaded = _a[1], loadError = _a[2];
    return [instanceTypes || [], loaded || !!loadError, loadError];
};
export default useVirtualMachineInstanceTypes;
//# sourceMappingURL=useVirtualMachineInstanceTypes.js.map