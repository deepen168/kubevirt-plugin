import React, { ReactNode } from 'react';
declare type UploadPVCButtonBarProps = {
    children?: ReactNode;
    className?: string;
    errorMessage?: string;
    infoMessage?: string;
    inProgress?: boolean;
    successMessage?: string;
    uploadProxyURL?: string;
};
declare const UploadPVCButtonBar: React.FC<UploadPVCButtonBarProps>;
export default UploadPVCButtonBar;
