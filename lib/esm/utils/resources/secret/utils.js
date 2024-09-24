import { Buffer } from 'buffer';
import { SecretModel } from '@kubevirt-ui/kubevirt-api/console';
import { SecretSelectionOption, } from '@kubevirt-utils/components/SSHSecretModal/utils/types';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { getName } from '../shared';
import { getCloudInitData, getCloudInitVolume, } from './../../components/CloudinitModal/utils/cloudinit-utils';
export var decodeSecret = function (secret) { var _a, _b; return Buffer.from(((_a = secret === null || secret === void 0 ? void 0 : secret.data) === null || _a === void 0 ? void 0 : _a.key) || ((_b = Object.values(secret === null || secret === void 0 ? void 0 : secret.data)) === null || _b === void 0 ? void 0 : _b[0]) || '', 'base64').toString(); };
export var encodeSecretKey = function (key) { return Buffer.from(key).toString('base64'); };
export var encodeKeyForVirtctlCommand = function (vm, decodedPubKey) {
    var _a;
    var sshKeys = "ssh_authorized_keys:\n                     - ".concat(decodedPubKey);
    var sshString = decodedPubKey ? sshKeys : '';
    var cloudInitUserData = (_a = getCloudInitData(getCloudInitVolume(vm))) === null || _a === void 0 ? void 0 : _a.userData.concat(sshString);
    return encodeSecretKey(cloudInitUserData);
};
export var generateSSHKeySecret = function (name, namespace, sshKey) { return ({
    apiVersion: SecretModel.apiVersion,
    data: { key: encodeSecretKey(sshKey) },
    kind: SecretModel.kind,
    metadata: { name: name, namespace: namespace },
}); };
export var getInitialSSHDetails = function (_a) {
    var _b = _a.applyKeyToProject, applyKeyToProject = _b === void 0 ? false : _b, secretToCreate = _a.secretToCreate, sshSecretName = _a.sshSecretName;
    return !isEmpty(secretToCreate)
        ? {
            appliedDefaultKey: false,
            applyKeyToProject: applyKeyToProject,
            secretOption: SecretSelectionOption.addNew,
            sshPubKey: decodeSecret(secretToCreate),
            sshSecretName: getName(secretToCreate),
            sshSecretNamespace: '',
        }
        : {
            appliedDefaultKey: true,
            applyKeyToProject: applyKeyToProject,
            secretOption: !isEmpty(sshSecretName)
                ? SecretSelectionOption.useExisting
                : SecretSelectionOption.none,
            sshPubKey: '',
            sshSecretName: sshSecretName || '',
            sshSecretNamespace: '',
        };
};
//# sourceMappingURL=utils.js.map