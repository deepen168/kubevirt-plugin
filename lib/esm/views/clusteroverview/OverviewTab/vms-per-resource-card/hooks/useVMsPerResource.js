import { useMemo } from 'react';
import { VirtualMachineModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
var useVMsPerResource = function () {
    var activeNamespace = useActiveNamespace()[0];
    var namespace = useMemo(function () { return (activeNamespace === ALL_NAMESPACES_SESSION_KEY ? null : activeNamespace); }, [activeNamespace]);
    var _a = useK8sWatchResource({
        groupVersionKind: VirtualMachineModelGroupVersionKind,
        isList: true,
        namespace: namespace,
        namespaced: !!namespace,
    }), vms = _a[0], loaded = _a[1], loadedError = _a[2];
    return {
        loaded: loaded,
        loadedError: loadedError,
        vms: vms,
    };
};
export default useVMsPerResource;
//# sourceMappingURL=useVMsPerResource.js.map