import React from 'react';
import { V1beta1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare const PVCDeleteAlertExtension: React.FC<{
    pvc: V1beta1PersistentVolumeClaim;
}>;
export default PVCDeleteAlertExtension;
