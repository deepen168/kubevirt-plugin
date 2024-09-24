import React, { useMemo } from 'react';
import xbytes from 'xbytes';
import useResponsiveCharts from '@kubevirt-utils/components/Charts/hooks/useResponsiveCharts';
import DurationOption from '@kubevirt-utils/components/DurationOption/DurationOption';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Bullseye, Divider, Grid, HelperText, HelperTextItem } from '@patternfly/react-core';
import MigrationsTimeAxis from './components/MigrationsTimeAxis';
import MigrationsUtilizationChart from './components/MigrationsUtilizationChart';
import useMigrationChartsData from './useMigrationChartsData';
import { getDomainY, getLabel, getTickValuesAxisY } from './utils';
var BandwidthConsumptionCharts = function (_a) {
    var duration = _a.duration;
    var t = useKubevirtTranslation().t;
    var currentTime = useMemo(function () { return Date.now(); }, []);
    var timespan = DurationOption.getMilliseconds(duration);
    var domainX = [currentTime - timespan, currentTime];
    var ref = useResponsiveCharts().ref;
    var _b = useMigrationChartsData(duration, currentTime, timespan), bandwidthConsumed = _b.bandwidthConsumed, maxBandwidthConsumed = _b.maxBandwidthConsumed, maxMigrationCount = _b.maxMigrationCount, migrationsCount = _b.migrationsCount;
    return (React.createElement("div", null, !isEmpty(bandwidthConsumed) || !isEmpty(migrationsCount) ? (React.createElement(Grid, { ref: ref },
        React.createElement(MigrationsTimeAxis, { domainX: domainX, timespan: timespan }),
        React.createElement(MigrationsUtilizationChart, { domain: {
                x: domainX,
                y: getDomainY(maxBandwidthConsumed),
            }, chartData: bandwidthConsumed, labels: getLabel(timespan, bandwidthConsumed, true), tickFormat: function (y) { return xbytes(y, { fixed: 0, iec: true, prefixIndex: 3 }); }, tickValues: getTickValuesAxisY(maxBandwidthConsumed), title: t('Network consumption') }),
        React.createElement(Divider, null),
        React.createElement(MigrationsUtilizationChart, { domain: {
                x: domainX,
                y: getDomainY(maxMigrationCount, 1),
            }, chartData: migrationsCount, labels: getLabel(timespan, migrationsCount), tickValues: getTickValuesAxisY(maxMigrationCount, 1), title: t('Running migrations') }))) : (React.createElement(Bullseye, null,
        React.createElement(HelperText, null,
            React.createElement(HelperTextItem, { isDynamic: true, variant: "warning" }, t('No Datapoints found')))))));
};
export default BandwidthConsumptionCharts;
//# sourceMappingURL=BandwidthConsumptionCharts.js.map