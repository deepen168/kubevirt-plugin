import { modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineCloneModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineCloneModel';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var useCloneVMModal = function (cloneRequestName, cloneRequestNamespace) {
    var freshVMCloneRequest = useK8sWatchResource(cloneRequestName &&
        cloneRequestNamespace && {
        groupVersionKind: modelToGroupVersionKind(VirtualMachineCloneModel),
        name: cloneRequestName,
        namespace: cloneRequestNamespace,
    })[0];
    return freshVMCloneRequest;
};
export default useCloneVMModal;
//# sourceMappingURL=useCloneVMModal.js.map