import React, { useMemo } from 'react';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ChartDonut } from '@patternfly/react-charts';
import { alertTypeToColorMap } from '../utils/utils';
import EmptyStateNoAlerts from './EmptyStateNoAlerts';
var HealthPopupChart = function (_a) {
    var alerts = _a.alerts, numberOfAlerts = _a.numberOfAlerts;
    var totalNumberAlerts = useMemo(function () { var _a; return (_a = Object.values(alerts)) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, alertType) { return acc + ((alertType === null || alertType === void 0 ? void 0 : alertType.length) || 0); }, 0); }, [alerts]);
    var chartData = useMemo(function () {
        var _a;
        return (_a = Object.keys(alerts)) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, alertType) {
            var _a;
            var numAlertsForType = (_a = alerts[alertType]) === null || _a === void 0 ? void 0 : _a.length;
            var percentage = Math.round((numAlertsForType / totalNumberAlerts) * 100);
            acc.push({
                fill: alertTypeToColorMap[alertType],
                x: alertType,
                y: percentage,
            });
            return acc;
        }, []);
    }, [alerts, totalNumberAlerts]);
    if (isEmpty(numberOfAlerts))
        return React.createElement(EmptyStateNoAlerts, { classname: "kv-health-popup__empty-state--no-alerts" });
    return (React.createElement("div", { className: "kv-health-popup__chart" },
        React.createElement(ChartDonut, { style: {
                data: {
                    fill: function (_a) {
                        var datum = _a.datum;
                        return datum === null || datum === void 0 ? void 0 : datum.fill;
                    },
                },
            }, ariaDesc: t('Virtualization Alerts'), ariaTitle: t('Virtualization Alerts donut chart'), data: chartData, height: 150, labels: function (_a) {
                var datum = _a.datum;
                return "".concat(datum === null || datum === void 0 ? void 0 : datum.x, ": ").concat(datum === null || datum === void 0 ? void 0 : datum.y, "%");
            }, subTitle: t('Alerts'), title: totalNumberAlerts === null || totalNumberAlerts === void 0 ? void 0 : totalNumberAlerts.toString(), width: 150 })));
};
export default HealthPopupChart;
//# sourceMappingURL=HealthPopupChart.js.map