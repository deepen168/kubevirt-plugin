import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FileUpload, FormGroup, ValidatedOptions } from '@patternfly/react-core';
import { UPLOAD_FILE_FIELD, UPLOAD_FILENAME_FIELD } from '../../../utils/constants';
import { diskSourceUploadFieldID } from '../../utils/constants';
import { DiskSourceUploadPVCProgress } from './DiskSourceUploadPVCProgress';
var DiskSourceUploadPVC = function (_a) {
    var label = _a.label, relevantUpload = _a.relevantUpload;
    var t = useKubevirtTranslation().t;
    var _b = useFormContext(), control = _b.control, errors = _b.formState.errors, setValue = _b.setValue, watch = _b.watch;
    var _c = useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var uploadFilename = watch(UPLOAD_FILENAME_FIELD);
    var error = errors === null || errors === void 0 ? void 0 : errors.uploadFile;
    return (React.createElement(Controller, { render: function (_a) {
            var _b = _a.field, onChange = _b.onChange, value = _b.value;
            return (React.createElement(React.Fragment, null,
                React.createElement(FormGroup, { fieldId: diskSourceUploadFieldID, isRequired: true, label: label || t('Upload data') },
                    React.createElement(FileUpload, { onClearClick: function () {
                            onChange('');
                            setValue(UPLOAD_FILENAME_FIELD, '');
                        }, onFileInputChange: function (_, file) {
                            onChange(file);
                            setValue(UPLOAD_FILENAME_FIELD, file.name);
                        }, allowEditingUploadedText: false, browseButtonText: t('Upload'), "data-test-id": diskSourceUploadFieldID, filename: uploadFilename, filenamePlaceholder: t('Drag and drop an image or upload one'), id: "simple-file", isLoading: isLoading, onDataChange: function (_event, droppedFile) { return onChange(droppedFile); }, onReadFinished: function () { return setIsLoading(false); }, onReadStarted: function () { return setIsLoading(true); }, value: value }),
                    error && (React.createElement(FormGroupHelperText, { validated: ValidatedOptions.error }, error === null || error === void 0 ? void 0 : error.message))),
                relevantUpload && React.createElement(DiskSourceUploadPVCProgress, { upload: relevantUpload })));
        }, control: control, name: UPLOAD_FILE_FIELD, rules: { required: t('File is required.') } }));
};
export default DiskSourceUploadPVC;
//# sourceMappingURL=DiskSourceUploadPVC.js.map