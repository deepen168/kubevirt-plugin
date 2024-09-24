var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import { useDashboardResources } from '@openshift-console/dynamic-plugin-sdk-internal';
import useDashboardActivities from './useDashboardActivities';
var useDashboardPrometheusActivities = function () {
    var prometheusActivities = useDashboardActivities().prometheusActivities;
    var queries = prometheusActivities === null || prometheusActivities === void 0 ? void 0 : prometheusActivities.reduce(function (acc, activity) { var _a; return __spreadArray(__spreadArray([], acc, true), [{ query: (_a = activity === null || activity === void 0 ? void 0 : activity.properties) === null || _a === void 0 ? void 0 : _a.queries }], false); }, []);
    var prometheusResults = useDashboardResources({
        prometheusQueries: Array.from(queries),
    }).prometheusResults;
    var allPrometheusActivities = React.useMemo(function () {
        var _a;
        return (_a = prometheusActivities === null || prometheusActivities === void 0 ? void 0 : prometheusActivities.filter(function (a) {
            var queryResults = a.properties.queries.map(function (q) { return prometheusResults.getIn([q, 'data']); });
            return a.properties.isActivity(queryResults);
        })) === null || _a === void 0 ? void 0 : _a.map(function (a) {
            var queryResults = a.properties.queries.map(function (q) { return prometheusResults.getIn([q, 'data']); });
            return {
                // TODO Fix typing
                // loader: (a as DashboardsOverviewPrometheusActivity)?.properties.loader,
                component: a === null || a === void 0 ? void 0 : a.properties.component,
                // skipcq: JS-0349
                loader: a === null || a === void 0 ? void 0 : a.properties.loader,
                results: queryResults,
            };
        });
    }, [prometheusActivities, prometheusResults]);
    var prometheusQueriesLoaded = React.useMemo(function () {
        return prometheusActivities.every(function (a) {
            return a.properties.queries.every(function (q) { return prometheusResults.getIn([q, 'data']) || prometheusResults.getIn([q, 'loadError']); });
        });
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [prometheusResults]);
    return {
        prometheusActivities: allPrometheusActivities,
        prometheusQueriesLoaded: prometheusQueriesLoaded,
        prometheusResults: prometheusResults,
    };
};
export default useDashboardPrometheusActivities;
//# sourceMappingURL=useDashboardPrometheusActivities.js.map