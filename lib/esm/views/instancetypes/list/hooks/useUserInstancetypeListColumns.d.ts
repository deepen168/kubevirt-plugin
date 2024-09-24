import { V1beta1VirtualMachineInstancetype } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { PaginationState } from '@kubevirt-utils/hooks/usePagination/utils/types';
import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
declare type UseUserInstancetypeListColumnsValues = [
    TableColumn<V1beta1VirtualMachineInstancetype>[],
    TableColumn<V1beta1VirtualMachineInstancetype>[],
    boolean
];
declare type UseUserInstancetypeListColumns = (pagination: PaginationState, data: V1beta1VirtualMachineInstancetype[]) => UseUserInstancetypeListColumnsValues;
declare const useUserInstancetypeListColumns: UseUserInstancetypeListColumns;
export default useUserInstancetypeListColumns;
