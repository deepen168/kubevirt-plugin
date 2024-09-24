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
import { useMemo } from 'react';
import { NetworkAttachmentDefinitionModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import useNADListPermissions from '@kubevirt-utils/components/NetworkInterfaceModal/components/hooks/useNADListPermissions';
import { getExtraNADResources } from '@kubevirt-utils/components/NetworkInterfaceModal/components/hooks/utils';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResources } from '@openshift-console/dynamic-plugin-sdk';
var useNADsData = function (namespace) {
    var _a;
    var nadListPermissionsMap = useNADListPermissions();
    var data = useK8sWatchResources(__assign((_a = {}, _a[namespace] = {
        groupVersionKind: NetworkAttachmentDefinitionModelGroupVersionKind,
        isList: true,
        namespace: namespace,
    }, _a), getExtraNADResources(namespace, nadListPermissionsMap)));
    var accumulatedData = useMemo(function () {
        var _a;
        return (_a = (Object.values(data) || [])) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, nads) {
            var _a;
            (_a = acc.nads).push.apply(_a, nads === null || nads === void 0 ? void 0 : nads.data);
            acc.loaded = acc.loaded && (!isEmpty(nads === null || nads === void 0 ? void 0 : nads.loadError) || (nads === null || nads === void 0 ? void 0 : nads.loaded));
            acc.loadError = isEmpty(nads === null || nads === void 0 ? void 0 : nads.loadError) ? acc.loadError : nads === null || nads === void 0 ? void 0 : nads.loadError;
            return acc;
        }, { loaded: true, loadError: null, nads: [] });
    }, [data]);
    return accumulatedData;
};
export default useNADsData;
//# sourceMappingURL=useNADsData.js.map