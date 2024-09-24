import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import '../virtual-machine-metrics-tab.scss';
declare type NetworkChartsProps = {
    vmi: V1VirtualMachineInstance;
};
declare const NetworkCharts: FC<NetworkChartsProps>;
export default NetworkCharts;
