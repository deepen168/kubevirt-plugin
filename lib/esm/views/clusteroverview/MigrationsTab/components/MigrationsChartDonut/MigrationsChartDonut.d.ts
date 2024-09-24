import { FC } from 'react';
import { V1VirtualMachineInstanceMigration } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { OnFilterChange } from '@openshift-console/dynamic-plugin-sdk';
declare type MigrationsChartDonutProps = {
    onFilterChange: OnFilterChange;
    vmims: V1VirtualMachineInstanceMigration[];
};
export declare type ChartDataItem = {
    x: string;
    y: number;
};
declare const MigrationsChartDonut: FC<MigrationsChartDonutProps>;
export default MigrationsChartDonut;
