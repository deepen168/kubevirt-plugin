import * as React from 'react';
import './RunningVMsChartLegendLabel.scss';
export declare type RunningVMsChartLegendLabelItem = {
    color: string;
    isInstanceType: boolean;
    name: string;
    namespace: string;
    percentage: number;
    templateNamespace?: string;
    vmCount: number;
};
declare type RunningVMsChartLegendLabelProps = {
    item: RunningVMsChartLegendLabelItem;
};
declare const RunningVMsChartLegendLabel: React.FC<RunningVMsChartLegendLabelProps>;
export default RunningVMsChartLegendLabel;
