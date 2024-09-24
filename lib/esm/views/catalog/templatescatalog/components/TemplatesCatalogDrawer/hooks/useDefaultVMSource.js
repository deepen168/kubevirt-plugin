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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { useCallback, useRef } from 'react';
import { isEqualObject } from '@kubevirt-utils/components/NodeSelectorModal/utils/helpers';
import { ROOTDISK } from '@kubevirt-utils/constants/constants';
import { getDiskSource } from '../StorageSection/utils';
var useDefaultVMSource = function (vm) {
    var defaultDiskSource = useRef();
    var currentDiskSource = getDiskSource(vm, ROOTDISK);
    var updateDefaultDiskSource = useCallback(function (generatedVM) {
        var source = getDiskSource(generatedVM, ROOTDISK);
        defaultDiskSource.current = source;
    }, []);
    var _a = __assign({}, defaultDiskSource.current), _ = _a.storage, restDefaultSpec = __rest(_a, ["storage"]);
    var _b = __assign({}, currentDiskSource), __ = _b.storage, restCurrentSpec = __rest(_b, ["storage"]);
    return {
        currentDiskSource: currentDiskSource,
        isDefaultDiskSource: isEqualObject(restDefaultSpec, restCurrentSpec),
        updateDefaultDiskSource: updateDefaultDiskSource,
    };
};
export default useDefaultVMSource;
//# sourceMappingURL=useDefaultVMSource.js.map