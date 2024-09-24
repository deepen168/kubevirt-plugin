import { IoK8sApiCoreV1PersistentVolume } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare const useDisksSources: (vm: V1VirtualMachine) => {
    loaded: boolean;
    loadingError: import("@openshift-console/dynamic-plugin-sdk").WatchK8sResultsObject<IoK8sApiCoreV1PersistentVolume> | undefined;
    pvcs: IoK8sApiCoreV1PersistentVolume[];
};
export default useDisksSources;
