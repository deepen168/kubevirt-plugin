import * as React from 'react';
import { AlertItem, AlertsBody } from '@openshift-console/dynamic-plugin-sdk-internal';
// File will be removed with the rest of clusteroverview/OverviewTab/status-card
var VirtualizationAlerts = function () {
    var alerts = [];
    return (React.createElement(AlertsBody, { error: false }, alerts.map(function (alert) {
        var _a;
        return (React.createElement(AlertItem, { alert: alert, key: (_a = alert === null || alert === void 0 ? void 0 : alert.rule) === null || _a === void 0 ? void 0 : _a.id }));
    })));
};
export default VirtualizationAlerts;
//# sourceMappingURL=VirtualizationAlerts.js.map