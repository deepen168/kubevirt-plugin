import React, { useContext } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Alert, AlertVariant } from '@patternfly/react-core';
import { UPLOAD_STATUS } from './utils/consts';
import { CDIUploadContext } from './utils/context';
var PVCAlertExtension = function (_a) {
    var pvc = _a.pvc;
    var uploads = useContext(CDIUploadContext).uploads;
    var t = useKubevirtTranslation().t;
    var isUploading = uploads === null || uploads === void 0 ? void 0 : uploads.find(function (upl) {
        var _a, _b;
        return (upl === null || upl === void 0 ? void 0 : upl.pvcName) === ((_a = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _a === void 0 ? void 0 : _a.name) &&
            (upl === null || upl === void 0 ? void 0 : upl.namespace) === ((_b = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _b === void 0 ? void 0 : _b.namespace) &&
            (upl === null || upl === void 0 ? void 0 : upl.uploadStatus) === UPLOAD_STATUS.UPLOADING;
    });
    return isUploading ? (React.createElement(Alert, { className: "co-m-form-row", isInline: true, title: t("Please don't close this browser tab"), variant: AlertVariant.warning }, t('Closing it will cause the upload to fail. You may still navigate the console.'))) : null;
};
export default PVCAlertExtension;
//# sourceMappingURL=PVCAlertExtension.js.map