import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type CloudInitCredentialsContentProps = {
    vm: V1VirtualMachine;
};
declare const CloudInitCredentialsContent: FC<CloudInitCredentialsContentProps>;
export default CloudInitCredentialsContent;
