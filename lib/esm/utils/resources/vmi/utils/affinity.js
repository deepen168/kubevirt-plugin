var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * AffinityCondition enum
 * @date 3/14/2022 - 12:57:30 PM
 *
 * @export
 * @enum {number}
 */
export var AffinityCondition;
(function (AffinityCondition) {
    AffinityCondition["preferred"] = "preferredDuringSchedulingIgnoredDuringExecution";
    AffinityCondition["required"] = "requiredDuringSchedulingIgnoredDuringExecution";
})(AffinityCondition || (AffinityCondition = {}));
/**
 * Get node affinity (requiredDuringSchedulingIgnoredDuringExecution, preferredDuringSchedulingIgnoredDuringExecution)
 * @date 3/14/2022 - 12:57:30 PM
 *
 * @param {K8sIoApiCoreV1NodeAffinity} nodeAffinity - node affinity
 * @returns {((K8sIoApiCoreV1PreferredSchedulingTerm | K8sIoApiCoreV1NodeSelectorTerm)[])}
 */
var getNodeAffinity = function (nodeAffinity) {
    var _a;
    return __spreadArray(__spreadArray([], ((nodeAffinity === null || nodeAffinity === void 0 ? void 0 : nodeAffinity[AffinityCondition.preferred]) || []), true), (((_a = nodeAffinity === null || nodeAffinity === void 0 ? void 0 : nodeAffinity[AffinityCondition.required]) === null || _a === void 0 ? void 0 : _a.nodeSelectorTerms) || []), true);
};
/**
 * Get pod affinity (requiredDuringSchedulingIgnoredDuringExecution, preferredDuringSchedulingIgnoredDuringExecution)
 * @date 3/14/2022 - 12:57:30 PM
 *
 * @param {(K8sIoApiCoreV1PodAffinity | K8sIoApiCoreV1PodAntiAffinity)} podAffinity - pod affinity
 * @returns {((K8sIoApiCoreV1WeightedPodAffinityTerm | K8sIoApiCoreV1PodAffinityTerm)[])}
 */
var getPodAffinity = function (podAffinity) {
    return __spreadArray(__spreadArray([], ((podAffinity === null || podAffinity === void 0 ? void 0 : podAffinity[AffinityCondition.preferred]) || []), true), ((podAffinity === null || podAffinity === void 0 ? void 0 : podAffinity[AffinityCondition.required]) || []), true);
};
/**
 * Get affinity rules
 * @date 3/14/2022 - 12:57:30 PM
 *
 * @param {K8sIoApiCoreV1Affinity} affinity - affinity
 * @returns {((
  | K8sIoApiCoreV1PreferredSchedulingTerm
  | K8sIoApiCoreV1NodeSelectorTerm
  | K8sIoApiCoreV1WeightedPodAffinityTerm
  | K8sIoApiCoreV1PodAffinityTerm
)[])}
 */
export var getAffinityRules = function (affinity) {
    var nodeAffinity = getNodeAffinity(affinity === null || affinity === void 0 ? void 0 : affinity.nodeAffinity);
    var podAffinity = getPodAffinity(affinity === null || affinity === void 0 ? void 0 : affinity.podAffinity);
    var podAntiAffinity = getPodAffinity(affinity === null || affinity === void 0 ? void 0 : affinity.podAntiAffinity);
    return __spreadArray(__spreadArray(__spreadArray([], nodeAffinity, true), podAffinity, true), podAntiAffinity, true);
};
//# sourceMappingURL=affinity.js.map