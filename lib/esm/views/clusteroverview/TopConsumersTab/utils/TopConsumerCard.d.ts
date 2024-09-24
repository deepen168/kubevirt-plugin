import { FC } from 'react';
import { SetTopConsumerData, TopConsumersData } from '@kubevirt-utils/hooks/useKubevirtUserSettings/utils/types';
import './TopConsumerCard.scss';
declare type TopConsumersMetricCard = {
    cardID: string;
    localStorageData: TopConsumersData;
    setLocalStorageData: SetTopConsumerData;
};
declare const TopConsumerCard: FC<TopConsumersMetricCard>;
export default TopConsumerCard;
