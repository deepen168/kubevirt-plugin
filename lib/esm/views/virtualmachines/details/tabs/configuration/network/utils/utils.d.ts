import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const isActiveOnGuest: (vmi: V1VirtualMachineInstance, nicName: string, isVMRunning?: boolean) => any;
export declare const isAbsent: (vm: V1VirtualMachine, nicName: string) => boolean;
export declare const isPendingHotPlugNIC: (vm: V1VirtualMachine, vmi: V1VirtualMachineInstance, nicName: string) => boolean;
export declare const interfaceNotFound: (vm: V1VirtualMachine, nicName: string) => boolean;
export declare const isPendingRemoval: (vm: V1VirtualMachine, vmi: V1VirtualMachineInstance, nicName: string) => boolean;
