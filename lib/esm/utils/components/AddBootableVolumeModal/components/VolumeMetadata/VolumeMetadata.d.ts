import { FC } from 'react';
import { AddBootableVolumeState, SetBootableVolumeFieldType } from '../../utils/constants';
declare type VolumeMetadataProps = {
    bootableVolume: AddBootableVolumeState;
    deleteLabel: (labelKey: string) => void;
    setBootableVolumeField: SetBootableVolumeFieldType;
};
declare const VolumeMetadata: FC<VolumeMetadataProps>;
export default VolumeMetadata;
