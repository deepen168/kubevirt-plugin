import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './virtual-machines-insance-page-network-tab.scss';
declare type VirtualMachinesInstancePageNetworkTabProps = {
    obj: V1VirtualMachineInstance;
};
declare const VirtualMachinesInstancePageNetworkTab: FC<VirtualMachinesInstancePageNetworkTabProps>;
export default VirtualMachinesInstancePageNetworkTab;
