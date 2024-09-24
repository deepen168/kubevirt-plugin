import { FC } from 'react';
import { V1beta1VirtualMachinePreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type UserPreferenceActionsProps = {
    isKebabToggle?: boolean;
    preference: V1beta1VirtualMachinePreference;
};
declare const UserPreferenceActions: FC<UserPreferenceActionsProps>;
export default UserPreferenceActions;
