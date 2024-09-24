import { FC } from 'react';
import { ACCESS_MODES } from '@kubevirt-utils/components/DiskModal/components/utils/modesMapping';
declare type UploadPVCFormModeVolumeModeVolumeModeProps = {
    accessMode: ACCESS_MODES;
    loaded: boolean;
    onChange: (volumeMode: string) => void;
    provisioner: string;
    storageClass: string;
    volumeMode: string;
};
declare const UploadPVCFormModeVolumeMode: FC<UploadPVCFormModeVolumeModeVolumeModeProps>;
export default UploadPVCFormModeVolumeMode;
