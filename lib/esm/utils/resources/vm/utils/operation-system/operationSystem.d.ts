import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
/**
 * @date 3/16/2022 - 10:08:55 AM
 *
 * @typedef {LabelsOrAnnotationsMap}
 */
declare type LabelsOrAnnotationsMap = {
    [key: string]: string;
};
/**
 * @date 3/16/2022 - 10:08:55 AM
 * Find in a {LabelsOrAnnotationsMap} object a key that start with {keyPrefix} prefix after '/' in label
 * @param {LabelsOrAnnotationsMap} obj - object to search
 * @param {string} keyPrefix - prefix to search
 * @returns {*}
 */
export declare const findKeySuffixValue: (obj: LabelsOrAnnotationsMap, keyPrefix: string) => string | null;
/**
 * @date 3/16/2022 - 10:08:55 AM
 * Find in a {LabelsOrAnnotationsMap} object a label that start with {keyPrefix}
 * @param {LabelsOrAnnotationsMap} obj - object to search
 * @param {string} keyPrefix - prefix to search
 * @returns {string}
 */
export declare const getValueByPrefix: (obj: LabelsOrAnnotationsMap, keyPrefix: string) => string;
/**
 * @date 3/16/2022 - 10:08:55 AM
 * Get os from {obj}
 * @param {K8sResourceCommon} obj - object to search
 * @returns {string}
 */
export declare const getOperatingSystem: (obj: K8sResourceCommon) => string;
/**
 * @date 3/16/2022 - 10:08:55 AM
 * Get os name from {obj}
 * @param {K8sResourceCommon} obj - object to search
 * @returns {string}
 */
export declare const getOperatingSystemName: (obj: K8sResourceCommon) => string;
/**
 * Windows os prefix
 * @date 4/20/2022 - 1:58:24 PM
 *
 * @type {"win"}
 */
export declare const OS_WINDOWS_PREFIX = "win";
/**
 * Check if a vm/vmi is running windows
 * @date 4/20/2022 - 1:58:24 PM
 *
 * @param {K8sResourceCommon} obj - object to search
 * @returns {boolean}
 */
export declare const isWindows: (obj: K8sResourceCommon) => boolean;
export {};
