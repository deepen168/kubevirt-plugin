import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
/**
 * @date 3/20/2022 - 8:59:40 AM
 *
 * @typedef {UsePods}
 */
declare type UsePods = (namespace: string) => [K8sResourceCommon[], boolean, any];
/**
 * Get namespace pods
 * @date 3/20/2022 - 8:59:40 AM
 *
 * @param {string} namespace - namespace
 * @returns {[K8sResourceCommon[], boolean, any]}
 */
export declare const usePods: UsePods;
export {};
