import { FC } from 'react';
import { V1VirtualMachine, V1Volume } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type DeleteDiskModalProps = {
    isHotPluginVolume: boolean;
    isOpen: boolean;
    onClose: () => void;
    vm: V1VirtualMachine;
    volume: V1Volume;
};
declare const DeleteDiskModal: FC<DeleteDiskModalProps>;
export default DeleteDiskModal;
