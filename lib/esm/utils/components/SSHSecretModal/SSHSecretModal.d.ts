import { FC } from 'react';
import { SSHSecretDetails } from './utils/types';
declare type SSHSecretModalProps = {
    initialSSHSecretDetails: SSHSecretDetails;
    isOpen: boolean;
    isTemplate?: boolean;
    isUserTab?: boolean;
    namespace: string;
    onClose: () => void;
    onSubmit: (sshDetails: SSHSecretDetails) => Promise<any | void>;
};
declare const SSHSecretModal: FC<SSHSecretModalProps>;
export default SSHSecretModal;
