import React, { useState } from 'react';
import KebabToggle from '@kubevirt-utils/components/toggles/KebabToggle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Dropdown, DropdownItem, DropdownList } from '@patternfly/react-core';
var AffinityRowActionsDropdown = function (_a) {
    var affinity = _a.affinity, onDelete = _a.onDelete, onEdit = _a.onEdit;
    var t = useKubevirtTranslation().t;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var onToggle = function () { return setIsOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    var handleDelete = function () {
        onDelete(affinity);
        setIsOpen(false);
    };
    return (React.createElement(Dropdown, { isOpen: isOpen, onOpenChange: function (open) { return setIsOpen(open); }, toggle: KebabToggle({ isExpanded: isOpen, onClick: onToggle }) },
        React.createElement(DropdownList, null,
            React.createElement(DropdownItem, { key: "edit", onClick: function () { return onEdit(affinity); } }, t('Edit')),
            React.createElement(DropdownItem, { key: "delete", onClick: function () { return handleDelete(); } }, t('Delete')))));
};
export default AffinityRowActionsDropdown;
//# sourceMappingURL=AffinityRowActionsDropdown.js.map