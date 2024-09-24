import React, { useMemo } from 'react';
import BootableDevicesList from '@kubevirt-utils/components/BootOrder/BootableDevicesList';
import { getDisks, getInterfaces } from '@kubevirt-utils/resources/vm';
import { transformDevices } from '@kubevirt-utils/resources/vm/utils/boot-order/bootOrder';
var BootOrderSummary = function (_a) {
    var vm = _a.vm;
    var disks = getDisks(vm);
    var interfaces = getInterfaces(vm);
    var transformedDevices = useMemo(function () {
        var _a;
        return (_a = transformDevices(disks, interfaces)) === null || _a === void 0 ? void 0 : _a.sort(function (a, b) {
            if (a.value.bootOrder && b.value.bootOrder) {
                return a.value.bootOrder - b.value.bootOrder;
            }
            if (a.value.bootOrder) {
                return -1;
            }
            if (b.value.bootOrder) {
                return 1;
            }
            return 0;
        });
    }, [disks, interfaces]);
    return React.createElement(BootableDevicesList, { devices: transformedDevices });
};
export default BootOrderSummary;
//# sourceMappingURL=BootOrderSummary.js.map