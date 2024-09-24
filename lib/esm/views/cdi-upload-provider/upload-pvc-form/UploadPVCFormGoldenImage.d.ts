import { FC } from 'react';
import { V1beta1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { OperatingSystemRecord } from '../utils/types';
declare type UploadPVCFormGoldenImageProps = {
    goldenPvcs: V1beta1PersistentVolumeClaim[];
    handleCDROMChange: (checked: boolean) => void;
    handleOs: (newOs: string) => void;
    handlePvcSizeTemplate: (checked: boolean) => void;
    isLoading: boolean;
    mountAsCDROM: boolean;
    namespace: string;
    operatingSystems: OperatingSystemRecord[];
    os: OperatingSystemRecord;
    osImageExists: boolean;
    pvcSizeFromTemplate: boolean;
};
declare const UploadPVCFormGoldenImage: FC<UploadPVCFormGoldenImageProps>;
export default UploadPVCFormGoldenImage;
