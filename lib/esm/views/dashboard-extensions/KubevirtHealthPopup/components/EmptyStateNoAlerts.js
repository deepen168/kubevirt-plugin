import React from 'react';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { EmptyState, EmptyStateHeader, EmptyStateIcon } from '@patternfly/react-core';
import { VirtualMachineIcon } from '@patternfly/react-icons';
var EmptyStateNoAlerts = function (_a) {
    var classname = _a.classname;
    return (React.createElement(EmptyState, { className: classname },
        React.createElement(EmptyStateHeader, { headingLevel: "h4", icon: React.createElement(EmptyStateIcon, { icon: VirtualMachineIcon }), titleText: React.createElement(React.Fragment, null, t('No alerts found')) })));
};
export default EmptyStateNoAlerts;
//# sourceMappingURL=EmptyStateNoAlerts.js.map