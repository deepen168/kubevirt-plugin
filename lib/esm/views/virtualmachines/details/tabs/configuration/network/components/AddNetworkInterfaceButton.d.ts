import { FC } from 'react';
import { V1Interface, V1Network, V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type AddNetworkInterfaceButtonProps = {
    onAddNetworkInterface?: (updatedNetworks: V1Network[], updatedInterfaces: V1Interface[]) => Promise<V1VirtualMachine>;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
declare const AddNetworkInterfaceButton: FC<AddNetworkInterfaceButtonProps>;
export default AddNetworkInterfaceButton;
