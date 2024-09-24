import { IoK8sApiCoreV1Secret } from '@kubevirt-ui/kubevirt-api/kubernetes';
export declare enum SecretSelectionOption {
    addNew = "addNew",
    none = "none",
    useExisting = "useExisting"
}
export declare type SSHSecretDetails = {
    appliedDefaultKey?: boolean;
    applyKeyToProject: boolean;
    secretOption: SecretSelectionOption;
    sshPubKey: string;
    sshSecretName: string;
    sshSecretNamespace: string;
};
export declare type SecretsData = {
    allSecrets: IoK8sApiCoreV1Secret[];
    projectsWithSecrets: {
        [p: string]: IoK8sApiCoreV1Secret[];
    };
    secretsLoaded: boolean;
    secretsLoadError: Error;
};
