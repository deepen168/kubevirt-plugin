import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { StatusPopupItem, StatusPopupSection } from '@openshift-console/dynamic-plugin-sdk';
import { Stack, StackItem } from '@patternfly/react-core';
import { healthStateMapping } from '../utils';
var StatusCardStoragePopover = function (_a) {
    var lsoState = _a.lsoState, odfState = _a.odfState;
    var t = useKubevirtTranslation().t;
    return (React.createElement(Stack, { hasGutter: true },
        React.createElement(StackItem, null, t('OpenShift Data Foundation (recommended for full functionality) or another persistent storage service is required for OpenShift Virtualization')),
        React.createElement(StackItem, null,
            React.createElement(StatusPopupSection, { firstColumn: t('Storage operator'), secondColumn: t('Status') },
                React.createElement(StatusPopupItem, { icon: healthStateMapping[lsoState.state].icon, key: "lso", value: lsoState.message }, t('Local storage (LSO)')),
                React.createElement(StatusPopupItem, { icon: healthStateMapping[odfState.state].icon, key: "odf", value: odfState.message }, t('OpenShift Data Foundation (ODF)'))))));
};
export default StatusCardStoragePopover;
//# sourceMappingURL=StatusStorageCardPopover.js.map