import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { NumberInput } from '@patternfly/react-core';
var CompletionTimeout = function (_a) {
    var setState = _a.setState, completionTimeoutInGib = _a.state;
    var t = useKubevirtTranslation().t;
    return (React.createElement(NumberInput, { onChange: function (event) { var _a; return +((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) >= 0 && setState(+event.target.value); }, "data-test-id": "migration-policy-completion-timeout-input", id: "migration-policy-completion-timeout-input", min: 0, minusBtnAriaLabel: t('Decrement'), onMinus: function () { return setState(function (prev) { return --prev; }); }, onPlus: function () { return setState(function (prev) { return (prev ? prev + 1 : 1); }); }, plusBtnAriaLabel: t('Increment'), value: completionTimeoutInGib }));
};
export default CompletionTimeout;
//# sourceMappingURL=CompletionTimeout.js.map