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
import React from 'react';
import { useFormContext } from 'react-hook-form';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { OS_NAME_TYPES } from '@kubevirt-utils/resources/template';
import { isUpstream } from '@kubevirt-utils/utils/utils';
import { FormGroup, TextInput, ValidatedOptions } from '@patternfly/react-core';
import { diskSourceEphemeralFieldID } from '../../utils/constants';
import { OS_REGISTERY_LINKS } from './utils/constants';
var DiskSourceContainer = function (_a) {
    var fieldName = _a.fieldName, os = _a.os;
    var t = useKubevirtTranslation().t;
    var _b = useFormContext(), getFieldState = _b.getFieldState, register = _b.register;
    var isRHELOS = os === null || os === void 0 ? void 0 : os.includes(OS_NAME_TYPES.rhel);
    // we show feodra on upstream and rhel on downstream, and default as fedora if not exists.
    var exampleURL = isRHELOS && isUpstream
        ? OS_REGISTERY_LINKS.fedora
        : OS_REGISTERY_LINKS[os] || OS_REGISTERY_LINKS.fedora;
    var error = getFieldState(fieldName).error;
    return (React.createElement(FormGroup, { fieldId: diskSourceEphemeralFieldID, isRequired: true, label: t('Container') },
        React.createElement(TextInput, __assign({ "data-test-id": diskSourceEphemeralFieldID, id: diskSourceEphemeralFieldID }, register(fieldName, { required: t('Container is required.') }))),
        React.createElement(FormGroupHelperText, { validated: error ? ValidatedOptions.error : ValidatedOptions.default }, error ? (error === null || error === void 0 ? void 0 : error.message) : (React.createElement(React.Fragment, null,
            t('Example: '),
            exampleURL)))));
};
export default DiskSourceContainer;
//# sourceMappingURL=DiskSourceContainer.js.map