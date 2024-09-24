import React from 'react';
import { DataUpload } from '../utils/types';
declare type UploadPVCPopoverUploadStatusProps = {
    error: {
        message: string;
    };
    onCancelClick: () => void;
    onErrorDeleteSource: () => void;
    upload: DataUpload;
};
declare const UploadPVCPopoverUploadStatus: React.FC<UploadPVCPopoverUploadStatusProps>;
export default UploadPVCPopoverUploadStatus;
