import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { RunningVMsChartLegendLabelItem } from '../RunningVMsChartLegendLabel';
import { ChartDataObject } from './constants';
export declare const getInstanceTypeSeriesLabel: (instanceTypeName: string) => string;
export declare const getChartData: (resourceToVMCountMap: Map<string, RunningVMsChartLegendLabelItem>) => ChartDataObject[];
export declare const getResourceLegendItems: (resourceToVMCountMap: Map<string, RunningVMsChartLegendLabelItem>) => RunningVMsChartLegendLabelItem[];
export declare const getResourcesToVMCountMap: (loaded: boolean, vms: V1VirtualMachine[], type: string) => Map<string, RunningVMsChartLegendLabelItem>;
export declare const vmsPerResourceCount: (resourceToVMCountMap: any) => number;
