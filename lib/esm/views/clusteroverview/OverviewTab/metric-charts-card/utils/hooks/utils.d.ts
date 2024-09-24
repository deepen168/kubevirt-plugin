import { PrometheusValue } from '@openshift-console/dynamic-plugin-sdk';
import { ChartData, ChartPoint } from './types';
export declare const getDay: (point: ChartPoint) => number;
export declare const getValue: (point: PrometheusValue) => string;
export declare const getLargestValue: (data: PrometheusValue[]) => number;
export declare const findUnit: (metric: string, largestValue: number) => null | string;
export declare const getHumanizedValue: (metric: string, value: number, unit: string) => any | number;
export declare const formatLargestValue: (metric: string, largestValue: number, unit: string) => number;
export declare const getFormattedData: (rawData: PrometheusValue[], metric: string, unit: string) => {
    x: Date;
    y: any;
}[];
export declare const getNumberOfTicks: (formattedData: ChartPoint[]) => never[];
export declare const getPrevDay: (pointDay: number) => number;
export declare const isSingleDayData: (chartData: ChartData) => boolean;
export declare const getDayBoundaryIndexes: (chartData: ChartData) => {
    [key: string]: {
        end: number;
        start: number;
    };
};
export declare const getDayMidpoints: (chartData: ChartData) => Date[];
export declare const xTickFormat: (tick: Date, index: number, allTicks: Date[]) => string;
export declare const yTickFormat: (metric: string, unit: string) => (tick: any, index: any, allTicks: any) => string | null;
