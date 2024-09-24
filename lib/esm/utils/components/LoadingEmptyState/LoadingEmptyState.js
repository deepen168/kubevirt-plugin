import React from 'react';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { EmptyState, EmptyStateBody, EmptyStateHeader, EmptyStateIcon, Spinner, } from '@patternfly/react-core';
var LoadingEmptyState = function (_a) {
    var _b = _a.bodyContents, bodyContents = _b === void 0 ? t('Loading ...') : _b, _c = _a.iconComponent, iconComponent = _c === void 0 ? Spinner : _c;
    return (React.createElement(EmptyState, null,
        React.createElement(EmptyStateHeader, { icon: React.createElement(EmptyStateIcon, { icon: iconComponent }) }),
        React.createElement(EmptyStateBody, null, bodyContents)));
};
export default LoadingEmptyState;
//# sourceMappingURL=LoadingEmptyState.js.map