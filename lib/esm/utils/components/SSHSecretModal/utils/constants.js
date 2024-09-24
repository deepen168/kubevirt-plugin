import { SecretSelectionOption } from './types';
export var initialSSHCredentials = {
    appliedDefaultKey: false,
    applyKeyToProject: false,
    secretOption: SecretSelectionOption.none,
    sshPubKey: '',
    sshSecretName: '',
    sshSecretNamespace: '',
};
export var initialSysprepData = { data: {}, name: '', shouldCreateNewConfigMap: false };
export var MAX_NAME_LENGTH = 253;
export var MAX_SUFFIX_LENGTH = 27;
export var MIN_NAME_LENGTH_FOR_GENERATED_SUFFIX = MAX_NAME_LENGTH - MAX_SUFFIX_LENGTH;
//# sourceMappingURL=constants.js.map