import { FC } from 'react';
import { IoK8sApiCoreV1Service } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type SSHAccessProps = {
    isCustomizeInstanceType?: boolean;
    sshService: IoK8sApiCoreV1Service;
    sshServiceLoaded?: boolean;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
declare const SSHAccess: FC<SSHAccessProps>;
export default SSHAccess;
