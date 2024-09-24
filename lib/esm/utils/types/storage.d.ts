import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
export declare type ClaimPropertySet = {
    accessModes: string[];
    volumeMode?: string;
};
export declare type ClaimPropertySets = ClaimPropertySet[];
export declare type StorageProfile = {
    spec: {
        claimPropertySets?: {
            accessModes: string[];
            volumeMode?: string;
        }[];
        cloneStrategy?: string;
    };
    status: {
        claimPropertySets?: {
            accessModes: string[];
            volumeMode?: string;
        }[];
        cloneStrategy?: string;
        provisioner: string;
        storageClass: string;
    };
} & K8sResourceCommon;
