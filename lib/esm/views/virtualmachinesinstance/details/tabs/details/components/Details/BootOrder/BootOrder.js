import * as React from 'react';
import BootableDevicesList from '@kubevirt-utils/components/BootOrder/BootableDevicesList';
import { transformDevices } from '@kubevirt-utils/resources/vm/utils/boot-order/bootOrder';
var BootOrder = function (_a) {
    var disks = _a.disks, interfaces = _a.interfaces;
    var transformedDevices = React.useMemo(function () {
        var _a;
        return (_a = transformDevices(disks, interfaces)) === null || _a === void 0 ? void 0 : _a.sort(function (a, b) {
            if (a.value.bootOrder && b.value.bootOrder) {
                return a.value.bootOrder - b.value.bootOrder;
            }
            else if (a.value.bootOrder) {
                return -1;
            }
            else if (b.value.bootOrder) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }, [disks, interfaces]);
    return React.createElement(BootableDevicesList, { devices: transformedDevices });
};
export default BootOrder;
//# sourceMappingURL=BootOrder.js.map