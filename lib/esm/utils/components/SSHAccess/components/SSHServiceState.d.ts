import { FC } from 'react';
import { IoK8sApiCoreV1Service } from '@kubevirt-ui/kubevirt-api/kubernetes';
declare type SSHServiceStateIconProps = {
    sshService: IoK8sApiCoreV1Service;
    sshServiceLoaded?: boolean;
};
declare const SSHServiceStateIcon: FC<SSHServiceStateIconProps>;
export default SSHServiceStateIcon;
