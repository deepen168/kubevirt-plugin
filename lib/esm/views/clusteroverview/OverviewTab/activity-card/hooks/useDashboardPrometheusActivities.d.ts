import * as React from 'react';
import { PrometheusResponse } from '@openshift-console/dynamic-plugin-sdk';
export declare type WatchPrometheusQueryProps = {
    namespace?: string;
    query: string;
    timespan?: number;
};
declare const useDashboardPrometheusActivities: () => {
    prometheusActivities: {
        component: React.ComponentType<import("@openshift-console/dynamic-plugin-sdk").PrometheusActivityProps>;
        loader: any;
        results: PrometheusResponse[];
    }[];
    prometheusQueriesLoaded: boolean;
    prometheusResults: import("@openshift-console/dynamic-plugin-sdk-internal/lib/api/internal-types").RequestMap<import("@openshift-console/dynamic-plugin-sdk-internal/lib/extensions/console-types").PrometheusResponse>;
};
export default useDashboardPrometheusActivities;
