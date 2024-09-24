import React, { useMemo } from 'react';
import ComponentReady from '@kubevirt-utils/components/Charts/ComponentReady/ComponentReady';
import { getUtilizationQueries } from '@kubevirt-utils/components/Charts/utils/queries';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getVMIPod } from '@kubevirt-utils/resources/vmi';
import { PrometheusEndpoint, usePrometheusPoll, } from '@openshift-console/dynamic-plugin-sdk';
import { ChartDonutUtilization, ChartLabel } from '@patternfly/react-charts';
import useDuration from '@virtualmachines/details/tabs/metrics/hooks/useDuration';
var CPUUtil = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var pods = _a.pods, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var vmiPod = useMemo(function () { return getVMIPod(vmi, pods); }, [pods, vmi]);
    var _m = useDuration(), currentTime = _m.currentTime, duration = _m.duration;
    var queries = useMemo(function () { var _a; return getUtilizationQueries({ duration: duration, launcherPodName: (_a = vmiPod === null || vmiPod === void 0 ? void 0 : vmiPod.metadata) === null || _a === void 0 ? void 0 : _a.name, obj: vmi }); }, [vmi, vmiPod, duration]);
    var dataCPURequested = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY,
        endTime: currentTime,
        namespace: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        query: queries.CPU_REQUESTED,
    })[0];
    var dataCPUUsage = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY,
        endTime: currentTime,
        namespace: (_c = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _c === void 0 ? void 0 : _c.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.CPU_USAGE,
    })[0];
    var cpuUsage = +((_g = (_f = (_e = (_d = dataCPUUsage === null || dataCPUUsage === void 0 ? void 0 : dataCPUUsage.data) === null || _d === void 0 ? void 0 : _d.result) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.value) === null || _g === void 0 ? void 0 : _g[1]);
    var cpuRequested = +((_l = (_k = (_j = (_h = dataCPURequested === null || dataCPURequested === void 0 ? void 0 : dataCPURequested.data) === null || _h === void 0 ? void 0 : _h.result) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.value) === null || _l === void 0 ? void 0 : _l[1]);
    var averageCPUUsage = (cpuUsage / cpuRequested) * 100;
    var isReady = !Number.isNaN(cpuUsage) && !Number.isNaN(cpuRequested);
    return (React.createElement("div", { className: "util" },
        React.createElement("div", { className: "util-upper" },
            React.createElement("div", { className: "util-title" }, t('CPU')),
            React.createElement("div", { className: "util-summary", "data-test-id": "util-summary-cpu" },
                React.createElement("div", { className: "util-summary-value" }, "".concat(isReady ? cpuUsage === null || cpuUsage === void 0 ? void 0 : cpuUsage.toFixed(2) : 0, "m")),
                React.createElement("div", { className: "util-summary-text text-muted" },
                    React.createElement("div", null, t('Requested of ')),
                    React.createElement("div", null, "".concat(isReady ? cpuRequested === null || cpuRequested === void 0 ? void 0 : cpuRequested.toFixed(2) : 0, "m"))))),
        React.createElement("div", { className: "util-chart" },
            React.createElement(ComponentReady, { isReady: isReady },
                React.createElement(ChartDonutUtilization, { data: {
                        x: t('CPU used'),
                        y: (averageCPUUsage > 100 ? 100 : averageCPUUsage) || 0,
                    }, animate: true, constrainToVisibleArea: true, labels: function (_a) {
                        var _b;
                        var datum = _a.datum;
                        return (datum.x ? "".concat(datum.x, ": ").concat((_b = (cpuUsage || 0)) === null || _b === void 0 ? void 0 : _b.toFixed(2), "m") : null);
                    }, style: { labels: { fontSize: 20 } }, subTitle: t('Used'), subTitleComponent: React.createElement(ChartLabel, { y: 135 }), title: "".concat(averageCPUUsage.toFixed(2) || 0, "%") })))));
};
export default CPUUtil;
//# sourceMappingURL=CPUUtil.js.map