import { FC } from 'react';
import { OnFilterChange } from '@openshift-console/dynamic-plugin-sdk';
import './MigrationChartLegend';
import { ChartDataItem } from './MigrationsChartDonut';
declare type MigrationChartLegendProps = {
    legendItems: ChartDataItem[];
    onFilterChange: OnFilterChange;
};
declare const MigrationChartLegend: FC<MigrationChartLegendProps>;
export default MigrationChartLegend;
