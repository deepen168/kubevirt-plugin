import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import { ProjectRequestModel } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sCreate } from '@openshift-console/dynamic-plugin-sdk';
import { Button, ButtonVariant, Form, FormGroup, Popover, Text, TextInput, } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import ExternalLink from '../ExternalLink/ExternalLink';
import TabModal from '../TabModal/TabModal';
var CreateProjectModal = function (_a) {
    var createdProject = _a.createdProject, isOpen = _a.isOpen, onClose = _a.onClose;
    var t = useKubevirtTranslation().t;
    var _b = useState(), name = _b[0], setName = _b[1];
    var _c = useState(), description = _c[0], setDescription = _c[1];
    var _d = useState(), displayName = _d[0], setDisplayName = _d[1];
    return (React.createElement(TabModal, { onSubmit: function (data) {
            return k8sCreate({
                data: data,
                model: ProjectRequestModel,
            }).then(function (value) { return createdProject(value); });
        }, headerText: t('Create project'), isDisabled: isEmpty(name), isOpen: isOpen, obj: { description: description, displayName: displayName, metadata: { name: name } }, onClose: onClose, submitBtnText: t('Create') },
        React.createElement(Text, null, t('An OpenShift project is an alternative representation of a Kubernetes namespace.')),
        React.createElement("br", null),
        React.createElement(ExternalLink, { href: "https://docs.okd.io/latest/applications/projects/working-with-projects.html" }, t('Learn more about working with projects')),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(Form, null,
            React.createElement(FormGroup, { labelIcon: React.createElement(Popover, { bodyContent: React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t }, "A Project name must consist of lower case alphanumeric characters or ', and must start and end with an alphanumeric character (e.g. 'my-name' or '123-abc'). You must create a Namespace to be able to create projects that begin with 'openshift-', 'kubernetes-', or 'kube-'.") },
                    React.createElement(Button, { variant: ButtonVariant.plain },
                        React.createElement(HelpIcon, null))), fieldId: "project-name", isRequired: true, label: t('Name') },
                React.createElement(TextInput, { id: "project-name", isRequired: true, name: "project-name", onChange: function (_event, value) { return setName(value); }, type: "text", value: name })),
            React.createElement(FormGroup, { fieldId: "display-name", label: "Display name" },
                React.createElement(TextInput, { id: "display-name", name: "display-name", onChange: function (_event, value) { return setDisplayName(value); }, type: "text", value: displayName })),
            React.createElement(FormGroup, { fieldId: "description", label: "Description" },
                React.createElement(TextInput, { id: "description", name: "description", onChange: function (_event, value) { return setDescription(value); }, type: "text", value: description })))));
};
export default CreateProjectModal;
//# sourceMappingURL=CreateProjectModal.js.map