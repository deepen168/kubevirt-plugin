import React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type MigrationThresholdChartProps = {
    vmi: V1VirtualMachineInstance;
};
declare const MigrationThresholdChart: React.FC<MigrationThresholdChartProps>;
export default MigrationThresholdChart;
