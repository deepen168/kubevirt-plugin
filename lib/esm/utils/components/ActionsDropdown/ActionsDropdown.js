import React, { memo, useState } from 'react';
import ActionDropdownItem from '@kubevirt-utils/components/ActionDropdownItem/ActionDropdownItem';
import DropdownToggle from '@kubevirt-utils/components/toggles/DropdownToggle';
import KebabToggle from '@kubevirt-utils/components/toggles/KebabToggle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Dropdown, DropdownList } from '@patternfly/react-core';
var ActionsDropdown = function (_a) {
    var _b = _a.actions, actions = _b === void 0 ? [] : _b, className = _a.className, id = _a.id, isKebabToggle = _a.isKebabToggle, onLazyClick = _a.onLazyClick;
    var t = useKubevirtTranslation().t;
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var onToggle = function () {
        setIsOpen(function (prevIsOpen) {
            if (onLazyClick && !prevIsOpen)
                onLazyClick();
            return !prevIsOpen;
        });
    };
    var Toggle = isKebabToggle
        ? KebabToggle({ isExpanded: isOpen, onClick: onToggle })
        : DropdownToggle({
            children: t('Actions'),
            isExpanded: isOpen,
            onClick: onToggle,
        });
    return (React.createElement(Dropdown, { className: className, "data-test-id": id, isOpen: isOpen, onOpenChange: function (open) { return setIsOpen(open); }, popperProps: { enableFlip: true, position: 'right' }, toggle: Toggle },
        React.createElement(DropdownList, null, actions === null || actions === void 0 ? void 0 : actions.map(function (action) { return (React.createElement(ActionDropdownItem, { action: action, key: action === null || action === void 0 ? void 0 : action.id, setIsOpen: setIsOpen })); }))));
};
export default memo(ActionsDropdown);
//# sourceMappingURL=ActionsDropdown.js.map