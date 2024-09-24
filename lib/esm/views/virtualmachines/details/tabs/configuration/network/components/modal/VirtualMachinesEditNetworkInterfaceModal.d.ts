import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { NetworkPresentation } from '@kubevirt-utils/resources/vm/utils/network/constants';
declare type VirtualMachinesEditNetworkInterfaceModalProps = {
    isOpen: boolean;
    nicPresentation: NetworkPresentation;
    onClose: () => void;
    vm: V1VirtualMachine;
};
declare const VirtualMachinesEditNetworkInterfaceModal: FC<VirtualMachinesEditNetworkInterfaceModalProps>;
export default VirtualMachinesEditNetworkInterfaceModal;
