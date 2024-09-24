import React, { useState } from 'react';
import NewBadge from '@kubevirt-utils/components/badges/NewBadge/NewBadge';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Alert, AlertVariant, Split, SplitItem, Switch } from '@patternfly/react-core';
import { AUTO_RESOURCE_LIMITS_FEATURE_GATE } from './utils/constants';
import { updateAutoResourceLimitsFeatureGate } from './utils/utils';
var AutoComputeCPULimits = function (_a) {
    var _b;
    var hyperConvergeConfiguration = _a.hyperConvergeConfiguration, newBadge = _a.newBadge;
    var t = useKubevirtTranslation().t;
    var hco = hyperConvergeConfiguration[0], hcoLoaded = hyperConvergeConfiguration[1];
    var featureGates = (_b = hco === null || hco === void 0 ? void 0 : hco.spec) === null || _b === void 0 ? void 0 : _b.featureGates;
    var _c = useState(Boolean(featureGates === null || featureGates === void 0 ? void 0 : featureGates[AUTO_RESOURCE_LIMITS_FEATURE_GATE])), featureEnabled = _c[0], setFeatureEnabled = _c[1];
    var _d = useState(), error = _d[0], setError = _d[1];
    var onFeatureChange = function (switchOn) {
        updateAutoResourceLimitsFeatureGate(hco, switchOn)
            .then(function () { return setFeatureEnabled(switchOn); })
            .catch(function (err) { return setError(err.message); });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Split, null,
            React.createElement(SplitItem, { isFilled: true },
                t('Auto-compute CPU and memory limits'),
                " ",
                newBadge && React.createElement(NewBadge, null)),
            React.createElement(SplitItem, null,
                React.createElement(Switch, { id: "auto-compute-cpu-limits", isChecked: featureEnabled, isDisabled: !hcoLoaded, onChange: function (_, checked) { return onFeatureChange(checked); } }))),
        error && (React.createElement(Alert, { className: "autocompute-cpu-limits__error-alert", isInline: true, title: t('Error'), variant: AlertVariant.danger }, error))));
};
export default AutoComputeCPULimits;
//# sourceMappingURL=AutoComputeCPULimits.js.map