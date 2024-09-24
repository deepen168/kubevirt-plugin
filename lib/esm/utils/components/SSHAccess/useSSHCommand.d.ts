import { IoK8sApiCoreV1Service } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare type useSSHCommandResult = {
    command: string;
    sshServiceRunning: boolean;
    user: string;
};
export declare const isLoadBalancerBonded: (sshService: IoK8sApiCoreV1Service) => boolean;
declare const useSSHCommand: (vm: V1VirtualMachine, sshService: IoK8sApiCoreV1Service) => useSSHCommandResult;
export default useSSHCommand;
