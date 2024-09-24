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
import { useEffect, useState } from 'react';
import { useURLParams } from '@kubevirt-utils/hooks/useURLParams';
import { CATALOG_FILTERS } from '../utils/consts';
export var useTemplatesFilters = function () {
    var _a;
    var _b = useURLParams(), appendParam = _b.appendParam, deleteParam = _b.deleteParam, params = _b.params, setParam = _b.setParam;
    var onlyDefaultParam = params.get(CATALOG_FILTERS.ONLY_DEFAULT);
    var hasNoDefaultUserAllParams = !!params.get(CATALOG_FILTERS.ONLY_DEFAULT) &&
        !!params.get(CATALOG_FILTERS.ONLY_USER) &&
        !!params.get(CATALOG_FILTERS.ALL_ITEMS); // has none of these params when accessing catalog for the first time
    var _c = useState((_a = {},
        _a[CATALOG_FILTERS.ALL_ITEMS] = params.get(CATALOG_FILTERS.ONLY_DEFAULT) === 'false',
        _a[CATALOG_FILTERS.HIDE_DEPRECATED_TEMPLATES] = params.get(CATALOG_FILTERS.HIDE_DEPRECATED_TEMPLATES) === 'true',
        _a[CATALOG_FILTERS.IS_LIST] = params.get(CATALOG_FILTERS.IS_LIST) === 'true',
        _a[CATALOG_FILTERS.NAMESPACE] = params.get(CATALOG_FILTERS.NAMESPACE) || '',
        _a[CATALOG_FILTERS.ONLY_AVAILABLE] = params.get(CATALOG_FILTERS.ONLY_AVAILABLE) === 'true',
        _a[CATALOG_FILTERS.ONLY_DEFAULT] = !!params.get(CATALOG_FILTERS.ONLY_DEFAULT) || hasNoDefaultUserAllParams,
        _a[CATALOG_FILTERS.ONLY_USER] = !!params.get(CATALOG_FILTERS.ONLY_USER),
        _a[CATALOG_FILTERS.OS_NAME] = new Set(__spreadArray([], params.getAll(CATALOG_FILTERS.OS_NAME), true)),
        _a[CATALOG_FILTERS.QUERY] = params.get(CATALOG_FILTERS.QUERY) || '',
        _a[CATALOG_FILTERS.WORKLOAD] = new Set(__spreadArray([], params.getAll(CATALOG_FILTERS.WORKLOAD), true)),
        _a)), filters = _c[0], setFilters = _c[1];
    var updateFilter = function (type, value) {
        return setFilters(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[type] = value, _a)));
        });
    };
    var updateFilterAndSetParam = function (type, value) {
        updateFilter(type, value);
        setParam(type, value.toString());
    };
    var onFilterChange = function (type, value) {
        var _a;
        switch (type) {
            case CATALOG_FILTERS.ALL_ITEMS:
                {
                    updateFilter(type, value);
                    setParam(CATALOG_FILTERS.ONLY_DEFAULT, 'false');
                    updateFilter(CATALOG_FILTERS.ONLY_USER, false);
                    updateFilter(CATALOG_FILTERS.ONLY_DEFAULT, false);
                    deleteParam(CATALOG_FILTERS.ONLY_USER);
                }
                break;
            case CATALOG_FILTERS.ONLY_DEFAULT:
                {
                    updateFilterAndSetParam(type, value);
                    updateFilter(CATALOG_FILTERS.ALL_ITEMS, false);
                    updateFilter(CATALOG_FILTERS.ONLY_USER, false);
                    deleteParam(CATALOG_FILTERS.ONLY_USER);
                }
                break;
            case CATALOG_FILTERS.HIDE_DEPRECATED_TEMPLATES:
            case CATALOG_FILTERS.ONLY_AVAILABLE:
            case CATALOG_FILTERS.IS_LIST:
            case CATALOG_FILTERS.NAMESPACE:
            case CATALOG_FILTERS.QUERY:
                updateFilterAndSetParam(type, value);
                break;
            case CATALOG_FILTERS.ONLY_USER:
                {
                    updateFilterAndSetParam(type, value);
                    updateFilter(CATALOG_FILTERS.ALL_ITEMS, false);
                    updateFilter(CATALOG_FILTERS.ONLY_DEFAULT, false);
                    deleteParam(CATALOG_FILTERS.ONLY_DEFAULT);
                }
                break;
            default: {
                var filterSet = new Set(filters === null || filters === void 0 ? void 0 : filters[type]);
                if (filterSet.has(value)) {
                    filterSet.delete(value);
                    deleteParam(type, value);
                }
                else {
                    filterSet.add(value);
                    appendParam(type, value);
                }
                setFilters(__assign(__assign({}, filters), (_a = {}, _a[type] = filterSet, _a)));
            }
        }
    };
    var clearAll = function () {
        var _a;
        setFilters((_a = {},
            _a[CATALOG_FILTERS.ALL_ITEMS] = false,
            _a[CATALOG_FILTERS.HIDE_DEPRECATED_TEMPLATES] = true,
            _a[CATALOG_FILTERS.IS_LIST] = filters.isList,
            _a[CATALOG_FILTERS.NAMESPACE] = '',
            _a[CATALOG_FILTERS.ONLY_AVAILABLE] = false,
            _a[CATALOG_FILTERS.ONLY_DEFAULT] = true,
            _a[CATALOG_FILTERS.ONLY_USER] = false,
            _a[CATALOG_FILTERS.OS_NAME] = new Set(),
            _a[CATALOG_FILTERS.QUERY] = '',
            _a[CATALOG_FILTERS.WORKLOAD] = new Set(),
            _a));
        Object.keys(filters).forEach(function (key) {
            deleteParam(key);
        });
    };
    useEffect(function () {
        onlyDefaultParam && updateFilter(CATALOG_FILTERS.ONLY_DEFAULT, onlyDefaultParam === 'true');
    }, [hasNoDefaultUserAllParams, onlyDefaultParam]);
    return [filters, onFilterChange, clearAll];
};
//# sourceMappingURL=useVmTemplatesFilters.js.map