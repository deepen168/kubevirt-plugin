import React from 'react';
import { useLocation } from 'react-router-dom-v5-compat';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
import MigrationPolicyDetailsSection from './components/MigrationPolicyDetailsSection/MigrationPolicyDetailsSection';
import './MigrationPolicyDetailsPage.scss';
var MigrationPolicyDetailsPage = function (_a) {
    var mp = _a.obj;
    var location = useLocation();
    return (React.createElement("div", { className: "migration-policy-details-page" },
        React.createElement(PageSection, { variant: PageSectionVariants.light },
            React.createElement(MigrationPolicyDetailsSection, { mp: mp, pathname: location === null || location === void 0 ? void 0 : location.pathname }))));
};
export default MigrationPolicyDetailsPage;
//# sourceMappingURL=MigrationPolicyDetailsPage.js.map