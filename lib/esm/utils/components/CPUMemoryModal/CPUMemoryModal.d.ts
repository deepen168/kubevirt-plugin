import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './cpu-memory-modal.scss';
declare type VirtuaMachineOrVoid = V1VirtualMachine | void;
declare type CPUMemoryModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (updatedVM: V1VirtualMachine) => Promise<VirtuaMachineOrVoid> | VirtuaMachineOrVoid;
    templateNamespace?: string;
    vm: V1VirtualMachine;
};
declare const CPUMemoryModal: FC<CPUMemoryModalProps>;
export default CPUMemoryModal;
