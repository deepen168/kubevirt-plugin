import { V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
import { ProgressVariant } from '@patternfly/react-core';
export declare type CDIConfig = K8sResourceCommon & {
    status: {
        uploadProxyURL: string;
    };
};
export declare enum UPLOAD_STATUS {
    ALLOCATING = "ALLOCATING",
    CANCELED = "CANCELED",
    ERROR = "ERROR",
    SUCCESS = "SUCCESS",
    UPLOADING = "UPLOADING"
}
export declare const UPLOAD_STATUS_LABELS: {
    ALLOCATING: string;
    CANCELED: string;
    ERROR: string;
    SUCCESS: string;
    UPLOADING: string;
};
export declare const uploadStatusToProgressVariant: {
    CANCELED: ProgressVariant;
    ERROR: ProgressVariant;
    SUCCESS: ProgressVariant;
};
export declare class PVCInitError extends Error {
    constructor();
}
export declare const delay: (ms: any) => Promise<unknown>;
export declare const getUploadProxyURL: (config: CDIConfig) => string;
export declare const getUploadURL: (uploadProxyURL: string) => string;
export declare const killUploadPVC: (name: string, namespace: string) => Promise<{
    metadata: {
        name: string;
        namespace: string;
    };
}>;
export declare const createUploadPVC: (dataVolume: V1beta1DataVolume) => Promise<{
    token: string;
}>;
/**
 * while in wizard, the vm is not yet created so we wait for it to be created before adding ownerReference
 * @param vm - VirtualMachine
 * @param dataVolume - DataVolume
 * @returns - Promise
 */
export declare const addUploadDataVolumeOwnerReference: (vm: V1VirtualMachine, dataVolume: V1beta1DataVolume) => any;
