import React from 'react';
import { JobModel, modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { ResourceLink, TableData, Timestamp, } from '@openshift-console/dynamic-plugin-sdk';
import CheckupsNetworkStatusIcon from './CheckupsNetworkStatusIcon';
var CheckupsNetworkDetailsPageHistoryRow = function (_a) {
    var _b, _c, _d;
    var activeColumnIDs = _a.activeColumnIDs, job = _a.obj;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "job" },
            React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(JobModel), name: (_b = job === null || job === void 0 ? void 0 : job.metadata) === null || _b === void 0 ? void 0 : _b.name, namespace: (_c = job === null || job === void 0 ? void 0 : job.metadata) === null || _c === void 0 ? void 0 : _c.namespace })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "status" },
            React.createElement(CheckupsNetworkStatusIcon, { job: job, onlyJob: true })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "complete-time" },
            React.createElement(Timestamp, { timestamp: ((_d = job === null || job === void 0 ? void 0 : job.status) === null || _d === void 0 ? void 0 : _d.completionTime) || NO_DATA_DASH }))));
};
export default CheckupsNetworkDetailsPageHistoryRow;
//# sourceMappingURL=CheckupsDetailsPageHistoryRow.js.map