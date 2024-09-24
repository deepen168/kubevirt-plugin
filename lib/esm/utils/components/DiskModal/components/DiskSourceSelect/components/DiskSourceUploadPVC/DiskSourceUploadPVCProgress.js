import React from 'react';
import { UPLOAD_STATUS, UPLOAD_STATUS_LABELS, uploadStatusToProgressVariant, } from '@kubevirt-utils/hooks/useCDIUpload/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, ButtonVariant, FormGroup, Progress, ProgressMeasureLocation, Stack, StackItem, } from '@patternfly/react-core';
export var DiskSourceUploadPVCProgress = function (_a) {
    var upload = _a.upload;
    var t = useKubevirtTranslation().t;
    return (React.createElement(FormGroup, { fieldId: "upload-progress" },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null,
                React.createElement(Progress, { measureLocation: ProgressMeasureLocation.inside, title: UPLOAD_STATUS_LABELS[upload === null || upload === void 0 ? void 0 : upload.uploadStatus], value: upload === null || upload === void 0 ? void 0 : upload.progress, variant: uploadStatusToProgressVariant[upload === null || upload === void 0 ? void 0 : upload.uploadStatus] })),
            React.createElement(StackItem, null,
                React.createElement(Button, { isDisabled: (upload === null || upload === void 0 ? void 0 : upload.uploadStatus) === UPLOAD_STATUS.CANCELED ||
                        (upload === null || upload === void 0 ? void 0 : upload.uploadStatus) === UPLOAD_STATUS.ERROR ||
                        (upload === null || upload === void 0 ? void 0 : upload.uploadStatus) === UPLOAD_STATUS.SUCCESS, isInline: true, onClick: function () { return upload === null || upload === void 0 ? void 0 : upload.cancelUpload(); }, variant: ButtonVariant.link }, t('Cancel upload'))))));
};
//# sourceMappingURL=DiskSourceUploadPVCProgress.js.map