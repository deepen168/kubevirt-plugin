import * as React from 'react';
import { DashboardsOverviewHealthURLSubsystem, DashboardsOverviewHealthURLSubsystem as DynamicDashboardsOverviewHealthURLSubsystem, ResolvedExtension } from '@openshift-console/dynamic-plugin-sdk';
declare type URLHealthItemProps = {
    subsystem: DashboardsOverviewHealthURLSubsystem<any>['properties'] | ResolvedExtension<DynamicDashboardsOverviewHealthURLSubsystem<any>>['properties'];
};
declare const URLHealthItem: React.FC<URLHealthItemProps>;
export default URLHealthItem;
