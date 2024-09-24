import React from 'react';
import { Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, ButtonVariant, EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateFooter, EmptyStateHeader, EmptyStateIcon, EmptyStateVariant, } from '@patternfly/react-core';
import { RocketIcon, VirtualMachineIcon } from '@patternfly/react-icons';
var VirtualMachineInstanceEmptyState = function (_a) {
    var catalogURL = _a.catalogURL;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    return (React.createElement(EmptyState, { variant: EmptyStateVariant.lg },
        React.createElement(EmptyStateHeader, { headingLevel: "h4", icon: React.createElement(EmptyStateIcon, { icon: VirtualMachineIcon }), titleText: React.createElement(React.Fragment, null, t('No VirtualMachinesInstances found')) }),
        React.createElement(EmptyStateBody, null,
            React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                "See the",
                ' ',
                React.createElement(Button, { isInline: true, onClick: function () { return navigate(catalogURL); }, variant: ButtonVariant.link }, "catalog tab"),
                ' ',
                "to quickly create a VirtualMachine from the available Templates.")),
        React.createElement(EmptyStateFooter, null,
            React.createElement(EmptyStateActions, null,
                React.createElement(Button, { onClick: function () { return navigate(catalogURL); }, variant: ButtonVariant.primary }, t('Create VirtualMachine'))),
            React.createElement(EmptyStateActions, null,
                React.createElement(Button, { onClick: function () {
                        return navigate({ pathname: '/quickstart', search: '?keyword=virtual+machine' });
                    }, icon: React.createElement(RocketIcon, null), variant: ButtonVariant.secondary }, t('Learn how to use VirtualMachines'))))));
};
export default VirtualMachineInstanceEmptyState;
//# sourceMappingURL=VirtualMachineInstanceEmptyState.js.map