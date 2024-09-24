import React from 'react';
import { Trans } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageBody, ListPageHeader } from '@openshift-console/dynamic-plugin-sdk';
import { Button, ButtonVariant, EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateFooter, EmptyStateHeader, EmptyStateIcon, EmptyStateVariant, } from '@patternfly/react-core';
import { RouteIcon, VirtualMachineIcon } from '@patternfly/react-icons';
import VirtualMachinesCreateButton from '../VirtualMachinesCreateButton/VirtualMachinesCreateButton';
import './VirtualMachineEmptyState.scss';
var VirtualMachineEmptyState = function (_a) {
    var catalogURL = _a.catalogURL, namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageHeader, { title: t('VirtualMachines') }),
        React.createElement(ListPageBody, null,
            React.createElement(EmptyState, { className: "VirtualMachineEmptyState", variant: EmptyStateVariant.lg },
                React.createElement(EmptyStateHeader, { headingLevel: "h4", icon: React.createElement(EmptyStateIcon, { icon: VirtualMachineIcon }), titleText: React.createElement(React.Fragment, null, t('No VirtualMachines found')) }),
                React.createElement(EmptyStateBody, null,
                    React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                        "Click ",
                        React.createElement("b", null, "Create VirtualMachine"),
                        " to create your first VirtualMachine or view the",
                        ' ',
                        React.createElement(Button, { isInline: true, onClick: function () { return navigate(catalogURL); }, variant: ButtonVariant.link }, "catalog"),
                        ' ',
                        "tab to create a VirtualMachine from the available options")),
                React.createElement(EmptyStateFooter, null,
                    React.createElement(EmptyStateActions, null,
                        React.createElement(VirtualMachinesCreateButton, { buttonText: t('Create VirtualMachine'), namespace: namespace })),
                    React.createElement("br", null),
                    React.createElement(EmptyStateActions, null,
                        React.createElement(Link, { to: '/quickstart?keyword=virtual+machine' },
                            t('Learn how to use VirtualMachines'),
                            " ",
                            React.createElement(RouteIcon, null))))))));
};
export default VirtualMachineEmptyState;
//# sourceMappingURL=VirtualMachineEmptyState.js.map