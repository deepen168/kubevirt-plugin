import { V1beta1DataImportCron, V1beta1DataSource, V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
export declare enum DROPDOWN_FORM_SELECTION {
    UPLOAD_VOLUME = "volume",
    USE_EXISTING_PVC = "pvc",
    USE_REGISTRY = "registry",
    USE_SNAPSHOT = "snapshot"
}
export declare const optionsValueLabelMapper: {
    volume: any;
    pvc: any;
    registry: any;
    snapshot: any;
};
export declare type AddBootableVolumeState = {
    annotations: {
        [key: string]: string;
    };
    bootableVolumeName: string;
    bootableVolumeNamespace: string;
    cronExpression: string;
    isIso: boolean;
    labels: {
        [key: string]: string;
    };
    pvcName: string;
    pvcNamespace: string;
    registryURL: string;
    retainRevisions: number;
    size: string;
    snapshotName: string;
    snapshotNamespace: string;
    storageClassName: string;
    storageClassProvisioner: string;
    uploadFile: File | string;
    uploadFilename: string;
};
export declare type SetBootableVolumeFieldType = (key: keyof AddBootableVolumeState, fieldKey?: string) => (value: boolean | number | string) => void;
export declare const initialBootableVolumeState: AddBootableVolumeState;
export declare const initialDataImportCron: V1beta1DataImportCron;
export declare const emptySourceDataVolume: V1beta1DataVolume;
export declare const emptyDataSource: V1beta1DataSource;
