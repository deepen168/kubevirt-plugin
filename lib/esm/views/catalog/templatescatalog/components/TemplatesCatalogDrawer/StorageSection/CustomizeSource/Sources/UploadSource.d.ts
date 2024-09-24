import { FC } from 'react';
import { DataUpload } from '@kubevirt-utils/hooks/useCDIUpload/useCDIUpload';
declare type UploadSourceProps = {
    onFileSelected: (file: File | string) => void;
    relevantUpload: DataUpload;
    testId: string;
};
declare const UploadSource: FC<UploadSourceProps>;
export default UploadSource;
