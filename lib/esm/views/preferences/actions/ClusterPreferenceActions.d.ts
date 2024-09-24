import { FC } from 'react';
import { V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type ClusterPreferenceActionsProps = {
    isKebabToggle?: boolean;
    preference: V1beta1VirtualMachineClusterPreference;
};
declare const ClusterPreferenceActions: FC<ClusterPreferenceActionsProps>;
export default ClusterPreferenceActions;
