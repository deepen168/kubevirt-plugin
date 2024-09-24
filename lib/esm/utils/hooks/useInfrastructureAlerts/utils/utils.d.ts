import { Alert } from '@openshift-console/dynamic-plugin-sdk';
export declare const isFiringOrSilencedAlert: (alert: Alert) => boolean;
export declare const isImportantInfrastructureAlert: (alert: Alert) => boolean | "";
export declare const sortAlertsByHealthImpact: (alerts: Alert[]) => {
    critical: never[];
    none: never[];
    warning: never[];
};
export declare const getNumberOfAlerts: (alerts: AlertsByHealthImpact) => unknown;
