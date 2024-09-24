import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ProgressStatus } from '@openshift-console/dynamic-plugin-sdk';
import { Button } from '@patternfly/react-core';
var UploadPVCPopoverProgressStatus = function (_a) {
    var onCancelClick = _a.onCancelClick, title = _a.title;
    var t = useKubevirtTranslation().t;
    return (React.createElement(ProgressStatus, { title: title },
        React.createElement(Button, { className: "pf-m-link--align-left", id: "cdi-upload-cancel-btn", onMouseUp: onCancelClick, variant: "link" }, t('Cancel upload'))));
};
export default UploadPVCPopoverProgressStatus;
//# sourceMappingURL=UploadPVCPopoverProgressStatus.js.map