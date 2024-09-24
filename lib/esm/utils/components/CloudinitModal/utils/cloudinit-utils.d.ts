import { LoadOptions } from 'js-yaml';
import { V1CloudInitNoCloudSource, V1VirtualMachine, V1Volume } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const deleteObjBlankValues: (obj?: object) => {
    [k: string]: any;
};
export declare const getCloudInitVolume: (vm: V1VirtualMachine) => V1Volume;
export declare const getCloudInitData: (cloudInitVolume: V1Volume) => V1CloudInitNoCloudSource;
export declare const convertYAMLUserDataObject: (userData: string, opts?: LoadOptions) => CloudInitUserData;
export declare const convertUserDataObjectToYAML: (userData: CloudInitUserData, addHeader: boolean) => string;
export declare const convertYAMLToNetworkDataObject: (networkData: string) => CloudInitNetworkData;
export declare const convertNetworkDataObjectToYAML: (networkData: CloudInitNetworkData) => string;
export declare const createDefaultCloudInitYAML: () => {
    networkData: string;
    userData: string;
};
export declare const addDNFUpdateToRunCMD: (userData: CloudInitUserData, autoUpdateEnabled: boolean) => void;
export declare const addSubscriptionManagerToRunCMD: (userData: CloudInitUserData, subscriptionData: RHELAutomaticSubscriptionData) => void;
export declare const updateCloudInitRHELSubscription: (vmVolumes: V1Volume[] | undefined, subscriptionData: RHELAutomaticSubscriptionData, autoUpdateEnabled?: boolean) => V1Volume[];
export declare type CloudInitUserData = {
    chpasswd?: {
        expire?: boolean;
    };
    hostname?: string;
    packages?: string[];
    password: string;
    runcmd?: string[];
    user: string;
};
export declare type CloudInitNetworkData = {
    addresses: string;
    gateway4: string;
    name: string;
};
