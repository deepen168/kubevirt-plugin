import { Alert, PrometheusAlert, PrometheusRule, Rule, Silence } from '@openshift-console/dynamic-plugin-sdk';
export declare const addAlertIdToRule: (group: Group, rule: PrometheusRule) => Rule;
export declare const getAlertsAndRules: (data: PrometheusRulesResponse) => {
    alerts: Alert[];
    rules: Rule[];
};
export declare const isSilenced: (alert: Alert | PrometheusAlert, silence: Silence) => boolean;
/**
 *  For each firing alert, store a list of the Silences that
 *  are silencing it and set its state to show it is silenced
 * @param alerts All alerts in the cluster
 * @param silences All silences in the cluster
 */
export declare const silenceFiringAlerts: (alerts: Alert[], silences: any) => Alert[];
