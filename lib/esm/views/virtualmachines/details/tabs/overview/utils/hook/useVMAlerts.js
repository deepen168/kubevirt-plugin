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
import { KUBEVIRT } from '@kubevirt-utils/constants/constants';
import { MONITORING_URL_BASE } from '@kubevirt-utils/constants/prometheus';
import { generateAlertId, labelsToParams } from '@kubevirt-utils/utils/prometheus';
import { PrometheusEndpoint, usePrometheusPoll, } from '@openshift-console/dynamic-plugin-sdk';
var useVMAlerts = function (vm) {
    var query = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.RULES,
    })[0];
    var vmAlerts = React.useMemo(function () {
        var _a, _b, _c;
        // eslint-disable-next-line perfectionist/sort-objects
        var data = { critical: [], warning: [], info: [] };
        var vmName = (_a = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _a === void 0 ? void 0 : _a.name;
        return (((_c = (_b = query === null || query === void 0 ? void 0 : query.data) === null || _b === void 0 ? void 0 : _b.groups) === null || _c === void 0 ? void 0 : _c.reduce(function (acc, ruleGroup) {
            var _a;
            (_a = ruleGroup === null || ruleGroup === void 0 ? void 0 : ruleGroup.rules) === null || _a === void 0 ? void 0 : _a.forEach(function (rule) {
                var _a, _b;
                if ((rule === null || rule === void 0 ? void 0 : rule.state) === "firing" /* RuleStates.Firing */ &&
                    ((_a = rule === null || rule === void 0 ? void 0 : rule.labels) === null || _a === void 0 ? void 0 : _a.kubernetes_operator_part_of) === KUBEVIRT) {
                    (_b = rule === null || rule === void 0 ? void 0 : rule.alerts) === null || _b === void 0 ? void 0 : _b.forEach(function (alert) {
                        var _a, _b, _c, _d, _e, _f;
                        var alertPodName = (_a = alert === null || alert === void 0 ? void 0 : alert.labels) === null || _a === void 0 ? void 0 : _a.pod;
                        var metricName = (_b = alert === null || alert === void 0 ? void 0 : alert.labels) === null || _b === void 0 ? void 0 : _b.name;
                        // NOTE: in 4.11 the alerts are missing a vmName label,
                        // in 4.12 we will replace the following check with alertLabelVMName === vmName
                        if ((alertPodName === null || alertPodName === void 0 ? void 0 : alertPodName.includes(vmName)) ||
                            (metricName && vmName && metricName === vmName)) {
                            acc[(_c = alert === null || alert === void 0 ? void 0 : alert.labels) === null || _c === void 0 ? void 0 : _c.severity] = __spreadArray(__spreadArray([], ((acc === null || acc === void 0 ? void 0 : acc[(_d = alert === null || alert === void 0 ? void 0 : alert.labels) === null || _d === void 0 ? void 0 : _d.severity]) || []), true), [
                                {
                                    alertName: (_e = alert === null || alert === void 0 ? void 0 : alert.labels) === null || _e === void 0 ? void 0 : _e.alertname,
                                    description: (_f = alert === null || alert === void 0 ? void 0 : alert.annotations) === null || _f === void 0 ? void 0 : _f.summary,
                                    isVMAlert: true,
                                    key: createAlertKey(alert === null || alert === void 0 ? void 0 : alert.activeAt, alert === null || alert === void 0 ? void 0 : alert.labels),
                                    link: "".concat(MONITORING_URL_BASE, "/").concat(generateAlertId(ruleGroup, rule), "?").concat(labelsToParams(alert === null || alert === void 0 ? void 0 : alert.labels)),
                                    time: alert === null || alert === void 0 ? void 0 : alert.activeAt,
                                },
                            ], false);
                        }
                    });
                }
            });
            return acc;
        }, data)) || data);
    }, [query, vm]);
    return vmAlerts;
};
export default useVMAlerts;
//# sourceMappingURL=useVMAlerts.js.map