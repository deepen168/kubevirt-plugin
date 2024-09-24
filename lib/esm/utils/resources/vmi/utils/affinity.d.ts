import { K8sIoApiCoreV1Affinity, K8sIoApiCoreV1NodeSelectorTerm, K8sIoApiCoreV1PodAffinityTerm, K8sIoApiCoreV1PreferredSchedulingTerm, K8sIoApiCoreV1WeightedPodAffinityTerm } from '@kubevirt-ui/kubevirt-api/kubevirt';
/**
 * AffinityCondition enum
 * @date 3/14/2022 - 12:57:30 PM
 *
 * @export
 * @enum {number}
 */
export declare enum AffinityCondition {
    preferred = "preferredDuringSchedulingIgnoredDuringExecution",
    required = "requiredDuringSchedulingIgnoredDuringExecution"
}
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
export declare const getAffinityRules: (affinity: K8sIoApiCoreV1Affinity) => (K8sIoApiCoreV1NodeSelectorTerm | K8sIoApiCoreV1PodAffinityTerm | K8sIoApiCoreV1PreferredSchedulingTerm | K8sIoApiCoreV1WeightedPodAffinityTerm)[];
