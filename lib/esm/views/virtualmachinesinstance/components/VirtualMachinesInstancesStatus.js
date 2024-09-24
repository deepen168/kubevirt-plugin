import * as React from 'react';
import { icon } from '@kubevirt-utils/resources/vmi';
var VirtualMachinesInstancesStatus = function (_a) {
    var status = _a.status;
    var IconComponent = icon === null || icon === void 0 ? void 0 : icon[status];
    return (React.createElement(React.Fragment, null,
        React.createElement(IconComponent, null),
        " ",
        status));
};
export default VirtualMachinesInstancesStatus;
//# sourceMappingURL=VirtualMachinesInstancesStatus.js.map