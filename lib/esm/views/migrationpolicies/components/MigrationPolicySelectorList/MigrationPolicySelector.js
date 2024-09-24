import React, { memo } from 'react';
import classNames from 'classnames';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Label, Popover, PopoverPosition } from '@patternfly/react-core';
import '../MigrationPolicySelectorLabel.scss';
export var MigrationPolicySelector = memo(function (_a) {
    var isVMILabel = _a.isVMILabel, matchKey = _a.matchKey, value = _a.value;
    var t = useKubevirtTranslation().t;
    var labelBodyContent = "".concat(matchKey, ": ").concat(value);
    return (React.createElement(Popover, { "aria-label": "Match label selector", bodyContent: "".concat(matchKey, ": ").concat(value), headerContent: t('Match label'), position: PopoverPosition.top },
        React.createElement(Label, { onClick: function (e) {
                e.preventDefault();
            }, color: isVMILabel ? 'grey' : 'blue' },
            React.createElement("div", { className: classNames({ 'kv-migration-policy__label-vm': isVMILabel }) }, labelBodyContent))));
});
//# sourceMappingURL=MigrationPolicySelector.js.map