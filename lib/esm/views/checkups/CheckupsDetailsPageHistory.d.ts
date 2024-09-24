import { FC } from 'react';
import { IoK8sApiBatchV1Job } from '@kubevirt-ui/kubevirt-api/kubernetes';
declare type CheckupsNetworkDetailsPageHistoryProps = {
    error: Error;
    jobs: IoK8sApiBatchV1Job[];
    loading: boolean;
};
declare const CheckupsNetworkDetailsPageHistory: FC<CheckupsNetworkDetailsPageHistoryProps>;
export default CheckupsNetworkDetailsPageHistory;
