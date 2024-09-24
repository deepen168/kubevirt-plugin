import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VMSSHSecretModalProps = {
    authorizedSSHKeys: {
        [namespace: string]: string;
    };
    isOpen: boolean;
    onClose: () => void;
    updateAuthorizedSSHKeys: (val: any) => void;
    updateVM: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine | void>;
    vm: V1VirtualMachine;
};
declare const VMSSHSecretModal: FC<VMSSHSecretModalProps>;
export default VMSSHSecretModal;
