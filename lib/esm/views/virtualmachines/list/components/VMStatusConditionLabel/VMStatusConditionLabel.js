import React, { memo } from 'react';
import { Label, LabelGroup, Popover, PopoverPosition } from '@patternfly/react-core';
export var VMStatusConditionLabel = memo(function (condition) {
    return (React.createElement(Popover, { "aria-label": "Condition Popover", bodyContent: function () { var _a; return React.createElement("div", null, (_a = condition === null || condition === void 0 ? void 0 : condition.message) !== null && _a !== void 0 ? _a : condition === null || condition === void 0 ? void 0 : condition.reason); }, position: PopoverPosition.top },
        React.createElement(Label, { onClick: function (e) {
                e.preventDefault();
            }, color: "grey" }, condition === null || condition === void 0 ? void 0 :
            condition.type,
            "=", condition === null || condition === void 0 ? void 0 :
            condition.status)));
});
VMStatusConditionLabel.displayName = 'VMStatusConditionLabel';
export var VMStatusConditionLabelList = memo(function (_a) {
    var conditions = _a.conditions;
    return (React.createElement(LabelGroup, null, conditions === null || conditions === void 0 ? void 0 : conditions.map(function (_a) {
        var message = _a.message, reason = _a.reason, status = _a.status, type = _a.type;
        return (React.createElement(VMStatusConditionLabel, { key: type, message: message, reason: reason, status: status, type: type }));
    })));
});
VMStatusConditionLabelList.displayName = 'VMStatusConditionLabelList';
//# sourceMappingURL=VMStatusConditionLabel.js.map