import { FC } from 'react';
import { PrometheusResult } from '@openshift-console/dynamic-plugin-sdk';
declare type NetworkThresholdSingleSourceChartProps = {
    data: PrometheusResult[];
    link: string;
};
declare const NetworkThresholdSingleSourceChart: FC<NetworkThresholdSingleSourceChartProps>;
export default NetworkThresholdSingleSourceChart;
