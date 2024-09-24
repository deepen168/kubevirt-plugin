import { FC } from 'react';
import { V1Interface, V1Network, V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VirtualMachinesNetworkInterfaceModalProps = {
    headerText: string;
    isOpen: boolean;
    onAddNetworkInterface: (updatedNetworks: V1Network[], updatedInterfaces: V1Interface[]) => Promise<V1VirtualMachine>;
    onClose: () => void;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
declare const VirtualMachinesNetworkInterfaceModal: FC<VirtualMachinesNetworkInterfaceModalProps>;
export default VirtualMachinesNetworkInterfaceModal;
