/// <reference types="react" />
import { DataUpload, UploadDataProps } from './types';
export declare type CDIUploadContextProps = {
    uploadData: ({ file, namespace, pvcName, token }: UploadDataProps) => void;
    uploadProxyURL?: string;
    uploads: DataUpload[];
};
export declare const CDIUploadContext: import("react").Context<CDIUploadContextProps>;
export declare const CDIUploadProvider: import("react").Provider<CDIUploadContextProps>;
