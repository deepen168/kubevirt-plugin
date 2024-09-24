var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from 'react';
import { useWizardVMContext } from '@catalog/utils/WizardVMContext';
import { WizardDescriptionItem } from '@catalog/wizard/components/WizardDescriptionItem';
import { getCloudInitData, getCloudInitVolume, } from '@kubevirt-utils/components/CloudinitModal/utils/cloudinit-utils';
import { DYNAMIC_CREDENTIALS_SUPPORT } from '@kubevirt-utils/components/DynamicSSHKeyInjection/constants/constants';
import { DynamicSSHKeyInjection } from '@kubevirt-utils/components/DynamicSSHKeyInjection/DynamicSSHKeyInjection';
import DynamicSSHKeyInjectionHelpTextIcon from '@kubevirt-utils/components/DynamicSSHKeyInjection/DynamicSSHKeyInjectionHelpTextIcon';
import { getCloudInitConfigDrive, getCloudInitPropagationMethod, } from '@kubevirt-utils/components/SSHSecretModal/utils/utils';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getLabel } from '@kubevirt-utils/resources/shared';
import { getAccessCredentials, getVMSSHSecretName, getVolumes } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
var DynamicSSHKeyInjectionWizard = function () {
    var _a = useWizardVMContext(), updateVM = _a.updateVM, vm = _a.vm;
    var hasSSHKey = !isEmpty(getAccessCredentials(vm));
    var secretName = getVMSSHSecretName(vm);
    var hasDynamicSSHLabel = getLabel(vm, DYNAMIC_CREDENTIALS_SUPPORT) === 'true';
    var isDisabled = (!hasSSHKey && !secretName) || !hasDynamicSSHLabel;
    var onSubmit = function (checked) {
        updateVM(function (vmDraft) {
            var cloudInitVolume = getCloudInitVolume(vm);
            if (cloudInitVolume) {
                vmDraft.spec.template.spec.volumes = __spreadArray(__spreadArray([], getVolumes(vm).filter(function (volume) { return !getCloudInitData(volume); }), true), [
                    {
                        cloudInitNoCloud: getCloudInitConfigDrive(checked, getCloudInitData(cloudInitVolume), true),
                        name: cloudInitVolume.name,
                    },
                ], false);
            }
            vmDraft.spec.template.spec.accessCredentials[0].sshPublicKey.propagationMethod =
                getCloudInitPropagationMethod(checked, vm);
        });
    };
    return (React.createElement(WizardDescriptionItem, { description: React.createElement(DynamicSSHKeyInjection, { isDisabled: isDisabled, onSubmit: onSubmit, vm: vm }), helpTextIcon: React.createElement(DynamicSSHKeyInjectionHelpTextIcon, { isDisabled: isDisabled }), testId: "wizard-dynamic-ssh-key-injection", title: t('Dynamic SSH key injection') }));
};
export default DynamicSSHKeyInjectionWizard;
//# sourceMappingURL=DynamicSSHKeyInjectionWizard.js.map