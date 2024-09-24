import { PrometheusValue } from '@openshift-console/dynamic-plugin-sdk';
import { ChartDataObject } from './constants';
export declare const mapPrometheusValues: (prometheusValues: PrometheusValue[], name: string) => ChartDataObject[];
export declare const formatTimestamp: (timespan: number, time: any, dropLine?: boolean) => string;
export declare const getLabel: (timespan: number, chartData: ChartDataObject[], formatIEC?: boolean) => (prop: {
    datum: any;
}) => string;
export declare const getTickValuesAxisY: (maxValue: number, normalize?: any) => number[];
export declare const getTimeTickValues: (domainX: [number, number]) => number[];
export declare const getDomainY: (maxValue: number, normalize?: any) => [number, number];
export declare const getBaseQuery: (duration: string, activeNamespace: string) => string;
