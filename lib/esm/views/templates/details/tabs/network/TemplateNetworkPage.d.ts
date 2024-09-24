import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
declare type TemplateNetworkProps = {
    obj: V1Template;
};
declare const TemplateNetwork: FC<TemplateNetworkProps>;
export default TemplateNetwork;
