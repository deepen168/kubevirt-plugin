var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { ConfigMapModel, JobModel, modelToGroupVersionKind, } from '@kubevirt-ui/kubevirt-api/console';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { useActiveNamespace, useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { KUBEVIRT_VM_LATENCY_LABEL } from '../../utils/utils';
import { KUBEVIRT_VM_LATENCY_LABEL_VALUE } from '../utils/utils';
var useCheckupsNetworkData = function () {
    var _a, _b;
    var namespace = useActiveNamespace()[0];
    var _c = useK8sWatchResource(__assign(__assign({ groupVersionKind: modelToGroupVersionKind(ConfigMapModel), isList: true }, (namespace !== ALL_NAMESPACES_SESSION_KEY && { namespace: namespace, namespaced: true })), { selector: {
            matchLabels: (_a = {},
                _a[KUBEVIRT_VM_LATENCY_LABEL] = KUBEVIRT_VM_LATENCY_LABEL_VALUE,
                _a),
        } })), configMaps = _c[0], loadingConfigMap = _c[1], loadErrorConfigMaps = _c[2];
    var _d = useK8sWatchResource(__assign(__assign({ groupVersionKind: modelToGroupVersionKind(JobModel), isList: true }, (namespace !== ALL_NAMESPACES_SESSION_KEY && { namespace: namespace, namespaced: true })), { selector: {
            matchLabels: (_b = {},
                _b[KUBEVIRT_VM_LATENCY_LABEL] = KUBEVIRT_VM_LATENCY_LABEL_VALUE,
                _b),
        } })), jobs = _d[0], loadingJobs = _d[1], loadErrorJobs = _d[2];
    return {
        configMaps: configMaps,
        error: loadErrorConfigMaps || loadErrorJobs,
        jobs: jobs,
        loading: loadingConfigMap && loadingJobs,
    };
};
export default useCheckupsNetworkData;
//# sourceMappingURL=useCheckupsNetworkData.js.map