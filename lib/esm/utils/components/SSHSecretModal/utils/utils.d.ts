import { IoK8sApiCoreV1Secret } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1CloudInitConfigDriveSource, V1CloudInitNoCloudSource, V1SSHPublicKeyAccessCredentialPropagationMethod, V1VirtualMachine, V1Volume } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sResourceCommon, WatchK8sResults } from '@openshift-console/dynamic-plugin-sdk';
export declare const getAllSecrets: (secretsData: WatchK8sResults<{
    [p: string]: IoK8sApiCoreV1Secret[];
}>) => IoK8sApiCoreV1Secret[];
export declare const getSecretsLoaded: (secretsData: WatchK8sResults<{
    [p: string]: IoK8sApiCoreV1Secret[];
}>) => boolean;
export declare const validateSecretNameLength: (secretName: string) => boolean;
export declare const validateSecretNameUnique: (secretName: string, vmNamespaceTarget: string, secrets: IoK8sApiCoreV1Secret[]) => boolean;
export declare const getSecretNameErrorMessage: (secretName: string, vmNamespaceTarget: string, secrets: IoK8sApiCoreV1Secret[]) => string;
export declare const removeSecretToVM: (vm: V1VirtualMachine) => V1VirtualMachine;
export declare const detachVMSecret: (vm: V1VirtualMachine) => Promise<void>;
export declare const applyCloudDriveCloudInitVolume: (vm: V1VirtualMachine, isDynamic?: boolean) => V1Volume[];
export declare const addSecretToVM: (vm: V1VirtualMachine, secretName?: string, isDynamic?: boolean) => V1VirtualMachine;
export declare const getCloudInitPropagationMethod: (isDynamic: boolean, vm: V1VirtualMachine) => V1SSHPublicKeyAccessCredentialPropagationMethod;
export declare const getCloudInitConfigDrive: (isDynamic: boolean, cloudInitVolumeData: V1CloudInitConfigDriveSource | V1CloudInitNoCloudSource, isTemplate?: boolean) => V1CloudInitConfigDriveSource;
export declare const createSSHSecret: (sshKey: string, secretName: string, secretNamespace: string, dryRun?: boolean) => Promise<K8sResourceCommon & {
    data?: {
        [key: string]: string;
    } | undefined;
}>;
export declare const getAllSecretsFromSecretData: (secretsResourceData: IoK8sApiCoreV1Secret[]) => IoK8sApiCoreV1Secret[];
export declare const getMappedProjectsWithKeys: (secretsData: IoK8sApiCoreV1Secret[]) => {
    [namespace: string]: IoK8sApiCoreV1Secret[];
};
export declare const getPropagationMethod: (vm: V1VirtualMachine) => V1SSHPublicKeyAccessCredentialPropagationMethod;
export declare const generateValidSecretName: (secretName: string) => any;
export declare const addNewSecret: (namespace: string, targetProject: string, activeNamespace: string) => boolean;
