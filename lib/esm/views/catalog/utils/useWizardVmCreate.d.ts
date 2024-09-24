import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type CreateVMArguments = {
    isDisableGuestSystemAccessLog: boolean;
    onFullfilled: (vm: V1VirtualMachine) => void;
};
declare type UseWizardVmCreateValues = {
    createVM: ({ isDisableGuestSystemAccessLog, onFullfilled }: CreateVMArguments) => Promise<void>;
    error: any;
    loaded: boolean;
};
export declare const useWizardVmCreate: () => UseWizardVmCreateValues;
export {};
