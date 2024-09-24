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
import React, { useState } from 'react';
import SecretSelectionRadioGroup from '@kubevirt-utils/components/SSHSecretModal/components/SecretSelectionRadioGroup';
import SSHKeyUpload from '@kubevirt-utils/components/SSHSecretModal/components/SSHKeyUpload/SSHKeyUpload';
import { SecretSelectionOption, } from '@kubevirt-utils/components/SSHSecretModal/utils/types';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Alert, AlertVariant, Checkbox, Grid, GridItem } from '@patternfly/react-core';
import SSHOptionUseExisting from '../SSHOptionUseExisting/SSHOptionUseExisting';
import './SSHSecretModalBody.scss';
var SSHSecretModalBody = function (_a) {
    var isTemplate = _a.isTemplate, isUserTab = _a.isUserTab, localNSProject = _a.localNSProject, namespace = _a.namespace, secretsData = _a.secretsData, setLocalNSProject = _a.setLocalNSProject, setSSHDetails = _a.setSSHDetails, sshDetails = _a.sshDetails;
    var t = useKubevirtTranslation().t;
    var _b = useState(sshDetails.secretOption), secretSelectionOption = _b[0], setSecretSelectionOption = _b[1];
    var allSecrets = secretsData.allSecrets, projectsWithSecrets = secretsData.projectsWithSecrets, secretsLoaded = secretsData.secretsLoaded, secretsLoadError = secretsData.secretsLoadError;
    var showDefaultCheckbox = (secretSelectionOption === SecretSelectionOption.addNew && !isTemplate) ||
        (!isEmpty(projectsWithSecrets) && secretSelectionOption === SecretSelectionOption.useExisting);
    return (React.createElement(Grid, { span: 12 },
        React.createElement(GridItem, null,
            React.createElement(SecretSelectionRadioGroup, { selectedOption: secretSelectionOption, setSelectedOption: setSecretSelectionOption, setSSHDetails: setSSHDetails })),
        React.createElement(GridItem, { className: "ssh-secret-section__body" },
            secretSelectionOption === SecretSelectionOption.useExisting && (React.createElement(SSHOptionUseExisting, { localNSProject: localNSProject, namespace: namespace, projectsWithSecrets: projectsWithSecrets, secrets: allSecrets, secretsLoaded: secretsLoaded, setLocalNSProject: setLocalNSProject, setSSHDetails: setSSHDetails, sshDetails: sshDetails })),
            secretSelectionOption === SecretSelectionOption.addNew && (React.createElement(SSHKeyUpload, { secrets: allSecrets, setSSHDetails: setSSHDetails, sshDetails: sshDetails }))),
        showDefaultCheckbox && (React.createElement(Checkbox, { label: t('Automatically apply this key to any new VirtualMachine you create in this project.'), onClick: function () {
                return setSSHDetails(function (prev) { return (__assign(__assign({}, prev), { applyKeyToProject: !prev.applyKeyToProject })); });
            }, className: "pf-u-mt-md", id: "apply-key-to-project-per-user", isChecked: sshDetails.applyKeyToProject || isUserTab, isDisabled: isUserTab })),
        secretsLoadError && (React.createElement(Alert, { title: t('Error'), variant: AlertVariant.danger }, secretsLoadError))));
};
export default SSHSecretModalBody;
//# sourceMappingURL=SSHSecretModalBody.js.map