import React from 'react';
import xbytes from 'xbytes';
import ComponentReady from '@kubevirt-utils/components/Charts/ComponentReady/ComponentReady';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useGuestOS } from '@kubevirt-utils/resources/vmi';
import { removeDuplicatesByName } from '@kubevirt-utils/utils/utils';
import { ChartDonutUtilization, ChartLabel } from '@patternfly/react-charts';
var StorageUtil = function (_a) {
    var _b, _c;
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _d = useGuestOS(vmi), guestAgentData = _d[0], loaded = _d[1];
    var _e = ((_c = removeDuplicatesByName((_b = guestAgentData === null || guestAgentData === void 0 ? void 0 : guestAgentData.fsInfo) === null || _b === void 0 ? void 0 : _b.disks, 'diskName')) === null || _c === void 0 ? void 0 : _c.reduce(function (acc, data) {
        acc.totalBytes += data === null || data === void 0 ? void 0 : data.totalBytes;
        acc.usedBytes += data === null || data === void 0 ? void 0 : data.usedBytes;
        return acc;
    }, { totalBytes: 0, usedBytes: 0 })) || {}, _f = _e.totalBytes, totalBytes = _f === void 0 ? 0 : _f, _g = _e.usedBytes, usedBytes = _g === void 0 ? 0 : _g;
    var usedPercentage = (usedBytes / totalBytes) * 100 || 0;
    var isReady = !Number.isNaN(usedPercentage) && loaded;
    return (React.createElement("div", { className: "util" },
        React.createElement("div", { className: "util-upper" },
            React.createElement("div", { className: "util-title" }, t('Storage')),
            React.createElement("div", { className: "util-summary", "data-test-id": "util-summary-storage" },
                React.createElement("div", { className: "util-summary-value" }, xbytes(usedBytes || 0, { fixed: 2, iec: true })),
                React.createElement("div", { className: "util-summary-text text-muted" },
                    React.createElement("div", null, t('Used of ')),
                    React.createElement("div", null, xbytes(totalBytes || 0, { fixed: 2, iec: true }))))),
        React.createElement("div", { className: "util-chart" },
            React.createElement(ComponentReady, { isReady: isReady },
                React.createElement(ChartDonutUtilization, { data: {
                        x: t('Storage used'),
                        y: usedPercentage,
                    }, labels: function (_a) {
                        var datum = _a.datum;
                        return datum.x ? "".concat(datum.x, ": ").concat(xbytes(usedBytes || 0, { fixed: 2, iec: true })) : null;
                    }, animate: true, constrainToVisibleArea: true, style: { labels: { fontSize: 20 } }, subTitle: t('Used'), subTitleComponent: React.createElement(ChartLabel, { y: 135 }), title: "".concat(usedPercentage.toFixed(2) || 0, "%") })))));
};
export default StorageUtil;
//# sourceMappingURL=StorageUtil.js.map