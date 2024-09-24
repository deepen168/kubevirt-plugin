import * as React from 'react';
import { OngoingActivityBody } from '@openshift-console/dynamic-plugin-sdk-internal';
import useDashboardK8sResources from '../hooks/useDashboardK8sResources';
import useDashboardPrometheusActivities from '../hooks/useDashboardPrometheusActivities';
var OngoingActivity = function () {
    var _a = useDashboardK8sResources(), k8sResourceActivities = _a.k8sResourceActivities, k8sResourcesLoaded = _a.k8sResourcesLoaded;
    var _b = useDashboardPrometheusActivities(), prometheusActivities = _b.prometheusActivities, prometheusQueriesLoaded = _b.prometheusQueriesLoaded;
    return (k8sResourcesLoaded &&
        prometheusQueriesLoaded && (React.createElement(OngoingActivityBody, { loaded: k8sResourcesLoaded && prometheusQueriesLoaded, 
        // TODO Fix typing
        prometheusActivities: prometheusActivities, 
        // skipcq: JS-0349
        resourceActivities: k8sResourceActivities })));
};
export default OngoingActivity;
//# sourceMappingURL=OngoingActivity.js.map