import { modelToGroupVersionKind, PodModel } from '@kubevirt-ui/kubevirt-api/console';
import useVMI from '@kubevirt-utils/resources/vm/hooks/useVMI';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
export var useVMIAndPodsForVM = function (vmName, vmNamespace) {
    var _a, _b;
    var _c = useVMI(vmName, vmNamespace), vmi = _c.vmi, vmiLoaded = _c.vmiLoaded, vmiLoadError = _c.vmiLoadError;
    var _d = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(PodModel),
        isList: true,
        namespace: vmNamespace,
    }), pods = _d[0], podsLoaded = _d[1], podsLoadError = _d[2];
    var loaded = vmiLoaded && podsLoaded;
    var error = vmiLoadError || podsLoadError;
    return {
        error: error,
        loaded: loaded,
        pods: pods,
        vmi: vmName === ((_a = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _a === void 0 ? void 0 : _a.name) && vmNamespace === ((_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.namespace) && vmi,
    };
};
//# sourceMappingURL=useVMIAndPodsForVM.js.map