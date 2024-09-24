import { WritableDraft } from 'immer/dist/internal';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const produceVMNetworks: (vm: V1VirtualMachine, updateNetwork: (vmDraft: WritableDraft<V1VirtualMachine>) => void) => V1VirtualMachine;
export declare const produceVMDisks: (vm: V1VirtualMachine, updateDisks: (vmDraft: WritableDraft<V1VirtualMachine>) => void) => V1VirtualMachine;
export declare const produceVMDevices: (vm: V1VirtualMachine, updateDevices: (vmDraft: WritableDraft<V1VirtualMachine>) => void) => V1VirtualMachine;
export declare const produceVMSysprep: (vm: V1VirtualMachine, sysprepName?: string) => V1VirtualMachine;
