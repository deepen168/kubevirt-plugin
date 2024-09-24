import { FC } from 'react';
import { IoK8sApiBatchV1Job, IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
declare type CheckupsStorageDetailsPageHeaderProps = {
    configMap: IoK8sApiCoreV1ConfigMap;
    jobs: IoK8sApiBatchV1Job[];
};
declare const CheckupsStorageDetailsPageHeader: FC<CheckupsStorageDetailsPageHeaderProps>;
export default CheckupsStorageDetailsPageHeader;
