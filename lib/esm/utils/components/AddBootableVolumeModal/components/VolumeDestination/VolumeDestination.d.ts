import { Dispatch, FC, SetStateAction } from 'react';
import { UseStorageProfileClaimPropertySetsValue } from '@kubevirt-utils/hooks/useStorageProfileClaimPropertySets';
import { AddBootableVolumeState, SetBootableVolumeFieldType } from '../../utils/constants';
declare type VolumeDestinationProps = {
    applyStorageProfileState: [boolean, Dispatch<SetStateAction<boolean>>];
    bootableVolume: AddBootableVolumeState;
    claimPropertySetsData: UseStorageProfileClaimPropertySetsValue;
    setBootableVolumeField: SetBootableVolumeFieldType;
};
declare const VolumeDestination: FC<VolumeDestinationProps>;
export default VolumeDestination;
