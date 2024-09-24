import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Checkbox, Divider, FormGroup, TextInput } from '@patternfly/react-core';
import FormGroupHelperText from '../FormGroupHelperText/FormGroupHelperText';
export var CloudinitNetworkForm = function (_a) {
    var enableNetworkData = _a.enableNetworkData, networkData = _a.networkData, setEnableNetworkData = _a.setEnableNetworkData, updateNetworkField = _a.updateNetworkField;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(FormGroup, { fieldId: "divider" },
            React.createElement(Divider, null)),
        React.createElement(FormGroup, { fieldId: "custom-network-checkbox" },
            React.createElement(Checkbox, { onChange: function (event, checked) {
                    return setEnableNetworkData(checked);
                }, description: t('check this option to add network data section to the cloud-init script.'), id: "custom-network-checkbox", isChecked: enableNetworkData, label: t('Add network data') })),
        enableNetworkData && (React.createElement(React.Fragment, null,
            React.createElement(FormGroup, { className: "kv-cloudint-advanced-tab--validation-text", fieldId: 'ethernet-name', label: t('Ethernet name') },
                React.createElement(TextInput, { id: 'ethernet-name', onChange: function (_event, v) { return updateNetworkField('name', v); }, type: "text", value: (networkData === null || networkData === void 0 ? void 0 : networkData.name) || '' })),
            React.createElement(FormGroup, { className: "kv-cloudint-advanced-tab--validation-text", fieldId: 'address', label: t('IP addresses') },
                React.createElement(TextInput, { id: 'address', onChange: function (_event, v) { return updateNetworkField('addresses', v); }, type: "text", value: (networkData === null || networkData === void 0 ? void 0 : networkData.addresses) || '' }),
                React.createElement(FormGroupHelperText, null, t('Use commas to separate between IP addresses'))),
            React.createElement(FormGroup, { className: "kv-cloudint-advanced-tab--validation-text", fieldId: 'gateway', label: t('Gateway address') },
                React.createElement(TextInput, { id: 'gateway', onChange: function (_event, v) { return updateNetworkField('gateway4', v); }, type: "text", value: (networkData === null || networkData === void 0 ? void 0 : networkData.gateway4) || '' }))))));
};
//# sourceMappingURL=CloudInitNetworkForm.js.map