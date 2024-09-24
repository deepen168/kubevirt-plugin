import { FC } from 'react';
import { IoK8sApiCoreV1Service } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { SERVICE_TYPES } from '../constants';
declare type SSHServiceSelectProps = {
    onSSHChange: (serviceType: SERVICE_TYPES) => void;
    sshService: IoK8sApiCoreV1Service;
    sshServiceLoaded: boolean;
};
declare const SSHServiceSelect: FC<SSHServiceSelectProps>;
export default SSHServiceSelect;
