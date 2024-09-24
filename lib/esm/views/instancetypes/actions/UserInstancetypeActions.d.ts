import { FC } from 'react';
import { V1beta1VirtualMachineInstancetype } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type UserInstancetypeActionsProps = {
    instanceType: V1beta1VirtualMachineInstancetype;
    isKebabToggle?: boolean;
};
declare const UserInstancetypeActions: FC<UserInstancetypeActionsProps>;
export default UserInstancetypeActions;
