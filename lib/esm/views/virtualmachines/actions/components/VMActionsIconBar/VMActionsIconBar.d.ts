import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VMActionsIconBarProps = {
    vm: V1VirtualMachine;
};
declare const VMActionsIconBar: FC<VMActionsIconBarProps>;
export default VMActionsIconBar;
