import { FC } from 'react';
import { V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { BootableResource } from '../../utils/types';
declare type EditBootableVolumesModalProps = {
    isOpen: boolean;
    onClose: () => void;
    preferences: V1beta1VirtualMachineClusterPreference[];
    source: BootableResource;
};
declare const EditBootableVolumesModal: FC<EditBootableVolumesModalProps>;
export default EditBootableVolumesModal;
