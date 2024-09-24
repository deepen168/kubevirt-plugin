import { V1beta1DataSource, V1beta1DataVolumeSourcePVC } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
export declare const getDataSourcePVCSource: (dataSource: V1beta1DataSource) => V1beta1DataVolumeSourcePVC;
export declare const getVolumeSnapshotSize: (volumeSnapshot: VolumeSnapshotKind) => any;
export declare const getVolumeSnapshotStorageClass: (volumeSnapshot: VolumeSnapshotKind) => any;
