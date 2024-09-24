import { FC } from 'react';
import { UpdateValidatedVM } from '@catalog/utils/WizardVMContext';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type WizardNetworkInterfaceModalProps = {
    headerText: string;
    isOpen: boolean;
    onClose: () => void;
    updateVM: UpdateValidatedVM;
    vm: V1VirtualMachine;
};
declare const WizardNetworkInterfaceModal: FC<WizardNetworkInterfaceModalProps>;
export default WizardNetworkInterfaceModal;
