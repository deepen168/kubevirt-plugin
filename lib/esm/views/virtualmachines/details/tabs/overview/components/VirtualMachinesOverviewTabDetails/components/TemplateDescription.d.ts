import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type TemplateDescriptionProps = {
    vm: V1VirtualMachine;
};
declare const TemplateDescription: FC<TemplateDescriptionProps>;
export default TemplateDescription;
