import * as React from 'react';
import { HealthState, K8sModel, PrometheusLabels, ResolvedExtension, WatchK8sResource } from '@openshift-console/dynamic-plugin-sdk';
import { Alert } from '@openshift-console/dynamic-plugin-sdk';
import { Extension, ExtensionTypeGuard } from '@openshift-console/dynamic-plugin-sdk/lib/types';
export declare const NetworkAddonsConfigResource: WatchK8sResource;
export declare const getClusterNAC: (nacList: any) => any;
export declare const filterSubsystems: <E extends Extension<any>>(subsystems: ResolvedExtension<E, import("@openshift-console/dynamic-plugin-sdk/lib/types").ExtensionProperties<E>>[], typeGuard: ExtensionTypeGuard<E>, k8sModels: {
    [key: string]: K8sModel;
}) => ResolvedExtension<E, import("@openshift-console/dynamic-plugin-sdk/lib/types").ExtensionProperties<E>>[];
export declare const getStorageOperatorHealthStatus: (operatorCSV: any, loaded: any, loadErrors: any) => {
    message: any;
    state: HealthState;
} | {
    state: HealthState;
};
export declare const getOverallStorageStatus: (lsoState: any, odfState: any, loaded: any, loadErrors: any) => {
    state: HealthState;
};
export declare const healthStateMapping: {
    [key in HealthState]: HealthStateMappingValues;
};
export declare type HealthStateMappingValues = {
    health: HealthState;
    icon: React.ReactNode;
    priority: number;
};
export declare type MonitoringResource = {
    abbr: string;
    kind: string;
    label: string;
    plural: string;
};
export declare const AlertResource: MonitoringResource;
export declare const labelsToParams: (labels: PrometheusLabels) => string;
export declare const getAlertURL: (alert: Alert, ruleID: string) => string;
export declare const asArray: (value: any) => any[];
