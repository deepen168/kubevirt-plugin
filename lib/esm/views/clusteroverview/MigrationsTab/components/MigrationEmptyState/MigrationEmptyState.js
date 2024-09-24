import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { EmptyState, EmptyStateBody, EmptyStateHeader, EmptyStateIcon, EmptyStateVariant, } from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';
var MigrationEmptyState = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(EmptyState, { variant: EmptyStateVariant.full },
        React.createElement(EmptyStateHeader, { headingLevel: "h5", icon: React.createElement(EmptyStateIcon, { icon: SearchIcon }), titleText: React.createElement(React.Fragment, null, t('No results found')) }),
        React.createElement(EmptyStateBody, null, t('Migrate a VirtualMachine to a different Node or change the selected time range.'))));
};
export default MigrationEmptyState;
//# sourceMappingURL=MigrationEmptyState.js.map