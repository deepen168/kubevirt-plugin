import React from 'react';
import { UploadingStatusProps } from '../utils/types';
declare type UploadPVCFormStatusProps = UploadingStatusProps & {
    allocateError: any;
    isAllocating: boolean;
    isSubmitting: boolean;
    onErrorClick: () => void;
};
declare const UploadPVCFormStatus: React.FC<UploadPVCFormStatusProps>;
export default UploadPVCFormStatus;
