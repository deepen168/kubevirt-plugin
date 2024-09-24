import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type WindowsDriversProps = {
    isWindows?: boolean;
    updateVM: (vm: V1VirtualMachine) => Promise<V1VirtualMachine | void> | void;
    vm: V1VirtualMachine;
};
declare const WindowsDrivers: FC<WindowsDriversProps>;
export default WindowsDrivers;
