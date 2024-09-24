import { SSHSecretDetails } from '@kubevirt-utils/components/SSHSecretModal/utils/types';
export declare const getSSHCredentials: (sshSecretName: string, sshSecretNamespace: string) => Promise<SSHSecretDetails> | SSHSecretDetails;
