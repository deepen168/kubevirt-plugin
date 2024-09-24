import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type NetworkInterfaceTableProps = {
    vm: V1VirtualMachine;
    vmi: V1VirtualMachineInstance;
};
declare const NetworkInterfaceList: FC<NetworkInterfaceTableProps>;
export default NetworkInterfaceList;
