var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useDebounceCallback } from 'src/views/clusteroverview/utils/hooks/useDebounceCallback';
import { STATIC_SEARCH_FILTERS } from '../constants';
import { intersection } from '../utils';
import { useQueryParamsMethods } from './useQueryParamsMethods';
var useListPageFiltersMethods = function (_a) {
    var applyFilters = _a.applyFilters, generatedRowFilters = _a.generatedRowFilters, onRowFilterSearchParamChange = _a.onRowFilterSearchParamChange, searchFilters = _a.searchFilters, selectedRowFilters = _a.selectedRowFilters, setSearchInputText = _a.setSearchInputText;
    var setOrRemoveQueryArgument = useQueryParamsMethods().setOrRemoveQueryArgument;
    var applyTextFilters = function (type, value) {
        setOrRemoveQueryArgument(type, value);
        if (type === STATIC_SEARCH_FILTERS.labels) {
            applyFilters(type, { all: value ? [value] : [] });
            return;
        }
        applyFilters(type, { selected: value ? [value] : [] });
    };
    var applyTextFiltersWithDebounce = useDebounceCallback(applyTextFilters, 250);
    var applyRowFilter = function (selected) {
        var _a;
        (_a = generatedRowFilters === null || generatedRowFilters === void 0 ? void 0 : generatedRowFilters.forEach) === null || _a === void 0 ? void 0 : _a.call(generatedRowFilters, function (_a) {
            var _b, _c;
            var items = _a.items, type = _a.type;
            var all = (_c = (_b = items === null || items === void 0 ? void 0 : items.map) === null || _b === void 0 ? void 0 : _b.call(items, function (_a) {
                var id = _a.id;
                return id;
            })) !== null && _c !== void 0 ? _c : [];
            var recognized = intersection(selected, all);
            applyFilters(type, { all: all, selected: __spreadArray([], new Set(recognized), true) });
        });
    };
    var updateRowFilterSelected = function (id) {
        var selectedNew = Array.from(new Set(__spreadArray(__spreadArray([], id.filter(function (item) { return !selectedRowFilters.includes(item); }), true), selectedRowFilters.filter(function (item) { return !id.includes(item); }), true)));
        onRowFilterSearchParamChange(selectedNew);
        applyRowFilter(selectedNew);
    };
    var clearAll = function () {
        updateRowFilterSelected(selectedRowFilters);
        applyTextFilters(STATIC_SEARCH_FILTERS.name);
        applyTextFilters(STATIC_SEARCH_FILTERS.labels);
        searchFilters.forEach(function (filter) { return applyTextFilters(filter.type); });
        setSearchInputText('');
    };
    return {
        applyTextFilters: applyTextFilters,
        applyTextFiltersWithDebounce: applyTextFiltersWithDebounce,
        clearAll: clearAll,
        updateRowFilterSelected: updateRowFilterSelected,
    };
};
export default useListPageFiltersMethods;
//# sourceMappingURL=useListPageFiltersMethods.js.map