import * as React from 'react';
import './TopConsumersProgressChart.scss';
declare type TopConsumersProgressChartProps = {
    labelUnit: string;
    labelValue: number;
    maxValue: number;
    title: string;
    value: number;
};
declare const TopConsumersProgressChart: React.FC<TopConsumersProgressChartProps>;
export default TopConsumersProgressChart;
