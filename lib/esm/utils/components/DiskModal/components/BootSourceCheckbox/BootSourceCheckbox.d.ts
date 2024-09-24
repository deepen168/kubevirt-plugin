import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './BootSourceCheckbox.scss';
declare type BootSourceCheckboxProps = {
    editDiskName?: string;
    isDisabled?: boolean;
    vm: V1VirtualMachine;
};
declare const BootSourceCheckbox: FC<BootSourceCheckboxProps>;
export default BootSourceCheckbox;
