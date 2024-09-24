import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { VolumeSnapshotKind } from '@kubevirt-utils/components/SelectSnapshot/types';
import { PaginationState } from '@kubevirt-utils/hooks/usePagination/utils/types';
import { BootableVolume } from '@kubevirt-utils/resources/bootableresources/types';
import { ThSortType } from '@patternfly/react-table/dist/esm/components/Table/base/types';
declare type UseBootVolumeSortColumns = (unsortedData: BootableVolume[], volumeFavorites: string[], preferences: {
    [resourceKeyName: string]: V1beta1VirtualMachineClusterPreference;
}, pvcSources: {
    [resourceKeyName: string]: IoK8sApiCoreV1PersistentVolumeClaim;
}, volumeSnapshotSources: {
    [datSourceName: string]: VolumeSnapshotKind;
}, pagination: PaginationState) => {
    getSortType: (columnIndex: number) => ThSortType;
    sortedData: BootableVolume[];
    sortedPaginatedData: BootableVolume[];
};
declare const useBootVolumeSortColumns: UseBootVolumeSortColumns;
export default useBootVolumeSortColumns;
