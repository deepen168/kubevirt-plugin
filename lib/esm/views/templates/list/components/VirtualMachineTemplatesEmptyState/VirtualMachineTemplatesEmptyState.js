import React from 'react';
import { Trans } from 'react-i18next';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import { CREATING_VMS_FROM_TEMPLATES_LINK } from '@kubevirt-utils/constants/url-constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageBody, ListPageHeader } from '@openshift-console/dynamic-plugin-sdk';
import { EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateFooter, EmptyStateHeader, EmptyStateIcon, EmptyStateVariant, } from '@patternfly/react-core';
import { PficonTemplateIcon } from '@patternfly/react-icons';
import VirtualMachineTemplatesCreateButton from '../VirtualMachineTemplatesCreateButton/VirtualMachineTemplatesCreateButton';
var VirtualMachineTemplatesEmptyState = function (_a) {
    var namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageHeader, { title: t('VirtualMachine Templates') }),
        React.createElement(ListPageBody, null,
            React.createElement(EmptyState, { variant: EmptyStateVariant.lg },
                React.createElement(EmptyStateHeader, { headingLevel: "h4", icon: React.createElement(EmptyStateIcon, { icon: PficonTemplateIcon }), titleText: React.createElement(React.Fragment, null, t('No Templates found')) }),
                React.createElement(EmptyStateBody, null,
                    React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                        "Click ",
                        React.createElement("b", null, "Create Template"),
                        " to create your first template")),
                React.createElement(EmptyStateFooter, null,
                    React.createElement(EmptyStateActions, null,
                        React.createElement(VirtualMachineTemplatesCreateButton, { namespace: namespace })),
                    React.createElement("br", null),
                    React.createElement(EmptyStateActions, null,
                        React.createElement(ExternalLink, { href: CREATING_VMS_FROM_TEMPLATES_LINK, text: t('Learn more about templates') })))))));
};
export default VirtualMachineTemplatesEmptyState;
//# sourceMappingURL=VirtualMachineTemplatesEmptyState.js.map