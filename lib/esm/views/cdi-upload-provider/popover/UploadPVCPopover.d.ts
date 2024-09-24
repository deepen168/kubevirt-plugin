import React from 'react';
import { V1beta1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type PVCUploadStatusProps = {
    pvc: V1beta1PersistentVolumeClaim;
    title?: string;
};
declare const UploadPVCPopover: React.FC<PVCUploadStatusProps>;
export default UploadPVCPopover;
