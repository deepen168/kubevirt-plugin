import * as React from 'react';
import { HelperText, HelperTextItem, Split, SplitItem } from '@patternfly/react-core';
import { getVMStatusIcon } from '../../../utils';
import VMNotMigratableLabel from '../VMNotMigratableLabel/VMNotMigratableLabel';
var VirtualMachineStatus = function (_a) {
    var _b;
    var vm = _a.vm;
    var printableStatus = (_b = vm === null || vm === void 0 ? void 0 : vm.status) === null || _b === void 0 ? void 0 : _b.printableStatus;
    var Icon = getVMStatusIcon(printableStatus);
    return (React.createElement(Split, { hasGutter: true },
        React.createElement(SplitItem, null,
            React.createElement(HelperText, null,
                React.createElement(HelperTextItem, { icon: React.createElement(Icon, null) }, printableStatus))),
        React.createElement(VMNotMigratableLabel, { vm: vm })));
};
export default VirtualMachineStatus;
//# sourceMappingURL=VirtualMachineStatus.js.map