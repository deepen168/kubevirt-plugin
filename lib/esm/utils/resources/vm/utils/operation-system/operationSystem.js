import { NAME_OS_TEMPLATE_ANNOTATION, OS_TEMPLATE_LABEL, VM_OS_ANNOTATION, } from '@kubevirt-utils/resources/vm';
/**
 * @date 3/16/2022 - 10:08:55 AM
 * Get a key form object that start with {keyPrefix} prefix
 * @param {LabelsOrAnnotationsMap} obj - object to search
 * @param {string} keyPrefix - prefix to search
 * @returns {*}
 */
var getPrefixedKey = function (obj, keyPrefix) {
    return obj ? Object.keys(obj).find(function (key) { return key.startsWith(keyPrefix); }) : null;
};
/**
 * @date 3/16/2022 - 10:08:55 AM
 * Get a value after '/' from a {key}
 * @param {string} key - key to search
 * @returns {*}
 */
var getSuffixValue = function (key) {
    var index = key ? key.lastIndexOf('/') : -1;
    return index > 0 ? key.substring(index + 1) : null;
};
/**
 * @date 3/16/2022 - 10:08:55 AM
 * Find in a {LabelsOrAnnotationsMap} object a key that start with {keyPrefix} prefix after '/' in label
 * @param {LabelsOrAnnotationsMap} obj - object to search
 * @param {string} keyPrefix - prefix to search
 * @returns {*}
 */
export var findKeySuffixValue = function (obj, keyPrefix) {
    return getSuffixValue(getPrefixedKey(obj, keyPrefix));
};
/**
 * @date 3/16/2022 - 10:08:55 AM
 * Find in a {LabelsOrAnnotationsMap} object a label that start with {keyPrefix}
 * @param {LabelsOrAnnotationsMap} obj - object to search
 * @param {string} keyPrefix - prefix to search
 * @returns {string}
 */
export var getValueByPrefix = function (obj, keyPrefix) {
    var objectKey = Object.keys(obj || {}).find(function (key) { return key.startsWith(keyPrefix); });
    return objectKey ? obj[objectKey] : null;
};
/**
 * @date 3/16/2022 - 10:08:55 AM
 * Get os from {obj}
 * @param {K8sResourceCommon} obj - object to search
 * @returns {string}
 */
export var getOperatingSystem = function (obj) {
    var _a, _b, _c;
    return findKeySuffixValue((_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.labels, OS_TEMPLATE_LABEL) ||
        ((_c = (_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.annotations) === null || _c === void 0 ? void 0 : _c[VM_OS_ANNOTATION]);
};
/**
 * @date 3/16/2022 - 10:08:55 AM
 * Get os name from {obj}
 * @param {K8sResourceCommon} obj - object to search
 * @returns {string}
 */
export var getOperatingSystemName = function (obj) {
    var _a;
    return getValueByPrefix((_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.annotations, "".concat(NAME_OS_TEMPLATE_ANNOTATION, "/").concat(getOperatingSystem(obj)));
};
/**
 * Windows os prefix
 * @date 4/20/2022 - 1:58:24 PM
 *
 * @type {"win"}
 */
export var OS_WINDOWS_PREFIX = 'win';
/**
 * Check if a vm/vmi is running windows
 * @date 4/20/2022 - 1:58:24 PM
 *
 * @param {K8sResourceCommon} obj - object to search
 * @returns {boolean}
 */
export var isWindows = function (obj) { var _a; return (_a = (getOperatingSystem(obj) || '')) === null || _a === void 0 ? void 0 : _a.startsWith(OS_WINDOWS_PREFIX); };
//# sourceMappingURL=operationSystem.js.map