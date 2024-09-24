import React from 'react';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
declare type PVCAlertExtension = {
    pvc: K8sResourceCommon;
};
declare const PVCAlertExtension: React.FC<PVCAlertExtension>;
export default PVCAlertExtension;
