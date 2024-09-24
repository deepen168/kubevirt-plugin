import React from 'react';
import { Trans } from 'react-i18next';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Alert } from '@patternfly/react-core';
import { uploadErrorType } from '../utils/consts';
var UploadPVCErrorMessage = function (_a) {
    var _b;
    var message = _a.message, uploadProxyURL = _a.uploadProxyURL;
    var t = useKubevirtTranslation().t;
    var Error = (_b = {},
        _b[uploadErrorType.ALLOCATE] = t('Could not create persistent volume claim'),
        _b[uploadErrorType.CERT] = (React.createElement(React.Fragment, null,
            t('It seems that your browser does not trust the certificate of the upload proxy.'),
            uploadProxyURL && (React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                "Please",
                ' ',
                React.createElement("a", { href: "https://".concat(uploadProxyURL), rel: "noopener noreferrer", target: "_blank" }, "approve this certificate"),
                ' ',
                "and try again")))),
        _b[uploadErrorType.MISSING] = t('File input is missing'),
        _b);
    return (React.createElement(Alert, { className: "co-alert co-alert--scrollable", isInline: true, title: t('An error occurred'), variant: "danger" },
        React.createElement("div", { className: "co-pre-line" }, (Error === null || Error === void 0 ? void 0 : Error[message]) || message)));
};
export default UploadPVCErrorMessage;
//# sourceMappingURL=UploadPVCErrorMessage.js.map