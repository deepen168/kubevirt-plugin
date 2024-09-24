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
import { Button, ButtonVariant, Split, SplitItem } from '@patternfly/react-core';
import { CloseIcon } from '@patternfly/react-icons';
import { css } from '@patternfly/react-styles';
import popoverStyles from '@patternfly/react-styles/css/components/Popover/popover';
import EndTourFooter from '../EndTourFooter/EndTourFooter';
import './TourPopover.scss';
var TourPopover = function (_a) {
    var backProps = _a.backProps, closeProps = _a.closeProps, index = _a.index, isLastStep = _a.isLastStep, primaryProps = _a.primaryProps, size = _a.size, step = _a.step;
    var t = useKubevirtTranslation().t;
    return (React.createElement("div", { className: css(popoverStyles.popover, 'kv-tour-popover') },
        React.createElement(Split, null,
            step.title && React.createElement(SplitItem, { className: "kv-tour-popover__header" }, step.title),
            React.createElement(SplitItem, { isFilled: true }),
            React.createElement(SplitItem, null,
                React.createElement(Button, __assign({}, closeProps, { className: "pf-v5-c-popover__close", icon: React.createElement(CloseIcon, null), variant: ButtonVariant.plain })))),
        React.createElement("div", { className: css(popoverStyles.popoverContent) }, step.content),
        React.createElement(Split, { className: "kv-tour-popover__buttons-footer", hasGutter: true },
            React.createElement(SplitItem, { className: "kv-tour-popover__step-counter" }, t('Step {{current}}/{{size}}', { current: index + 1, size: size })),
            React.createElement(SplitItem, { isFilled: true }),
            index > 0 && (React.createElement(SplitItem, null,
                React.createElement(Button, __assign({}, backProps, { className: "kv-tour-popover__next", variant: ButtonVariant.secondary }), t('Back')))),
            React.createElement(SplitItem, null,
                React.createElement(Button, __assign({}, primaryProps, { className: "kv-tour-popover__previous", variant: ButtonVariant.primary }), isLastStep ? t('Okay, got it!') : t('Next')))),
        isLastStep && React.createElement(EndTourFooter, null)));
};
export default TourPopover;
//# sourceMappingURL=TourPopover.js.map