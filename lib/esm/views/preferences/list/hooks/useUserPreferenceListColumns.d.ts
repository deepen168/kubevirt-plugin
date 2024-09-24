import { V1beta1VirtualMachinePreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { PaginationState } from '@kubevirt-utils/hooks/usePagination/utils/types';
import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
declare type UseUserPreferenceListColumnsValues = [
    TableColumn<V1beta1VirtualMachinePreference>[],
    TableColumn<V1beta1VirtualMachinePreference>[],
    boolean
];
declare type UseUserPreferenceListColumns = (pagination: PaginationState, data: V1beta1VirtualMachinePreference[]) => UseUserPreferenceListColumnsValues;
declare const useUserPreferenceListColumns: UseUserPreferenceListColumns;
export default useUserPreferenceListColumns;
