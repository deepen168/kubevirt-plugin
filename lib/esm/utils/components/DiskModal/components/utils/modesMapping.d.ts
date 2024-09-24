import { V1beta1StorageSpecVolumeModeEnum } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare enum ACCESS_MODES {
    ROX = "ReadOnlyMany",
    RWO = "ReadWriteOnce",
    RWX = "ReadWriteMany"
}
export declare const initialAccessModes: ACCESS_MODES[];
export declare const initialVolumeModes: V1beta1StorageSpecVolumeModeEnum[];
declare type ModeMapping = {
    [volumeMode in V1beta1StorageSpecVolumeModeEnum]?: ACCESS_MODES[];
};
declare type ProvisionerAccessModeMapping = {
    [provisioner: string]: ModeMapping;
};
export declare const provisionerAccessModeMapping: ProvisionerAccessModeMapping;
export declare const ACCESS_MODE_RADIO_OPTIONS: {
    label: any;
    value: ACCESS_MODES;
}[];
export declare const VOLUME_MODE_RADIO_OPTIONS: {
    label: any;
    value: V1beta1StorageSpecVolumeModeEnum;
}[];
export declare const getAccessModeForProvisioner: (provisioner: string, volumeMode: V1beta1StorageSpecVolumeModeEnum) => any[] | undefined;
export declare const getVolumeModeForProvisioner: (provisioner: string, accessMode: ACCESS_MODES) => V1beta1StorageSpecVolumeModeEnum[];
export {};
