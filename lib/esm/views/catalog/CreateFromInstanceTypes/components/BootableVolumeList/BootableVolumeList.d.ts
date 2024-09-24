import { FC } from 'react';
import { UseBootableVolumesValues } from '@catalog/CreateFromInstanceTypes/state/utils/types';
import { CREATE_VM_TAB } from '@catalog/CreateVMHorizontalNav/constants';
import { V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { UserSettingFavorites } from '@kubevirt-utils/hooks/useKubevirtUserSettings/utils/types';
import { BootableVolume } from '@kubevirt-utils/resources/bootableresources/types';
import './BootableVolumeList.scss';
declare type BootableVolumeListProps = {
    bootableVolumesData: UseBootableVolumesValues;
    currentTab?: CREATE_VM_TAB;
    displayShowAllButton?: boolean;
    favorites: UserSettingFavorites;
    preferencesData: V1beta1VirtualMachineClusterPreference[];
    selectedBootableVolumeState?: [BootableVolume, (selectedVolume: BootableVolume) => void];
};
declare const BootableVolumeList: FC<BootableVolumeListProps>;
export default BootableVolumeList;
