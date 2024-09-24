import { V1alpha1VirtualMachineClone, V1beta1VirtualMachineSnapshot, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const isVM: (source: V1beta1VirtualMachineSnapshot | V1VirtualMachine) => source is V1VirtualMachine;
export declare const cloneVM: (source: V1beta1VirtualMachineSnapshot | V1VirtualMachine, newVMName: string, namespace: string) => Promise<V1alpha1VirtualMachineClone>;
export declare const runVM: (vmName: string, vmNamespace: string) => Promise<{
    apiVersion: string;
    kind: string;
    metadata: {
        name: string;
        namespace: string;
    };
}>;
export declare const vmExist: (vmName: string, vmNamespace: string) => Promise<V1VirtualMachine | null>;
