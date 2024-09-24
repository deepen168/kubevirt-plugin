import React, { useEffect, useState } from 'react';
import { killUploadPVC } from '@kubevirt-utils/hooks/useCDIUpload/utils';
import { Bullseye, EmptyState } from '@patternfly/react-core';
import { UPLOAD_STATUS, uploadErrorType } from '../utils/consts';
import { getName, getNamespace } from '../utils/selectors';
import AllocatingStatus from './statuses/AllocatingStatus';
import CancellingStatus from './statuses/CancellingStatus';
import CDIInitErrorStatus from './statuses/CDIInitErrorStatus';
import ErrorStatus from './statuses/ErrorStatus';
import UploadingStatus from './statuses/UploadingStatus';
var UploadPVCFormStatus = function (_a) {
    var _b;
    var allocateError = _a.allocateError, dataVolume = _a.dataVolume, isAllocating = _a.isAllocating, isSubmitting = _a.isSubmitting, onCancelClick = _a.onCancelClick, onErrorClick = _a.onErrorClick, onSuccessClick = _a.onSuccessClick, upload = _a.upload;
    var _c = useState(allocateError || ((_b = upload === null || upload === void 0 ? void 0 : upload.uploadError) === null || _b === void 0 ? void 0 : _b.message)), error = _c[0], setError = _c[1];
    useEffect(function () {
        var _a;
        var newError = allocateError || ((_a = upload === null || upload === void 0 ? void 0 : upload.uploadError) === null || _a === void 0 ? void 0 : _a.message);
        setError(newError);
    }, [allocateError, upload]);
    var onCancelFinish = function () {
        upload.cancelUpload();
        killUploadPVC(upload === null || upload === void 0 ? void 0 : upload.pvcName, upload === null || upload === void 0 ? void 0 : upload.namespace)
            .then(onCancelClick)
            .catch(function (err) { return setError(err === null || err === void 0 ? void 0 : err.message); });
    };
    return (React.createElement(Bullseye, { className: !isSubmitting && 'kv--create-upload__hide' },
        React.createElement(EmptyState, null,
            error === uploadErrorType.CDI_INIT && (React.createElement(CDIInitErrorStatus, { namespace: getNamespace(dataVolume), onErrorClick: onErrorClick, pvcName: getName(dataVolume) })),
            error && error !== uploadErrorType.CDI_INIT && (React.createElement(ErrorStatus, { error: error, onErrorClick: onErrorClick })),
            isAllocating && React.createElement(AllocatingStatus, null),
            (upload === null || upload === void 0 ? void 0 : upload.uploadStatus) === UPLOAD_STATUS.CANCELED && React.createElement(CancellingStatus, null),
            (upload === null || upload === void 0 ? void 0 : upload.uploadStatus) !== UPLOAD_STATUS.CANCELED && !isAllocating && (React.createElement(UploadingStatus, { onCancelClick: onCancelFinish, onSuccessClick: onSuccessClick, upload: upload })))));
};
export default UploadPVCFormStatus;
//# sourceMappingURL=UploadPVCFormStatus.js.map