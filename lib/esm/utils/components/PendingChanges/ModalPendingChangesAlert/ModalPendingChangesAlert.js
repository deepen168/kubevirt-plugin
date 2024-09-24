import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { PendingChangesAlert } from '../PendingChangesAlert/PendingChangesAlert';
var ModalPendingChangesAlert = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(PendingChangesAlert, { isWarning: true, title: t('Restart the VirtualMachine to apply changes.') }));
};
export default ModalPendingChangesAlert;
//# sourceMappingURL=ModalPendingChangesAlert.js.map