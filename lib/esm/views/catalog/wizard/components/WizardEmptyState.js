import * as React from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateFooter, EmptyStateHeader, } from '@patternfly/react-core';
export var WizardEmptyState = function (_a) {
    var namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    return (React.createElement(EmptyState, null,
        React.createElement(EmptyStateHeader, { headingLevel: "h4", titleText: React.createElement(React.Fragment, null, t('No Template found')) }),
        React.createElement(EmptyStateBody, null, t('No Template was selected for review, please go to the catalog and select one.')),
        React.createElement(EmptyStateFooter, null,
            React.createElement(EmptyStateActions, null,
                React.createElement(Button, { onClick: function () { return navigate("/k8s/ns/".concat(namespace, "/catalog/template")); } }, t('Go to catalog'))))));
};
//# sourceMappingURL=WizardEmptyState.js.map