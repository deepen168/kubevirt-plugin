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
import React from 'react';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SSHSecretModal from '@kubevirt-utils/components/SSHSecretModal/SSHSecretModal';
import { initialSSHCredentials } from '@kubevirt-utils/components/SSHSecretModal/utils/constants';
import { SecretSelectionOption, } from '@kubevirt-utils/components/SSHSecretModal/utils/types';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Button } from '@patternfly/react-core';
import { PencilAltIcon } from '@patternfly/react-icons';
var AddProjectAuthKeyButton = function (_a) {
    var onSubmit = _a.onSubmit, secretName = _a.secretName, selectedProject = _a.selectedProject;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    return (React.createElement(Button, { onClick: function () {
            return createModal(function (modalProps) { return (React.createElement(SSHSecretModal, __assign({ initialSSHSecretDetails: isEmpty(secretName)
                    ? initialSSHCredentials
                    : {
                        applyKeyToProject: true,
                        secretOption: SecretSelectionOption.useExisting,
                        sshPubKey: '',
                        sshSecretName: secretName,
                        sshSecretNamespace: selectedProject,
                    }, namespace: selectedProject, onSubmit: onSubmit }, modalProps, { isUserTab: true }))); });
        }, className: "project-ssh-row__secret-name", isDisabled: isEmpty(selectedProject), isInline: true, variant: "link" },
        isEmpty(secretName) ? t('Not configured') : secretName,
        ' ',
        React.createElement(PencilAltIcon, { className: "co-icon-space-l pf-c-button-icon--plain" })));
};
export default AddProjectAuthKeyButton;
//# sourceMappingURL=AddProjectAuthKeyButton.js.map