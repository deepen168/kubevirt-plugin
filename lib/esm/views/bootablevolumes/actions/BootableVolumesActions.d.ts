import { FC } from 'react';
import { V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { BootableResource } from '../utils/types';
declare type BootableVolumesActionsProps = {
    preferences: V1beta1VirtualMachineClusterPreference[];
    source: BootableResource;
};
declare const BootableVolumesActions: FC<BootableVolumesActionsProps>;
export default BootableVolumesActions;
