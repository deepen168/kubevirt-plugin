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
import { runningTourSignal, startTour, } from '@kubevirt-utils/components/GuidedTour/utils/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettings from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettings';
import { Stack, Switch } from '@patternfly/react-core';
import ExpandSection from '../../../ExpandSection/ExpandSection';
import './GettingStartedSection.scss';
var GettingStartedSection = function () {
    var t = useKubevirtTranslation().t;
    var _a = useKubevirtUserSettings('quickStart'), quickStarts = _a[0], setQuickStarts = _a[1];
    var run = runningTourSignal.value;
    return (React.createElement(ExpandSection, { toggleText: t('Getting started resources') },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(Switch, { onChange: function (_event, value) {
                    return setQuickStarts(__assign(__assign({}, quickStarts), { dontShowWelcomeModal: !value }));
                }, className: "GettingStartedSection__switch-text", isChecked: !(quickStarts === null || quickStarts === void 0 ? void 0 : quickStarts.dontShowWelcomeModal), label: t('Welcome information') }),
            React.createElement(Switch, { className: "GettingStartedSection__switch-text", isChecked: run, label: t('Guided tour'), onChange: !run && startTour }))));
};
export default GettingStartedSection;
//# sourceMappingURL=GettingStartedSection.js.map