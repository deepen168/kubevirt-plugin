import { IoK8sApiCoreV1Secret } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const decodeSecret: (secret: IoK8sApiCoreV1Secret) => string;
export declare const encodeSecretKey: (key: string) => string;
export declare const encodeKeyForVirtctlCommand: (vm: V1VirtualMachine, decodedPubKey: string) => string;
export declare const generateSSHKeySecret: (name: string, namespace: string, sshKey: string) => {
    apiVersion: string;
    data: {
        key: string;
    };
    kind: string;
    metadata: {
        name: string;
        namespace: string;
    };
};
export declare const getInitialSSHDetails: ({ applyKeyToProject, secretToCreate, sshSecretName, }: {
    applyKeyToProject?: boolean | undefined;
    secretToCreate?: IoK8sApiCoreV1Secret | undefined;
    sshSecretName: string;
}) => SSHSecretDetails;
