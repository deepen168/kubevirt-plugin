import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type FirmwareBootloaderModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine | void>;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
declare const FirmwareBootloaderModal: FC<FirmwareBootloaderModalProps>;
export default FirmwareBootloaderModal;
