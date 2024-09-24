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
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Radio, Split, SplitItem } from '@patternfly/react-core';
import { initialSSHCredentials } from '../utils/constants';
import { SecretSelectionOption } from '../utils/types';
var SecretSelectionRadioGroup = function (_a) {
    var selectedOption = _a.selectedOption, setSelectedOption = _a.setSelectedOption, setSSHDetails = _a.setSSHDetails;
    var t = useKubevirtTranslation().t;
    // Inputs should not persist between changes of secretSelectionOption
    var onSelectSecretOption = useCallback(function (secretOption) {
        setSelectedOption(function (prevSecretOption) {
            if (prevSecretOption !== secretOption) {
                setSSHDetails(function (prev) { return (__assign(__assign({}, prev), { secretOption: secretOption, sshPubKey: '', sshSecretName: '' })); });
            }
            return secretOption;
        });
    }, [setSelectedOption, setSSHDetails]);
    return (React.createElement(Split, { className: "ssh-secret-section__radio-group", hasGutter: true },
        React.createElement(SplitItem, null,
            React.createElement(Radio, { onClick: function () {
                    onSelectSecretOption(SecretSelectionOption.none);
                    setSSHDetails(initialSSHCredentials);
                }, id: SecretSelectionOption.none, isChecked: selectedOption === SecretSelectionOption.none, label: t('None'), name: "ssh-secret-selection" })),
        React.createElement(SplitItem, null,
            React.createElement(Radio, { id: SecretSelectionOption.useExisting, isChecked: selectedOption === SecretSelectionOption.useExisting, label: t('Use existing'), name: "ssh-secret-selection", onClick: function () { return onSelectSecretOption(SecretSelectionOption.useExisting); } })),
        React.createElement(SplitItem, null,
            React.createElement(Radio, { id: SecretSelectionOption.addNew, isChecked: selectedOption === SecretSelectionOption.addNew, label: t('Add new'), name: "ssh-secret-selection", onClick: function () { return onSelectSecretOption(SecretSelectionOption.addNew); } }))));
};
export default SecretSelectionRadioGroup;
//# sourceMappingURL=SecretSelectionRadioGroup.js.map