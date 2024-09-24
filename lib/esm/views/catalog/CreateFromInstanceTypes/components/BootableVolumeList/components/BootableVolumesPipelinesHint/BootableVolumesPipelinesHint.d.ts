import { FC } from 'react';
import { BootableVolume } from '@kubevirt-utils/resources/bootableresources/types';
import './BootableVolumesPipelinesHint.scss';
declare type BootableVolumesPipelinesHintProps = {
    bootableVolumes: BootableVolume[];
};
declare const BootableVolumesPipelinesHint: FC<BootableVolumesPipelinesHintProps>;
export default BootableVolumesPipelinesHint;
