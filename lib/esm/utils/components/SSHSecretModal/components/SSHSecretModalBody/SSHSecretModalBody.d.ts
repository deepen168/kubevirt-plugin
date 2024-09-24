import { Dispatch, FC, SetStateAction } from 'react';
import { SecretsData, SSHSecretDetails } from '@kubevirt-utils/components/SSHSecretModal/utils/types';
import './SSHSecretModalBody.scss';
declare type SSHSecretModalBodyProps = {
    isTemplate: boolean;
    isUserTab: boolean;
    localNSProject: string;
    namespace?: string;
    secretsData: SecretsData;
    setLocalNSProject: Dispatch<SetStateAction<string>>;
    setSSHDetails: Dispatch<SetStateAction<SSHSecretDetails>>;
    sshDetails: SSHSecretDetails;
};
declare const SSHSecretModalBody: FC<SSHSecretModalBodyProps>;
export default SSHSecretModalBody;
