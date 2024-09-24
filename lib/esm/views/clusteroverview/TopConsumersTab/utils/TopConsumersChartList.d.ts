import { FC } from 'react';
import { TopConsumersData } from '@kubevirt-utils/hooks/useKubevirtUserSettings/utils/types';
import { TopConsumerMetric } from './topConsumerMetric';
import { TopConsumerScope } from './topConsumerScope';
import './TopConsumersChartList.scss';
declare type TopConsumersChartListProps = {
    localStorageData: TopConsumersData;
    metric: TopConsumerMetric;
    scope: TopConsumerScope;
};
export declare const TopConsumersChartList: FC<TopConsumersChartListProps>;
export {};
