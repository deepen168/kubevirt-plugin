var _a;
import React from 'react';
import { getVMStatus } from '@kubevirt-utils/resources/shared';
import { printableVMStatus } from '@virtualmachines/utils';
import MigrationProgressPopover from './MigrationProgressPopover';
import StatusPopoverButton from './StatusPopoverButton';
import VirtualMachineOverviewStatus from './VirtualMachineOverviewStatus';
import VirtualMachineProvisioningStatus from './VirtualMachineProvisioningStatus';
var Popovers = (_a = {},
    _a[printableVMStatus.Migrating] = MigrationProgressPopover,
    _a[printableVMStatus.Provisioning] = VirtualMachineProvisioningStatus,
    _a);
var StatusWithPopover = function (_a) {
    var vm = _a.vm, vmi = _a.vmi;
    var vmPrintableStatus = getVMStatus(vm);
    var Popover = Popovers[vmPrintableStatus] || VirtualMachineOverviewStatus;
    return (React.createElement(Popover, { vm: vm, vmi: vmi },
        React.createElement(StatusPopoverButton, { vmPrintableStatus: vmPrintableStatus })));
};
export default StatusWithPopover;
//# sourceMappingURL=VirtualMachineStatusWithPopover.js.map