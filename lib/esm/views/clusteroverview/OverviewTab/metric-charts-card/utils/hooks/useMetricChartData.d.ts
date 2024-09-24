import { ChartData, ChartDomain } from './types';
export declare type MetricChartData = {
    chartData: ChartData;
    domain: ChartDomain;
    isReady: boolean;
    largestValue: number;
    numberOfTicks: number;
    unit: string;
};
declare type UseMetricChartData = (metric: string) => MetricChartData;
declare const useMetricChartData: UseMetricChartData;
export default useMetricChartData;
