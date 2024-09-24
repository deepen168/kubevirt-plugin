import { V1beta1DataImportCron, V1beta1DataSource, V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { BootableVolume } from './types';
export declare const isBootableVolumePVCKind: (bootableVolume: BootableVolume) => boolean;
export declare const getBootableVolumeGroupVersionKind: (bootableVolume: BootableVolume) => {
    version: string;
    kind: string;
    group: string | undefined;
};
export declare const getBootableVolumePVCSource: (bootableVolume: BootableVolume, pvcSources: {
    [resourceKeyName: string]: IoK8sApiCoreV1PersistentVolumeClaim;
}) => IoK8sApiCoreV1PersistentVolumeClaim | null;
export declare const getInstanceTypePrefix: (instanceTypeNamePrefix: string) => string;
export declare const deleteDVAndRelatedResources: (dataVolume: BootableVolume | V1beta1DataVolume, dataSource: BootableVolume | V1beta1DataSource, persistentVolumeClaim: BootableVolume | IoK8sApiCoreV1PersistentVolumeClaim) => Promise<void>;
export declare const isBootableVolumeISO: (bootableVolume: BootableVolume) => boolean;
export declare const isDeprecated: (bootVolumeName: string) => boolean;
export declare const getDataImportCronFromDataSource: (dataImportCrons: V1beta1DataImportCron[], dataSource: V1beta1DataSource) => V1beta1DataImportCron;
