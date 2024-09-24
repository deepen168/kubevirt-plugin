import { Dispatch, FC, SetStateAction } from 'react';
import { IoK8sApiCoreV1Secret } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { SSHSecretDetails } from '../../utils/types';
import './SSHOptionUseExisting.scss';
declare type SSHOptionUseExistingProps = {
    localNSProject: string;
    namespace?: string;
    projectsWithSecrets: {
        [namespace: string]: IoK8sApiCoreV1Secret[];
    };
    secrets: IoK8sApiCoreV1Secret[];
    secretsLoaded: boolean;
    setLocalNSProject: Dispatch<SetStateAction<string>>;
    setSSHDetails: Dispatch<SetStateAction<SSHSecretDetails>>;
    sshDetails: SSHSecretDetails;
};
declare const SSHOptionUseExisting: FC<SSHOptionUseExistingProps>;
export default SSHOptionUseExisting;
