import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type NetworkChartsByNICProps = {
    nic: string;
    vmi: V1VirtualMachineInstance;
};
declare const NetworkChartsByNIC: FC<NetworkChartsByNICProps>;
export default NetworkChartsByNIC;
