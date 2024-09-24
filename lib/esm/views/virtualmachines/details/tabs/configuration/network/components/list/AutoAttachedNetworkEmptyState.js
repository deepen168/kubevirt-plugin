import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Bullseye, EmptyState, EmptyStateBody, EmptyStateHeader, EmptyStateIcon, EmptyStateVariant, } from '@patternfly/react-core';
import { NetworkIcon } from '@patternfly/react-icons';
var AutoAttachedNetworkEmptyState = function (_a) {
    var isAutoAttached = _a.isAutoAttached;
    var t = useKubevirtTranslation().t;
    return (React.createElement(Bullseye, null,
        React.createElement(EmptyState, { variant: EmptyStateVariant.sm },
            React.createElement(EmptyStateHeader, { icon: React.createElement(EmptyStateIcon, { icon: NetworkIcon }) }),
            React.createElement(EmptyStateBody, null, isAutoAttached
                ? t("No network interface definitions found. The VirtualMachine has no networks and interfaces specified, therefore it's using a default interface and network configuration.")
                : t('No network interface definitions found. Click the "Add network interface" to define one.')))));
};
export default AutoAttachedNetworkEmptyState;
//# sourceMappingURL=AutoAttachedNetworkEmptyState.js.map