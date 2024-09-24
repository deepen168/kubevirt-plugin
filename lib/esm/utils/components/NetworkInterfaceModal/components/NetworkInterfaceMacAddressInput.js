import React, { useState } from 'react';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, TextInput, ValidatedOptions } from '@patternfly/react-core';
import { validateMACAddress } from '../utils/mac-validation';
var NetworkInterfaceMacAddressInput = function (_a) {
    var interfaceMACAddress = _a.interfaceMACAddress, isDisabled = _a.isDisabled, setInterfaceMACAddress = _a.setInterfaceMACAddress, setIsError = _a.setIsError;
    var t = useKubevirtTranslation().t;
    var _b = useState(undefined), nameError = _b[0], setNameError = _b[1];
    var handleNameChange = function (value, event) {
        event.preventDefault();
        var error = validateMACAddress(value);
        setIsError(!!error);
        setNameError(error);
        setInterfaceMACAddress(value);
    };
    var validated = nameError ? ValidatedOptions.error : ValidatedOptions.default;
    return (React.createElement(FormGroup, { fieldId: "mac-address", label: t('MAC address') },
        React.createElement(TextInput, { id: "mac-address", isDisabled: isDisabled, onChange: function (event, value) { return handleNameChange(value, event); }, type: "text", value: interfaceMACAddress }),
        React.createElement(FormGroupHelperText, { validated: validated }, nameError && nameError)));
};
export default NetworkInterfaceMacAddressInput;
//# sourceMappingURL=NetworkInterfaceMacAddressInput.js.map