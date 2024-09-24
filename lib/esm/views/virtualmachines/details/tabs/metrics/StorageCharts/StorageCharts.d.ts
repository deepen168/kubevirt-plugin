import React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type StorageChartsProps = {
    vmi: V1VirtualMachineInstance;
};
declare const StorageCharts: React.FC<StorageChartsProps>;
export default StorageCharts;
