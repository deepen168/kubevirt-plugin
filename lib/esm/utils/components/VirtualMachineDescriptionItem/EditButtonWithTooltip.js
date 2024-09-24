import React from 'react';
import { Button, Flex, Tooltip } from '@patternfly/react-core';
import { PencilAltIcon } from '@patternfly/react-icons';
var EditButtonWithTooltip = function (_a) {
    var children = _a.children, isEditable = _a.isEditable, onEditClick = _a.onEditClick, testId = _a.testId, tooltipContent = _a.tooltipContent;
    var EditButton = function () { return (React.createElement(Button, { onClick: function (e) {
            e.stopPropagation();
            onEditClick === null || onEditClick === void 0 ? void 0 : onEditClick();
        }, "data-test-id": testId, isDisabled: !isEditable, isInline: true, variant: "link" },
        React.createElement(Flex, null,
            children,
            React.createElement(PencilAltIcon, { className: "co-icon-space-l" })))); };
    if (!isEditable && tooltipContent) {
        return (React.createElement(Tooltip, { content: tooltipContent },
            React.createElement("span", null,
                React.createElement(EditButton, null))));
    }
    return React.createElement(EditButton, null);
};
export default EditButtonWithTooltip;
//# sourceMappingURL=EditButtonWithTooltip.js.map