import { SecretModel } from '@kubevirt-ui/kubevirt-api/console';
import { initialSSHCredentials } from '@kubevirt-utils/components/SSHSecretModal/utils/constants';
import { SecretSelectionOption, } from '@kubevirt-utils/components/SSHSecretModal/utils/types';
import { decodeSecret } from '@kubevirt-utils/resources/secret/utils';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sGet } from '@openshift-console/dynamic-plugin-sdk';
export var getSSHCredentials = function (sshSecretName, sshSecretNamespace) {
    if (isEmpty(sshSecretName))
        return initialSSHCredentials;
    return k8sGet({
        model: SecretModel,
        name: sshSecretName,
        ns: sshSecretNamespace,
    })
        .then(function (secret) { return ({
        appliedDefaultKey: true,
        applyKeyToProject: false,
        secretOption: SecretSelectionOption.useExisting,
        sshPubKey: decodeSecret(secret),
        sshSecretName: sshSecretName,
        sshSecretNamespace: sshSecretNamespace,
    }); })
        .catch(function () { return initialSSHCredentials; });
};
//# sourceMappingURL=utils.js.map