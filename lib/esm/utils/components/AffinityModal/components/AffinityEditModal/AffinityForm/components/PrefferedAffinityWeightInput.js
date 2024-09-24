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
var PrefferedAffinityWeightInput = function (_a) {
    var focusedAffinity = _a.focusedAffinity, setFocusedAffinity = _a.setFocusedAffinity, setSubmitDisabled = _a.setSubmitDisabled;
    var t = useKubevirtTranslation().t;
    var _b = useState(ValidatedOptions.default), validated = _b[0], setValidated = _b[1];
    var weight = (focusedAffinity || {}).weight;
    var onChange = function (value) {
        setFocusedAffinity(__assign(__assign({}, focusedAffinity), { weight: +value }));
    };
    useEffect(function () {
        if (!weight || weight < 1 || weight > 100) {
            setValidated(ValidatedOptions.error);
            setSubmitDisabled(true);
        }
        else {
            setValidated(ValidatedOptions.default);
            setSubmitDisabled(false);
        }
    }, [weight, setSubmitDisabled]);
    return (React.createElement(FormGroup, { fieldId: "weight", isRequired: true, label: t('Weight') },
        React.createElement(TextInput, { onChange: function (_event, value) { return onChange(value); }, type: "text", validated: validated, value: weight }),
        React.createElement(FormGroupHelperText, { validated: validated }, t('Weight must be a number between 1-100'))));
};
export default PrefferedAffinityWeightInput;
//# sourceMappingURL=PrefferedAffinityWeightInput.js.map