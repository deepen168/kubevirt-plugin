import { FC } from 'react';
import { UseBootableVolumesValues } from '@catalog/CreateFromInstanceTypes/state/utils/types';
import { V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { UserSettingFavorites } from '@kubevirt-utils/hooks/useKubevirtUserSettings/utils/types';
import { BootableVolume } from '@kubevirt-utils/resources/bootableresources/types';
declare type BootableVolumeListModalProps = {
    bootableVolumesData: UseBootableVolumesValues;
    favorites: UserSettingFavorites;
    isOpen: boolean;
    onClose: () => void;
    onSelect: (selectedBootableVolume: BootableVolume) => void;
    preferencesData: V1beta1VirtualMachineClusterPreference[];
};
declare const BootableVolumeListModal: FC<BootableVolumeListModalProps>;
export default BootableVolumeListModal;
