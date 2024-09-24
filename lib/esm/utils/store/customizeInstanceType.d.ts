import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const vmSignal: import("@preact/signals-core").Signal<V1VirtualMachine>;
declare type UpdateCustomizeInstanceTypeArgs = {
    data: any;
    merge?: boolean;
    path?: string;
}[];
export declare type UpdateCustomizeInstanceType = (args: UpdateCustomizeInstanceTypeArgs) => V1VirtualMachine;
export declare const clearCustomizeInstanceType: () => void;
export declare const updateCustomizeInstanceType: UpdateCustomizeInstanceType;
export declare const updateVMCustomizeIT: (vm: V1VirtualMachine) => Promise<V1VirtualMachine>;
export {};
