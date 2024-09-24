import React, { useContext, useEffect, useState } from 'react';
import { killUploadPVC } from '@kubevirt-utils/hooks/useCDIUpload/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { CDIUploadContext } from '../utils/context';
import UploadPVCPopoverProgressStatus from './UploadPVCPopoverProgressStatus';
import UploadPVCPopoverUploadStatus from './UploadPVCPopoverUploadStatus';
var UploadPVCPopover = function (_a) {
    var pvc = _a.pvc, title = _a.title;
    var t = useKubevirtTranslation().t;
    var uploads = useContext(CDIUploadContext).uploads;
    var upload = uploads === null || uploads === void 0 ? void 0 : uploads.find(function (upl) { var _a, _b; return (upl === null || upl === void 0 ? void 0 : upl.pvcName) === ((_a = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _a === void 0 ? void 0 : _a.name) && (upl === null || upl === void 0 ? void 0 : upl.namespace) === ((_b = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _b === void 0 ? void 0 : _b.namespace); });
    var _b = useState(upload === null || upload === void 0 ? void 0 : upload.uploadError), error = _b[0], setError = _b[1];
    var onCancelClick = function () {
        var _a, _b, _c;
        (_a = upload === null || upload === void 0 ? void 0 : upload.cancelUpload) === null || _a === void 0 ? void 0 : _a.call(upload);
        killUploadPVC((_b = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _b === void 0 ? void 0 : _b.name, (_c = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _c === void 0 ? void 0 : _c.namespace).catch(setError);
    };
    var onErrorDeleteSource = function () {
        var _a, _b;
        killUploadPVC((_a = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _a === void 0 ? void 0 : _a.name, (_b = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _b === void 0 ? void 0 : _b.namespace).catch(setError);
    };
    useEffect(function () {
        setError(upload === null || upload === void 0 ? void 0 : upload.uploadError);
    }, [upload]);
    return upload ? (React.createElement(UploadPVCPopoverUploadStatus, { error: error, onCancelClick: onCancelClick, onErrorDeleteSource: onErrorDeleteSource, upload: upload })) : (React.createElement(UploadPVCPopoverProgressStatus, { onCancelClick: onCancelClick, title: title || t('Uploading') }));
};
export default UploadPVCPopover;
//# sourceMappingURL=UploadPVCPopover.js.map