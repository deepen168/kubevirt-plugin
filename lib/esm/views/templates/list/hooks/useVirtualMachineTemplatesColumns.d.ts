import { K8sResourceCommon, TableColumn } from '@openshift-console/dynamic-plugin-sdk';
declare const useVirtualMachineTemplatesColumns: (namespace: string) => [TableColumn<K8sResourceCommon>[], TableColumn<K8sResourceCommon>[], boolean];
export default useVirtualMachineTemplatesColumns;
