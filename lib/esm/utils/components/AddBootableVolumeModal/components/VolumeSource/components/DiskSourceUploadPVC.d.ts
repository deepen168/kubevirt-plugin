import { FC } from 'react';
import { DataUpload } from '@kubevirt-utils/hooks/useCDIUpload/useCDIUpload';
declare type DiskSourceUploadPVCProps = {
    isIso: boolean;
    label?: string;
    relevantUpload: DataUpload;
    setIsIso: (value: boolean) => void;
    setUploadFile: (file: File | string) => void;
    setUploadFileName: (name: string) => void;
    uploadFile: File | string;
    uploadFileName: string;
};
declare const DiskSourceUploadPVC: FC<DiskSourceUploadPVCProps>;
export default DiskSourceUploadPVC;
