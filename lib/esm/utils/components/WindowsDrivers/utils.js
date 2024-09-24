import { useEffect, useState } from 'react';
import produce from 'immer';
import { DEFAULT_WINDOWS_DRIVERS_DISK_IMAGE } from '@kubevirt-utils/resources/vm/utils/disk/constants';
import { getDriversImage } from '@kubevirt-utils/resources/vm/utils/disk/drivers';
export var removeWindowsDrivers = function (vm, windowsVolumeName) {
    return produce(vm, function (draftVM) {
        draftVM.spec.template.spec.domain.devices.disks =
            draftVM.spec.template.spec.domain.devices.disks.filter(function (disk) { return disk.name !== windowsVolumeName; });
        draftVM.spec.template.spec.volumes = draftVM.spec.template.spec.volumes.filter(function (volume) { return volume.name !== windowsVolumeName; });
    });
};
export var useDriversImage = function () {
    var _a = useState(DEFAULT_WINDOWS_DRIVERS_DISK_IMAGE), driversImage = _a[0], setDriversImage = _a[1];
    var _b = useState(true), loading = _b[0], setLoading = _b[1];
    useEffect(function () {
        getDriversImage().then(function (image) {
            setDriversImage(image);
            setLoading(false);
        });
    }, []);
    return [driversImage, loading];
};
//# sourceMappingURL=utils.js.map