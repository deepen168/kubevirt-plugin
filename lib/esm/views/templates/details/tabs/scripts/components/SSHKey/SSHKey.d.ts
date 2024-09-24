import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
declare type SSHKeyProps = {
    template: V1Template;
};
declare const SSHKey: FC<SSHKeyProps>;
export default SSHKey;
