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
import React, { useCallback, useEffect, useState } from 'react';
import { modelToGroupVersionKind, ProjectModel } from '@kubevirt-ui/kubevirt-api/console';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { addNewSecret, getSecretNameErrorMessage, } from '@kubevirt-utils/components/SSHSecretModal/utils/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useProjects from '@kubevirt-utils/hooks/useProjects';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { Alert, AlertVariant, Bullseye, FormGroup, Grid, GridItem, TextInput, ValidatedOptions, } from '@patternfly/react-core';
import { SecretSelectionOption } from '../../utils/types';
import SecretDropdown from '../SecretDropdown/SecretDropdown';
import './SSHOptionUseExisting.scss';
var SSHOptionUseExisting = function (_a) {
    var localNSProject = _a.localNSProject, namespace = _a.namespace, projectsWithSecrets = _a.projectsWithSecrets, secrets = _a.secrets, secretsLoaded = _a.secretsLoaded, setLocalNSProject = _a.setLocalNSProject, setSSHDetails = _a.setSSHDetails, sshDetails = _a.sshDetails;
    var t = useKubevirtTranslation().t;
    var activeNamespace = useActiveNamespace()[0];
    var _b = useState(null), nameErrorMessage = _b[0], setNameErrorMessage = _b[1];
    var _c = useState(localNSProject || namespace || (sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.sshSecretNamespace)), selectedProject = _c[0], setSelectedProject = _c[1];
    var projects = useProjects()[0];
    useEffect(function () {
        return !selectedProject &&
            setSelectedProject(localNSProject || namespace || (sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.sshSecretNamespace) || (projects === null || projects === void 0 ? void 0 : projects[0]));
    }, [namespace, localNSProject, projects, selectedProject, sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.sshSecretNamespace]);
    var onSelectProject = useCallback(function (newProject) {
        setSelectedProject(newProject);
        setLocalNSProject(newProject);
        var addNew = addNewSecret(namespace, newProject, activeNamespace);
        setSSHDetails(function (prev) { return (__assign(__assign({}, prev), { secretOption: addNew ? SecretSelectionOption.addNew : SecretSelectionOption.useExisting, sshPubKey: '', sshSecretName: '', sshSecretNamespace: namespace })); });
    }, [setLocalNSProject, namespace, activeNamespace, setSSHDetails]);
    var onSelectSecret = function (generatedSecretName) {
        setNameErrorMessage(getSecretNameErrorMessage(generatedSecretName, namespace, secrets));
    };
    var onChangeSecretName = function (newSecretName) {
        setNameErrorMessage(getSecretNameErrorMessage(newSecretName, namespace, secrets));
        setSSHDetails(function (prev) { return (__assign(__assign({}, prev), { sshSecretName: newSecretName })); });
    };
    var showNewSecretNameField = namespace
        ? selectedProject !== namespace
        : selectedProject !== (sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.sshSecretNamespace);
    if (isEmpty(projects))
        return React.createElement(Bullseye, null, t('No SSH keys found'));
    return (React.createElement(React.Fragment, null,
        React.createElement(Alert, { title: t('Select a secret from a different project to copy the secret to your current project.'), isInline: true, variant: AlertVariant.info }),
        React.createElement(Grid, { className: "ssh-use-existing__body" },
            React.createElement(GridItem, { span: 6 },
                React.createElement(FormGroup, { fieldId: "project", label: t('Project') },
                    React.createElement(InlineFilterSelect, { options: projects.map(function (project) { return ({
                            children: project,
                            groupVersionKind: modelToGroupVersionKind(ProjectModel),
                            value: project,
                        }); }), className: "ssh-use-existing__form-group--project", selected: selectedProject, setSelected: onSelectProject, toggleProps: { isFullWidth: true, placeholder: t('Select project') } }))),
            React.createElement(GridItem, { span: 6 },
                React.createElement(FormGroup, { className: "ssh-use-existing__form-group--secret", fieldId: "secret", label: t('Public SSH key') }, secretsLoaded ? (React.createElement(SecretDropdown, { namespace: namespace, onSelectSecret: onSelectSecret, selectedProject: selectedProject, selectedProjectSecrets: projectsWithSecrets === null || projectsWithSecrets === void 0 ? void 0 : projectsWithSecrets[selectedProject], setSSHDetails: setSSHDetails, sshDetails: sshDetails })) : (React.createElement(Loading, null))))),
        showNewSecretNameField && (React.createElement(FormGroup, { label: t('New secret name') },
            React.createElement(TextInput, { id: "new-secret-name", onChange: function (_event, newSecretName) { return onChangeSecretName(newSecretName); }, type: "text", value: sshDetails.sshSecretName }),
            React.createElement(FormGroupHelperText, { validated: !nameErrorMessage ? ValidatedOptions.default : ValidatedOptions.error }, nameErrorMessage && nameErrorMessage)))));
};
export default SSHOptionUseExisting;
//# sourceMappingURL=SSHOptionUseExisting.js.map