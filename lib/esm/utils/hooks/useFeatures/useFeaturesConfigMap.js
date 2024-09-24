var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { ConfigMapModel } from '@kubevirt-ui/kubevirt-api/console';
import { OPENSHIFT_CNV } from '@kubevirt-utils/constants/constants';
import { getGroupVersionKindForModel, useK8sWatchResource, } from '@openshift-console/dynamic-plugin-sdk';
import { useIsAdmin } from '../useIsAdmin';
import { FEATURES_CONFIG_MAP_NAME } from './constants';
var useFeaturesConfigMap = function () {
    var isAdmin = useIsAdmin();
    var featuresConfigMapData = useK8sWatchResource({
        groupVersionKind: getGroupVersionKindForModel(ConfigMapModel),
        isList: false,
        name: FEATURES_CONFIG_MAP_NAME,
        namespace: OPENSHIFT_CNV,
    });
    return { featuresConfigMapData: __spreadArray([], featuresConfigMapData, true), isAdmin: isAdmin };
};
export default useFeaturesConfigMap;
//# sourceMappingURL=useFeaturesConfigMap.js.map