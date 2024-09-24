import { useMemo } from 'react';
import { getPrometheusData } from '@kubevirt-utils/components/Charts/utils/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { PrometheusEndpoint, usePrometheusPoll } from '@openshift-console/dynamic-plugin-sdk';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { getBaseQuery, mapPrometheusValues } from './utils';
export var useMigrationChartsData = function (duration, currentTime, timespan) {
    var t = useKubevirtTranslation().t;
    var activeNamespace = useActiveNamespace()[0];
    var baseQuery = useMemo(function () { return getBaseQuery(duration, activeNamespace); }, [activeNamespace, duration]);
    var migrationsBandwidthConsumed = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        query: "sum".concat(baseQuery),
        timespan: timespan,
    })[0];
    var proccessedMigrationsCount = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        query: "count".concat(baseQuery),
        timespan: timespan,
    })[0];
    var bandwidthConsumed = mapPrometheusValues(getPrometheusData(migrationsBandwidthConsumed), t('Bandwidth consumption'));
    var migrationsCount = mapPrometheusValues(getPrometheusData(proccessedMigrationsCount), t('Running migrations'));
    return {
        bandwidthConsumed: bandwidthConsumed,
        maxBandwidthConsumed: Math.max.apply(Math, (bandwidthConsumed || []).map(function (o) { return o.y; })),
        maxMigrationCount: Math.max.apply(Math, (migrationsCount || []).map(function (o) { return o.y; })),
        migrationsCount: migrationsCount,
    };
};
export default useMigrationChartsData;
//# sourceMappingURL=useMigrationChartsData.js.map