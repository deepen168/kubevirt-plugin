import { V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { UPLOAD_STATUS } from './utils';
export declare const useCDIUpload: () => UseCDIUploadValues;
export declare type DataUpload = {
    cancelUpload?: () => Promise<{
        metadata: {
            name: string;
            namespace: string;
        };
    }>;
    fileName?: string;
    namespace: string;
    progress?: number;
    pvcName: string;
    uploadError?: any;
    uploadStatus?: UPLOAD_STATUS;
};
export declare type UseCDIUploadValues = {
    upload: DataUpload;
    uploadData: ({ dataVolume, file }: UploadDataProps) => Promise<void>;
};
export declare type UploadDataProps = {
    dataVolume: V1beta1DataVolume;
    file: File;
};
