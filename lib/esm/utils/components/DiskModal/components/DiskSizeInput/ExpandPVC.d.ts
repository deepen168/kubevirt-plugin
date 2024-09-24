import { FC } from 'react';
import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes';
declare type ExpandPVCProps = {
    pvc: IoK8sApiCoreV1PersistentVolumeClaim;
};
declare const ExpandPVC: FC<ExpandPVCProps>;
export default ExpandPVC;
