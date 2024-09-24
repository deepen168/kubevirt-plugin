import React from 'react';
import { Trans } from 'react-i18next';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateFooter, EmptyStateHeader, EmptyStateIcon, EmptyStateVariant, } from '@patternfly/react-core';
import { AddCircleOIcon } from '@patternfly/react-icons';
import PreferenceCreateButton from './PreferenceCreateButton';
var UserPreferencesEmptyState = function (_a) {
    var namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    return (React.createElement(EmptyState, { variant: EmptyStateVariant.lg },
        React.createElement(EmptyStateHeader, { headingLevel: "h4", icon: React.createElement(EmptyStateIcon, { icon: AddCircleOIcon }), titleText: React.createElement(React.Fragment, null, t('No preferences found')) }),
        React.createElement(EmptyStateBody, null,
            React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                "Click ",
                React.createElement("b", null, "Create VirtualMachinePreference"),
                " to create your first VirtualMachinePreference")),
        React.createElement(EmptyStateFooter, null,
            React.createElement(EmptyStateActions, null,
                React.createElement(PreferenceCreateButton, { buttonText: t('Create VirtualMachinePreference'), namespace: namespace })))));
};
export default UserPreferencesEmptyState;
//# sourceMappingURL=UserPreferencesEmptyState.js.map