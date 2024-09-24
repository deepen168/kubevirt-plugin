import { FC } from 'react';
import { IoK8sApiBatchV1Job, IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
declare type CheckupsNetworkDetailsPageSectionProps = {
    configMap: IoK8sApiCoreV1ConfigMap;
    job: IoK8sApiBatchV1Job;
};
declare const CheckupsNetworkDetailsPageSection: FC<CheckupsNetworkDetailsPageSectionProps>;
export default CheckupsNetworkDetailsPageSection;
