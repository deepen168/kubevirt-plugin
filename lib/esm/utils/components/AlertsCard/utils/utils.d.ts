import React from 'react';
import { PrometheusLabels } from '@openshift-console/dynamic-plugin-sdk';
export declare const labelColor: {
    [x: number]: string;
};
export declare const labelIcon: {
    [x: number]: React.JSX.Element;
};
export declare const labelText: {
    [x: number]: any;
};
export declare const alertIcon: {
    [x: number]: () => React.JSX.Element;
};
export declare const removeVMAlerts: (sortedAlerts: SimplifiedAlerts) => {
    critical: never[];
    info: never[];
    warning: never[];
};
export declare const createAlertKey: (activeAt: string, labels: PrometheusLabels) => string;
export declare const alertScopeOptions: () => {
    description: any;
    key: any;
    value: any;
}[];
