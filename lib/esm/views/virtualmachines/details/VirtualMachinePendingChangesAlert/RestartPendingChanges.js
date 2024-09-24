import React from 'react';
import PendingChangesBreadcrumb from '@kubevirt-utils/components/PendingChanges/PendingChangesBreadcrumb/PendingChangesBreadcrumb';
import { getPendingChangesByTab } from '@kubevirt-utils/components/PendingChanges/utils/helpers';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { List } from '@patternfly/react-core';
var RestartPendingChanges = function (_a) {
    var pendingChanges = _a.pendingChanges;
    var t = useKubevirtTranslation().t;
    var pendingChangesTabs = getPendingChangesByTab(pendingChanges);
    var pendingChangesDetailsTab = pendingChangesTabs.pendingChangesDetailsTab, pendingChangesDisksTab = pendingChangesTabs.pendingChangesDisksTab, pendingChangesEnvTab = pendingChangesTabs.pendingChangesEnvTab, pendingChangesNICsTab = pendingChangesTabs.pendingChangesNICsTab, pendingChangesSchedulingTab = pendingChangesTabs.pendingChangesSchedulingTab, pendingChangesScriptsTab = pendingChangesTabs.pendingChangesScriptsTab;
    return (React.createElement("span", null,
        t('The following areas have pending changes that will be applied when this VirtualMachine is restarted.'),
        React.createElement(List, null,
            React.createElement(PendingChangesBreadcrumb, { pendingChanges: pendingChangesDetailsTab }),
            React.createElement(PendingChangesBreadcrumb, { pendingChanges: pendingChangesSchedulingTab }),
            React.createElement(PendingChangesBreadcrumb, { pendingChanges: pendingChangesEnvTab }),
            React.createElement(PendingChangesBreadcrumb, { pendingChanges: pendingChangesNICsTab }),
            React.createElement(PendingChangesBreadcrumb, { pendingChanges: pendingChangesScriptsTab }),
            React.createElement(PendingChangesBreadcrumb, { pendingChanges: pendingChangesDisksTab }))));
};
export default RestartPendingChanges;
//# sourceMappingURL=RestartPendingChanges.js.map