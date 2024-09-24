import { IoK8sApiCoreV1Service } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare type UseSSHServiceReturnType = [service: IoK8sApiCoreV1Service, loaded: boolean];
declare const useSSHService: (vm: V1VirtualMachine) => UseSSHServiceReturnType;
export default useSSHService;
