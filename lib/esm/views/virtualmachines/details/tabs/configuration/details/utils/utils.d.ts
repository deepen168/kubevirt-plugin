import { V1beta1VirtualMachineClusterInstancetype, V1beta1VirtualMachineInstancetype, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const updateStartStrategy: (checked: boolean, vm: V1VirtualMachine) => void;
export declare const updateBootLoader: (updatedVM: V1VirtualMachine, vm: V1VirtualMachine) => Promise<V1VirtualMachine>;
export declare const updatedBootOrder: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine>;
export declare const updateMetadata: (updatedVM: V1VirtualMachine, data: {
    [key: string]: string;
}, type: string) => Promise<V1VirtualMachine>;
export declare const updateAnnotation: (updatedVM: V1VirtualMachine, data: {
    [key: string]: string;
}) => Promise<V1VirtualMachine>;
export declare const updateLabels: (updatedVM: V1VirtualMachine, data: {
    [key: string]: string;
}) => Promise<V1VirtualMachine>;
export declare const updateHardwareDevices: (type: string, vm: V1VirtualMachine) => Promise<V1VirtualMachine>;
export declare const onSubmitYAML: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine>;
export declare const updateGuestSystemAccessLog: (updatedVM: V1VirtualMachine, checked: boolean) => Promise<V1VirtualMachine>;
export declare const updateDescription: (updatedVM: V1VirtualMachine, updatedDescription: string) => Promise<V1VirtualMachine>;
export declare const updateWorkload: (updatedVM: V1VirtualMachine, newWorkload: WORKLOADS) => Promise<V1VirtualMachine> | undefined;
export declare const updatedVirtualMachine: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine>;
export declare const updatedInstanceType: (updatedVM: V1VirtualMachine, instanceType: V1beta1VirtualMachineClusterInstancetype | V1beta1VirtualMachineInstancetype) => Promise<V1VirtualMachine>;
export declare const updatedHostname: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine>;
export declare const updateHeadlessMode: (updatedVM: V1VirtualMachine, checked: boolean) => Promise<V1VirtualMachine>;
export declare const updateDisks: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine>;
export declare const updateVolumes: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine>;
