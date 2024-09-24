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
import React, { forwardRef, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { TextInput } from '@patternfly/react-core';
var SearchFilter = forwardRef(function (props, ref) {
    var className = props.className, placeholder = props.placeholder, otherInputProps = __rest(props, ["className", "placeholder"]);
    var defaultRef = useRef();
    var inputRef = ref || defaultRef;
    useEffect(function () {
        if (!inputRef || !('current' in inputRef) || !inputRef.current)
            return;
        var onKeyDown = function (event) {
            if (event.key === '/' && inputRef.current !== document.activeElement) {
                inputRef.current.focus();
                event.preventDefault();
            }
        };
        inputRef.current.addEventListener('keydown', onKeyDown);
        return function () {
            inputRef.current.removeEventListener('keydown', onKeyDown);
        };
    }, [inputRef]);
    return (React.createElement("div", { className: "has-feedback" },
        React.createElement(TextInput, __assign({}, otherInputProps, { "aria-label": placeholder, className: classNames('co-text-filter', className), "data-test-id": "item-filter", placeholder: placeholder, ref: inputRef, tabIndex: 0, type: "text" })),
        React.createElement("span", { className: "co-text-filter-feedback" },
            React.createElement("kbd", { className: "co-kbd co-kbd__filter-input" }, "/"))));
});
export default SearchFilter;
//# sourceMappingURL=SearchFilter.js.map