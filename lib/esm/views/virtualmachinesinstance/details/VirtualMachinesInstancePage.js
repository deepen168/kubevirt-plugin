import React from 'react';
import { HorizontalNav, useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import useVirtualMachinesInstanceTabs from './hooks/useVirtualMachinesInstanceTabs';
import VirtualMachinesInstancePageHeader from './VirtualMachinesInstancePageHeader';
var VirtualMachinesInstanceDetails = function (_a) {
    var kind = _a.kind, name = _a.name, namespace = _a.namespace;
    var vmi = useK8sWatchResource({
        kind: kind,
        name: name,
        namespace: namespace,
    })[0];
    var tabs = useVirtualMachinesInstanceTabs();
    return (React.createElement(React.Fragment, null,
        React.createElement(VirtualMachinesInstancePageHeader, { vmi: vmi }),
        React.createElement(HorizontalNav, { pages: tabs, resource: vmi })));
};
export default VirtualMachinesInstanceDetails;
//# sourceMappingURL=VirtualMachinesInstancePage.js.map