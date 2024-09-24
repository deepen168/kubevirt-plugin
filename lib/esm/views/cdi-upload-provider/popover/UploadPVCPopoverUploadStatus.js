import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, ButtonVariant, Popover, PopoverPosition, Progress, Spinner, Stack, StackItem, } from '@patternfly/react-core';
import { BanIcon, ErrorCircleOIcon, InProgressIcon } from '@patternfly/react-icons';
import { global_danger_color_100 as dangerColor } from '@patternfly/react-tokens/dist/js/global_danger_color_100';
import { UPLOAD_STATUS } from '../utils/consts';
import { getProgressVariant } from '../utils/utils';
var UploadPVCPopoverUploadStatus = function (_a) {
    var error = _a.error, onCancelClick = _a.onCancelClick, onErrorDeleteSource = _a.onErrorDeleteSource, upload = _a.upload;
    var t = useKubevirtTranslation().t;
    var getPopoverBody = function (status) {
        switch (status) {
            case UPLOAD_STATUS.ERROR:
                return {
                    body: error === null || error === void 0 ? void 0 : error.message,
                    icon: React.createElement(ErrorCircleOIcon, { className: "co-icon-and-text__icon", color: dangerColor === null || dangerColor === void 0 ? void 0 : dangerColor.value }),
                    title: t('Upload error'),
                };
            case UPLOAD_STATUS.CANCELED:
                return {
                    body: error ? error === null || error === void 0 ? void 0 : error.message : t('Removing Resources'),
                    icon: (React.createElement(BanIcon, { className: "co-icon-and-text__icon", color: error ? dangerColor === null || dangerColor === void 0 ? void 0 : dangerColor.value : '' })),
                    title: error ? t('Cancel error') : t('Upload canceled'),
                };
            case UPLOAD_STATUS.UPLOADING:
                return {
                    body: t('Please do not close this window, you can keep navigating the app freely.'),
                    icon: React.createElement(InProgressIcon, { className: "co-icon-and-text__icon" }),
                    title: t('Uploading'),
                };
            case UPLOAD_STATUS.SUCCESS:
                return {
                    icon: React.createElement(InProgressIcon, { className: "co-icon-and-text__icon" }),
                    title: t('Upload finished'),
                };
            default:
                return null;
        }
    };
    var uploadPopoverBody = getPopoverBody(upload === null || upload === void 0 ? void 0 : upload.uploadStatus);
    return (React.createElement(Popover, { bodyContent: React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null,
                (upload === null || upload === void 0 ? void 0 : upload.uploadStatus) === UPLOAD_STATUS.CANCELED && (React.createElement(Spinner, { className: "co-icon-and-text__icon", size: "md" })), uploadPopoverBody === null || uploadPopoverBody === void 0 ? void 0 :
                uploadPopoverBody.body),
            React.createElement(StackItem, null,
                React.createElement(Progress, { title: upload === null || upload === void 0 ? void 0 : upload.fileName, value: upload === null || upload === void 0 ? void 0 : upload.progress, variant: getProgressVariant(upload === null || upload === void 0 ? void 0 : upload.uploadStatus) })),
            (upload === null || upload === void 0 ? void 0 : upload.uploadStatus) === UPLOAD_STATUS.UPLOADING && (React.createElement(StackItem, null,
                React.createElement(Button, { className: "pf-m-link--align-left", id: "cdi-upload-cancel-btn", onMouseUp: onCancelClick, variant: "link" }, t('Cancel upload')))),
            (upload === null || upload === void 0 ? void 0 : upload.uploadStatus) === UPLOAD_STATUS.ERROR && (React.createElement(StackItem, null,
                React.createElement(Button, { className: "pf-m-link--align-left", id: "cdi-upload-delete-btn", isDanger: true, onMouseUp: onErrorDeleteSource, variant: "link" }, t('Delete source'))))), headerContent: React.createElement("div", null, uploadPopoverBody === null || uploadPopoverBody === void 0 ? void 0 : uploadPopoverBody.title), position: PopoverPosition.bottom },
        React.createElement(Button, { className: "pf-m-link--align-left", id: "cdi-upload-popover-btn", variant: ButtonVariant.link }, uploadPopoverBody === null || uploadPopoverBody === void 0 ? void 0 :
            uploadPopoverBody.icon, uploadPopoverBody === null || uploadPopoverBody === void 0 ? void 0 :
            uploadPopoverBody.title)));
};
export default UploadPVCPopoverUploadStatus;
//# sourceMappingURL=UploadPVCPopoverUploadStatus.js.map