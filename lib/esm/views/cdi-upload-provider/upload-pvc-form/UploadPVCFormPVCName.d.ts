import React, { ReactEventHandler } from 'react';
declare type UploadPVCFormPVCNameProps = {
    handlePvcName: ReactEventHandler<HTMLInputElement>;
    isGolden: boolean;
    isLoading: boolean;
    pvcName: string;
};
declare const UploadPVCFormPVCName: React.FC<UploadPVCFormPVCNameProps>;
export default UploadPVCFormPVCName;
