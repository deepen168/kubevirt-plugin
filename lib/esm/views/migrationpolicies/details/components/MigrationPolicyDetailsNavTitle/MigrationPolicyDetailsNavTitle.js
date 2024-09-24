import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import MigrationPoliciesActions from '../../../actions/components/MigrationPoliciesActions';
import MigrationPolicyBreadcrumb from '../MigrationPolicyBreadcrumb/MigrationPolicyBreadcrumb';
import './MigrationPolicyDetailsNavTitle.scss';
var VirtualMachineNavPageTitle = function (_a) {
    var _b;
    var mp = _a.mp;
    var t = useKubevirtTranslation().t;
    return (React.createElement("div", { className: "kv-resource-details-header-container" },
        React.createElement(MigrationPolicyBreadcrumb, null),
        React.createElement("span", { className: "kv-resource-details-header" },
            React.createElement("h1", null,
                React.createElement("span", { className: "kv-resource-icon" }, t('MP')), (_b = mp === null || mp === void 0 ? void 0 : mp.metadata) === null || _b === void 0 ? void 0 :
                _b.name),
            React.createElement(MigrationPoliciesActions, { mp: mp }))));
};
export default VirtualMachineNavPageTitle;
//# sourceMappingURL=MigrationPolicyDetailsNavTitle.js.map