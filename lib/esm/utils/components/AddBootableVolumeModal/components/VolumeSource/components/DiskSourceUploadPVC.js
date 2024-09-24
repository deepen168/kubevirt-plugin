import React, { useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FileUpload, FormGroup } from '@patternfly/react-core';
import DiskSourceUploadISO from './DiskSourceUploadISO';
import { DiskSourceUploadPVCProgress } from './DiskSourceUploadPVCProgress';
var DiskSourceUploadPVC = function (_a) {
    var isIso = _a.isIso, label = _a.label, relevantUpload = _a.relevantUpload, setIsIso = _a.setIsIso, setUploadFile = _a.setUploadFile, setUploadFileName = _a.setUploadFileName, uploadFile = _a.uploadFile, uploadFileName = _a.uploadFileName;
    var _b = useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(FormGroup, { fieldId: "disk-source-upload", isRequired: true, label: label || t('Upload data') },
            React.createElement(FileUpload, { onClearClick: function () {
                    setUploadFile('');
                    setUploadFileName('');
                }, onFileInputChange: function (_, file) {
                    setUploadFileName(file.name);
                    setUploadFile(file);
                }, onTextChange: function (_event, value) {
                    return setUploadFile(value);
                }, allowEditingUploadedText: false, browseButtonText: t('Upload'), "data-test-id": "disk-source-upload-pvc-file", filename: uploadFileName, filenamePlaceholder: t('Drag and drop an image or upload one'), id: "simple-file", isLoading: isLoading, onDataChange: function (_event, droppedFile) { return setUploadFile(droppedFile); }, onReadFinished: function () { return setIsLoading(false); }, onReadStarted: function () { return setIsLoading(true); }, value: uploadFile })),
        React.createElement(DiskSourceUploadISO, { isIso: isIso, setIsIso: setIsIso }),
        relevantUpload && React.createElement(DiskSourceUploadPVCProgress, { upload: relevantUpload })));
};
export default DiskSourceUploadPVC;
//# sourceMappingURL=DiskSourceUploadPVC.js.map