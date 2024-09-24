import { IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1Disk, V1VirtualMachine, V1Volume } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const AUTOUNATTEND = "autounattend.xml";
export declare const UNATTEND = "unattend.xml";
export declare const WINDOWS = "windows";
export declare type SysprepData = {
    autounattend?: string;
    unattended?: string;
};
export declare const sysprepDisk: () => V1Disk;
export declare const sysprepVolume: (sysprepName: string) => V1Volume;
export declare const addSysprepConfig: (vm: V1VirtualMachine, newSysprepName: string) => void;
export declare const removeSysprepConfig: (vm: V1VirtualMachine, sysprepVolumeName: string) => void;
export declare const generateSysprepConfigMapName: () => any;
declare type GenerateNewSysprepConfig = {
    data: IoK8sApiCoreV1ConfigMap['data'];
    sysprepName?: string;
};
export declare const generateNewSysprepConfig: ({ data, sysprepName, }: GenerateNewSysprepConfig) => IoK8sApiCoreV1ConfigMap;
export declare const getSysprepConfigMapName: (volume: V1Volume) => string | undefined;
export {};
