import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ProgressStatus } from '@openshift-console/dynamic-plugin-sdk';
var ClonePVCStatus = function () {
    var t = useKubevirtTranslation().t;
    return React.createElement(ProgressStatus, { title: t('Cloning') });
};
export default ClonePVCStatus;
//# sourceMappingURL=ClonePVCStatus.js.map