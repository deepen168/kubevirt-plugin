import { V1beta1VirtualMachineClusterInstancetype } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { PaginationState } from '@kubevirt-utils/hooks/usePagination/utils/types';
import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
declare type UseClusterInstancetypeListColumnsValues = [
    TableColumn<V1beta1VirtualMachineClusterInstancetype>[],
    TableColumn<V1beta1VirtualMachineClusterInstancetype>[],
    boolean
];
declare type UseClusterInstancetypeListColumns = (pagination: PaginationState, data: V1beta1VirtualMachineClusterInstancetype[]) => UseClusterInstancetypeListColumnsValues;
declare const useClusterInstancetypeListColumns: UseClusterInstancetypeListColumns;
export default useClusterInstancetypeListColumns;
