import * as React from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { EmptyState, EmptyStateBody, EmptyStateHeader, EmptyStateVariant, } from '@patternfly/react-core';
export var TemplatesCatalogLoadingSources = React.memo(function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(EmptyState, { variant: EmptyStateVariant.lg },
        React.createElement(EmptyStateHeader, { headingLevel: "h4", titleText: React.createElement(React.Fragment, null, t('Loading Templates with available boot source')) }),
        React.createElement(EmptyStateBody, null,
            React.createElement(Loading, null))));
});
TemplatesCatalogLoadingSources.displayName = 'TemplatesCatalogLoadingSources';
//# sourceMappingURL=TemplatesCatalogLoadingSources.js.map