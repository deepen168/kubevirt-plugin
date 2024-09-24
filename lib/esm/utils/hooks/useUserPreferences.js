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
import { VirtualMachinePreferenceModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { ALL_NAMESPACES_SESSION_KEY } from './constants';
var useUserPreferences = function (namespace, fieldSelector, selector) {
    return useK8sWatchResource(__assign(__assign({ groupVersionKind: VirtualMachinePreferenceModelGroupVersionKind, isList: true }, (namespace !== ALL_NAMESPACES_SESSION_KEY && { namespace: namespace })), { fieldSelector: fieldSelector, selector: selector }));
};
export default useUserPreferences;
//# sourceMappingURL=useUserPreferences.js.map