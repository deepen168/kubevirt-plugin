import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Bullseye, EmptyState, EmptyStateHeader, EmptyStateIcon } from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';
var UserProvidedInstanceTypesEmptyState = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Bullseye, null,
        React.createElement(EmptyState, null,
            React.createElement(EmptyStateHeader, { headingLevel: "h2", icon: React.createElement(EmptyStateIcon, { icon: SearchIcon }), titleText: React.createElement(React.Fragment, null, t('No InstanceTypes found')) }))));
};
export default UserProvidedInstanceTypesEmptyState;
//# sourceMappingURL=UserProvidedInstanceTypesEmptyState.js.map