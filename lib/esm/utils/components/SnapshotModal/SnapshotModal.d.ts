import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type SnapshotModalProps = {
    isOpen: boolean;
    onClose: () => void;
    vm: V1VirtualMachine;
};
declare const SnapshotModal: FC<SnapshotModalProps>;
export default SnapshotModal;
