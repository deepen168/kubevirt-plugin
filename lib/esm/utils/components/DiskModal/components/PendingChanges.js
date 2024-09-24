import React from 'react';
import { PendingChangesAlert } from '@kubevirt-utils/components/PendingChanges/PendingChangesAlert/PendingChangesAlert';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var PendingChanges = function (_a) {
    var isVMRunning = _a.isVMRunning;
    var t = useKubevirtTranslation().t;
    if (!isVMRunning)
        return null;
    return (React.createElement(PendingChangesAlert, { title: t(' Adding hot plugged disk') }, t('Additional disks types and interfaces are available when the VirtualMachine is stopped.')));
};
export default PendingChanges;
//# sourceMappingURL=PendingChanges.js.map