import { FC } from 'react';
import { RedHatInstanceTypeSeries } from '@kubevirt-utils/components/AddBootableVolumeModal/components/VolumeMetadata/components/InstanceTypeDrilldownSelect/utils/types';
import { UseInstanceTypeCardMenuSectionValues } from '../../../../utils/types';
import './RedHatSeriesMenuCard.scss';
declare type RedHatSeriesMenuCardProps = {
    rhSeriesItem: RedHatInstanceTypeSeries;
} & UseInstanceTypeCardMenuSectionValues;
declare const RedHatSeriesMenuCard: FC<RedHatSeriesMenuCardProps>;
export default RedHatSeriesMenuCard;
