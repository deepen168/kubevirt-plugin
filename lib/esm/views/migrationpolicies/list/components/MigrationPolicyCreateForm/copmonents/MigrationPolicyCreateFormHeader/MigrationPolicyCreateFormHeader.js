import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { migrationPoliciesPageBaseURL } from '../../../../utils/constants';
var MigrationPolicyCreateFormHeader = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement("h1", { className: "migration-policy__form-header" },
        React.createElement("div", null, t('Create MigrationPolicy')),
        React.createElement(Link, { className: "migration-policy__form-header-link", to: "".concat(migrationPoliciesPageBaseURL, "/~new") }, t('Edit YAML'))));
};
export default MigrationPolicyCreateFormHeader;
//# sourceMappingURL=MigrationPolicyCreateFormHeader.js.map