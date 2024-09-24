import React, { useMemo } from 'react';
import LoadingEmptyState from '@kubevirt-utils/components/LoadingEmptyState/LoadingEmptyState';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ChartDonut } from '@patternfly/react-charts';
import { CardBody } from '@patternfly/react-core';
import useVMsPerResource from './hooks/useVMsPerResource';
import { getChartData, getInstanceTypeSeriesLabel, getResourceLegendItems, getResourcesToVMCountMap, vmsPerResourceCount, } from './utils/utils';
import EmptyStateNoVMs from './EmptyStateNoVMs';
import RunningVMsChartLegend from './RunningVMsChartLegend';
import './VMsPerResourceCard.scss';
var VMsPerResourceChart = function (_a) {
    var type = _a.type;
    var t = useKubevirtTranslation().t;
    var _b = useVMsPerResource(), loaded = _b.loaded, vms = _b.vms;
    var resourceToVMCountMap = useMemo(function () { return getResourcesToVMCountMap(loaded, vms, type); }, [loaded, vms, type]);
    var chartData = getChartData(resourceToVMCountMap);
    var legendItems = getResourceLegendItems(resourceToVMCountMap);
    var vmsPerResourcesCount = vmsPerResourceCount(resourceToVMCountMap);
    var RunningVMsChart = (React.createElement("div", null,
        React.createElement(ChartDonut, { padding: {
                bottom: 20,
                left: 20,
                right: 20,
                top: 20,
            }, style: {
                labels: {
                    fontSize: 5,
                },
            }, ariaDesc: t('VirtualMachines per resource'), ariaTitle: t('VirtualMachines per resource'), data: chartData, height: 150, labels: function (_a) {
                var datum = _a.datum;
                return "".concat(getInstanceTypeSeriesLabel(datum.x), ": ").concat(datum.y, "%");
            }, subTitle: t('VMs'), title: vmsPerResourcesCount === null || vmsPerResourcesCount === void 0 ? void 0 : vmsPerResourcesCount.toString(), width: 300 })));
    var body = null;
    if (!loaded) {
        body = React.createElement(LoadingEmptyState, null);
    }
    else if (!vmsPerResourcesCount) {
        body = React.createElement(EmptyStateNoVMs, null);
    }
    else {
        body = (React.createElement(React.Fragment, null,
            RunningVMsChart,
            React.createElement(RunningVMsChartLegend, { legendItems: legendItems })));
    }
    return React.createElement(CardBody, null, body);
};
export default VMsPerResourceChart;
//# sourceMappingURL=VMsPerResourceChart.js.map