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
import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Button, ToolbarGroup, ToolbarItem, Tooltip } from '@patternfly/react-core';
import { ColumnsIcon } from '@patternfly/react-icons';
import { ColumnManagementModal } from '../ColumnManagementModal/ColumnManagementModal';
import { useModal } from '../ModalProvider/ModalProvider';
var ColumnManagement = function (_a) {
    var columnLayout = _a.columnLayout, hideColumnManagement = _a.hideColumnManagement;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    if (isEmpty(columnLayout) || !(columnLayout === null || columnLayout === void 0 ? void 0 : columnLayout.id) || hideColumnManagement) {
        return null;
    }
    return (React.createElement(ToolbarGroup, null,
        React.createElement(ToolbarItem, null,
            React.createElement(Tooltip, { content: t('Manage columns'), trigger: "mouseenter" },
                React.createElement(Button, { onClick: function () {
                        return createModal(function (props) { return (React.createElement(ColumnManagementModal, __assign({}, props, { columnLayout: columnLayout }))); });
                    }, "aria-label": t('Column management'), "data-test": "manage-columns", variant: "plain" },
                    React.createElement(ColumnsIcon, null))))));
};
export default ColumnManagement;
//# sourceMappingURL=ColumnManagement.js.map