import { Alert, PrometheusLabels, PrometheusRule } from '@openshift-console/dynamic-plugin-sdk';
export declare const generateAlertId: (group: Group, rule: PrometheusRule) => string;
export declare const labelsToParams: (labels: PrometheusLabels) => string;
export declare const isKubeVirtAlert: (alert: Alert) => boolean;
export declare const inNamespace: (namespace: string, alert: Alert) => boolean;
