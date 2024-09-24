import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type UseVMI = (vmName: string, vmNamespace: string, fetch?: boolean) => {
    vmi: V1VirtualMachineInstance;
    vmiLoaded: boolean;
    vmiLoadError: Error;
};
declare const useVMI: UseVMI;
export default useVMI;
