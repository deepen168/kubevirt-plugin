var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from 'react';
import { createAlertKey } from '@kubevirt-utils/components/AlertsCard/utils/utils';
import useKubevirtAlerts from '@kubevirt-utils/hooks/useKubevirtAlerts';
import { labelsToParams } from '@kubevirt-utils/utils/prometheus';
import { AlertResource } from '../../status-card/utils/utils';
var getAlertURL = function (alert) { var _a; return "".concat(AlertResource.plural, "/").concat((_a = alert === null || alert === void 0 ? void 0 : alert.rule) === null || _a === void 0 ? void 0 : _a.id, "?").concat(labelsToParams(alert.labels)); };
var useSimplifiedAlerts = function () {
    var alerts = useKubevirtAlerts()[0];
    return React.useMemo(function () {
        // eslint-disable-next-line perfectionist/sort-objects
        var data = { critical: [], warning: [], info: [] };
        return (alerts.reduce(function (acc, alert) {
            var _a, _b, _c, _d, _e, _f, _g;
            acc[(_a = alert === null || alert === void 0 ? void 0 : alert.labels) === null || _a === void 0 ? void 0 : _a.severity] = __spreadArray(__spreadArray([], ((acc === null || acc === void 0 ? void 0 : acc[(_b = alert === null || alert === void 0 ? void 0 : alert.labels) === null || _b === void 0 ? void 0 : _b.severity]) || []), true), [
                {
                    alertName: (_c = alert === null || alert === void 0 ? void 0 : alert.labels) === null || _c === void 0 ? void 0 : _c.alertname,
                    description: ((_d = alert === null || alert === void 0 ? void 0 : alert.annotations) === null || _d === void 0 ? void 0 : _d.description) || ((_e = alert === null || alert === void 0 ? void 0 : alert.annotations) === null || _e === void 0 ? void 0 : _e.summary),
                    isVMAlert: ((_f = alert === null || alert === void 0 ? void 0 : alert.labels) === null || _f === void 0 ? void 0 : _f.name) || ((_g = alert === null || alert === void 0 ? void 0 : alert.labels) === null || _g === void 0 ? void 0 : _g.vmName),
                    key: createAlertKey(alert === null || alert === void 0 ? void 0 : alert.activeAt, alert === null || alert === void 0 ? void 0 : alert.labels),
                    link: getAlertURL(alert),
                    time: alert === null || alert === void 0 ? void 0 : alert.activeAt,
                },
            ], false);
            return acc;
        }, data) || data);
    }, [alerts]);
};
export default useSimplifiedAlerts;
//# sourceMappingURL=useSimplifiedAlerts.js.map