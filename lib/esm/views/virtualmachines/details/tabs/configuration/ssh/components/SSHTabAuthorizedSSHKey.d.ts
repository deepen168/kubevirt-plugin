import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type SSHTabAuthorizedSSHKeyProps = {
    isCustomizeInstanceType?: boolean;
    onUpdateVM?: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine>;
    vm: V1VirtualMachine;
};
declare const SSHTabAuthorizedSSHKey: FC<SSHTabAuthorizedSSHKeyProps>;
export default SSHTabAuthorizedSSHKey;
