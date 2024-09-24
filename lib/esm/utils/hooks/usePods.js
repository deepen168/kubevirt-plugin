import { modelToGroupVersionKind, PodModel } from '@kubevirt-ui/kubevirt-api/console';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
/**
 * Get namespace pods
 * @date 3/20/2022 - 8:59:40 AM
 *
 * @param {string} namespace - namespace
 * @returns {[K8sResourceCommon[], boolean, any]}
 */
export var usePods = function (namespace) {
    var _a = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(PodModel),
        isList: true,
        namespace: namespace,
    }), pods = _a[0], podsLoaded = _a[1], podsError = _a[2];
    return [pods, podsLoaded, podsError];
};
//# sourceMappingURL=usePods.js.map