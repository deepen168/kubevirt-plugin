import { V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes/models';
import { V1beta1VirtualMachineSnapshot, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type UseDeleteVMResources = (vm: V1VirtualMachine) => {
    dataVolumes: V1beta1DataVolume[];
    error: any;
    loaded: boolean;
    pvcs: IoK8sApiCoreV1PersistentVolumeClaim[];
    snapshots: V1beta1VirtualMachineSnapshot[];
};
declare const useDeleteVMResources: UseDeleteVMResources;
export default useDeleteVMResources;
