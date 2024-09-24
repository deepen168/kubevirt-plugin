import { FC } from 'react';
import { SSHSecretDetails } from '@kubevirt-utils/components/SSHSecretModal/utils/types';
declare type AddProjectAuthKeyButtonProps = {
    onSubmit: (sshDetails: SSHSecretDetails) => Promise<any>;
    secretName: string;
    selectedProject: string;
};
declare const AddProjectAuthKeyButton: FC<AddProjectAuthKeyButtonProps>;
export default AddProjectAuthKeyButton;
