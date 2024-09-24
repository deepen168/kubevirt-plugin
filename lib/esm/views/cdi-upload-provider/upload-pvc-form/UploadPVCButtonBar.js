import React from 'react';
import classNames from 'classnames';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { Alert, AlertGroup, AlertVariant } from '@patternfly/react-core';
import { injectDisabled } from '../utils/utils';
import UploadErrorMessage from './UploadPVCErrorMessage';
var UploadPVCButtonBar = function (_a) {
    var children = _a.children, className = _a.className, errorMessage = _a.errorMessage, infoMessage = _a.infoMessage, inProgress = _a.inProgress, successMessage = _a.successMessage, uploadProxyURL = _a.uploadProxyURL;
    return (React.createElement("div", { className: classNames(className, 'co-m-btn-bar') },
        React.createElement(AlertGroup, { "aria-atomic": "false", "aria-live": "polite", "aria-relevant": "additions text", isLiveRegion: true },
            successMessage && (React.createElement(Alert, { className: "co-alert", isInline: true, title: successMessage, variant: AlertVariant.success })),
            errorMessage && (React.createElement(UploadErrorMessage, { message: errorMessage, uploadProxyURL: uploadProxyURL })),
            injectDisabled(children, inProgress),
            inProgress && React.createElement(Loading, null),
            infoMessage && (React.createElement(Alert, { className: "co-alert", isInline: true, title: infoMessage, variant: AlertVariant.info })))));
};
export default UploadPVCButtonBar;
//# sourceMappingURL=UploadPVCButtonBar.js.map