import { V1beta1VirtualMachineClusterInstancetype } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { PaginationState } from '@kubevirt-utils/hooks/usePagination/utils/types';
import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
import { ThSortType } from '@patternfly/react-table/dist/esm/components/Table/base/types';
declare type UseInstanceTypeListColumnsValues = {
    columns: TableColumn<V1beta1VirtualMachineClusterInstancetype>[];
    getSortType: (columnIndex: number) => ThSortType;
    sortedData: V1beta1VirtualMachineClusterInstancetype[];
};
declare type UseInstanceTypeListColumns = (data: V1beta1VirtualMachineClusterInstancetype[], pagination: PaginationState) => UseInstanceTypeListColumnsValues;
declare const useInstanceTypeListColumns: UseInstanceTypeListColumns;
export default useInstanceTypeListColumns;
