import { FC } from 'react';
import { IoK8sApiBatchV1Job, IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
import './checkups.scss';
declare type CheckupsNetworkStatusIconProps = {
    configMap?: IoK8sApiCoreV1ConfigMap;
    job: IoK8sApiBatchV1Job;
    onlyJob?: boolean;
};
declare const CheckupsNetworkStatusIcon: FC<CheckupsNetworkStatusIconProps>;
export default CheckupsNetworkStatusIcon;
