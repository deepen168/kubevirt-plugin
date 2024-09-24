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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from 'react';
import { modelToGroupVersionKind, PersistentVolumeClaimModel, } from '@kubevirt-ui/kubevirt-api/console';
import { useK8sWatchResources } from '@openshift-console/dynamic-plugin-sdk';
import { getPVCNamespace } from '../utils/selectors';
var useBaseImages = function (commonTemplates) {
    var pvcWatches = React.useMemo(function () {
        var namespaces = __spreadArray([], new Set((commonTemplates || []).map(function (template) { return getPVCNamespace(template); }).filter(function (ns) { return !!ns; })), true);
        return [
            namespaces.reduce(function (acc, ns) {
                var _a;
                return (__assign(__assign({}, acc), (_a = {}, _a[ns] = {
                    groupVersionKind: modelToGroupVersionKind(PersistentVolumeClaimModel),
                    isList: true,
                    namespace: ns,
                }, _a)));
            }, {}),
        ];
    }, [commonTemplates])[0];
    var pvcs = useK8sWatchResources(pvcWatches);
    var pvcValues = Object.values(pvcs);
    var loaded = pvcValues === null || pvcValues === void 0 ? void 0 : pvcValues.every(function (value) { return value.loaded || !!value.loadError; });
    var loadError = pvcValues.find(function (value) { return value.loadError; });
    var pvcData = pvcValues.reduce(function (acc, pvc) { return acc.concat(pvc.data); }, []);
    return [pvcData, loaded, loadError];
};
export default useBaseImages;
//# sourceMappingURL=useBaseImages.js.map