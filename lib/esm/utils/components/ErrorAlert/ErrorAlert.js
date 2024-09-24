import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Alert, AlertVariant, Stack, StackItem } from '@patternfly/react-core';
var ErrorAlert = function (_a) {
    var error = _a.error;
    var t = useKubevirtTranslation().t;
    if (isEmpty(error))
        return null;
    return (React.createElement(Alert, { isInline: true, title: t('An error occurred'), variant: AlertVariant.danger },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null, error.message),
            (error === null || error === void 0 ? void 0 : error.href) && (React.createElement(StackItem, null,
                React.createElement(Link, { rel: "noreferrer", target: "_blank", to: error.href }, error.href))))));
};
export default ErrorAlert;
//# sourceMappingURL=ErrorAlert.js.map