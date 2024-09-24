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
import React, { useMemo, useState } from 'react';
import useDeepCompareMemoize from '@kubevirt-utils/hooks/useDeepCompareMemoize/useDeepCompareMemoize';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { SelectOption, Toolbar, ToolbarContent, ToolbarFilter, ToolbarItem, ToolbarToggleGroup, } from '@patternfly/react-core';
import { FilterIcon } from '@patternfly/react-icons';
import ColumnManagement from '../ColumnManagementModal/ColumnManagement';
import FormPFSelect from '../FormPFSelect/FormPFSelect';
import useListPageFiltersMethods from './hooks/useListPageFiltersMethods';
import { useRowFiltersParameters } from './hooks/useRowFiltersParametersType';
import { useSearchFiltersParameters } from './hooks/useSearchFiltersParameters';
import AutocompleteInput from './AutocompleteInput';
import { STATIC_SEARCH_FILTERS, STATIC_SEARCH_FILTERS_LABELS, STATIC_SEARCH_FILTERS_PLACEHOLDERS, } from './constants';
import RowFilters from './RowFilters';
import SearchFilter from './SearchFilter';
import { generateRowFilters, getFiltersData, getInitialSearchText, getInitialSearchType, getSearchTextPlaceholder, } from './utils';
var ListPageFilter = function (_a) {
    var _b;
    var columnLayout = _a.columnLayout, data = _a.data, hideColumnManagement = _a.hideColumnManagement, hideLabelFilter = _a.hideLabelFilter, hideNameLabelFilters = _a.hideNameLabelFilters, loaded = _a.loaded, nameFilterPlaceholder = _a.nameFilterPlaceholder, onFilterChange = _a.onFilterChange, rowFilters = _a.rowFilters, _c = _a.searchFilters, searchFilters = _c === void 0 ? [] : _c;
    var t = useKubevirtTranslation().t;
    var toolbarFilters = rowFilters === null || rowFilters === void 0 ? void 0 : rowFilters.filter(function (filter) { return 'items' in filter; });
    // Generate rowFilter items and counts. Memoize to minimize re-renders.
    var generatedRowFilters = useDeepCompareMemoize(generateRowFilters(toolbarFilters !== null && toolbarFilters !== void 0 ? toolbarFilters : [], data));
    // Reduce generatedRowFilters once and memoize
    var _d = useMemo(function () { return getFiltersData(generatedRowFilters); }, [generatedRowFilters]), filters = _d[0], filtersNameMap = _d[1], filterKeys = _d[2];
    var _e = useRowFiltersParameters({
        filterKeys: filterKeys,
        filters: filters,
    }), selectedRowFilters = _e[0], onRowFilterSearchParamChange = _e[1];
    var textFilters = useSearchFiltersParameters(searchFilters);
    var filterDropdownItems = __assign(__assign(__assign({}, searchFilters.reduce(function (acc, filter) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[filter.type] = filter.filterGroupName, _a)));
    }, {})), (!hideLabelFilter && !hideNameLabelFilters ? { labels: t('Label') } : {})), (!hideNameLabelFilters ? { name: t('Name') } : {}));
    var _f = useState(getInitialSearchType(searchFilters, textFilters, filterDropdownItems)), searchType = _f[0], setSearchType = _f[1];
    var _g = useState(getInitialSearchText(textFilters, searchType)), searchInputText = _g[0], setSearchInputText = _g[1];
    var onSelect = function (_, value) {
        setSearchInputText(getInitialSearchText(textFilters, value));
        setSearchType(value);
    };
    var applyFilters = function (type, input) { return onFilterChange === null || onFilterChange === void 0 ? void 0 : onFilterChange(type, input); };
    var _h = useListPageFiltersMethods({
        applyFilters: applyFilters,
        generatedRowFilters: generatedRowFilters,
        onRowFilterSearchParamChange: onRowFilterSearchParamChange,
        searchFilters: searchFilters,
        selectedRowFilters: selectedRowFilters,
        setSearchInputText: setSearchInputText,
    }), applyTextFilters = _h.applyTextFilters, applyTextFiltersWithDebounce = _h.applyTextFiltersWithDebounce, clearAll = _h.clearAll, updateRowFilterSelected = _h.updateRowFilterSelected;
    if (!loaded)
        return null;
    var selectedSearchFilter = searchFilters === null || searchFilters === void 0 ? void 0 : searchFilters.find(function (f) { return f.type === searchType; });
    var filterDropdownKeys = Object.keys(filterDropdownItems);
    return (React.createElement(Toolbar, { className: "co-toolbar-no-padding pf-m-toggle-group-container", clearAllFilters: clearAll, clearFiltersButtonText: t('Clear all filters'), "data-test": "filter-toolbar", id: "filter-toolbar" },
        React.createElement(ToolbarContent, null,
            React.createElement(ToolbarToggleGroup, { breakpoint: "md", toggleIcon: React.createElement(FilterIcon, null) },
                React.createElement(RowFilters, { filters: filters, filtersNameMap: filtersNameMap, generatedRowFilters: generatedRowFilters, rowFilters: toolbarFilters, selectedRowFilters: selectedRowFilters, updateRowFilterSelected: updateRowFilterSelected }),
                filterDropdownKeys.length !== 0 && (React.createElement(ToolbarItem, { className: "co-filter-search--full-width" },
                    React.createElement(ToolbarFilter, { deleteChip: function (category, chip) {
                            var _a;
                            var newLabels = (_a = textFilters === null || textFilters === void 0 ? void 0 : textFilters.labels) === null || _a === void 0 ? void 0 : _a.filter(function (label) { return label !== chip; });
                            applyTextFilters(STATIC_SEARCH_FILTERS.labels, newLabels.join(','));
                        }, deleteChipGroup: function () {
                            applyTextFilters(STATIC_SEARCH_FILTERS.labels);
                        }, categoryName: STATIC_SEARCH_FILTERS_LABELS.labels, chips: (_b = textFilters.labels) !== null && _b !== void 0 ? _b : [] },
                        searchFilters.map(function (filter) { return (React.createElement(ToolbarFilter, { deleteChip: function () {
                                applyTextFilters(filter.type);
                                searchType === filter.type && setSearchInputText('');
                            }, categoryName: filter.filterGroupName, chips: textFilters[filter.type] ? [textFilters[filter.type]] : [], key: filter.type },
                            React.createElement(React.Fragment, null))); }),
                        React.createElement(ToolbarFilter, { deleteChip: function () {
                                applyTextFilters('name');
                                searchType === STATIC_SEARCH_FILTERS.name && setSearchInputText('');
                            }, categoryName: t('Name'), chips: textFilters.name ? [textFilters.name] : [] },
                            React.createElement("div", { className: "pf-c-input-group co-filter-group" },
                                filterDropdownKeys.length > 1 && (React.createElement(FormPFSelect, { onSelect: onSelect, selected: searchType, selectedLabel: filterDropdownItems === null || filterDropdownItems === void 0 ? void 0 : filterDropdownItems[searchType] }, filterDropdownKeys.map(function (key) { return (React.createElement(SelectOption, { key: key, value: key }, filterDropdownItems === null || filterDropdownItems === void 0 ? void 0 : filterDropdownItems[key])); }))),
                                searchType === STATIC_SEARCH_FILTERS.labels ? (React.createElement(AutocompleteInput, { onSuggestionSelect: function (selected) {
                                        var newLabels = new Set(__spreadArray(__spreadArray([], textFilters.labels, true), [selected], false));
                                        applyTextFilters(STATIC_SEARCH_FILTERS.labels, Array.from(newLabels).join(','));
                                        setSearchInputText('');
                                    }, className: "co-text-node", data: data, placeholder: STATIC_SEARCH_FILTERS_PLACEHOLDERS.labels, setTextValue: setSearchInputText, textValue: searchInputText })) : (React.createElement(SearchFilter, { onChange: function (_, newSearchInput) {
                                        setSearchInputText(newSearchInput);
                                        applyTextFiltersWithDebounce(searchType, newSearchInput);
                                    }, placeholder: getSearchTextPlaceholder(searchType, selectedSearchFilter, nameFilterPlaceholder), "data-test": "".concat(searchType, "-filter-input"), value: searchInputText || '' })))))))),
            React.createElement(ColumnManagement, { columnLayout: columnLayout, hideColumnManagement: hideColumnManagement }))));
};
export default ListPageFilter;
//# sourceMappingURL=ListPageFilter.js.map