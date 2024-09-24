import React from 'react';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import CapacityInput from '@kubevirt-utils/components/CapacityInput/CapacityInput';
import { getVolumeSnapshotSize } from '@kubevirt-utils/resources/bootableresources/selectors';
import { convertToBaseValue, humanizeBinaryBytes } from '@kubevirt-utils/utils/humanize.js';
var DiskSize = function () {
    var _a, _b, _c;
    var _d = useInstanceTypeVMStore(), instanceTypeVMState = _d.instanceTypeVMState, setCustomDiskSize = _d.setCustomDiskSize;
    var customDiskSize = instanceTypeVMState.customDiskSize, pvcSource = instanceTypeVMState.pvcSource, volumeSnapshotSource = instanceTypeVMState.volumeSnapshotSource;
    var pvcDiskSize = ((_c = (_b = (_a = pvcSource === null || pvcSource === void 0 ? void 0 : pvcSource.spec) === null || _a === void 0 ? void 0 : _a.resources) === null || _b === void 0 ? void 0 : _b.requests) === null || _c === void 0 ? void 0 : _c.storage) || getVolumeSnapshotSize(volumeSnapshotSource);
    var sizeData = humanizeBinaryBytes(convertToBaseValue(pvcDiskSize)).string;
    if (!pvcDiskSize)
        return null;
    return React.createElement(CapacityInput, { onChange: setCustomDiskSize, size: customDiskSize || sizeData });
};
export default DiskSize;
//# sourceMappingURL=DiskSize.js.map