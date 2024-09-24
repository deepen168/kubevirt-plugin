import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Alert, AlertVariant, FormGroup, Stack, StackItem } from '@patternfly/react-core';
var SupportedVolumesAlert = function (_a) {
    var isVMRunning = _a.isVMRunning;
    var t = useKubevirtTranslation().t;
    if (!isVMRunning) {
        return null;
    }
    return (React.createElement(FormGroup, { fieldId: "snapshot-info-alerts" },
        React.createElement(Alert, { title: React.createElement(Stack, { hasGutter: true },
                React.createElement(StackItem, null, t('Taking snapshot of running VirtualMachine.'))), isInline: true, variant: AlertVariant.info })));
};
export default SupportedVolumesAlert;
//# sourceMappingURL=SupportedVolumesAlert.js.map