import React, { useMemo } from 'react';
import xbytes from 'xbytes';
import ComponentReady from '@kubevirt-utils/components/Charts/ComponentReady/ComponentReady';
import { getUtilizationQueries } from '@kubevirt-utils/components/Charts/utils/queries';
import { getMemorySize } from '@kubevirt-utils/components/CPUMemoryModal/utils/CpuMemoryUtils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getMemory } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { PrometheusEndpoint, usePrometheusPoll } from '@openshift-console/dynamic-plugin-sdk';
import { ChartDonutUtilization, ChartLabel } from '@patternfly/react-charts';
import useDuration from '@virtualmachines/details/tabs/metrics/hooks/useDuration';
var MemoryUtil = function (_a) {
    var _b, _c, _d, _e, _f;
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _g = useDuration(), currentTime = _g.currentTime, duration = _g.duration;
    var queries = useMemo(function () { return getUtilizationQueries({ duration: duration, obj: vmi }); }, [vmi, duration]);
    var memory = getMemorySize(getMemory(vmi));
    var data = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY,
        endTime: currentTime,
        namespace: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.MEMORY_USAGE,
    })[0];
    var memoryUsed = +((_f = (_e = (_d = (_c = data === null || data === void 0 ? void 0 : data.data) === null || _c === void 0 ? void 0 : _c.result) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.value) === null || _f === void 0 ? void 0 : _f[1]);
    var memoryAvailableBytes = xbytes.parseSize("".concat(memory === null || memory === void 0 ? void 0 : memory.size, " ").concat(memory === null || memory === void 0 ? void 0 : memory.unit, "B"));
    var percentageMemoryUsed = (memoryUsed / memoryAvailableBytes) * 100;
    var isReady = !isEmpty(memory) && !Number.isNaN(percentageMemoryUsed);
    return (React.createElement("div", { className: "util" },
        React.createElement("div", { className: "util-upper" },
            React.createElement("div", { className: "util-title" }, t('Memory')),
            React.createElement("div", { className: "util-summary", "data-test-id": "util-summary-memory" },
                React.createElement("div", { className: "util-summary-value" }, xbytes(memoryUsed || 0, { fixed: 0, iec: true })),
                React.createElement("div", { className: "util-summary-text text-muted" },
                    React.createElement("div", null, t('Used of ')),
                    React.createElement("div", null, "".concat(memory === null || memory === void 0 ? void 0 : memory.size, " ").concat(memory === null || memory === void 0 ? void 0 : memory.unit, "B"))))),
        React.createElement("div", { className: "util-chart" },
            React.createElement(ComponentReady, { isReady: isReady },
                React.createElement(ChartDonutUtilization, { data: {
                        x: t('Memory used'),
                        y: Number(percentageMemoryUsed === null || percentageMemoryUsed === void 0 ? void 0 : percentageMemoryUsed.toFixed(2)),
                    }, labels: function (_a) {
                        var datum = _a.datum;
                        return datum.x ? "".concat(datum.x, ": ").concat(xbytes(memoryUsed || 0, { iec: true })) : null;
                    }, animate: true, constrainToVisibleArea: true, style: { labels: { fontSize: 20 } }, subTitle: t('Used'), subTitleComponent: React.createElement(ChartLabel, { y: 135 }), title: "".concat(Number(percentageMemoryUsed === null || percentageMemoryUsed === void 0 ? void 0 : percentageMemoryUsed.toFixed(2)), "%") })))));
};
export default MemoryUtil;
//# sourceMappingURL=MemoryUtil.js.map