import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { convertToBaseValue, humanizeBinaryBytes } from '@kubevirt-utils/utils/humanize.js';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import CapacityInput from '../../../CapacityInput/CapacityInput';
import { DISK_SIZE_FIELD } from '../utils/constants';
import { getDataVolumeTemplateSize, getPVCClaimName, getSourceRef } from '../utils/selectors';
import ExpandPVC from './ExpandPVC';
import usePVCSourceSize from './usePVCSourceSize';
var DiskSizeInput = function (_a) {
    var isCreated = _a.isCreated, isDisabled = _a.isDisabled, namespace = _a.namespace, pvc = _a.pvc;
    var t = useKubevirtTranslation().t;
    var _b = useFormContext(), setValue = _b.setValue, watch = _b.watch;
    var diskState = watch();
    var pvcSize = usePVCSourceSize(getSourceRef(diskState), getPVCClaimName(diskState), namespace)[0];
    if (isCreated)
        return React.createElement(ExpandPVC, { pvc: pvc });
    if (isEmpty(diskState.dataVolumeTemplate) && isEmpty(pvcSize))
        return null;
    return (React.createElement(CapacityInput, { size: getDataVolumeTemplateSize(diskState) ||
            humanizeBinaryBytes(convertToBaseValue(pvcSize)).string, isEditingCreatedDisk: isDisabled, label: t('Disk size'), onChange: function (quantity) { return setValue(DISK_SIZE_FIELD, quantity); } }));
};
export default DiskSizeInput;
//# sourceMappingURL=DiskSizeInput.js.map