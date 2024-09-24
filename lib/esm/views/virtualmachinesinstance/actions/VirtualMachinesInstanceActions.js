import React from 'react';
import { VirtualMachineInstanceModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { ActionMenuVariant } from '@openshift-console/dynamic-plugin-sdk/lib/api/internal-types';
import { LazyActionMenu } from '@openshift-console/dynamic-plugin-sdk-internal';
var VirtualMachinesInsanceActions = function (_a) {
    var _b;
    var _c;
    var vmi = _a.vmi;
    return (React.createElement(LazyActionMenu, { context: (_b = {}, _b[VirtualMachineInstanceModelRef] = vmi, _b), key: (_c = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _c === void 0 ? void 0 : _c.name, variant: ActionMenuVariant.KEBAB }));
};
export default VirtualMachinesInsanceActions;
//# sourceMappingURL=VirtualMachinesInstanceActions.js.map