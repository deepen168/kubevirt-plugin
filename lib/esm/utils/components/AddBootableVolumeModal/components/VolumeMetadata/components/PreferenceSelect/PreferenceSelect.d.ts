import { FC } from 'react';
import { SetBootableVolumeFieldType } from '@kubevirt-utils/components/AddBootableVolumeModal/utils/constants';
declare type PreferenceSelectProps = {
    deleteLabel: (labelKey: string) => void;
    selectedPreference: string;
    setBootableVolumeField: SetBootableVolumeFieldType;
};
declare const PreferenceSelect: FC<PreferenceSelectProps>;
export default PreferenceSelect;
