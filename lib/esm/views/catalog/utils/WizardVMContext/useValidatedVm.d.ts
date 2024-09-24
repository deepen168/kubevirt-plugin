import { WritableDraft } from 'immer/dist/internal';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare type UpdateValidatedVM = (updateVM: ((vmDraft: WritableDraft<V1VirtualMachine>) => void) | V1VirtualMachine) => Promise<void>;
declare type UseValidatedVMValues = {
    error: any;
    loaded: boolean;
    updateVM: UpdateValidatedVM;
    vm: V1VirtualMachine;
};
export declare const useValidatedVM: (initialVM: V1VirtualMachine) => UseValidatedVMValues;
export {};
