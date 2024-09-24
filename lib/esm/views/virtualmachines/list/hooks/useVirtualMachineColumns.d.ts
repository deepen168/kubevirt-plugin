import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sResourceCommon, TableColumn } from '@openshift-console/dynamic-plugin-sdk';
declare const useVirtualMachineColumns: (namespace: string, pagination: {
    [key: string]: any;
}, data: V1VirtualMachine[]) => [TableColumn<K8sResourceCommon>[], TableColumn<K8sResourceCommon>[], boolean];
export default useVirtualMachineColumns;
