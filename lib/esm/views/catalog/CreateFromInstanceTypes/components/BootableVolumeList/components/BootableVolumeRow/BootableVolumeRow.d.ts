import { FC } from 'react';
import { InstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/utils/types';
import { V1beta1DataImportCron } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { VolumeSnapshotKind } from '@kubevirt-utils/components/SelectSnapshot/types';
import { BootableVolume } from '@kubevirt-utils/resources/bootableresources/types';
import './BootableVolumeRow.scss';
declare type BootableVolumeRowProps = {
    activeColumnIDs: string[];
    bootableVolume: BootableVolume;
    rowData: {
        bootableVolumeSelectedState: [BootableVolume, InstanceTypeVMStore['onSelectCreatedVolume']];
        dataImportCron: V1beta1DataImportCron;
        favorites: [isFavorite: boolean, updaterFavorites: (val: boolean) => void];
        preference: V1beta1VirtualMachineClusterPreference;
        pvcSource: IoK8sApiCoreV1PersistentVolumeClaim;
        volumeSnapshotSource: VolumeSnapshotKind;
    };
};
declare const BootableVolumeRow: FC<BootableVolumeRowProps>;
export default BootableVolumeRow;
