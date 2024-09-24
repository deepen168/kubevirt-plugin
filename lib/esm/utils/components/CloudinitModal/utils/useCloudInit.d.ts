import { V1VirtualMachine, V1Volume } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { CloudInitNetworkData, CloudInitUserData } from './cloudinit-utils';
export declare const useCloudInit: (vm: V1VirtualMachine) => UseCloudInitValues;
declare type UseCloudInitValues = {
    cloudInitVolume: V1Volume;
    enableNetworkData: boolean;
    networkData: CloudInitNetworkData;
    setEnableNetworkData: (enableNetwork: boolean) => void;
    updatedVM: V1VirtualMachine;
    updateFromYAML: (yaml: string) => void;
    updateNetworkField: (key: keyof CloudInitNetworkData, value: string) => void;
    updateUserField: (key: keyof CloudInitUserData, value: string) => void;
    userData: CloudInitUserData;
};
export {};
