import { MetricChartData } from './useMetricChartData';
export declare type ChartPoint = {
    name?: string;
    x: Date;
    y: number;
};
export declare type ChartData = ChartPoint[];
export declare type ChartDomain = {
    x: [left: Date, right: Date];
    y: [bottom: number, top: number];
};
export declare type TickFormat = (tick: any, index: any, allTicks: any) => string;
declare type XAxisTickData = [tickValues: Date[], tickFormat: TickFormat];
export declare type UseXAxisTicks = (chartData: ChartData) => XAxisTickData;
declare type YAxisTickData = [
    tickValues: number[],
    tickFormat: (metric: string, unit: string) => TickFormat
];
export declare type UseYAxisTicks = (metricChartData: MetricChartData) => YAxisTickData;
export {};
