import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './ConsoleOverVirtctl.scss';
declare type ConsoleOverVirtctlProps = {
    vm: V1VirtualMachine;
};
declare const ConsoleOverVirtctl: FC<ConsoleOverVirtctlProps>;
export default ConsoleOverVirtctl;
