import React, { Suspense } from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ResourceEventStream } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye, Title } from '@patternfly/react-core';
import './VirtualMachinePageEventsTab.scss';
var VirtualMachinePageEventsTab = function (_a) {
    var vm = _a.obj;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(Title, { className: "virtual-machine-page-events-tab__title", headingLevel: "h2" }, t('Events')),
        React.createElement(Suspense, { fallback: React.createElement(Bullseye, null,
                React.createElement(Loading, null)) }, (vm === null || vm === void 0 ? void 0 : vm.metadata) && React.createElement(ResourceEventStream, { resource: vm }))));
};
export default VirtualMachinePageEventsTab;
//# sourceMappingURL=VirtualMachinePageEvents.js.map