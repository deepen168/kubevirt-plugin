import React from 'react';
import { PendingChangesAlert } from '@kubevirt-utils/components/PendingChanges/PendingChangesAlert/PendingChangesAlert';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var NICHotPlugModalAlert = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(PendingChangesAlert, { isWarning: true, title: t('Live migrate or restart the VirtualMachine to apply changes.') }));
};
export default NICHotPlugModalAlert;
//# sourceMappingURL=NICHotPlugModalAlert.js.map