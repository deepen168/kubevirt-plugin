import { modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { getInstanceTypeModelFromMatcher } from '@kubevirt-utils/resources/instancetype/helper';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var useInstanceType = function (instanceTypeMatcher) {
    var _a = useK8sWatchResource(!isEmpty(instanceTypeMatcher) && {
        groupVersionKind: modelToGroupVersionKind(getInstanceTypeModelFromMatcher(instanceTypeMatcher)),
        name: instanceTypeMatcher.name,
    }), instanceType = _a[0], instanceTypeLoaded = _a[1], instanceTypeLoadError = _a[2];
    return {
        instanceType: instanceType,
        instanceTypeLoaded: instanceTypeLoaded,
        instanceTypeLoadError: instanceTypeLoadError,
    };
};
export default useInstanceType;
//# sourceMappingURL=useInstanceType.js.map