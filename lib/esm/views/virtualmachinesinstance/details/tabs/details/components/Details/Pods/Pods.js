import * as React from 'react';
import { usePods } from '@kubevirt-utils/hooks/usePods';
import { getVMIPod } from '@kubevirt-utils/resources/vmi';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
var Pods = function (_a) {
    var _b, _c, _d, _e;
    var vmi = _a.vmi;
    var pods = usePods((_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.namespace)[0];
    var vmiPod = getVMIPod(vmi, pods);
    return vmiPod ? (React.createElement(ResourceLink, { key: (_c = vmiPod === null || vmiPod === void 0 ? void 0 : vmiPod.metadata) === null || _c === void 0 ? void 0 : _c.uid, kind: vmiPod === null || vmiPod === void 0 ? void 0 : vmiPod.kind, name: (_d = vmiPod === null || vmiPod === void 0 ? void 0 : vmiPod.metadata) === null || _d === void 0 ? void 0 : _d.name, namespace: (_e = vmiPod === null || vmiPod === void 0 ? void 0 : vmiPod.metadata) === null || _e === void 0 ? void 0 : _e.namespace })) : (React.createElement(React.Fragment, null, "-"));
};
export default Pods;
//# sourceMappingURL=Pods.js.map