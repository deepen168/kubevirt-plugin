import { FC } from 'react';
import { SetTopConsumerData, TopConsumersData } from '@kubevirt-utils/hooks/useKubevirtUserSettings/utils/types';
import './TopConsumersGridRow.scss';
declare type TopConsumersGridRowProps = {
    localStorageData: TopConsumersData;
    rowNumber: number;
    setLocalStorageData: SetTopConsumerData;
    topGrid?: boolean;
};
declare const TopConsumersGridRow: FC<TopConsumersGridRowProps>;
export default TopConsumersGridRow;
