import { FC } from 'react';
import { V1beta1VirtualMachineSnapshot } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './restore-modal.scss';
declare type DeleteResourceModalProps = {
    isOpen: boolean;
    onClose: () => void;
    snapshot: V1beta1VirtualMachineSnapshot;
};
declare const RestoreModal: FC<DeleteResourceModalProps>;
export default RestoreModal;
