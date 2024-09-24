import { FC } from 'react';
import { AddBootableVolumeState, SetBootableVolumeFieldType } from '@kubevirt-utils/components/AddBootableVolumeModal/utils/constants';
declare type SnapshotSourceProps = {
    bootableVolume: AddBootableVolumeState;
    setBootableVolumeField: SetBootableVolumeFieldType;
};
declare const SnapshotSource: FC<SnapshotSourceProps>;
export default SnapshotSource;
