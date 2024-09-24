import { FC } from 'react';
import { V1beta1VirtualMachineClusterInstancetype } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type ClusterInstancetypeActionsProps = {
    instanceType: V1beta1VirtualMachineClusterInstancetype;
    isKebabToggle?: boolean;
};
declare const ClusterInstancetypeActions: FC<ClusterInstancetypeActionsProps>;
export default ClusterInstancetypeActions;
