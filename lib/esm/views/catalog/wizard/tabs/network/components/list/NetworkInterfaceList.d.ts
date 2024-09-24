import * as React from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type NetworkInterfaceListProps = {
    onUpdateVM?: (updateVM: V1VirtualMachine) => Promise<void>;
    vm: V1VirtualMachine;
};
declare const NetworkInterfaceList: React.FC<NetworkInterfaceListProps>;
export default NetworkInterfaceList;
