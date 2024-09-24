import React from 'react';
import { GreenCheckCircleIcon, RedExclamationCircleIcon, YellowExclamationTriangleIcon, } from '@openshift-console/dynamic-plugin-sdk';
var ConditionIcon = function (_a) {
    var conditionValue = _a.conditionValue;
    var valueToIcon = {
        0: React.createElement(GreenCheckCircleIcon, { className: "kv-health-popup__alerts-count--icon" }),
        1: React.createElement(YellowExclamationTriangleIcon, { className: "kv-health-popup__alerts-count--icon" }),
        2: React.createElement(RedExclamationCircleIcon, { className: "kv-health-popup__alerts-count--icon" }),
    };
    return valueToIcon === null || valueToIcon === void 0 ? void 0 : valueToIcon[conditionValue];
};
export default ConditionIcon;
//# sourceMappingURL=ConditionIcon.js.map