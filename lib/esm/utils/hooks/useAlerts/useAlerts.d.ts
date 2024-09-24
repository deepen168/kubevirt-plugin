import { Alert } from '@openshift-console/dynamic-plugin-sdk';
declare type UseAlerts = () => {
    alerts: Alert[];
    loaded: boolean;
};
declare const useAlerts: UseAlerts;
export default useAlerts;
