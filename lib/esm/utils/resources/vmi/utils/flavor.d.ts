/**
 * DESCHEDULER_EVICT_LABEL
 * @date 3/14/2022 - 1:01:02 PM
 *
 * @type {"descheduler.alpha.kubernetes.io/evict"}
 */
export declare const DESCHEDULER_EVICT_LABEL = "descheduler.alpha.kubernetes.io/evict";
/**
 * FLAVOR_LABEL
 * @date 3/14/2022 - 1:01:02 PM
 *
 * @type {"flavor.template.kubevirt.io"}
 */
export declare const FLAVOR_LABEL = "flavor.template.kubevirt.io";
/**
 * Get machine flavor (small,arge, custom, etc..)
 * @date 3/14/2022 - 1:01:02 PM
 *
 * @param {{ [key: string]: string }} labels - labels
 * @returns {string}
 */
export declare const getFlavor: (labels: {
    [key: string]: string;
}) => string;
