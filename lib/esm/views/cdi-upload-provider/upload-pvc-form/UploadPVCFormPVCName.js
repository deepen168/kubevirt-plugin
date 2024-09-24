import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var UploadPVCFormPVCName = function (_a) {
    var handlePvcName = _a.handlePvcName, isGolden = _a.isGolden, isLoading = _a.isLoading, pvcName = _a.pvcName;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { className: "control-label co-required", htmlFor: "pvc-name" }, t('Persistent Volume Claim Name')),
        React.createElement("div", { className: "form-group" },
            React.createElement("input", { "aria-describedby": "pvc-name-help", className: "pf-c-form-control", disabled: isGolden || isLoading, id: "pvc-name", onChange: handlePvcName, placeholder: isGolden ? t('pick an operating system') : t('my-storage-claim'), required: true, type: "text", value: pvcName || '' }),
            React.createElement("p", { className: "help-block", id: "pvc-name-help" }, t('A unique name for the storage claim within the project')))));
};
export default UploadPVCFormPVCName;
//# sourceMappingURL=UploadPVCFormPVCName.js.map