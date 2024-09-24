import { PrometheusRule } from '@openshift-console/dynamic-plugin-sdk';
export declare type Group = {
    file: string;
    name: string;
    rules: PrometheusRule[];
};
export declare type PrometheusRulesResponse = {
    data: {
        groups?: Group[];
    };
    status: string;
};
