import React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type StorageThresholdChartProps = {
    vmi: V1VirtualMachineInstance;
};
declare const StorageReadThresholdChart: React.FC<StorageThresholdChartProps>;
export default StorageReadThresholdChart;
