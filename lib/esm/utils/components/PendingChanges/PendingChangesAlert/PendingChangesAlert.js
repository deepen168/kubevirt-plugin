import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Alert, AlertVariant } from '@patternfly/react-core';
import './PendingChangesAlert.scss';
export var PendingChangesAlert = function (_a) {
    var children = _a.children, isExpandable = _a.isExpandable, isWarning = _a.isWarning, title = _a.title, warningMsg = _a.warningMsg;
    var t = useKubevirtTranslation().t;
    return (React.createElement(Alert, { className: "pending-changes-alert", isExpandable: isExpandable, isInline: true, title: title || t('Pending changes'), variant: isWarning ? AlertVariant.warning : AlertVariant.info }, warningMsg || children));
};
//# sourceMappingURL=PendingChangesAlert.js.map