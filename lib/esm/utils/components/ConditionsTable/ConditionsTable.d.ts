import * as React from 'react';
export declare enum K8sResourceConditionStatus {
    False = "False",
    True = "True",
    Unknown = "Unknown"
}
export declare type K8sResourceCondition = {
    lastTransitionTime?: string;
    message?: string;
    reason?: string;
    status: keyof typeof K8sResourceConditionStatus;
    type: string;
};
export declare type ConditionsProps = {
    conditions: K8sResourceCondition[];
};
export declare const ConditionsTable: React.FC<ConditionsProps>;
