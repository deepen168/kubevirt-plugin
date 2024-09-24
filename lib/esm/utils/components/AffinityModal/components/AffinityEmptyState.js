import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateFooter, EmptyStateHeader, EmptyStateVariant, } from '@patternfly/react-core';
import AddAffinityRuleButton from './AddAffinityRuleButton';
import AffinityDescriptionText from './AffinityDescriptionText';
var AffinityEmptyState = function (_a) {
    var onAffinityClickAdd = _a.onAffinityClickAdd;
    var t = useKubevirtTranslation().t;
    return (React.createElement(EmptyState, { variant: EmptyStateVariant.full },
        React.createElement(EmptyStateHeader, { headingLevel: "h5", titleText: React.createElement(React.Fragment, null, t('No affinity rules found')) }),
        React.createElement(EmptyStateBody, null,
            React.createElement(AffinityDescriptionText, null)),
        React.createElement(EmptyStateFooter, null,
            React.createElement(EmptyStateActions, null,
                React.createElement(AddAffinityRuleButton, { onAffinityClickAdd: onAffinityClickAdd })))));
};
export default AffinityEmptyState;
//# sourceMappingURL=AffinityEmptyState.js.map