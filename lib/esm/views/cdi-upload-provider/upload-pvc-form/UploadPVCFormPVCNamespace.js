import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var UploadPVCFormPVCNamespace = function (_a) {
    var namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { className: "control-label co-required", htmlFor: "pvc-namespace" }, t('Namespace')),
        React.createElement("div", { className: "form-group" },
            React.createElement("input", { "aria-describedby": "pvc-namespace-help", className: "pf-c-form-control", disabled: true, id: "pvc-namespace", required: true, type: "text", value: namespace || '' }),
            React.createElement("p", { className: "help-block", id: "pvc-namespace-help" }, t('A unique namespace for the storage claim within the project')))));
};
export default UploadPVCFormPVCNamespace;
//# sourceMappingURL=UploadPVCFormPVCNamespace.js.map