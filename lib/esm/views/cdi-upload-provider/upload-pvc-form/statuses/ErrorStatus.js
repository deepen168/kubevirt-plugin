import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, EmptyStateBody, EmptyStateIcon, Title } from '@patternfly/react-core';
import { ErrorCircleOIcon } from '@patternfly/react-icons';
var ErrorStatus = function (_a) {
    var error = _a.error, onErrorClick = _a.onErrorClick;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(EmptyStateIcon, { color: "#cf1010", icon: ErrorCircleOIcon }),
        React.createElement(Title, { headingLevel: "h4", size: "lg" }, t('Error uploading data')),
        React.createElement(EmptyStateBody, null, error),
        React.createElement(Button, { id: "cdi-upload-error-btn", onClick: onErrorClick, variant: "primary" }, error ? t('Back to form') : t('View PersistentVolumeClaim details'))));
};
export default ErrorStatus;
//# sourceMappingURL=ErrorStatus.js.map