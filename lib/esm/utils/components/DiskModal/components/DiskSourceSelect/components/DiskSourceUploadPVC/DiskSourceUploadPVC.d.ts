import { FC } from 'react';
import { DataUpload } from '@kubevirt-utils/hooks/useCDIUpload/useCDIUpload';
declare type DiskSourceUploadPVCProps = {
    label?: string;
    relevantUpload: DataUpload;
};
declare const DiskSourceUploadPVC: FC<DiskSourceUploadPVCProps>;
export default DiskSourceUploadPVC;
