import React from 'react';
import Joyride, { ACTIONS, EVENTS } from 'react-joyride';
import { useLocation, useNavigate } from 'react-router-dom-v5-compat';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useSignals } from '@preact/signals-react/runtime';
import TourPopover from './components/TourPopover/TourPopover';
import { nextStep, prevStep, runningTourSignal, stepIndexSignal, stopTour, tourSteps, } from './utils/constants';
var GuidedTour = function () {
    var location = useLocation();
    var navigate = useNavigate();
    useSignals();
    return (React.createElement(Joyride, { callback: function (callbackProps) {
            var _a;
            var action = callbackProps.action, index = callbackProps.index, size = callbackProps.size, step = callbackProps.step, type = callbackProps.type;
            var route = (_a = step === null || step === void 0 ? void 0 : step.data) === null || _a === void 0 ? void 0 : _a.route;
            if (!isEmpty(route) && location.pathname !== route) {
                navigate(route);
            }
            if (action === ACTIONS.CLOSE) {
                stopTour();
                return;
            }
            if (type === EVENTS.STEP_AFTER) {
                if (action === ACTIONS.PREV) {
                    prevStep();
                    return;
                }
                if (action === ACTIONS.NEXT) {
                    if (index === size - 1) {
                        stopTour();
                        return;
                    }
                    nextStep();
                    return;
                }
            }
        }, styles: {
            options: {
                zIndex: 10000,
            },
        }, continuous: true, disableScrollParentFix: true, floaterProps: { disableAnimation: true }, run: runningTourSignal.value, stepIndex: stepIndexSignal.value, steps: tourSteps, tooltipComponent: TourPopover }));
};
export default GuidedTour;
//# sourceMappingURL=GuidedTour.js.map