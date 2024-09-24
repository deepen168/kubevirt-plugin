import { FC } from 'react';
import { UpdateValidatedVM } from '@catalog/utils/WizardVMContext';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { NetworkPresentation } from '@kubevirt-utils/resources/vm/utils/network/constants';
declare type WizardEditNetworkInterfaceModalProps = {
    isOpen: boolean;
    nicPresentation: NetworkPresentation;
    onClose: () => void;
    updateVM: UpdateValidatedVM;
    vm: V1VirtualMachine;
};
declare const WizardEditNetworkInterfaceModal: FC<WizardEditNetworkInterfaceModalProps>;
export default WizardEditNetworkInterfaceModal;
