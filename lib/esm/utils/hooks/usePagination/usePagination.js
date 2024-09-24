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
import { useState } from 'react';
import { paginationInitialState } from './utils/constants';
var usePagination = function () {
    var _a = useState(paginationInitialState), pagination = _a[0], setPagination = _a[1];
    var onPaginationChange = function (newPagination) {
        setPagination(function (currentPagination) { return (__assign(__assign({}, currentPagination), newPagination)); });
    };
    return { onPaginationChange: onPaginationChange, pagination: pagination };
};
export default usePagination;
//# sourceMappingURL=usePagination.js.map