import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom-v5-compat';
import { useQueryParamsMethods } from './useQueryParamsMethods';
export var useRowFiltersParameters = function (_a) {
    var filterKeys = _a.filterKeys, filters = _a.filters;
    var location = useLocation();
    var setOrRemoveQueryArgument = useQueryParamsMethods().setOrRemoveQueryArgument;
    var queryParams = useMemo(function () { return new URLSearchParams(location.search); }, [location]);
    var selectedRowFilters = useMemo(function () {
        return Object.values(filterKeys || {})
            .map(function (values) { var _a, _b; return (_b = (_a = queryParams.get(values)) === null || _a === void 0 ? void 0 : _a.split(',')) !== null && _b !== void 0 ? _b : []; })
            .flat();
    }, [queryParams, filterKeys]);
    var syncRowFilterParams = useCallback(function (selected) {
        Object.entries(filters || {}).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            var recognized = selected.filter(function (item) { return value.includes(item); });
            setOrRemoveQueryArgument(filterKeys[key], recognized.join(','));
        });
    }, [filters, setOrRemoveQueryArgument, filterKeys]);
    return [selectedRowFilters, syncRowFilterParams];
};
//# sourceMappingURL=useRowFiltersParametersType.js.map