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
import { VirtualMachineModel } from 'src/views/dashboard-extensions/utils';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import SecretNameLabel from '@kubevirt-utils/components/SSHSecretModal/components/SecretNameLabel';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import VMSSHSecretModal from '@kubevirt-utils/components/VMSSHSecretModal/VMSSHSecretModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettings from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettings';
import { asAccessReview } from '@kubevirt-utils/resources/shared';
import { getVMSSHSecretName } from '@kubevirt-utils/resources/vm';
import { k8sUpdate, useAccessReview } from '@openshift-console/dynamic-plugin-sdk';
import { Stack } from '@patternfly/react-core';
import { useDynamicSSHInjection } from '../hooks/useDynamicSSHInjection';
import DynamicSSHKeyInjectionDescription from './DynamicSSHKeyInjectionDescription';
var SSHTabAuthorizedSSHKey = function (_a) {
    var isCustomizeInstanceType = _a.isCustomizeInstanceType, onUpdateVM = _a.onUpdateVM, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _b = useKubevirtUserSettings('ssh'), authorizedSSHKeys = _b[0], updateAuthorizedSSHKeys = _b[1], loaded = _b[2];
    var accessReview = asAccessReview(VirtualMachineModel, vm, 'update');
    var canUpdateVM = useAccessReview(accessReview || {})[0];
    var secretName = useMemo(function () { return getVMSSHSecretName(vm); }, [vm]);
    var isDynamicSSHInjectionEnabled = useDynamicSSHInjection(vm);
    var isEditable = ((canUpdateVM && isDynamicSSHInjectionEnabled) || isCustomizeInstanceType) && loaded;
    var onSubmit = function (updatedVM) {
        var _a, _b;
        return onUpdateVM
            ? onUpdateVM(updatedVM)
            : k8sUpdate({
                data: updatedVM,
                model: VirtualMachineModel,
                name: (_a = updatedVM === null || updatedVM === void 0 ? void 0 : updatedVM.metadata) === null || _a === void 0 ? void 0 : _a.name,
                ns: (_b = updatedVM === null || updatedVM === void 0 ? void 0 : updatedVM.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
            });
    };
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(Stack, { hasGutter: true },
            React.createElement(SecretNameLabel, { secretName: secretName }),
            React.createElement(DynamicSSHKeyInjectionDescription, { isDynamicSSHInjectionEnabled: isDynamicSSHInjectionEnabled })), onEditClick: function () {
            return createModal(function (modalProps) { return (React.createElement(VMSSHSecretModal, __assign({}, modalProps, { authorizedSSHKeys: authorizedSSHKeys, updateAuthorizedSSHKeys: updateAuthorizedSSHKeys, updateVM: onSubmit, vm: vm }))); });
        }, "data-test-id": "public-ssh-key", descriptionHeader: React.createElement(SearchItem, { id: "public-ssh-key" }, t('Public SSH key')), isEdit: isEditable, showEditOnTitle: true }));
};
export default SSHTabAuthorizedSSHKey;
//# sourceMappingURL=SSHTabAuthorizedSSHKey.js.map