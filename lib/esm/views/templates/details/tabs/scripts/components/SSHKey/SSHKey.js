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
import React, { useMemo } from 'react';
import produce from 'immer';
import { SecretModel, TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import LinuxLabel from '@kubevirt-utils/components/Labels/LinuxLabel';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { isEqualObject } from '@kubevirt-utils/components/NodeSelectorModal/utils/helpers';
import SecretNameLabel from '@kubevirt-utils/components/SSHSecretModal/components/SecretNameLabel';
import SSHSecretModal from '@kubevirt-utils/components/SSHSecretModal/SSHSecretModal';
import { SecretSelectionOption, } from '@kubevirt-utils/components/SSHSecretModal/utils/types';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getInitialSSHDetails } from '@kubevirt-utils/resources/secret/utils';
import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
import { getVMSSHSecretName } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { Button, ButtonVariant, Flex, FlexItem, Stack, Text, TextVariants, Title, } from '@patternfly/react-core';
import { PencilAltIcon } from '@patternfly/react-icons';
import useEditTemplateAccessReview from '../../../../hooks/useIsTemplateEditable';
import { removeCredential, removeSecretObject, updateSecretName, updateSSHKeyObject, } from './sshkey-utils';
var SSHKey = function (_a) {
    var template = _a.template;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var isTemplateEditable = useEditTemplateAccessReview(template).isTemplateEditable;
    var vm = getTemplateVirtualMachineObject(template);
    var vmAttachedSecretName = useMemo(function () { return getVMSSHSecretName(vm); }, [vm]);
    var secretToCreate = useMemo(function () { var _a; return (_a = template === null || template === void 0 ? void 0 : template.objects) === null || _a === void 0 ? void 0 : _a.find(function (obj) { return obj.kind === SecretModel.kind; }); }, [template.objects]);
    var initialSSHDetails = useMemo(function () { return getInitialSSHDetails({ secretToCreate: secretToCreate, sshSecretName: vmAttachedSecretName }); }, [vmAttachedSecretName, secretToCreate]);
    var onSubmit = function (sshDetails) {
        var secretOption = sshDetails.secretOption, sshPubKey = sshDetails.sshPubKey, sshSecretName = sshDetails.sshSecretName;
        if (isEqualObject(sshDetails, initialSSHDetails)) {
            return Promise.resolve();
        }
        var newTemplate = produce(template, function (draftTemplate) {
            removeSecretObject(draftTemplate, initialSSHDetails.sshSecretName);
            if (secretOption === SecretSelectionOption.none &&
                initialSSHDetails.secretOption !== SecretSelectionOption.none) {
                removeCredential(draftTemplate, initialSSHDetails.sshSecretName);
            }
            if (secretOption === SecretSelectionOption.useExisting &&
                initialSSHDetails.sshSecretName !== sshSecretName &&
                !isEmpty(sshSecretName)) {
                updateSecretName(draftTemplate, sshSecretName);
            }
            if (secretOption === SecretSelectionOption.addNew &&
                !isEmpty(sshPubKey) &&
                !isEmpty(sshSecretName)) {
                updateSSHKeyObject(draftTemplate, sshPubKey, initialSSHDetails.sshSecretName, sshSecretName);
            }
        });
        return k8sUpdate({
            data: newTemplate,
            model: TemplateModel,
            name: getName(newTemplate),
            ns: getNamespace(newTemplate),
        });
    };
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(Stack, { hasGutter: true },
            React.createElement("div", { "data-test": "ssh-popover" },
                React.createElement(Text, { component: TextVariants.p }, t('Select an available secret'))),
            React.createElement(SecretNameLabel, { secretName: vmAttachedSecretName })), descriptionHeader: React.createElement(Flex, { className: "vm-description-item__title" },
            React.createElement(FlexItem, null,
                React.createElement(Title, { headingLevel: "h2" },
                    t('Public SSH key'),
                    " ",
                    React.createElement(LinuxLabel, null))),
            React.createElement(FlexItem, null,
                React.createElement(Button, { onClick: function () {
                        return createModal(function (modalProps) { return (React.createElement(SSHSecretModal, __assign({}, modalProps, { initialSSHSecretDetails: initialSSHDetails, isTemplate: true, namespace: getNamespace(template), onSubmit: onSubmit }))); });
                    }, isDisabled: !isTemplateEditable, isInline: true, type: "button", variant: ButtonVariant.link },
                    t('Edit'),
                    React.createElement(PencilAltIcon, { className: "co-icon-space-l pf-c-button-icon--plain" })))) }));
};
export default SSHKey;
//# sourceMappingURL=SSHKey.js.map