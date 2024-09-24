import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { CheckCircleIcon, ExclamationCircleIcon, SyncAltIcon } from '@patternfly/react-icons';
import { getConfigMapStatus, getJobStatus, NetworkCheckupsStatus } from './utils/utils';
import './checkups.scss';
var CheckupsNetworkStatusIcon = function (_a) {
    var _b;
    var configMap = _a.configMap, job = _a.job, _c = _a.onlyJob, onlyJob = _c === void 0 ? false : _c;
    var t = useKubevirtTranslation().t;
    var statusJob = getJobStatus(job);
    var statusConfigMap = getConfigMapStatus(configMap, statusJob);
    var Icon = (_b = {},
        _b[NetworkCheckupsStatus.Done] = (React.createElement(React.Fragment, null,
            React.createElement(CheckCircleIcon, { color: "green" }),
            t('Succeeded'))),
        _b[NetworkCheckupsStatus.Failed] = (React.createElement(React.Fragment, null,
            React.createElement(ExclamationCircleIcon, { color: "red" }),
            " ",
            t('Failed'))),
        _b[NetworkCheckupsStatus.Running] = (React.createElement(React.Fragment, null,
            React.createElement(SyncAltIcon, null),
            t('Running'))),
        _b);
    if (!configMap && !job)
        return React.createElement(React.Fragment, null, NO_DATA_DASH);
    return (React.createElement("div", { className: "CheckupsNetworkStatusIcon--main" }, Icon[onlyJob ? statusJob : statusConfigMap]));
};
export default CheckupsNetworkStatusIcon;
//# sourceMappingURL=CheckupsNetworkStatusIcon.js.map