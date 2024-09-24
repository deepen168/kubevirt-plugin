import { Canceler } from 'axios';
import { V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { UPLOAD_STATUS } from './consts';
export declare type UploadingStatusProps = {
    dataVolume?: V1beta1DataVolume;
    onCancelClick?: () => void;
    onSuccessClick?: () => void;
    upload: DataUpload;
};
export declare type UploadDataProps = {
    file: File;
    namespace: string;
    pvcName: string;
    token: string;
};
export declare type DataUpload = {
    cancelUpload?: Canceler;
    fileName?: string;
    namespace: string;
    progress?: number;
    pvcName: string;
    uploadError?: any;
    uploadStatus?: UPLOAD_STATUS;
};
export declare type OperatingSystemRecord = {
    baseImageName?: string;
    baseImageNamespace?: string;
    baseImageRecomendedSize?: any;
    id: string;
    isSourceRef?: boolean;
    name: string;
};
