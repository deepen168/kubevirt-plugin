import { FC } from 'react';
import { DataUpload } from '@kubevirt-utils/hooks/useCDIUpload/useCDIUpload';
import { AddBootableVolumeState, DROPDOWN_FORM_SELECTION } from '../../utils/constants';
declare type VolumeSourceProps = {
    bootableVolume: AddBootableVolumeState;
    setBootableVolumeField: (key: keyof AddBootableVolumeState, fieldKey?: string) => (value: boolean | File | number | string) => void;
    sourceType: DROPDOWN_FORM_SELECTION;
    upload: DataUpload;
};
declare const VolumeSource: FC<VolumeSourceProps>;
export default VolumeSource;
