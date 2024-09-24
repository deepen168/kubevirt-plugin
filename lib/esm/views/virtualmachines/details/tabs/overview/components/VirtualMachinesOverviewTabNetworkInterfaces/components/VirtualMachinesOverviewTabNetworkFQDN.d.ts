import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './virtual-machines-overview-tab-network-fqdn.scss';
declare type VirtualMachinesOverviewTabNetworkFQDN = {
    vm: V1VirtualMachine;
};
declare const VirtualMachinesOverviewTabNetworkFQDN: FC<VirtualMachinesOverviewTabNetworkFQDN>;
export default VirtualMachinesOverviewTabNetworkFQDN;
