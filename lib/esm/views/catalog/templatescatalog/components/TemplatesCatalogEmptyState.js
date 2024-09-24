import * as React from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateFooter, EmptyStateHeader, EmptyStateVariant, } from '@patternfly/react-core';
export var TemplatesCatalogEmptyState = React.memo(function (_a) {
    var bootSourcesLoaded = _a.bootSourcesLoaded, onClearFilters = _a.onClearFilters;
    var t = useKubevirtTranslation().t;
    if (!bootSourcesLoaded) {
        return (React.createElement(EmptyState, { variant: EmptyStateVariant.lg },
            React.createElement(EmptyStateHeader, { headingLevel: "h4", titleText: React.createElement(React.Fragment, null, t('Loading Templates with available boot source')) }),
            React.createElement(EmptyStateBody, null,
                React.createElement(Loading, null))));
    }
    return (React.createElement(EmptyState, { variant: EmptyStateVariant.sm },
        React.createElement(EmptyStateHeader, { headingLevel: "h4", titleText: React.createElement(React.Fragment, null, t('No Results Match the Filter Criteria')) }),
        React.createElement(EmptyStateBody, null, t('No Template items are being shown due to the filters being applied.')),
        React.createElement(EmptyStateFooter, null,
            React.createElement(EmptyStateActions, null,
                React.createElement(Button, { onClick: function () { return onClearFilters(); }, variant: "link" }, t('Clear all filters'))))));
});
TemplatesCatalogEmptyState.displayName = 'TemplatesCatalogEmptyState';
//# sourceMappingURL=TemplatesCatalogEmptyState.js.map