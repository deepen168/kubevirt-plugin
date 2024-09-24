import { Dispatch, FC, SetStateAction } from 'react';
import { IoK8sApiCoreV1Secret } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { SSHSecretDetails } from '../../utils/types';
declare type SecretDropdownProps = {
    namespace: string;
    onSelectSecret: (generatedSecretName: string) => void;
    selectedProject: string;
    selectedProjectSecrets: IoK8sApiCoreV1Secret[];
    setSSHDetails: Dispatch<SetStateAction<SSHSecretDetails>>;
    sshDetails: SSHSecretDetails;
};
declare const SecretDropdown: FC<SecretDropdownProps>;
export default SecretDropdown;
