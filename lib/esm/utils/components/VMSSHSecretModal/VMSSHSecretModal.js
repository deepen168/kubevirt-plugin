var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useCallback, useMemo } from 'react';
import { getInitialSSHDetails } from '@kubevirt-utils/resources/secret/utils';
import { getNamespace } from '@kubevirt-utils/resources/shared';
import { getVMSSHSecretName } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { isEqualObject } from '../NodeSelectorModal/utils/helpers';
import SSHSecretModal from '../SSHSecretModal/SSHSecretModal';
import { SecretSelectionOption } from '../SSHSecretModal/utils/types';
import { addSecretToVM, createSSHSecret, detachVMSecret } from '../SSHSecretModal/utils/utils';
var VMSSHSecretModal = function (_a) {
    var authorizedSSHKeys = _a.authorizedSSHKeys, isOpen = _a.isOpen, onClose = _a.onClose, updateAuthorizedSSHKeys = _a.updateAuthorizedSSHKeys, updateVM = _a.updateVM, vm = _a.vm;
    var _b = useMemo(function () { return [getNamespace(vm), getVMSSHSecretName(vm)]; }, [vm]), namespace = _b[0], secretName = _b[1];
    var initialSSHDetails = useMemo(function () {
        return getInitialSSHDetails({
            applyKeyToProject: !isEmpty(secretName) && (authorizedSSHKeys === null || authorizedSSHKeys === void 0 ? void 0 : authorizedSSHKeys[namespace]) === secretName,
            sshSecretName: secretName,
        });
    }, [authorizedSSHKeys, namespace, secretName]);
    var onSubmit = useCallback(function (sshDetails) {
        var _a;
        var applyKeyToProject = sshDetails.applyKeyToProject, secretOption = sshDetails.secretOption, sshPubKey = sshDetails.sshPubKey, sshSecretName = sshDetails.sshSecretName;
        if (isEqualObject(sshDetails, initialSSHDetails)) {
            return Promise.resolve();
        }
        if (applyKeyToProject && (authorizedSSHKeys === null || authorizedSSHKeys === void 0 ? void 0 : authorizedSSHKeys[namespace]) !== sshSecretName) {
            updateAuthorizedSSHKeys(__assign(__assign({}, authorizedSSHKeys), (_a = {}, _a[namespace] = sshSecretName, _a)));
        }
        if (secretOption === SecretSelectionOption.none &&
            initialSSHDetails.secretOption !== SecretSelectionOption.none) {
            return detachVMSecret(vm);
        }
        if (secretOption === SecretSelectionOption.useExisting &&
            initialSSHDetails.sshSecretName !== sshSecretName &&
            !isEmpty(sshSecretName)) {
            return updateVM(addSecretToVM(vm, sshSecretName));
        }
        if (secretOption === SecretSelectionOption.addNew &&
            !isEmpty(sshPubKey) &&
            !isEmpty(sshSecretName)) {
            return createSSHSecret(sshPubKey, sshSecretName, getNamespace(vm)).then(function () {
                return updateVM(addSecretToVM(vm, sshSecretName));
            });
        }
        return Promise.resolve();
    }, [authorizedSSHKeys, initialSSHDetails, namespace, updateAuthorizedSSHKeys, updateVM, vm]);
    return (React.createElement(SSHSecretModal, { initialSSHSecretDetails: initialSSHDetails, isOpen: isOpen, namespace: namespace, onClose: onClose, onSubmit: onSubmit }));
};
export default VMSSHSecretModal;
//# sourceMappingURL=VMSSHSecretModal.js.map