import { IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { FilterValue, RowFilter } from '@openshift-console/dynamic-plugin-sdk';
declare type UseCheckupsStorageFilters = (data: IoK8sApiCoreV1ConfigMap[]) => [
    unfilteredData: IoK8sApiCoreV1ConfigMap[],
    dataFilter: IoK8sApiCoreV1ConfigMap[],
    onFilterChange: (type: string, value: FilterValue) => void,
    filters: RowFilter<IoK8sApiCoreV1ConfigMap>[]
];
declare const useCheckupsStorageListFilters: UseCheckupsStorageFilters;
export default useCheckupsStorageListFilters;
