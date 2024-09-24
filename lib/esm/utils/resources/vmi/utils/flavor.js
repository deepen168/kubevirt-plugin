/**
 * DESCHEDULER_EVICT_LABEL
 * @date 3/14/2022 - 1:01:02 PM
 *
 * @type {"descheduler.alpha.kubernetes.io/evict"}
 */
export var DESCHEDULER_EVICT_LABEL = 'descheduler.alpha.kubernetes.io/evict';
/**
 * FLAVOR_LABEL
 * @date 3/14/2022 - 1:01:02 PM
 *
 * @type {"flavor.template.kubevirt.io"}
 */
export var FLAVOR_LABEL = 'flavor.template.kubevirt.io';
/**
 * Get machine flavor (small,arge, custom, etc..)
 * @date 3/14/2022 - 1:01:02 PM
 *
 * @param {{ [key: string]: string }} labels - labels
 * @returns {string}
 */
export var getFlavor = function (labels) {
    var _a, _b, _c;
    var matchedLabel = labels && ((_a = Object.keys(labels)) === null || _a === void 0 ? void 0 : _a.find(function (label) { return label === null || label === void 0 ? void 0 : label.startsWith(FLAVOR_LABEL); }));
    var flavorLabel = matchedLabel && ((_c = (_b = matchedLabel === null || matchedLabel === void 0 ? void 0 : matchedLabel.split('/')) === null || _b === void 0 ? void 0 : _b[1]) === null || _c === void 0 ? void 0 : _c.replace(/^./, function (str) { return str === null || str === void 0 ? void 0 : str.toUpperCase(); }));
    return flavorLabel || 'Custom';
};
//# sourceMappingURL=flavor.js.map