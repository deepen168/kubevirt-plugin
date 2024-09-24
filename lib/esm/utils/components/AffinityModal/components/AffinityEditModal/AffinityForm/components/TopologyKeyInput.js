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
import React, { useEffect, useState } from 'react';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup, TextInput, ValidatedOptions } from '@patternfly/react-core';
var TopologyKeyInput = function (_a) {
    var focusedAffinity = _a.focusedAffinity, setFocusedAffinity = _a.setFocusedAffinity, setSubmitDisabled = _a.setSubmitDisabled;
    var t = useKubevirtTranslation().t;
    var _b = useState(ValidatedOptions.default), validated = _b[0], setValidated = _b[1];
    var topologyKey = (focusedAffinity || {}).topologyKey;
    var onChange = function (value) {
        setFocusedAffinity(__assign(__assign({}, focusedAffinity), { topologyKey: value }));
    };
    useEffect(function () {
        if (!topologyKey || (topologyKey === null || topologyKey === void 0 ? void 0 : topologyKey.length) === 0) {
            setValidated(ValidatedOptions.error);
            setSubmitDisabled(true);
        }
        else {
            setValidated(ValidatedOptions.default);
            setSubmitDisabled(false);
        }
    }, [topologyKey, setSubmitDisabled]);
    return (React.createElement(FormGroup, { fieldId: "topology-key", isRequired: true, label: t('Topology key') },
        React.createElement(TextInput, { onChange: function (_event, value) { return onChange(value); }, type: "text", validated: validated, value: topologyKey }),
        React.createElement(FormGroupHelperText, { validated: validated }, t('Topology key must not be empty'))));
};
export default TopologyKeyInput;
//# sourceMappingURL=TopologyKeyInput.js.map