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
import { useLocation } from 'react-router-dom-v5-compat';
export var useSearchFiltersParameters = function (searchFilters) {
    var location = useLocation();
    var queryParams = useMemo(function () { return new URLSearchParams(location.search); }, [location]);
    var nameTextFilter = useMemo(function () { return queryParams.get('name'); }, [queryParams]);
    var labelTextFilters = useMemo(function () { var _a, _b; return (_b = (_a = queryParams.get('labels')) === null || _a === void 0 ? void 0 : _a.split(',')) !== null && _b !== void 0 ? _b : []; }, [queryParams]);
    var searchTextFilters = useMemo(function () {
        var filters = searchFilters === null || searchFilters === void 0 ? void 0 : searchFilters.reduce(function (acc, filter) {
            var type = filter.type;
            var filterValue = queryParams.get(type);
            if (filterValue)
                acc[type] = filterValue;
            return acc;
        }, {});
        return filters;
    }, [queryParams, searchFilters]);
    return useMemo(function () {
        return (__assign({ labels: labelTextFilters, name: nameTextFilter }, searchTextFilters));
    }, [labelTextFilters, nameTextFilter, searchTextFilters]);
};
//# sourceMappingURL=useSearchFiltersParameters.js.map