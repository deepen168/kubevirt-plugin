import { IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
declare const useCheckupsNetworkCheckupsListColumns: () => [
    TableColumn<IoK8sApiCoreV1ConfigMap>[],
    TableColumn<IoK8sApiCoreV1ConfigMap>[],
    boolean
];
export default useCheckupsNetworkCheckupsListColumns;
