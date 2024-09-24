import * as React from 'react';
import { MigrationPolicyModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { ResourceLink, TableData } from '@openshift-console/dynamic-plugin-sdk';
import MigrationPoliciesActions from '../../../actions/components/MigrationPoliciesActions';
import { MigrationPolicySelectorList } from '../../../components/MigrationPolicySelectorList/MigrationPolicySelectorList';
import { migrationPolicySpecKeys } from '../../../utils/constants';
import { getBandwidthPerMigrationText, getBooleanText, getCompletionTimeoutText, } from '../../../utils/utils';
var MigrationPoliciesRow = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var activeColumnIDs = _a.activeColumnIDs, mp = _a.obj;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-15", id: "name" },
            React.createElement(ResourceLink, { groupVersionKind: MigrationPolicyModelGroupVersionKind, name: (_b = mp === null || mp === void 0 ? void 0 : mp.metadata) === null || _b === void 0 ? void 0 : _b.name })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-10", id: "bandwidth" }, migrationPolicySpecKeys.BANDWIDTH_PER_MIGRATION in (mp === null || mp === void 0 ? void 0 : mp.spec)
            ? getBandwidthPerMigrationText((_c = mp === null || mp === void 0 ? void 0 : mp.spec) === null || _c === void 0 ? void 0 : _c.bandwidthPerMigration)
            : NO_DATA_DASH),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-10", id: "auto-converge" }, migrationPolicySpecKeys.ALLOW_AUTO_CONVERGE in (mp === null || mp === void 0 ? void 0 : mp.spec)
            ? getBooleanText((_d = mp === null || mp === void 0 ? void 0 : mp.spec) === null || _d === void 0 ? void 0 : _d.allowAutoConverge)
            : NO_DATA_DASH),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-10", id: "post-copy" }, migrationPolicySpecKeys.ALLOW_POST_COPY in (mp === null || mp === void 0 ? void 0 : mp.spec)
            ? getBooleanText((_e = mp === null || mp === void 0 ? void 0 : mp.spec) === null || _e === void 0 ? void 0 : _e.allowPostCopy)
            : NO_DATA_DASH),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-10", id: "completion-timeout" }, migrationPolicySpecKeys.COMPLETION_TIMEOUT_PER_GIB in (mp === null || mp === void 0 ? void 0 : mp.spec)
            ? getCompletionTimeoutText((_f = mp === null || mp === void 0 ? void 0 : mp.spec) === null || _f === void 0 ? void 0 : _f.completionTimeoutPerGiB)
            : NO_DATA_DASH),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "project-labels" },
            React.createElement(MigrationPolicySelectorList, { selector: (_h = (_g = mp === null || mp === void 0 ? void 0 : mp.spec) === null || _g === void 0 ? void 0 : _g.selectors) === null || _h === void 0 ? void 0 : _h.namespaceSelector })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "vm-labels" },
            React.createElement(MigrationPolicySelectorList, { isVMILabel: true, selector: (_k = (_j = mp === null || mp === void 0 ? void 0 : mp.spec) === null || _j === void 0 ? void 0 : _j.selectors) === null || _k === void 0 ? void 0 : _k.virtualMachineInstanceSelector })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "dropdown-kebab-pf pf-v5-c-table__action", id: "" },
            React.createElement(MigrationPoliciesActions, { isKebabToggle: true, mp: mp }))));
};
export default MigrationPoliciesRow;
//# sourceMappingURL=MigrationPoliciesRow.js.map