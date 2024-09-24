import { FC } from 'react';
import { InstanceTypeVMStore, UseBootableVolumesValues } from '@catalog/CreateFromInstanceTypes/state/utils/types';
import { V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { UserSettingFavorites } from '@kubevirt-utils/hooks/useKubevirtUserSettings/utils/types';
import { BootableVolume } from '@kubevirt-utils/resources/bootableresources/types';
import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
import { ThSortType } from '@patternfly/react-table/dist/esm/components/Table/base/types';
declare type BootableVolumeTableProps = {
    activeColumns: TableColumn<BootableVolume>[];
    bootableVolumesData: UseBootableVolumesValues;
    favorites: UserSettingFavorites;
    getSortType: (columnIndex: number) => ThSortType;
    preferencesMap: {
        [resourceKeyName: string]: V1beta1VirtualMachineClusterPreference;
    };
    selectedBootableVolumeState?: [BootableVolume, InstanceTypeVMStore['onSelectCreatedVolume']];
    sortedPaginatedData: BootableVolume[];
};
declare const BootableVolumeTable: FC<BootableVolumeTableProps>;
export default BootableVolumeTable;
