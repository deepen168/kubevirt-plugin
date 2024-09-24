import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { VirtualizedTable } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye, Title } from '@patternfly/react-core';
import useCheckupsNetworkDetailsPageHistoryColumns from './network/details/hooks/useCheckupsNetworkDetailsPageHistoryColumns';
import CheckupsNetworkDetailsPageHistoryRow from './CheckupsDetailsPageHistoryRow';
var CheckupsNetworkDetailsPageHistory = function (_a) {
    var error = _a.error, jobs = _a.jobs, loading = _a.loading;
    var t = useKubevirtTranslation().t;
    var columns = useCheckupsNetworkDetailsPageHistoryColumns();
    return (React.createElement(React.Fragment, null,
        React.createElement(Title, { className: "co-section-heading", headingLevel: "h2" }, t('History')),
        React.createElement(VirtualizedTable, { NoDataEmptyMsg: function () { return (React.createElement(Bullseye, null,
                React.createElement("div", null, t('No data available')))); }, columns: columns, data: jobs, loaded: loading, loadError: error, Row: CheckupsNetworkDetailsPageHistoryRow, rowData: jobs, unfilteredData: jobs })));
};
export default CheckupsNetworkDetailsPageHistory;
//# sourceMappingURL=CheckupsDetailsPageHistory.js.map