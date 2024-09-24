import { VirtualMachineInstanceModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var useVMI = function (vmName, vmNamespace, fetch) {
    if (fetch === void 0) { fetch = true; }
    var _a = useK8sWatchResource(fetch && {
        groupVersionKind: VirtualMachineInstanceModelGroupVersionKind,
        isList: false,
        name: vmName,
        namespace: vmNamespace,
    }), vmi = _a[0], vmiLoaded = _a[1], vmiLoadError = _a[2];
    return {
        vmi: vmi,
        vmiLoaded: vmiLoaded,
        vmiLoadError: vmiLoadError,
    };
};
export default useVMI;
//# sourceMappingURL=useVMI.js.map