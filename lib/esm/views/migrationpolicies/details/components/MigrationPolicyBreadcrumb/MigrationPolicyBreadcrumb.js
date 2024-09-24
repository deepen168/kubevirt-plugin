import * as React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { migrationPoliciesPageBaseURL } from 'src/views/migrationpolicies/list/utils/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';
import './MigrationPolicyBreadcrumb.scss';
export var MigrationPolicyBreadcrumb = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement("div", null,
        React.createElement(Breadcrumb, { className: "pf-c-breadcrumb kv-breadcrumb" },
            React.createElement(BreadcrumbItem, null,
                React.createElement(Link, { to: migrationPoliciesPageBaseURL }, t('MigrationPolicies'))),
            React.createElement(BreadcrumbItem, null, t('MigrationPolicy details')))));
};
export default MigrationPolicyBreadcrumb;
//# sourceMappingURL=MigrationPolicyBreadcrumb.js.map