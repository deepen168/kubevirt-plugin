import { ClusterServiceVersionKind, SubscriptionKind } from '../types';
declare type UseKubevirtCSVDetails = {
    catalogSourceMissing: boolean;
    displayName: string;
    installedCSV: ClusterServiceVersionKind;
    kubevirtSubscription: SubscriptionKind;
    loaded: boolean;
    loadErrors: Error[];
    operatorLink: string;
    provider: string;
    updateChannel: string;
    version: string;
};
export declare const useKubevirtCSVDetails: () => UseKubevirtCSVDetails;
export {};
