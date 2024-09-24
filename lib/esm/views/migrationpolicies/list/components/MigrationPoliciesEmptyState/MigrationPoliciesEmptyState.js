import React from 'react';
import { Trans } from 'react-i18next';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageBody, ListPageHeader } from '@openshift-console/dynamic-plugin-sdk';
import { EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateFooter, EmptyStateHeader, EmptyStateIcon, EmptyStateVariant, } from '@patternfly/react-core';
import { MigrationIcon } from '@patternfly/react-icons';
import MigrationPoliciesCreateButton from '../MigrationPoliciesCreateButton/MigrationPoliciesCreateButton';
var MigrationPoliciesEmptyState = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageHeader, { title: t('MigrationPolicies') }),
        React.createElement(ListPageBody, null,
            React.createElement(EmptyState, { variant: EmptyStateVariant.lg },
                React.createElement(EmptyStateHeader, { headingLevel: "h4", icon: React.createElement(EmptyStateIcon, { icon: MigrationIcon }), titleText: React.createElement(React.Fragment, null, t('No MigrationPolicies found')) }),
                React.createElement(EmptyStateBody, null,
                    React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                        "Click ",
                        React.createElement("b", null, "Create MigrationPolicy"),
                        " to create your first policy")),
                React.createElement(EmptyStateFooter, null,
                    React.createElement(EmptyStateActions, null,
                        React.createElement(MigrationPoliciesCreateButton, null)),
                    React.createElement("br", null),
                    React.createElement(EmptyStateActions, null,
                        React.createElement(ExternalLink, { href: "https://access.redhat.com/documentation/en-us/openshift_container_platform/4.15/html/virtualization/live-migration#live-migration-policies", text: t('Learn more about MigrationPolicies') })))))));
};
export default MigrationPoliciesEmptyState;
//# sourceMappingURL=MigrationPoliciesEmptyState.js.map