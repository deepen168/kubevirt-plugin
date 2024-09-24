import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1beta1VirtualMachineClusterInstancetype, V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const getOSFromDefaultPreference: (bootableVolume: BootableVolume, preferencesMap: {
    [resourceKeyName: string]: V1beta1VirtualMachineClusterPreference;
}) => string;
export declare const getCPUAndMemoryFromDefaultInstanceType: (instanceType: V1beta1VirtualMachineClusterInstancetype) => string;
export declare const dataSourceHasDynamicSSHLabel: (pvcSource: IoK8sApiCoreV1PersistentVolumeClaim, selectedBootableVolume: BootableVolume) => any;
