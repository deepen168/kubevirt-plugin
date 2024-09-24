import * as React from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './virtual-machines-overview-tab-hardware-devices.scss';
declare type VirtualMachinesOverviewTabHardwareDevicesProps = {
    vm: V1VirtualMachine;
};
declare const VirtualMachinesOverviewTabHardwareDevices: React.FC<VirtualMachinesOverviewTabHardwareDevicesProps>;
export default VirtualMachinesOverviewTabHardwareDevices;
