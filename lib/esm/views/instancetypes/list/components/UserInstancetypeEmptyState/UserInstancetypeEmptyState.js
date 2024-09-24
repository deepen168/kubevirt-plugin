import React from 'react';
import { Trans } from 'react-i18next';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateFooter, EmptyStateHeader, EmptyStateIcon, EmptyStateVariant, } from '@patternfly/react-core';
import { AddCircleOIcon } from '@patternfly/react-icons';
import InstancetypeCreateButton from '../InstancetypeCreateButton/InstancetypeCreateButton';
var UserInstancetypeEmptyState = function (_a) {
    var namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    return (React.createElement(EmptyState, { variant: EmptyStateVariant.lg },
        React.createElement(EmptyStateHeader, { headingLevel: "h4", icon: React.createElement(EmptyStateIcon, { icon: AddCircleOIcon }), titleText: React.createElement(React.Fragment, null, t('No VirtualMachineInstanceTypes found')) }),
        React.createElement(EmptyStateBody, null,
            React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                "Click ",
                React.createElement("b", null, "Create VirtualMachineInstanceType"),
                " to create your first VirtualMachineInstanceType")),
        React.createElement(EmptyStateFooter, null,
            React.createElement(EmptyStateActions, null,
                React.createElement(InstancetypeCreateButton, { buttonText: t('Create VirtualMachineInstanceType'), namespace: namespace })))));
};
export default UserInstancetypeEmptyState;
//# sourceMappingURL=UserInstancetypeEmptyState.js.map