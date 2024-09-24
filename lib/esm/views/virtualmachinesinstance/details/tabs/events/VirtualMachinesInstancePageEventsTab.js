import React from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { ResourceEventStream } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye } from '@patternfly/react-core';
var VirtualMachinesInstancePageEventsTab = function (_a) {
    var vmi = _a.obj;
    return (React.createElement(React.Suspense, { fallback: React.createElement(Bullseye, null,
            React.createElement(Loading, null)) }, (vmi === null || vmi === void 0 ? void 0 : vmi.metadata) && React.createElement(ResourceEventStream, { resource: vmi })));
};
export default VirtualMachinesInstancePageEventsTab;
//# sourceMappingURL=VirtualMachinesInstancePageEventsTab.js.map