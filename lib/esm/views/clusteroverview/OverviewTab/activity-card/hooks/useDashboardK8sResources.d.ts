import * as React from 'react';
declare const useDashboardK8sResources: () => {
    k8sResourceActivities: {
        component: React.ComponentType<import("@openshift-console/dynamic-plugin-sdk").K8sActivityProps<import("@openshift-console/dynamic-plugin-sdk").K8sResourceCommon>>;
        loader: any;
        resource: import("@openshift-console/dynamic-plugin-sdk").K8sResourceCommon;
        timestamp: any;
    }[];
    k8sResources: import("@openshift-console/dynamic-plugin-sdk").WatchK8sResults<import("@openshift-console/dynamic-plugin-sdk").ResourcesObject>;
    k8sResourcesLoaded: boolean;
};
export default useDashboardK8sResources;
