import React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type StorageTotalReadWriteThresholdChartProps = {
    vmi: V1VirtualMachineInstance;
};
declare const StorageTotalReadWriteThresholdChart: React.FC<StorageTotalReadWriteThresholdChartProps>;
export default StorageTotalReadWriteThresholdChart;
