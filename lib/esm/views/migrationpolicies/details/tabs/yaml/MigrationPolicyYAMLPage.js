import React from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { ResourceYAMLEditor } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye } from '@patternfly/react-core';
var MigrationPolicyYAMLPage = function (_a) {
    var mp = _a.obj;
    var loading = (React.createElement(Bullseye, null,
        React.createElement(Loading, null)));
    return !mp ? (loading) : (React.createElement(React.Suspense, { fallback: loading },
        React.createElement(ResourceYAMLEditor, { initialResource: mp })));
};
export default MigrationPolicyYAMLPage;
//# sourceMappingURL=MigrationPolicyYAMLPage.js.map