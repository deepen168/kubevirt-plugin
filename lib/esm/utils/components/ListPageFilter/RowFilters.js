import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Badge, Icon, SelectGroup, SelectOption, ToolbarFilter, ToolbarItem, } from '@patternfly/react-core';
import { FilterIcon } from '@patternfly/react-icons';
import FormPFSelect from '../FormPFSelect/FormPFSelect';
import { intersection } from './utils';
var RowFilters = function (_a) {
    var filters = _a.filters, filtersNameMap = _a.filtersNameMap, generatedRowFilters = _a.generatedRowFilters, rowFilters = _a.rowFilters, selectedRowFilters = _a.selectedRowFilters, updateRowFilterSelected = _a.updateRowFilterSelected;
    var t = useKubevirtTranslation().t;
    var clearAllRowFilter = function (f) {
        updateRowFilterSelected(intersection(filters[f], selectedRowFilters));
    };
    var onRowFilterSelect = function (_, filterID) {
        updateRowFilterSelected([filterID]);
    };
    if (isEmpty(rowFilters))
        return null;
    return (React.createElement(ToolbarItem, null, Object.keys(filters).reduce(function (acc, key) { return (React.createElement(ToolbarFilter, { chipGroupCollapsedText: t('{{numRemaining}} more', {
            numRemaining: '${remaining}',
        }), chips: intersection(selectedRowFilters, filters[key]).map(function (item) {
            return {
                key: item,
                node: filtersNameMap[item],
            };
        }), categoryName: key, chipGroupExpandedText: t('Show less'), deleteChip: function (filter, chip) { return updateRowFilterSelected([chip.key]); }, deleteChipGroup: function () { return clearAllRowFilter(key); }, key: key }, acc)); }, React.createElement("div", { "data-test-id": "filter-dropdown-toggle" },
        React.createElement(FormPFSelect, { toggleProps: {
                icon: (React.createElement(Icon, { className: "span--icon__right-margin" },
                    React.createElement(FilterIcon, null))),
            }, closeOnSelect: false, onSelect: onRowFilterSelect, selected: selectedRowFilters, selectedLabel: t('Filter') }, generatedRowFilters.map(function (rowFilter) {
            var _a, _b;
            return (React.createElement(SelectGroup, { key: rowFilter.filterGroupName, label: rowFilter.filterGroupName }, (_b = (_a = rowFilter.items) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.call(_a, function (item) {
                return item.hideIfEmpty && (item.count === 0 || item.count === '0') ? (React.createElement(React.Fragment, null)) : (React.createElement(SelectOption, { "data-test-row-filter": item.id, hasCheckbox: true, isSelected: selectedRowFilters === null || selectedRowFilters === void 0 ? void 0 : selectedRowFilters.includes(item.id), key: item.id, value: item.id },
                    React.createElement("span", { className: "co-filter-dropdown-item__name" }, item.title),
                    React.createElement(Badge, { isRead: true, key: item.id }, item.count)));
            })));
        }))))));
};
export default RowFilters;
//# sourceMappingURL=RowFilters.js.map