import { Alert } from '@openshift-console/dynamic-plugin-sdk';
export declare type AlertsByHealthImpact = {
    critical: Alert[];
    none: Alert[];
    warning: Alert[];
};
declare type UseInfrastructureAlerts = () => {
    alerts: AlertsByHealthImpact;
    loaded: boolean;
    numberOfAlerts: number;
};
declare const useInfrastructureAlerts: UseInfrastructureAlerts;
export default useInfrastructureAlerts;
