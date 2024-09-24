import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
export declare const assertFulfilled: <T>(item: PromiseSettledResult<T>) => item is PromiseFulfilledResult<T>;
export declare const getSourcePromises: <T extends K8sResourceCommon>(callback: (name: string, namespace: string) => Promise<T>, uniqueSource: {
    [namespace: string]: Set<string>;
}) => Promise<PromiseSettledResult<Awaited<T>>[]>;
