import { V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { PaginationState } from '@kubevirt-utils/hooks/usePagination/utils/types';
import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
declare type UseClusterPreferenceListColumnsValues = [
    TableColumn<V1beta1VirtualMachineClusterPreference>[],
    TableColumn<V1beta1VirtualMachineClusterPreference>[],
    boolean
];
declare type UseClusterPreferenceListColumns = (pagination: PaginationState, data: V1beta1VirtualMachineClusterPreference[]) => UseClusterPreferenceListColumnsValues;
declare const useClusterPreferenceListColumns: UseClusterPreferenceListColumns;
export default useClusterPreferenceListColumns;
