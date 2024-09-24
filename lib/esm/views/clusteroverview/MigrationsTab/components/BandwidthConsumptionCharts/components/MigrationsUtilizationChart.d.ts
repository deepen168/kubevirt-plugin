import { FC } from 'react';
import { ChartDataObject } from '../constants';
declare type MigrationsUtilizationChartProps = {
    chartData: ChartDataObject[];
    domain?: {
        x: [number, number];
        y: [number, number];
    };
    labels: any;
    tickFormat?: ((tick: any, index: number, ticks: any[]) => number | string) | any[];
    tickValues?: any[];
    title: string;
};
declare const MigrationsUtilizationChart: FC<MigrationsUtilizationChartProps>;
export default MigrationsUtilizationChart;
