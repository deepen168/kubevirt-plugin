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
import React, { useCallback } from 'react';
import { modelToGroupVersionKind, ProjectModel } from '@kubevirt-ui/kubevirt-api/console';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import { isEqualObject } from '@kubevirt-utils/components/NodeSelectorModal/utils/helpers';
import { SecretSelectionOption, } from '@kubevirt-utils/components/SSHSecretModal/utils/types';
import { createSSHSecret } from '@kubevirt-utils/components/SSHSecretModal/utils/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Button, Grid, GridItem, Truncate } from '@patternfly/react-core';
import { MinusCircleIcon } from '@patternfly/react-icons';
import AddProjectAuthKeyButton from '../AddProjectAuthKeyButton/AddProjectAuthKeyButton';
import './SSHAuthKeyRow.scss';
var SSHAuthKeyRow = function (_a) {
    var isRemoveDisabled = _a.isRemoveDisabled, onAuthKeyChange = _a.onAuthKeyChange, onAuthKeyDelete = _a.onAuthKeyDelete, row = _a.row, selectableProjects = _a.selectableProjects;
    var t = useKubevirtTranslation().t;
    var projectName = row.projectName, secretName = row.secretName;
    var onSubmit = useCallback(function (sshDetails) {
        var secretOption = sshDetails.secretOption, sshPubKey = sshDetails.sshPubKey, sshSecretName = sshDetails.sshSecretName;
        if (isEqualObject(sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.sshSecretName, secretName)) {
            return Promise.resolve();
        }
        if (secretOption === SecretSelectionOption.none && !isEmpty(secretName)) {
            var updatedRow = __assign(__assign({}, row), { secretName: '' });
            onAuthKeyChange(updatedRow);
            return Promise.resolve();
        }
        if (secretOption === SecretSelectionOption.useExisting &&
            secretName !== sshSecretName &&
            !isEmpty(sshSecretName)) {
            var updatedRow = __assign(__assign({}, row), { secretName: sshSecretName });
            onAuthKeyChange(updatedRow);
            return Promise.resolve();
        }
        if (secretOption === SecretSelectionOption.addNew &&
            !isEmpty(sshPubKey) &&
            !isEmpty(sshSecretName)) {
            var updatedRow = __assign(__assign({}, row), { secretName: sshSecretName });
            onAuthKeyChange(updatedRow);
            return createSSHSecret(sshPubKey, sshSecretName, projectName);
        }
    }, [secretName, row, onAuthKeyChange, projectName]);
    return (React.createElement(Grid, { className: "pf-u-mb-sm" },
        React.createElement(GridItem, { className: "ssh-auth-row__project-name", span: 5 }, isEmpty(secretName) ? (React.createElement(InlineFilterSelect, { options: selectableProjects === null || selectableProjects === void 0 ? void 0 : selectableProjects.sort().map(function (opt) { return ({
                children: opt,
                groupVersionKind: modelToGroupVersionKind(ProjectModel),
                value: opt,
            }); }), selected: projectName, setSelected: function (newProject) { return onAuthKeyChange(__assign(__assign({}, row), { projectName: newProject })); }, toggleProps: { isFullWidth: true, placeholder: t('Select project') } })) : (React.createElement(Truncate, { content: projectName }))),
        React.createElement(GridItem, { span: 1 }),
        React.createElement(GridItem, { className: "ssh-auth-row__edit-button", span: 5 },
            React.createElement(AddProjectAuthKeyButton, { onSubmit: onSubmit, secretName: secretName, selectedProject: projectName })),
        React.createElement(GridItem, { span: 1 },
            React.createElement(Button, { isDisabled: isRemoveDisabled, isInline: true, onClick: function () { return onAuthKeyDelete(row); }, variant: "plain" },
                React.createElement(MinusCircleIcon, null)))));
};
export default SSHAuthKeyRow;
//# sourceMappingURL=SSHAuthKeyRow.js.map