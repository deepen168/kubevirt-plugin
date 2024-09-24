import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type DeleteVMModalProps = {
    isOpen: boolean;
    onClose: () => void;
    vm: V1VirtualMachine;
};
declare const DeleteVMModal: FC<DeleteVMModalProps>;
export default DeleteVMModal;
