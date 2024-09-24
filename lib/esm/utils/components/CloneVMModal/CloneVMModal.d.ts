import { FC } from 'react';
import { V1beta1VirtualMachineSnapshot, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type CloneVMModalProps = {
    headerText?: string;
    isOpen: boolean;
    onClose: () => void;
    source: V1beta1VirtualMachineSnapshot | V1VirtualMachine;
};
declare const CloneVMModal: FC<CloneVMModalProps>;
export default CloneVMModal;
