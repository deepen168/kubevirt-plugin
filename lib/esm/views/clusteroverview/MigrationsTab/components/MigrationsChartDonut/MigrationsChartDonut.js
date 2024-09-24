import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ChartDonut, ChartThemeColor } from '@patternfly/react-charts';
import MigrationChartLegend from './MigrationChartLegend';
var MigrationsChartDonut = function (_a) {
    var _b;
    var onFilterChange = _a.onFilterChange, vmims = _a.vmims;
    var t = useKubevirtTranslation().t;
    if (!(vmims === null || vmims === void 0 ? void 0 : vmims.length))
        return null;
    var vmimsStatusCountMap = vmims === null || vmims === void 0 ? void 0 : vmims.reduce(function (acc, vmim) {
        var _a;
        var vmimStatusKey = (_a = vmim === null || vmim === void 0 ? void 0 : vmim.status) === null || _a === void 0 ? void 0 : _a.phase;
        acc[vmimStatusKey] = (acc === null || acc === void 0 ? void 0 : acc[vmimStatusKey]) + 1 || 1;
        return acc;
    }, {});
    var chartData = (_b = Object.entries(vmimsStatusCountMap)) === null || _b === void 0 ? void 0 : _b.map(function (_a) {
        var status = _a[0], statusCount = _a[1];
        return ({
            x: status,
            y: statusCount,
        });
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(ChartDonut, { ariaDesc: t('Cluster scope migrations'), ariaTitle: t('Migrations'), constrainToVisibleArea: true, data: chartData, height: 220, labels: function (_a) {
                var datum = _a.datum;
                return "".concat(datum.x, ": ").concat(datum.y);
            }, legendPosition: "bottom", padding: 20, subTitle: t('Migrations'), themeColor: ChartThemeColor.multiOrdered, title: vmims === null || vmims === void 0 ? void 0 : vmims.length.toString(), width: 600 }),
        React.createElement(MigrationChartLegend, { legendItems: chartData, onFilterChange: onFilterChange })));
};
export default MigrationsChartDonut;
//# sourceMappingURL=MigrationsChartDonut.js.map