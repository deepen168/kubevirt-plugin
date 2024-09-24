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
import * as fuzzy from 'fuzzysearch';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Operator, } from '@openshift-console/dynamic-plugin-sdk';
import { STATIC_SEARCH_FILTERS, STATIC_SEARCH_FILTERS_PLACEHOLDERS } from './constants';
export var getInitialSearchType = function (customSearchFilter, textFilters, filterDropdownItems) {
    var _a, _b;
    var alreadySearchedCustomParam = (_a = customSearchFilter === null || customSearchFilter === void 0 ? void 0 : customSearchFilter.find(function (searchFilter) { return textFilters[searchFilter.type]; })) === null || _a === void 0 ? void 0 : _a.type;
    var hasNameFilter = 'name' in filterDropdownItems;
    return (alreadySearchedCustomParam ||
        (hasNameFilter ? STATIC_SEARCH_FILTERS.name : (_b = Object.keys(filterDropdownItems)) === null || _b === void 0 ? void 0 : _b[0]));
};
export var generateRowFilters = function (rowFilters, data) {
    return rowFilters.map(function (rowFilter) { return (__assign(__assign({}, rowFilter), { items: rowFilter.items.map(function (item) {
            var _a, _b;
            return (__assign(__assign({}, item), { count: rowFilter.isMatch
                    ? data.filter(function (d) { return rowFilter.isMatch(d, item.id); }).length
                    : (_b = (_a = data.reduce(function (acc, current) {
                        var currentKey = rowFilter.reducer(current);
                        acc[currentKey] ? acc[currentKey]++ : (acc[currentKey] = 1);
                        return acc;
                    }, {})) === null || _a === void 0 ? void 0 : _a[item.id]) !== null && _b !== void 0 ? _b : '0' }));
        }) })); });
};
export var fuzzyCaseInsensitive = function (a, b) {
    return fuzzy(a.toLowerCase(), b.toLowerCase());
};
export var getFiltersData = function (generatedRowFilters) {
    return generatedRowFilters.reduce(function (_a, _b) {
        var _c, _d;
        var filtersAcc = _a[0], filtersNameMapAcc = _a[1], filterKeysAcc = _a[2], defaultSelectedAcc = _a[3];
        var defaultSelected = _b.defaultSelected, filterGroupName = _b.filterGroupName, items = _b.items, type = _b.type;
        return [
            // (rowFilters) => {'rowFilterTypeA': ['staA', 'staB'], 'rowFilterTypeB': ['stbA'] }
            __assign(__assign({}, filtersAcc), (_c = {}, _c[filterGroupName] = (items !== null && items !== void 0 ? items : []).map(function (_a) {
                var id = _a.id;
                return id;
            }), _c)),
            // {id: 'a' , title: 'A'} => filterNameMap['a'] = A
            __assign(__assign({}, filtersNameMapAcc), (items !== null && items !== void 0 ? items : []).reduce(function (itemAcc, _a) {
                var _b;
                var id = _a.id, title = _a.title;
                return (__assign(__assign({}, itemAcc), (_b = {}, _b[id] = title, _b)));
            }, {})),
            __assign(__assign({}, filterKeysAcc), (_d = {}, _d[filterGroupName] = "rowFilter-".concat(type), _d)),
            // Default selections
            Array.from(new Set(__spreadArray(__spreadArray([], defaultSelectedAcc, true), (defaultSelected !== null && defaultSelected !== void 0 ? defaultSelected : []), true))),
        ];
    }, [{}, {}, {}, []]);
};
export var intersection = function (a, b) {
    var s = new Set(b);
    return a.filter(function (x) { return s.has(x); });
};
export var getLabelsAsString = function (obj) {
    var requirements = toRequirements(obj.metadata.labels);
    return Object.values(requirements).map(requirementToString);
};
export var labelParser = function (resources) {
    return resources.reduce(function (acc, resource) {
        getLabelsAsString(resource).forEach(function (label) { return acc.add(label); });
        return acc;
    }, new Set());
};
var toArray = function (value) { return (Array.isArray(value) ? value : [value]); };
export var requirementToString = function (requirement) {
    var _a;
    var requirementStrings = (_a = {},
        _a[Operator.DoesNotExist] = "!".concat(requirement.key),
        _a[Operator.Equals] = "".concat(requirement.key, "=").concat(requirement.values[0]),
        _a[Operator.Exists] = requirement.key,
        _a[Operator.GreaterThan] = "".concat(requirement.key, " > ").concat(requirement.values[0]),
        _a[Operator.In] = "".concat(requirement.key, " in (").concat(toArray(requirement.values).join(','), ")"),
        _a[Operator.LessThan] = "".concat(requirement.key, " < ").concat(requirement.values[0]),
        _a[Operator.NotEquals] = "".concat(requirement.key, "!=").concat(requirement.values[0]),
        _a[Operator.NotIn] = "".concat(requirement.key, " notin (").concat(toArray(requirement.values).join(','), ")"),
        _a);
    return requirementStrings[requirement.operator] || '';
};
export var createEquals = function (key, value) { return ({
    key: key,
    operator: Operator.Equals,
    values: [value],
}); };
var isOldFormat = function (selector) { return !selector.matchLabels && !selector.matchExpressions; };
export var toRequirements = function (selector) {
    if (selector === void 0) { selector = {}; }
    var matchLabels = isOldFormat(selector) ? selector : selector.matchLabels;
    var matchExpressions = selector.matchExpressions;
    var requirements = Object.keys(matchLabels || {})
        .sort()
        .map(function (match) { return createEquals(match, matchLabels[match]); });
    requirements.push.apply(requirements, (matchExpressions || []));
    return requirements;
};
export var getInitialSearchText = function (searchText, searchFilterType) { return (searchFilterType !== STATIC_SEARCH_FILTERS.labels ? searchText[searchFilterType] : ''); };
export var getSearchTextPlaceholder = function (searchType, selectedSearchFilter, nameFilterPlaceholder) {
    if (searchType === STATIC_SEARCH_FILTERS.name)
        return nameFilterPlaceholder || STATIC_SEARCH_FILTERS_PLACEHOLDERS.name;
    return (STATIC_SEARCH_FILTERS_PLACEHOLDERS[searchType] ||
        t('Search by {{filterName}}...', {
            filterName: selectedSearchFilter === null || selectedSearchFilter === void 0 ? void 0 : selectedSearchFilter.filterGroupName,
        }));
};
//# sourceMappingURL=utils.js.map