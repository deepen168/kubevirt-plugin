import { FC } from 'react';
import { IoK8sApiBatchV1Job, IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
declare type CheckupsNetworkActionsProps = {
    configMap: IoK8sApiCoreV1ConfigMap;
    isKebab?: boolean;
    jobs: IoK8sApiBatchV1Job[];
};
declare const CheckupsNetworkActions: FC<CheckupsNetworkActionsProps>;
export default CheckupsNetworkActions;
