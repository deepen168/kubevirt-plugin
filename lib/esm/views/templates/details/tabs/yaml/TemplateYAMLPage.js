import React, { Suspense } from 'react';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { ResourceYAMLEditor } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye } from '@patternfly/react-core';
var TemplateYAMLPage = function (_a) {
    var template = _a.obj;
    return (React.createElement(Suspense, { fallback: React.createElement(Bullseye, null,
            React.createElement(Loading, null)) },
        React.createElement(ResourceYAMLEditor, { initialResource: template })));
};
export default TemplateYAMLPage;
//# sourceMappingURL=TemplateYAMLPage.js.map