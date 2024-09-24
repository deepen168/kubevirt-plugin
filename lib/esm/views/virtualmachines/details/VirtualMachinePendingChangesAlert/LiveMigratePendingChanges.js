import React from 'react';
import PendingChangesBreadcrumb from '@kubevirt-utils/components/PendingChanges/PendingChangesBreadcrumb/PendingChangesBreadcrumb';
import { getPendingChangesByTab } from '@kubevirt-utils/components/PendingChanges/utils/helpers';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { List } from '@patternfly/react-core';
var LiveMigratePendingChanges = function (_a) {
    var pendingChanges = _a.pendingChanges;
    var t = useKubevirtTranslation().t;
    var pendingChangesNICsTab = getPendingChangesByTab(pendingChanges).pendingChangesNICsTab;
    return (React.createElement(React.Fragment, null,
        t('The following areas have pending changes that will be applied when this VirtualMachine is restarted.'),
        React.createElement(List, null,
            React.createElement(PendingChangesBreadcrumb, { pendingChanges: pendingChangesNICsTab }))));
};
export default LiveMigratePendingChanges;
//# sourceMappingURL=LiveMigratePendingChanges.js.map