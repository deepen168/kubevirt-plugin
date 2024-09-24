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
import { FormGroup, TextInput, ValidatedOptions } from '@patternfly/react-core';
import { DATAVOLUME_HTTPURL_FIELD } from '../../../utils/constants';
import { diskSourceURLFieldID } from '../../utils/constants';
import { HTTP_URL_PREFIX, HTTPS_URL_PREFIX } from './utils/constants';
import URLSourceHelperText from './URLSourceHelperText';
var DiskSourceUrlInput = function (_a) {
    var _b, _c, _d, _e;
    var os = _a.os;
    var t = useKubevirtTranslation().t;
    var _f = useFormContext(), errors = _f.formState.errors, register = _f.register;
    var error = (_e = (_d = (_c = (_b = errors === null || errors === void 0 ? void 0 : errors.dataVolumeTemplate) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.source) === null || _d === void 0 ? void 0 : _d.http) === null || _e === void 0 ? void 0 : _e.url;
    return (React.createElement(FormGroup, { "data-test-id": diskSourceURLFieldID, fieldId: diskSourceURLFieldID, isRequired: true, label: t('URL') },
        React.createElement(TextInput, __assign({ "data-test-id": diskSourceURLFieldID, id: diskSourceURLFieldID }, register(DATAVOLUME_HTTPURL_FIELD, {
            required: t('URL is required'),
            shouldUnregister: true,
            validate: function (value) {
                return (value === null || value === void 0 ? void 0 : value.startsWith(HTTP_URL_PREFIX)) ||
                    (value === null || value === void 0 ? void 0 : value.startsWith(HTTPS_URL_PREFIX)) ||
                    t('A valid URL should start with "http://" OR "https://" .');
            },
        }))),
        React.createElement(FormGroupHelperText, { validated: error ? ValidatedOptions.error : ValidatedOptions.default }, error ? error === null || error === void 0 ? void 0 : error.message : React.createElement(URLSourceHelperText, { os: os }))));
};
export default DiskSourceUrlInput;
//# sourceMappingURL=DiskSourceUrlInput.js.map