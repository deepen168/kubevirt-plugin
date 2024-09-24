import React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type MigrationChartsProps = {
    vmi: V1VirtualMachineInstance;
};
declare const MigrationCharts: React.FC<MigrationChartsProps>;
export default MigrationCharts;
