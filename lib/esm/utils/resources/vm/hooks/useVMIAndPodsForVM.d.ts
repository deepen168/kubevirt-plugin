import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
declare type UseVMIAndPodsForVMValues = {
    error: any;
    loaded: boolean;
    pods: K8sResourceCommon[];
    vmi: V1VirtualMachineInstance;
};
export declare const useVMIAndPodsForVM: (vmName: string, vmNamespace: string) => UseVMIAndPodsForVMValues;
export {};
