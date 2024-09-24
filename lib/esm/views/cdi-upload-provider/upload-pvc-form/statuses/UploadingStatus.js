import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Alert, AlertVariant, Button, EmptyStateActions, EmptyStateBody, EmptyStateIcon, Progress, Stack, StackItem, Title, } from '@patternfly/react-core';
import { InProgressIcon } from '@patternfly/react-icons';
import { UPLOAD_STATUS } from '../../utils/consts';
import { getProgressVariant } from '../../utils/utils';
var UploadingStatus = function (_a) {
    var onCancelClick = _a.onCancelClick, onSuccessClick = _a.onSuccessClick, upload = _a.upload;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(EmptyStateIcon, { icon: InProgressIcon }),
        React.createElement(Title, { headingLevel: "h4", size: "lg" }, t('Uploading data to Persistent Volume Claim')),
        React.createElement(EmptyStateBody, null,
            React.createElement(Stack, { hasGutter: true },
                (upload === null || upload === void 0 ? void 0 : upload.uploadStatus) === UPLOAD_STATUS.UPLOADING && (React.createElement(StackItem, null,
                    React.createElement(Alert, { className: "kv--create-upload__alert", isInline: true, title: t('Please don’t close this browser tab'), variant: AlertVariant.warning }, t('Closing it will cause the upload to fail. You may still navigate the console.')))),
                React.createElement(StackItem, null, t('Persistent Volume Claim has been created and your data source is now being uploaded to it. Once the uploading is completed the Persistent Volume Claim will become available')),
                React.createElement(StackItem, null,
                    React.createElement(Progress, { value: upload === null || upload === void 0 ? void 0 : upload.progress, variant: getProgressVariant(upload === null || upload === void 0 ? void 0 : upload.uploadStatus) })))),
        onSuccessClick && (React.createElement(Button, { id: "cdi-upload-primary-pvc", onClick: onSuccessClick, variant: "primary" }, t('View Persistent Volume Claim details'))),
        onCancelClick && (upload === null || upload === void 0 ? void 0 : upload.uploadStatus) === UPLOAD_STATUS.UPLOADING && (React.createElement(EmptyStateActions, null,
            React.createElement(Button, { id: "cdi-upload-cancel-btn", onClick: onCancelClick, variant: "link" }, t('Cancel Upload'))))));
};
export default UploadingStatus;
//# sourceMappingURL=UploadingStatus.js.map