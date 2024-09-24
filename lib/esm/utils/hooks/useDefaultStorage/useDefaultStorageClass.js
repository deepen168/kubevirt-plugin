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
import { modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { StorageClassModel } from '@kubevirt-utils/models';
import { getName } from '@kubevirt-utils/resources/shared';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { isEmpty } from '../../utils/utils';
import { DEFAULT_STORAGE_CLASS_ANNOTATION, DEFAULT_VIRT_STORAGE_CLASS_ANNOTATION, } from './constants';
var useDefaultStorageClass = function () {
    var _a = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(StorageClassModel),
        isList: true,
    }), storageClasses = _a[0], loaded = _a[1];
    var defaultStorageClass = useMemo(function () {
        var defaultSC = { clusterDefaultStorageClass: null, virtDefaultStorageClass: null };
        if (!loaded || isEmpty(storageClasses))
            return defaultSC;
        return storageClasses === null || storageClasses === void 0 ? void 0 : storageClasses.reduce(function (acc, sc) {
            var _a;
            var annotations = (_a = sc === null || sc === void 0 ? void 0 : sc.metadata) === null || _a === void 0 ? void 0 : _a.annotations;
            if ((annotations === null || annotations === void 0 ? void 0 : annotations[DEFAULT_STORAGE_CLASS_ANNOTATION]) === 'true')
                acc.clusterDefaultStorageClass = sc;
            if ((annotations === null || annotations === void 0 ? void 0 : annotations[DEFAULT_VIRT_STORAGE_CLASS_ANNOTATION]) === 'true')
                acc.virtDefaultStorageClass = sc;
            return acc;
        }, defaultSC);
    }, [storageClasses, loaded]);
    var sortedStorageClasses = useMemo(function () { var _a; return (_a = storageClasses === null || storageClasses === void 0 ? void 0 : storageClasses.map(getName)) === null || _a === void 0 ? void 0 : _a.sort(); }, [storageClasses]);
    return [__assign(__assign({}, defaultStorageClass), { sortedStorageClasses: sortedStorageClasses, storageClasses: storageClasses }), loaded];
};
export default useDefaultStorageClass;
//# sourceMappingURL=useDefaultStorageClass.js.map