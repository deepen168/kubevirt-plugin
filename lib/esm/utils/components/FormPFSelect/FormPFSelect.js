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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from 'react';
import { Select } from '@patternfly/react-core';
import SelectToggle from '../toggles/SelectToggle';
var FormPFSelect = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.closeOnSelect, closeOnSelect = _b === void 0 ? true : _b, onSelect = _a.onSelect, selected = _a.selected, selectedLabel = _a.selectedLabel, toggleProps = _a.toggleProps, props = __rest(_a, ["children", "className", "closeOnSelect", "onSelect", "selected", "selectedLabel", "toggleProps"]);
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var onToggle = function () { return setIsOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    return (React.createElement(Select, __assign({ onSelect: function (event, value) {
            onSelect && onSelect(event, value);
            closeOnSelect && setIsOpen(false);
        }, toggle: SelectToggle(__assign({ isExpanded: isOpen, onClick: onToggle, selected: selectedLabel || selected || (toggleProps === null || toggleProps === void 0 ? void 0 : toggleProps.placeholder) }, toggleProps)), className: className, isOpen: isOpen, isScrollable: true, onOpenChange: function (open) { return setIsOpen(open); }, selected: selected }, props), children));
};
export default FormPFSelect;
//# sourceMappingURL=FormPFSelect.js.map