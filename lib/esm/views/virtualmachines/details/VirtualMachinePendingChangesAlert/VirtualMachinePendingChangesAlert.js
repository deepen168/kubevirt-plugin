import React from 'react';
import { usePendingChanges } from '@kubevirt-utils/components/PendingChanges/hooks/usePendingChanges';
import { PendingChangesAlert } from '@kubevirt-utils/components/PendingChanges/PendingChangesAlert/PendingChangesAlert';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Stack, StackItem } from '@patternfly/react-core';
import LiveMigratePendingChanges from '@virtualmachines/details/VirtualMachinePendingChangesAlert/LiveMigratePendingChanges';
import RestartPendingChanges from '@virtualmachines/details/VirtualMachinePendingChangesAlert/RestartPendingChanges';
import { isRunning } from '@virtualmachines/utils';
import { splitPendingChanges } from '../utils/utils';
var VirtualMachinePendingChangesAlert = function (_a) {
    var vm = _a.vm, vmi = _a.vmi;
    var pendingChanges = usePendingChanges(vm, vmi);
    var hasPendingChanges = pendingChanges === null || pendingChanges === void 0 ? void 0 : pendingChanges.some(function (change) { return change === null || change === void 0 ? void 0 : change.hasPendingChange; });
    if (!vmi || !isRunning(vm) || !hasPendingChanges) {
        return null;
    }
    var _b = splitPendingChanges(pendingChanges), liveMigrationChanges = _b.liveMigrationChanges, restartChanges = _b.restartChanges;
    return (React.createElement(PendingChangesAlert, { isExpandable: true, isWarning: true },
        React.createElement(Stack, { hasGutter: true },
            !isEmpty(liveMigrationChanges) && (React.createElement(StackItem, null,
                React.createElement(LiveMigratePendingChanges, { pendingChanges: liveMigrationChanges }))),
            !isEmpty(restartChanges) && (React.createElement(StackItem, null,
                React.createElement(RestartPendingChanges, { pendingChanges: restartChanges }))))));
};
export default VirtualMachinePendingChangesAlert;
//# sourceMappingURL=VirtualMachinePendingChangesAlert.js.map