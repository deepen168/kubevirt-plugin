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
import React, { useEffect, useState } from 'react';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import { addNewSecret, generateValidSecretName, } from '@kubevirt-utils/components/SSHSecretModal/utils/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { decodeSecret } from '@kubevirt-utils/resources/secret/utils';
import { getName } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { SecretSelectionOption } from '../../utils/types';
var SecretDropdown = function (_a) {
    var namespace = _a.namespace, onSelectSecret = _a.onSelectSecret, selectedProject = _a.selectedProject, selectedProjectSecrets = _a.selectedProjectSecrets, setSSHDetails = _a.setSSHDetails, sshDetails = _a.sshDetails;
    var t = useKubevirtTranslation().t;
    var activeNamespace = useActiveNamespace()[0];
    var _b = useState(sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.sshSecretName), secretName = _b[0], setSecretName = _b[1];
    useEffect(function () { return isEmpty(sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.sshSecretName) && isEmpty(sshDetails.sshPubKey) && setSecretName(''); }, [sshDetails.sshPubKey, sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.sshSecretName]);
    var onSelect = function (newSecretName) {
        var selectedSecret = selectedProjectSecrets.find(function (secret) { return getName(secret) === newSecretName; });
        var addNew = addNewSecret(namespace, selectedProject, activeNamespace);
        var sshPubKey = decodeSecret(selectedSecret);
        var generatedSecretName = generateValidSecretName(newSecretName);
        setSSHDetails(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), { secretOption: addNew ? SecretSelectionOption.addNew : SecretSelectionOption.useExisting, sshPubKey: sshPubKey, sshSecretName: addNew ? generatedSecretName : newSecretName, sshSecretNamespace: (_a = selectedSecret === null || selectedSecret === void 0 ? void 0 : selectedSecret.metadata) === null || _a === void 0 ? void 0 : _a.namespace }));
        });
        setSecretName(newSecretName);
        onSelectSecret(generatedSecretName);
    };
    return (React.createElement(InlineFilterSelect, { options: selectedProjectSecrets === null || selectedProjectSecrets === void 0 ? void 0 : selectedProjectSecrets.map(function (secret) {
            var name = getName(secret);
            return { children: name, value: name };
        }), selected: secretName, setSelected: onSelect, toggleProps: { isFullWidth: true, placeholder: t('Select secret') } }));
};
export default SecretDropdown;
//# sourceMappingURL=SecretDropdown.js.map