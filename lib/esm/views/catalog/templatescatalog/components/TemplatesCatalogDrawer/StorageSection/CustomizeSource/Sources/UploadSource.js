import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FileUpload, FormGroup, Stack, StackItem, ValidatedOptions, } from '@patternfly/react-core';
import { UPLOAD_SOURCE_NAME } from '../../constants';
import { SelectSourceUploadPVCProgress } from './SelectSourceUploadPVCProgress';
var UploadSource = function (_a) {
    var onFileSelected = _a.onFileSelected, relevantUpload = _a.relevantUpload, testId = _a.testId;
    var t = useKubevirtTranslation().t;
    var _b = useFormContext(), control = _b.control, errors = _b.formState.errors;
    var validated = (errors === null || errors === void 0 ? void 0 : errors["".concat(testId, "-uploadFile")])
        ? ValidatedOptions.error
        : ValidatedOptions.default;
    return (React.createElement(FormGroup, { className: "disk-source-form-group", fieldId: "".concat(testId, "-").concat(UPLOAD_SOURCE_NAME), isRequired: true, label: t('Upload data') },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null,
                React.createElement(Controller, { render: function (_a) {
                        var _b = _a.field, onChange = _b.onChange, fileValue = _b.value, error = _a.fieldState.error;
                        return (React.createElement(FileUpload, { onDataChange: function (event, data) {
                                onFileSelected(data);
                                onChange({ value: data });
                            }, onFileInputChange: function (event, file) {
                                onFileSelected(file);
                                onChange({ filename: file.name });
                            }, onTextChange: function (event, text) {
                                onFileSelected(text);
                                onChange({ value: text });
                            }, "data-test-id": "disk-source-upload-pvc-file", filename: fileValue === null || fileValue === void 0 ? void 0 : fileValue.filename, filenamePlaceholder: t('Drag and drop an image or upload one'), id: "".concat(testId, "-uploadFile"), name: "".concat(testId, "-uploadFile"), onClearClick: function () { return onChange(undefined); }, validated: error ? ValidatedOptions.error : ValidatedOptions.default, value: fileValue === null || fileValue === void 0 ? void 0 : fileValue.value }));
                    }, control: control, name: "".concat(testId, "-uploadFile"), rules: { required: true }, shouldUnregister: true }),
                React.createElement(FormGroupHelperText, { validated: validated }, validated === ValidatedOptions.error && t('This field is required'))),
            React.createElement(StackItem, null, relevantUpload && React.createElement(SelectSourceUploadPVCProgress, { upload: relevantUpload })))));
};
export default UploadSource;
//# sourceMappingURL=UploadSource.js.map