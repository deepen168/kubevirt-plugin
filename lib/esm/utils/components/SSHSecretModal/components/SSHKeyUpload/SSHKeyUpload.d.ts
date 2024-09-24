import { Dispatch, FC, SetStateAction } from 'react';
import { IoK8sApiCoreV1Secret } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { SSHSecretDetails } from '../../utils/types';
import './SSHKeyUpload.scss';
declare type SSHKeyUploadProps = {
    secrets: IoK8sApiCoreV1Secret[];
    setSSHDetails: Dispatch<SetStateAction<SSHSecretDetails>>;
    sshDetails: SSHSecretDetails;
};
declare const SSHKeyUpload: FC<SSHKeyUploadProps>;
export default SSHKeyUpload;
