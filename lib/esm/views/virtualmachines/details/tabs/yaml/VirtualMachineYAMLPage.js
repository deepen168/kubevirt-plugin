import React from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { ResourceYAMLEditor } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye } from '@patternfly/react-core';
import './virtual-machine-yaml-page.scss';
var VirtualMachineYAMLPage = function (props) {
    var vm = props.obj;
    var loading = (React.createElement(Bullseye, null,
        React.createElement(Loading, null)));
    return !vm ? (loading) : (React.createElement(React.Suspense, { fallback: loading },
        React.createElement("div", { className: "VirtualMachineYAML--main" },
            React.createElement(ResourceYAMLEditor, { initialResource: vm }))));
};
export default VirtualMachineYAMLPage;
//# sourceMappingURL=VirtualMachineYAMLPage.js.map