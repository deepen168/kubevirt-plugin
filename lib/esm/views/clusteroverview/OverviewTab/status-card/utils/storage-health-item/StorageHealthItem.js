import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { HealthItem } from '@openshift-console/dynamic-plugin-sdk-internal';
import useKubevirtStorageOperatorCSVs from '../hooks/useKubevirtStorageOperatorCSVs';
import { getOverallStorageStatus, getStorageOperatorHealthStatus } from '../utils';
import StatusCardStoragePopover from './StatusStorageCardPopover';
var StorageHealthItem = function () {
    var t = useKubevirtTranslation().t;
    var _a = useKubevirtStorageOperatorCSVs(), loaded = _a.loaded, loadErrors = _a.loadErrors, lsoCSV = _a.lsoCSV, odfCSV = _a.odfCSV;
    var lsoState = getStorageOperatorHealthStatus(lsoCSV, loaded, loadErrors);
    var odfState = getStorageOperatorHealthStatus(odfCSV, loaded, loadErrors);
    var status = getOverallStorageStatus(lsoState, odfState, loaded, loadErrors);
    return (React.createElement(HealthItem, { details: '', popupTitle: t('Storage requirements'), state: status.state, title: t('Storage') },
        React.createElement(StatusCardStoragePopover, { lsoState: lsoState, odfState: odfState })));
};
export default StorageHealthItem;
//# sourceMappingURL=StorageHealthItem.js.map