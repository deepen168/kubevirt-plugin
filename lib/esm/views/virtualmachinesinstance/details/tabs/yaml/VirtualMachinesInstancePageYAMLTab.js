import React from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { ResourceYAMLEditor } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye } from '@patternfly/react-core';
var VirtualMachinesInstancePageYAMLTab = function (_a) {
    var obj = _a.obj;
    return (React.createElement(React.Suspense, { fallback: React.createElement(Bullseye, null,
            React.createElement(Loading, null)) }, (obj === null || obj === void 0 ? void 0 : obj.metadata) && React.createElement(ResourceYAMLEditor, { initialResource: obj })));
};
export default VirtualMachinesInstancePageYAMLTab;
//# sourceMappingURL=VirtualMachinesInstancePageYAMLTab.js.map