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
import React, { useCallback, useEffect, useMemo } from 'react';
import { SecretModel } from '@kubevirt-ui/kubevirt-api/console';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { isEqualObject } from '@kubevirt-utils/components/NodeSelectorModal/utils/helpers';
import SSHSecretModal from '@kubevirt-utils/components/SSHSecretModal/SSHSecretModal';
import { SecretSelectionOption, } from '@kubevirt-utils/components/SSHSecretModal/utils/types';
import { addSecretToVM, removeSecretToVM, } from '@kubevirt-utils/components/SSHSecretModal/utils/utils';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getInitialSSHDetails } from '@kubevirt-utils/resources/secret/utils';
import { getVMSSHSecretName } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { DescriptionList, HelperText, HelperTextItem, SplitItem } from '@patternfly/react-core';
import { useDrawerContext } from './hooks/useDrawerContext';
var AuthorizedSSHKey = function (_a) {
    var _b;
    var authorizedSSHKey = _a.authorizedSSHKey, namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _c = useDrawerContext(), setSSHDetails = _c.setSSHDetails, setVM = _c.setVM, sshDetails = _c.sshDetails, template = _c.template, vm = _c.vm;
    var vmAttachedSecretName = useMemo(function () { return getVMSSHSecretName(vm); }, [vm]);
    var secretName = authorizedSSHKey || vmAttachedSecretName;
    var additionalSecretResource = (_b = template === null || template === void 0 ? void 0 : template.objects) === null || _b === void 0 ? void 0 : _b.find(function (object) { return (object === null || object === void 0 ? void 0 : object.kind) === SecretModel.kind; });
    var onSSHChange = useCallback(function (details) {
        var secretOption = details.secretOption, sshPubKey = details.sshPubKey, sshSecretName = details.sshSecretName;
        if (isEqualObject(details, sshDetails)) {
            return;
        }
        if (secretOption === SecretSelectionOption.none &&
            (sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.secretOption) !== SecretSelectionOption.none) {
            setVM(removeSecretToVM(vm));
        }
        if (secretOption === SecretSelectionOption.useExisting &&
            (sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.sshSecretName) !== sshSecretName &&
            !isEmpty(sshSecretName)) {
            setVM(addSecretToVM(vm, sshSecretName));
        }
        if (secretOption === SecretSelectionOption.addNew &&
            !isEmpty(sshPubKey) &&
            !isEmpty(sshSecretName)) {
            setVM(addSecretToVM(vm, sshSecretName));
        }
        setSSHDetails(details);
        return Promise.resolve();
    }, [sshDetails, setVM, vm, setSSHDetails]);
    useEffect(function () {
        if (isEmpty(sshDetails)) {
            var initialSSHDetails = getInitialSSHDetails({
                applyKeyToProject: !isEmpty(authorizedSSHKey),
                secretToCreate: isEmpty(authorizedSSHKey) && !isEmpty(additionalSecretResource)
                    ? additionalSecretResource
                    : null,
                sshSecretName: secretName,
            });
            onSSHChange(initialSSHDetails);
        }
    }, [additionalSecretResource, authorizedSSHKey, onSSHChange, secretName, sshDetails]);
    return (React.createElement(SplitItem, null,
        React.createElement(DescriptionList, { className: "pf-c-description-list" },
            React.createElement(VirtualMachineDescriptionItem, { onEditClick: function () {
                    return createModal(function (modalProps) { return (React.createElement(SSHSecretModal, __assign({}, modalProps, { initialSSHSecretDetails: sshDetails, namespace: namespace, onSubmit: onSSHChange }))); });
                }, descriptionData: (sshDetails === null || sshDetails === void 0 ? void 0 : sshDetails.sshSecretName) || t('Not configured'), descriptionHeader: t('Public SSH key'), isEdit: true }),
            !isEmpty(additionalSecretResource) && (React.createElement(HelperText, null,
                React.createElement(HelperTextItem, { hasIcon: true, variant: "warning" }, t('This key will override the SSH key secret set on the template')))))));
};
export default AuthorizedSSHKey;
//# sourceMappingURL=AuthorizedSSHKey.js.map