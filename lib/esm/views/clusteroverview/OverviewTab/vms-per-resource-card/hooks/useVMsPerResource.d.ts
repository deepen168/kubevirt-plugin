import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type UseVMsPerResource = () => {
    loaded: boolean;
    loadedError: Error;
    vms: V1VirtualMachine[];
};
declare const useVMsPerResource: UseVMsPerResource;
export default useVMsPerResource;
