import React, { useState } from 'react';
import DropdownToggle from '@kubevirt-utils/components/toggles/DropdownToggle';
import KebabToggle from '@kubevirt-utils/components/toggles/KebabToggle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getContentScrollableElement } from '@kubevirt-utils/utils/utils';
import { Divider, Dropdown, DropdownGroup, DropdownItem, DropdownList, } from '@patternfly/react-core';
import { useDataSourceActionsProvider } from '../hooks/useDataSourceActions';
import './DataSourceActions.scss';
var DataSourceActions = function (_a) {
    var dataSource = _a.dataSource, isKebabToggle = _a.isKebabToggle;
    var t = useKubevirtTranslation().t;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useDataSourceActionsProvider(dataSource), actions = _c[0], onLazyOpen = _c[1];
    var dsActions = actions.filter(function (a) { return a.id !== 'datasource-action-manage-source'; });
    var manageAction = actions.find(function (a) { return a.id === 'datasource-action-manage-source'; });
    var onToggle = function () {
        setIsOpen(function (prevIsOpen) {
            if (!prevIsOpen)
                onLazyOpen();
            return !prevIsOpen;
        });
    };
    var Toggle = isKebabToggle
        ? KebabToggle({ isExpanded: isOpen, onClick: onToggle })
        : DropdownToggle({ children: t('Actions'), isExpanded: isOpen, onClick: onToggle });
    var handleClick = function (action) {
        if (typeof (action === null || action === void 0 ? void 0 : action.cta) === 'function') {
            action.cta();
        }
        setIsOpen(false);
    };
    return (React.createElement(Dropdown, { className: "kubevirt-data-source-actions", "data-test-id": "data-source-actions", isOpen: isOpen, onOpenChange: function (open) { return setIsOpen(open); }, popperProps: { appendTo: getContentScrollableElement, position: 'right' }, toggle: Toggle },
        React.createElement(DropdownList, null,
            React.createElement(DropdownGroup, { key: "datasource-actions", label: t('DataSource') }, dsActions === null || dsActions === void 0 ? void 0 : dsActions.map(function (action) { return (React.createElement(DropdownItem, { "data-test-id": action === null || action === void 0 ? void 0 : action.id, description: action === null || action === void 0 ? void 0 : action.description, isDisabled: action === null || action === void 0 ? void 0 : action.disabled, key: action === null || action === void 0 ? void 0 : action.id, onClick: function () { return handleClick(action); } }, action === null || action === void 0 ? void 0 : action.label)); })),
            React.createElement(Divider, { key: "divider" }),
            React.createElement(DropdownGroup, { key: "datasource-manage", label: t('DataImportCron') },
                React.createElement(DropdownItem, { "data-test-id": "datasource-manage", description: manageAction === null || manageAction === void 0 ? void 0 : manageAction.description, isDisabled: manageAction === null || manageAction === void 0 ? void 0 : manageAction.disabled, key: "datasource-manage", onClick: function () { return handleClick(manageAction); } }, manageAction === null || manageAction === void 0 ? void 0 : manageAction.label)))));
};
export default DataSourceActions;
//# sourceMappingURL=DataSourceActions.js.map