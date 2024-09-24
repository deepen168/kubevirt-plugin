import { FC } from 'react';
import { IoK8sApiBatchV1Job, IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
declare type CheckupsNetworkDetailsPageHeaderProps = {
    configMap: IoK8sApiCoreV1ConfigMap;
    jobs: IoK8sApiBatchV1Job[];
};
declare const CheckupsNetworkDetailsPageHeader: FC<CheckupsNetworkDetailsPageHeaderProps>;
export default CheckupsNetworkDetailsPageHeader;
