import HyperConvergedModel from '@kubevirt-ui/kubevirt-api/console/models/HyperConvergedModel';
import { K8S_OPS } from '@kubevirt-utils/constants/constants';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import { AUTO_RESOURCE_LIMITS_FEATURE_GATE } from './constants';
export var updateAutoResourceLimitsFeatureGate = function (hcoCR, switchState) {
    var _a;
    var _b;
    return k8sPatch({
        data: [
            {
                op: ((_b = hcoCR === null || hcoCR === void 0 ? void 0 : hcoCR.spec) === null || _b === void 0 ? void 0 : _b.featureGates) ? K8S_OPS.ADD : K8S_OPS.REPLACE,
                path: '/spec/featureGates',
                value: (_a = {}, _a[AUTO_RESOURCE_LIMITS_FEATURE_GATE] = switchState, _a),
            },
        ],
        model: HyperConvergedModel,
        resource: hcoCR,
    });
};
//# sourceMappingURL=utils.js.map