import { BootableVolume } from '@kubevirt-utils/resources/bootableresources/types';
import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
import { ColumnLayout } from '@openshift-console/dynamic-plugin-sdk-internal/lib/extensions/console-types';
declare type UseBootVolumesColumns = (volumeListNamespace: string, isModal: boolean) => {
    activeColumns: TableColumn<BootableVolume>[];
    columnLayout: ColumnLayout | null;
    columns: TableColumn<BootableVolume>[];
    loadedColumns: boolean;
};
declare const useBootVolumeColumns: UseBootVolumesColumns;
export default useBootVolumeColumns;
