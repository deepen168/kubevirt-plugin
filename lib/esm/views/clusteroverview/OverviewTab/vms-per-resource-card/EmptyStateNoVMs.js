import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { EmptyState, EmptyStateHeader, EmptyStateIcon } from '@patternfly/react-core';
import { VirtualMachineIcon } from '@patternfly/react-icons';
var EmptyStateNoVMs = function (_a) {
    var className = _a.className;
    var t = useKubevirtTranslation().t;
    return (React.createElement(EmptyState, { className: className },
        React.createElement(EmptyStateHeader, { headingLevel: "h4", icon: React.createElement(EmptyStateIcon, { icon: VirtualMachineIcon }), titleText: React.createElement(React.Fragment, null, t('No VirtualMachines found')) })));
};
export default EmptyStateNoVMs;
//# sourceMappingURL=EmptyStateNoVMs.js.map