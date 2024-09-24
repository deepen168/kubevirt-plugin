import React from 'react';
import { useFormContext } from 'react-hook-form';
import CapacityInput from '@kubevirt-utils/components/CapacityInput/CapacityInput';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { convertToBaseValue, humanizeBinaryBytes } from '@kubevirt-utils/utils/humanize.js';
import { EXPAND_PVC_SIZE } from '../utils/constants';
var ExpandPVC = function (_a) {
    var _b, _c, _d;
    var pvc = _a.pvc;
    var t = useKubevirtTranslation().t;
    var _e = useFormContext(), setValue = _e.setValue, watch = _e.watch;
    var diskState = watch();
    var expandPVCSize = diskState.expandPVCSize;
    var pvcSize = (_d = (_c = (_b = pvc === null || pvc === void 0 ? void 0 : pvc.spec) === null || _b === void 0 ? void 0 : _b.resources) === null || _c === void 0 ? void 0 : _c.requests) === null || _d === void 0 ? void 0 : _d.storage;
    var onQuantityChange = function (quantity) {
        var _a;
        var newQuantityValue = (_a = convertToBaseValue(quantity)) === null || _a === void 0 ? void 0 : _a.toString();
        setValue(EXPAND_PVC_SIZE, newQuantityValue > pvcSize ? quantity : null);
    };
    if (!pvcSize)
        return null;
    var size = expandPVCSize || humanizeBinaryBytes(convertToBaseValue(pvcSize)).string;
    var isMinusDisabled = pvcSize === convertToBaseValue(expandPVCSize) || !expandPVCSize;
    return (React.createElement(CapacityInput, { isMinusDisabled: isMinusDisabled, label: t('PersistentVolumeClaim size'), onChange: onQuantityChange, size: size }));
};
export default ExpandPVC;
//# sourceMappingURL=ExpandPVC.js.map