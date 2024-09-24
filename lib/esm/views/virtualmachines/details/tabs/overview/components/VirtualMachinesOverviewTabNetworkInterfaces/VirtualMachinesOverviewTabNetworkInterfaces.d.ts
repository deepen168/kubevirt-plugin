import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './virtual-machines-overview-tab-interfaces.scss';
declare type VirtualMachinesOverviewTabInterfacesProps = {
    vm: V1VirtualMachine;
    vmi: V1VirtualMachineInstance;
};
declare const VirtualMachinesOverviewTabInterfaces: FC<VirtualMachinesOverviewTabInterfacesProps>;
export default VirtualMachinesOverviewTabInterfaces;
