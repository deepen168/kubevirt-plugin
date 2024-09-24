import * as React from 'react';
import { DashboardsOverviewPrometheusActivity, DashboardsOverviewResourceActivity } from '@openshift-console/dynamic-plugin-sdk';
import { LoadedExtension, ResolvedExtension } from '@openshift-console/dynamic-plugin-sdk/lib/types';
declare const useDashboardActivities: () => {
    prometheusActivities: ResolvedExtension<DashboardsOverviewPrometheusActivity, {
        queries: string[];
        isActivity?: import("@openshift-console/dynamic-plugin-sdk/lib/types").CodeRef<(results: import("@openshift-console/dynamic-plugin-sdk").PrometheusResponse[]) => boolean> | undefined;
        component: import("@openshift-console/dynamic-plugin-sdk/lib/types").CodeRef<React.ComponentType<import("@openshift-console/dynamic-plugin-sdk").PrometheusActivityProps>>;
    }>[];
    resourceActivities: (LoadedExtension<DashboardsOverviewResourceActivity<import("@openshift-console/dynamic-plugin-sdk").K8sResourceCommon>> | ResolvedExtension<DashboardsOverviewResourceActivity<import("@openshift-console/dynamic-plugin-sdk").K8sResourceCommon>, {
        k8sResource: import("@openshift-console/dynamic-plugin-sdk/lib/types").CodeRef<import("@openshift-console/dynamic-plugin-sdk").FirehoseResource & {
            isList: true;
        }>;
        isActivity?: import("@openshift-console/dynamic-plugin-sdk/lib/types").CodeRef<(resource: import("@openshift-console/dynamic-plugin-sdk").K8sResourceCommon) => boolean> | undefined;
        getTimestamp?: import("@openshift-console/dynamic-plugin-sdk/lib/types").CodeRef<(resource: import("@openshift-console/dynamic-plugin-sdk").K8sResourceCommon) => Date> | undefined;
        component: import("@openshift-console/dynamic-plugin-sdk/lib/types").CodeRef<React.ComponentType<import("@openshift-console/dynamic-plugin-sdk").K8sActivityProps<import("@openshift-console/dynamic-plugin-sdk").K8sResourceCommon>>>;
    }>)[];
};
export default useDashboardActivities;
