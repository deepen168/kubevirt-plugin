import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { VM_WORKLOAD_ANNOTATION } from '@kubevirt-utils/resources/vm';
var WorkloadProfile = function (_a) {
    var annotations = _a.annotations;
    var t = useKubevirtTranslation().t;
    var workloadProfile = annotations === null || annotations === void 0 ? void 0 : annotations[VM_WORKLOAD_ANNOTATION];
    return React.createElement("div", null, workloadProfile !== null && workloadProfile !== void 0 ? workloadProfile : React.createElement("div", { className: "text-muted" },
        t('Not available'),
        " "));
};
export default WorkloadProfile;
//# sourceMappingURL=WorkloadProfile.js.map