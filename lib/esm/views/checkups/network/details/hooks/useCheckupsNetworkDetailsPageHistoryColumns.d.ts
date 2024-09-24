import { IoK8sApiBatchV1Job } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
declare type UseCheckupsNetworkDetailsPageHistoryColumns = () => TableColumn<IoK8sApiBatchV1Job>[];
declare const useCheckupsNetworkDetailsPageHistoryColumns: UseCheckupsNetworkDetailsPageHistoryColumns;
export default useCheckupsNetworkDetailsPageHistoryColumns;
