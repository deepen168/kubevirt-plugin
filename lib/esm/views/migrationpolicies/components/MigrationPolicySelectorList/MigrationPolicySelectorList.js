import React, { memo } from 'react';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { LabelGroup } from '@patternfly/react-core';
import { MigrationPolicySelector } from './MigrationPolicySelector';
export var MigrationPolicySelectorList = memo(function (_a) {
    var _b;
    var isVMILabel = _a.isVMILabel, selector = _a.selector;
    if (isEmpty(selector))
        return null;
    return (React.createElement(LabelGroup, null, (_b = Object.entries(selector)) === null || _b === void 0 ? void 0 : _b.map(function (_a) {
        var key = _a[0], value = _a[1];
        return (React.createElement(MigrationPolicySelector, { isVMILabel: isVMILabel, key: key, matchKey: key, value: value }));
    })));
});
//# sourceMappingURL=MigrationPolicySelectorList.js.map