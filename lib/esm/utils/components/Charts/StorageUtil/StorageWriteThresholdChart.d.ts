import React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type StorageThresholdChartProps = {
    vmi: V1VirtualMachineInstance;
};
declare const StorageWriteThresholdChart: React.FC<StorageThresholdChartProps>;
export default StorageWriteThresholdChart;
