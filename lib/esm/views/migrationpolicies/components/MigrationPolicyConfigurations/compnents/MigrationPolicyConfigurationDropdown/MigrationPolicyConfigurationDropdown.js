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
import React, { useState } from 'react';
import DropdownToggle from '@kubevirt-utils/components/toggles/DropdownToggle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Dropdown, DropdownItem, DropdownList } from '@patternfly/react-core';
var MigrationPolicyConfigurationDropdown = function (_a) {
    var isDisabled = _a.isDisabled, options = _a.options, setState = _a.setState, state = _a.state;
    var t = useKubevirtTranslation().t;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var handleOptionClick = function (key, defaultValue) {
        setState(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[key] = defaultValue, _a)));
        });
        setIsOpen(false);
    };
    var onToggle = function () { return setIsOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    return (React.createElement(Dropdown, { toggle: DropdownToggle({
            children: t('Add configuration'),
            isDisabled: isDisabled,
            isExpanded: isOpen,
            onClick: onToggle,
        }), className: "migration-policy__form-config-dropdown", "data-test-id": "migration-policies-configurations", isOpen: isOpen, onOpenChange: function (open) { return setIsOpen(open); } },
        React.createElement(DropdownList, null, Object.entries(options).map(function (_a) {
            var key = _a[0], _b = _a[1], defaultValue = _b.defaultValue, description = _b.description, label = _b.label;
            return (React.createElement(DropdownItem, { "data-test-id": key, description: description, isDisabled: key in state, key: key, onClick: function () { return handleOptionClick(key, defaultValue); } }, label));
        }))));
};
export default MigrationPolicyConfigurationDropdown;
//# sourceMappingURL=MigrationPolicyConfigurationDropdown.js.map