import { PrometheusResponse, PrometheusResult, PrometheusValue } from '@openshift-console/dynamic-plugin-sdk';
export declare const SINGLE_VM_DURATION = "SINGLE_VM_DURATION";
export declare const TICKS_COUNT = 100;
export declare const MILLISECONDS_MULTIPLIER = 1000;
export declare const queriesToLink: (queries: string | string[]) => string;
export declare const tickFormat: (duration: string, currentTime: number) => (tick: any, index: number, ticks: any[]) => any;
export declare const getPrometheusData: (response: PrometheusResponse) => PrometheusValue[];
export declare const getPrometheusDataByNic: (response: PrometheusResponse, nic: string) => PrometheusResult[];
export declare const getPrometheusDataAllNics: (response: PrometheusResponse) => PrometheusResult[];
export declare const findNetworkMaxYValue: (chartData: {
    name: string;
    x: Date;
    y: number;
}[][]) => number;
export declare const getNetworkTickValues: (Ymax: number) => string[];
export declare const formatNetworkYTick: (tick: any, index: number, ticks: any[]) => any;
export declare const formatMemoryYTick: (yMax: number, fixedDigits: number) => (tick: number) => string;
export declare const findMaxYValue: (chartData: {
    name?: string;
    x: Date;
    y: number;
}[]) => null | number;
export declare const findMigrationMaxYValue: (processedData: any, remainingData: any, dirtyRateData: any) => number;
