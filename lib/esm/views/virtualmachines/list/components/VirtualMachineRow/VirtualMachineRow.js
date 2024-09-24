import React from 'react';
import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import VirtualMachineRowLayout from './VirtualMachineRowLayout';
import VirtualMachineRunningRow from './VirtualMachineRunningRow';
var VirtualMachineRow = function (_a) {
    var activeColumnIDs = _a.activeColumnIDs, vm = _a.obj, _b = _a.rowData, getVmi = _b.getVmi, getVmim = _b.getVmim, isSingleNodeCluster = _b.isSingleNodeCluster;
    var vmName = getName(vm);
    var vmNamespace = getNamespace(vm);
    var vmi = getVmi(vmNamespace, vmName);
    return !isEmpty(vmi) ? (React.createElement(VirtualMachineRunningRow, { rowData: {
            isSingleNodeCluster: isSingleNodeCluster,
            vmi: vmi,
            vmim: getVmim(vmNamespace, vmName),
        }, activeColumnIDs: activeColumnIDs, obj: vm })) : (React.createElement(VirtualMachineRowLayout, { activeColumnIDs: activeColumnIDs, obj: vm, rowData: { ips: NO_DATA_DASH, isSingleNodeCluster: isSingleNodeCluster, node: NO_DATA_DASH, vmim: null } }));
};
export default VirtualMachineRow;
//# sourceMappingURL=VirtualMachineRow.js.map