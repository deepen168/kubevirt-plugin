import { FC } from 'react';
import { AddBootableVolumeState, SetBootableVolumeFieldType } from '../utils/constants';
declare type SchedulingSettingsProps = {
    bootableVolume: AddBootableVolumeState;
    setBootableVolumeField: SetBootableVolumeFieldType;
};
declare const SchedulingSettings: FC<SchedulingSettingsProps>;
export default SchedulingSettings;
