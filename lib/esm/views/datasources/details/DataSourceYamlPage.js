import React from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { ResourceYAMLEditor } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye } from '@patternfly/react-core';
var DataSourceYAMLPage = function (_a) {
    var dataSource = _a.obj;
    var loading = (React.createElement(Bullseye, null,
        React.createElement(Loading, null)));
    return !dataSource ? (loading) : (React.createElement(React.Suspense, { fallback: loading },
        React.createElement(ResourceYAMLEditor, { initialResource: dataSource })));
};
export default DataSourceYAMLPage;
//# sourceMappingURL=DataSourceYamlPage.js.map