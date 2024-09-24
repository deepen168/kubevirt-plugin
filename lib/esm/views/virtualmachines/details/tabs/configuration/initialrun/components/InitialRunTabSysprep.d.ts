import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { UpdateCustomizeInstanceType } from '@kubevirt-utils/store/customizeInstanceType';
declare type InitialRunTabSysprepProps = {
    canUpdateVM: boolean;
    onSubmit?: UpdateCustomizeInstanceType;
    vm: V1VirtualMachine;
};
declare const InitialRunTabSysprep: FC<InitialRunTabSysprepProps>;
export default InitialRunTabSysprep;
