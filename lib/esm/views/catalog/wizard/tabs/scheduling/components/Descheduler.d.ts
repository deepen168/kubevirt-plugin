import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type DeschedulerProps = {
    vm: V1VirtualMachine;
};
declare const Descheduler: FC<DeschedulerProps>;
export default Descheduler;
