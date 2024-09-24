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
import React, { useMemo, useState } from 'react';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Divider, MenuSearch, MenuSearchInput, SearchInput, Select, SelectList, } from '@patternfly/react-core';
import SelectToggle from '../toggles/SelectToggle';
import InlineFilterSelectOptionContent from './components/InlineFilterSelectOptionContent';
import InlineFilterSelectOptions from './components/InlineFilterSelectOptions';
import { NO_RESULTS } from './utils/constants';
import { getGroupedOptions } from './utils/utils';
var InlineFilterSelect = function (_a) {
    var className = _a.className, menuFooter = _a.menuFooter, _b = _a.options, options = _b === void 0 ? [] : _b, popperProps = _a.popperProps, selected = _a.selected, setSelected = _a.setSelected, toggleProps = _a.toggleProps;
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = useState(''), filterValue = _d[0], setFilterValue = _d[1];
    var _e = useState(null), focusedItemIndex = _e[0], setFocusedItemIndex = _e[1];
    var onToggle = function () { return setIsOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    var onSelect = function (_event, value) {
        if (value && value !== NO_RESULTS) {
            setFilterValue('');
        }
        setIsOpen(false);
        setFocusedItemIndex(null);
        setSelected(value);
    };
    var selectedComponent = useMemo(function () {
        if (isEmpty(selected))
            return toggleProps === null || toggleProps === void 0 ? void 0 : toggleProps.placeholder;
        var selectOption = options === null || options === void 0 ? void 0 : options.find(function (opt) { return (opt === null || opt === void 0 ? void 0 : opt.value) === selected; });
        return React.createElement(InlineFilterSelectOptionContent, { option: selectOption });
    }, [selected, toggleProps === null || toggleProps === void 0 ? void 0 : toggleProps.placeholder, options]);
    var filterOptions = useMemo(function () {
        return options.filter(function (option) { return option.value.toLowerCase().includes(filterValue.toLowerCase()); });
    }, [options, filterValue]);
    var groupedOptions = useMemo(function () { return getGroupedOptions(filterOptions, options); }, [filterOptions, options]);
    var toggle = SelectToggle(__assign({ isExpanded: isOpen, onClick: onToggle, selected: selectedComponent }, toggleProps));
    return (React.createElement(Select, { className: className, id: "select-inline-filter", isOpen: isOpen, isScrollable: true, onOpenChange: function (open) { return setIsOpen(open); }, onSelect: onSelect, popperProps: popperProps, selected: selected, toggle: toggle },
        React.createElement(MenuSearch, null,
            React.createElement(MenuSearchInput, null,
                React.createElement(SearchInput, { onChange: function (_, newFilterValue) {
                        if (filterValue !== newFilterValue) {
                            setFilterValue(newFilterValue);
                        }
                        setFocusedItemIndex(null);
                    }, onClear: function (e) {
                        e.stopPropagation();
                        setFilterValue('');
                    }, placeholder: toggleProps === null || toggleProps === void 0 ? void 0 : toggleProps.placeholder, value: filterValue }))),
        React.createElement(Divider, null),
        React.createElement(SelectList, { id: "select-inline-filter-listbox" },
            React.createElement(InlineFilterSelectOptions, { filterOptions: filterOptions, filterValue: filterValue, focusedItemIndex: focusedItemIndex, groupedOptions: groupedOptions })),
        menuFooter && menuFooter));
};
export default InlineFilterSelect;
//# sourceMappingURL=InlineFilterSelect.js.map