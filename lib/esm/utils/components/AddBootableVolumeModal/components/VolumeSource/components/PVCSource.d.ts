import { FC } from 'react';
import { AddBootableVolumeState, SetBootableVolumeFieldType } from '@kubevirt-utils/components/AddBootableVolumeModal/utils/constants';
declare type PVCSourceProps = {
    bootableVolume: AddBootableVolumeState;
    setBootableVolumeField: SetBootableVolumeFieldType;
};
declare const PVCSource: FC<PVCSourceProps>;
export default PVCSource;
