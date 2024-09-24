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
import { isHorizontalNavTab, useResolvedExtensions, } from '@openshift-console/dynamic-plugin-sdk';
var useDynamicPages = function (model) {
    var _a = useResolvedExtensions(isHorizontalNavTab), dynamicNavTabExtensions = _a[0], navTabExtentionsResolved = _a[1];
    return useMemo(function () {
        return navTabExtentionsResolved
            ? dynamicNavTabExtensions
                .filter(function (tab) {
                return tab.properties.model.group === model.apiGroup &&
                    tab.properties.model.version === model.apiVersion &&
                    tab.properties.model.kind === model.kind;
            })
                .map(function (tab) { return (__assign(__assign({}, tab.properties.page), { component: tab.properties.component })); })
            : [];
    }, [dynamicNavTabExtensions, model, navTabExtentionsResolved]);
};
export default useDynamicPages;
//# sourceMappingURL=useDynamicPages.js.map