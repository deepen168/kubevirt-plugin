import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { IoK8sApiCoreV1Secret } from '@kubevirt-ui/kubevirt-api/kubernetes';
export declare const getTemplateSSHKeySecret: (template: V1Template, vmSSHKeySecretName: string) => IoK8sApiCoreV1Secret | undefined;
export declare const updateSecretName: (template: V1Template, secretName: string) => void;
export declare const updateSSHKeyObject: (template: V1Template, sshKey: string, existingSecretName: string, newSSHSecretName: string) => void;
export declare const removeSecretObject: (template: V1Template, secretName: string) => void;
export declare const removeCredential: (template: V1Template, secretName: string) => void;
