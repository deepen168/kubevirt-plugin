import React from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { ResourceYAMLEditor } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye } from '@patternfly/react-core';
var DataImportCronYAMLPage = function (_a) {
    var dataImportCron = _a.obj;
    var loading = (React.createElement(Bullseye, null,
        React.createElement(Loading, null)));
    return !dataImportCron ? (loading) : (React.createElement(React.Suspense, { fallback: loading },
        React.createElement(ResourceYAMLEditor, { initialResource: dataImportCron })));
};
export default DataImportCronYAMLPage;
//# sourceMappingURL=DataImportCronYamlPage.js.map