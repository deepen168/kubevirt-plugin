import { FC } from 'react';
import { IoK8sApiBatchV1Job } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
declare const CheckupsNetworkDetailsPageHistoryRow: FC<RowProps<IoK8sApiBatchV1Job, {
    job: IoK8sApiBatchV1Job;
}>>;
export default CheckupsNetworkDetailsPageHistoryRow;
