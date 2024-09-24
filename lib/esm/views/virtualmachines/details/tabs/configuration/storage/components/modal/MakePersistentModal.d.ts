import { FC } from 'react';
import { V1VirtualMachine, V1Volume } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type MakePersistentModalProps = {
    isOpen: boolean;
    onClose: () => void;
    vm: V1VirtualMachine;
    volume: V1Volume;
};
declare const MakePersistentModal: FC<MakePersistentModalProps>;
export default MakePersistentModal;
