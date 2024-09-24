import { V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sResourceCommon, TableColumn } from '@openshift-console/dynamic-plugin-sdk';
import { BootableResource } from '../../utils/types';
declare const useBootableVolumesColumns: (pagination: {
    [key: string]: any;
}, data: BootableResource[], preferences: V1beta1VirtualMachineClusterPreference[]) => [TableColumn<K8sResourceCommon>[], TableColumn<K8sResourceCommon>[], boolean];
export default useBootableVolumesColumns;
