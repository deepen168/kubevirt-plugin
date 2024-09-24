var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useMemo } from 'react';
import { getUtilizationQueries } from '@kubevirt-utils/components/Charts/utils/queries';
import { getPrometheusDataAllNics, getPrometheusDataByNic, queriesToLink, } from '@kubevirt-utils/components/Charts/utils/utils';
import { PrometheusEndpoint, usePrometheusPoll, } from '@openshift-console/dynamic-plugin-sdk';
import useDuration from '../../hooks/useDuration';
import { ALL_NETWORKS } from '../../utils/constants';
var useNetworkData = function (vmi, nic) {
    var _a, _b, _c, _d, _e, _f;
    var _g = useDuration(), currentTime = _g.currentTime, duration = _g.duration, timespan = _g.timespan;
    var queries = useMemo(function () { return getUtilizationQueries({ duration: duration, nic: nic, obj: vmi }); }, [vmi, duration, nic]);
    var isAllNetwork = nic === ALL_NETWORKS;
    var networkByNICTotal = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_a = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _a === void 0 ? void 0 : _a.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.NETWORK_TOTAL_BY_INTERFACE_USAGE,
        timespan: timespan,
    })[0];
    var networkByNICIn = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.NETWORK_IN_BY_INTERFACE_USAGE,
        timespan: timespan,
    })[0];
    var networkByNICOut = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_c = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _c === void 0 ? void 0 : _c.namespace,
        query: queries === null || queries === void 0 ? void 0 : queries.NETWORK_OUT_BY_INTERFACE_USAGE,
        timespan: timespan,
    })[0];
    var networkTotal = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_d = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _d === void 0 ? void 0 : _d.namespace,
        query: isAllNetwork && (queries === null || queries === void 0 ? void 0 : queries.NETWORK_TOTAL_USAGE),
        timespan: timespan,
    })[0];
    var networkIn = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_e = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _e === void 0 ? void 0 : _e.namespace,
        query: isAllNetwork && (queries === null || queries === void 0 ? void 0 : queries.NETWORK_IN_USAGE),
        timespan: timespan,
    })[0];
    var networkOut = usePrometheusPoll({
        endpoint: PrometheusEndpoint === null || PrometheusEndpoint === void 0 ? void 0 : PrometheusEndpoint.QUERY_RANGE,
        endTime: currentTime,
        namespace: (_f = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _f === void 0 ? void 0 : _f.namespace,
        query: isAllNetwork && (queries === null || queries === void 0 ? void 0 : queries.NETWORK_OUT_USAGE),
        timespan: timespan,
    })[0];
    return {
        data: {
            in: __spreadArray(__spreadArray([], getPrometheusDataByNic(networkByNICIn, nic), true), (isAllNetwork ? getPrometheusDataAllNics(networkIn) : []), true),
            out: __spreadArray(__spreadArray([], getPrometheusDataByNic(networkByNICOut, nic), true), (isAllNetwork ? getPrometheusDataAllNics(networkOut) : []), true),
            total: __spreadArray(__spreadArray([], getPrometheusDataByNic(networkByNICTotal, nic), true), (isAllNetwork ? getPrometheusDataAllNics(networkTotal) : []), true),
        },
        links: {
            in: isAllNetwork
                ? queriesToLink([queries === null || queries === void 0 ? void 0 : queries.NETWORK_IN_BY_INTERFACE_USAGE, queries === null || queries === void 0 ? void 0 : queries.NETWORK_IN_USAGE])
                : queriesToLink(queries === null || queries === void 0 ? void 0 : queries.NETWORK_IN_USAGE),
            out: isAllNetwork
                ? queriesToLink([queries === null || queries === void 0 ? void 0 : queries.NETWORK_OUT_BY_INTERFACE_USAGE, queries === null || queries === void 0 ? void 0 : queries.NETWORK_OUT_USAGE])
                : queriesToLink(queries === null || queries === void 0 ? void 0 : queries.NETWORK_OUT_USAGE),
            total: isAllNetwork
                ? queriesToLink([queries === null || queries === void 0 ? void 0 : queries.NETWORK_TOTAL_BY_INTERFACE_USAGE, queries === null || queries === void 0 ? void 0 : queries.NETWORK_TOTAL_USAGE])
                : queriesToLink(queries === null || queries === void 0 ? void 0 : queries.NETWORK_TOTAL_USAGE),
        },
    };
};
export default useNetworkData;
//# sourceMappingURL=useNetworkData.js.map