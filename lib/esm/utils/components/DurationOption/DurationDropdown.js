var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState } from 'react';
import DurationOption from '@kubevirt-utils/components/DurationOption/DurationOption';
import { Select, SelectOption } from '@patternfly/react-core';
import SelectToggle from '../toggles/SelectToggle';
var DurationDropdown = function (_a) {
    var _b;
    var selectedDuration = _a.selectedDuration, selectHandler = _a.selectHandler;
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var onSelect = function (_, durationOption) {
        selectHandler(durationOption);
        setIsOpen(false);
    };
    var onToggle = function () { return setIsOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    var selected = (_b = DurationOption.fromString(selectedDuration)) === null || _b === void 0 ? void 0 : _b.getDropdownLabel();
    return (React.createElement(Select, { "data-test-id": "duration-select-dropdown", isOpen: isOpen, onSelect: onSelect, selected: selected, toggle: SelectToggle({ isExpanded: isOpen, onClick: onToggle, selected: selected }) }, __spreadArray([], DurationOption.getAll(), true).sort(function (a, b) {
        return DurationOption.getMilliseconds(a.getValue()) <
            DurationOption.getMilliseconds(b.getValue())
            ? -1
            : 1;
    })
        .map(function (durationOption) {
        var dropdownLabel = (durationOption === null || durationOption === void 0 ? void 0 : durationOption.getDropdownLabel()) || '';
        var durationValue = (durationOption === null || durationOption === void 0 ? void 0 : durationOption.getValue()) || '';
        return (React.createElement(SelectOption, { "data-test-id": durationValue, key: durationValue, value: dropdownLabel }, dropdownLabel));
    })));
};
export default DurationDropdown;
//# sourceMappingURL=DurationDropdown.js.map