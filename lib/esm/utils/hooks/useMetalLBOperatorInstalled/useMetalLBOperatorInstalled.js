import { DeploymentModel, modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { LOAD_BALANCER_ENABLED } from '../useFeatures/constants';
import { useFeatures } from '../useFeatures/useFeatures';
import { METAL_LB_DEPLOYMENT_NAME, METAL_LB_DEPLOYMENT_NAMESPACE } from './constants';
export var useMetalLBOperatorInstalled = function () {
    var _a = useFeatures(LOAD_BALANCER_ENABLED), featureEnabled = _a.featureEnabled, loading = _a.loading, toggleFeature = _a.toggleFeature;
    var metalLBDeployment = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(DeploymentModel),
        isList: false,
        name: METAL_LB_DEPLOYMENT_NAME,
        namespace: METAL_LB_DEPLOYMENT_NAMESPACE,
    })[0];
    var metalLBOperatorInstalled = !isEmpty(metalLBDeployment);
    if (!featureEnabled && !loading && metalLBOperatorInstalled)
        toggleFeature(true);
    return metalLBOperatorInstalled;
};
//# sourceMappingURL=useMetalLBOperatorInstalled.js.map