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
import { NetworkAttachmentDefinitionModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { DEFAULT_NAMESPACE, OPENSHIFT_MULTUS_NS, OPENSHIFT_SRIOV_NETWORK_OPERATOR_NS, } from '@kubevirt-utils/constants/constants';
import { isEmpty } from '@kubevirt-utils/utils/utils';
var resources = {
    default: {
        groupVersionKind: NetworkAttachmentDefinitionModelGroupVersionKind,
        isList: true,
        namespace: DEFAULT_NAMESPACE,
    },
    OPENSHIFT_MULTUS_NS: {
        groupVersionKind: NetworkAttachmentDefinitionModelGroupVersionKind,
        isList: true,
        namespace: OPENSHIFT_MULTUS_NS,
    },
    OPENSHIFT_SRIOV_NETWORK_OPERATOR_NS: {
        groupVersionKind: NetworkAttachmentDefinitionModelGroupVersionKind,
        isList: true,
        namespace: OPENSHIFT_SRIOV_NETWORK_OPERATOR_NS,
    },
};
export var getExtraNADResources = function (namespace, nadListPermissionsMap) {
    if (isEmpty(nadListPermissionsMap))
        return {};
    return Object.entries(nadListPermissionsMap).reduce(function (newMap, _a) {
        var _b;
        var ns = _a[0], isAllowed = _a[1];
        if (isAllowed) {
            //global namespace to get usable NADs
            if (ns === DEFAULT_NAMESPACE && namespace !== DEFAULT_NAMESPACE)
                return __assign(__assign({}, newMap), { default: resources[ns] });
            else
                return __assign(__assign({}, newMap), (_b = {}, _b[ns] = resources[ns], _b));
        }
        return newMap;
    }, {});
};
//# sourceMappingURL=utils.js.map