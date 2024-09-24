import React from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './cloud-init-credentials.scss';
declare type CloudInitCredentialsProps = {
    vm: V1VirtualMachine;
};
declare const CloudInitCredentials: React.FC<CloudInitCredentialsProps>;
export default CloudInitCredentials;
