import React from 'react';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import { instanceTypeActionType } from '@catalog/CreateFromInstanceTypes/state/utils/types';
import { DynamicSSHKeyInjection } from '@kubevirt-utils/components/DynamicSSHKeyInjection/DynamicSSHKeyInjection';
import DynamicSSHKeyInjectionHelpTextIcon from '@kubevirt-utils/components/DynamicSSHKeyInjection/DynamicSSHKeyInjectionHelpTextIcon';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { dataSourceHasDynamicSSHLabel } from '../utils/utils';
var DynamicSSHKeyInjectionInstanceType = function () {
    var _a = useInstanceTypeVMStore(), instanceTypeVMState = _a.instanceTypeVMState, setInstanceTypeVMState = _a.setInstanceTypeVMState;
    var pvcSource = instanceTypeVMState.pvcSource, selectedBootableVolume = instanceTypeVMState.selectedBootableVolume, sshSecretCredentials = instanceTypeVMState.sshSecretCredentials;
    var hasDynamicSSHLabel = dataSourceHasDynamicSSHLabel(pvcSource, selectedBootableVolume);
    var isDisabled = !(sshSecretCredentials === null || sshSecretCredentials === void 0 ? void 0 : sshSecretCredentials.sshSecretName) || !hasDynamicSSHLabel;
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(DynamicSSHKeyInjection, { onSubmit: function (checked) {
                setInstanceTypeVMState({
                    payload: checked,
                    type: instanceTypeActionType.setIsDynamicSSHInjection,
                });
            }, hasDynamicSSHLabel: Boolean(hasDynamicSSHLabel), isDisabled: isDisabled }), descriptionHeader: React.createElement(React.Fragment, null, t('Dynamic SSH key injection')), label: React.createElement(DynamicSSHKeyInjectionHelpTextIcon, { isDisabled: isDisabled }) }));
};
export default DynamicSSHKeyInjectionInstanceType;
//# sourceMappingURL=DynamicSSHKeyInjectionInstanceType.js.map