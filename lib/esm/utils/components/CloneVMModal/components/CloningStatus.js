import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Alert, AlertVariant, ProgressStep, ProgressStepper, ProgressStepVariant, Stack, } from '@patternfly/react-core';
import { CLONING_STATUSES, STATUS_TO_PROGRESS_VARIANT } from '../utils/constants';
var CloningStatus = function (_a) {
    var _b, _c, _d, _e;
    var vmCloneRequest = _a.vmCloneRequest;
    var t = useKubevirtTranslation().t;
    var phase = (_b = vmCloneRequest === null || vmCloneRequest === void 0 ? void 0 : vmCloneRequest.status) === null || _b === void 0 ? void 0 : _b.phase;
    var progressStatus = STATUS_TO_PROGRESS_VARIANT[phase];
    var isFailed = [CLONING_STATUSES.FAILED, CLONING_STATUSES.UNKNOWN].includes(phase);
    if (!Boolean(vmCloneRequest))
        return null;
    return (React.createElement(Stack, { hasGutter: true },
        React.createElement(ProgressStepper, { "aria-label": "VirtualMachine cloning steps", isCenterAligned: true },
            React.createElement(ProgressStep, { "aria-label": t('Request sent'), id: "basic-step1", titleId: "Request sent", variant: ProgressStepVariant.success }, t('Request sent')),
            React.createElement(ProgressStep, { "aria-label": isFailed ? t('Failed') : t('In process'), id: "basic-step2", isCurrent: true, titleId: "In process", variant: progressStatus }, isFailed ? t('Failed') : t('In process')),
            React.createElement(ProgressStep, { variant: phase === CLONING_STATUSES.SUCCEEDED
                    ? ProgressStepVariant.success
                    : ProgressStepVariant.pending, "aria-label": t('Created'), id: "basic-step3", titleId: "Created" }, t('Created'))),
        phase === CLONING_STATUSES.FAILED && (React.createElement(Alert, { isInline: true, title: t('An error occurred during the cloning process'), variant: AlertVariant.danger }, ((_e = (_d = (_c = vmCloneRequest === null || vmCloneRequest === void 0 ? void 0 : vmCloneRequest.status) === null || _c === void 0 ? void 0 : _c.conditions) === null || _d === void 0 ? void 0 : _d.find(function (c) { return c.status === 'True'; })) === null || _e === void 0 ? void 0 : _e.message) ||
            'unknown'))));
};
export default CloningStatus;
//# sourceMappingURL=CloningStatus.js.map