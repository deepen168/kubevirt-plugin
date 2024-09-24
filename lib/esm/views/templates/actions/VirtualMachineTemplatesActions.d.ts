import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
declare type VirtualMachineTemplatesActionsProps = {
    isKebabToggle?: boolean;
    template: V1Template;
};
declare const VirtualMachineTemplatesActions: FC<VirtualMachineTemplatesActionsProps>;
export default VirtualMachineTemplatesActions;
