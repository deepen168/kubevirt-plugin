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
import { XMLValidator } from 'fast-xml-parser';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FileUpload, Text, TextVariants, ValidatedOptions, } from '@patternfly/react-core';
var SysprepFileField = function (_a) {
    var id = _a.id, onChange = _a.onChange, value = _a.value;
    var t = useKubevirtTranslation().t;
    var _b = useState({
        fileName: '',
        isLoading: false,
        validated: ValidatedOptions.default,
        value: value,
    }), data = _b[0], setData = _b[1];
    var onFieldChange = function (newValue) {
        setData(function (currentSysprepFile) { return (__assign(__assign({}, currentSysprepFile), { validated: XMLValidator.validate(newValue) === true
                ? ValidatedOptions.default
                : ValidatedOptions.error, value: newValue })); });
    };
    useEffect(function () {
        if (data.validated) {
            onChange(data.value);
        }
    }, [data.validated, data.value, onChange]);
    return (React.createElement(React.Fragment, null,
        React.createElement(FileUpload, { onFileInputChange: function (event, file) {
                setData(function (currentData) { return (__assign(__assign({}, currentData), { fileName: file.name })); });
            }, onReadFinished: function () {
                return setData(function (currentData) { return (__assign(__assign({}, currentData), { isLoading: false })); });
            }, onReadStarted: function () {
                return setData(function (currentData) { return (__assign(__assign({}, currentData), { isLoading: true })); });
            }, onTextChange: function (event, text) {
                return onFieldChange(text);
            }, validated: data.validated !== ValidatedOptions.error
                ? ValidatedOptions.default
                : ValidatedOptions.error, allowEditingUploadedText: true, "data-test": "sysprep-".concat(id.toLowerCase().replace('.', '-'), "-input"), filename: data.fileName, id: "sysprep-".concat(id, "-input"), isLoading: data.isLoading, isReadOnly: false, onDataChange: function (event, text) { return onFieldChange(text); }, type: "text", value: data.value }),
        data.validated === ValidatedOptions.error && (React.createElement(Text, { className: "kv-sysprep--error", component: TextVariants.p }, t('XML structure is not valid')))));
};
export default SysprepFileField;
//# sourceMappingURL=SysprepFileField.js.map