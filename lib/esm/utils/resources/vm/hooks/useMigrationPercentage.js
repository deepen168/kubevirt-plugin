import { useMemo } from 'react';
import { getUtilizationQueries } from '@kubevirt-utils/components/Charts/utils/queries';
import { getNamespace } from '@kubevirt-utils/resources/shared';
import useVirtualMachineInstanceMigration from '@kubevirt-utils/resources/vmi/hooks/useVirtualMachineInstanceMigration';
import { vmimStatuses } from '@kubevirt-utils/resources/vmim/statuses';
import { PrometheusEndpoint, usePrometheusPoll } from '@openshift-console/dynamic-plugin-sdk';
import { MIGRATION__PROMETHEUS_DELAY } from '../utils/constants';
var useMigrationPercentage = function (vm) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var namespace = getNamespace(vm);
    var vmim = useVirtualMachineInstanceMigration(vm);
    var queries = useMemo(function () { return getUtilizationQueries({ obj: vm }); }, [vm]);
    var dataProcessedBytes = usePrometheusPoll({
        delay: MIGRATION__PROMETHEUS_DELAY,
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY,
        namespace: namespace,
        query: queries.INSTANT_MIGRATION_DATA_PROCESSED,
    })[0];
    var dataRemainingBytes = usePrometheusPoll({
        delay: MIGRATION__PROMETHEUS_DELAY,
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY,
        namespace: namespace,
        query: queries.INSTANT_MIGRATION_DATA_REMAINING,
    })[0];
    if (((_a = vmim === null || vmim === void 0 ? void 0 : vmim.status) === null || _a === void 0 ? void 0 : _a.phase) === vmimStatuses.Succeeded)
        return {
            endTimestamp: (_c = (_b = vmim === null || vmim === void 0 ? void 0 : vmim.status) === null || _b === void 0 ? void 0 : _b.migrationState) === null || _c === void 0 ? void 0 : _c.endTimestamp,
            isFailed: false,
            percentage: 100,
        };
    if (!namespace)
        return { endTimestamp: null, isFailed: false, percentage: null };
    var processedBytes = parseFloat((_g = (_f = (_e = (_d = dataProcessedBytes === null || dataProcessedBytes === void 0 ? void 0 : dataProcessedBytes.data) === null || _d === void 0 ? void 0 : _d.result) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.value) === null || _g === void 0 ? void 0 : _g[1]);
    var remainingBytes = parseFloat((_l = (_k = (_j = (_h = dataRemainingBytes === null || dataRemainingBytes === void 0 ? void 0 : dataRemainingBytes.data) === null || _h === void 0 ? void 0 : _h.result) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.value) === null || _l === void 0 ? void 0 : _l[1]);
    if (isNaN(remainingBytes) || isNaN(processedBytes))
        return { endTimestamp: null, isFailed: false, percentage: null };
    if (remainingBytes === 0 && processedBytes === 0)
        return { endTimestamp: null, isFailed: false, percentage: 0 };
    var percentage = processedBytes / (processedBytes + remainingBytes);
    return {
        endTimestamp: null,
        isFailed: ((_m = vmim === null || vmim === void 0 ? void 0 : vmim.status) === null || _m === void 0 ? void 0 : _m.phase) === vmimStatuses.Failed,
        percentage: Math.trunc(percentage * 100),
    };
};
export default useMigrationPercentage;
//# sourceMappingURL=useMigrationPercentage.js.map