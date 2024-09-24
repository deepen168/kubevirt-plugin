import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './boot-order.scss';
declare const BootOrderModal: FC<{
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine>;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
}>;
export default BootOrderModal;
