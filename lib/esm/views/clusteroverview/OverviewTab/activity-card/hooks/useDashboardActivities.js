import * as React from 'react';
import { isDashboardsOverviewPrometheusActivity as isDynamicDashboardsOverviewPrometheusActivity, isDashboardsOverviewResourceActivity as isDynamicDashboardsOverviewResourceActivity, useK8sModels, useResolvedExtensions, } from '@openshift-console/dynamic-plugin-sdk';
var useDashboardActivities = function () {
    var models = useK8sModels()[0];
    var dynamicResourceActivityExtensions = useResolvedExtensions(isDynamicDashboardsOverviewResourceActivity)[0];
    var resourceActivities = React.useMemo(function () {
        return dynamicResourceActivityExtensions === null || dynamicResourceActivityExtensions === void 0 ? void 0 : dynamicResourceActivityExtensions.filter(function (e) { return !!(models === null || models === void 0 ? void 0 : models[e.properties.k8sResource.kind]); });
    }, [dynamicResourceActivityExtensions, models]);
    var dynamicPrometheusActivities = useResolvedExtensions(isDynamicDashboardsOverviewPrometheusActivity)[0];
    return {
        prometheusActivities: dynamicPrometheusActivities,
        resourceActivities: resourceActivities,
    };
};
export default useDashboardActivities;
//# sourceMappingURL=useDashboardActivities.js.map