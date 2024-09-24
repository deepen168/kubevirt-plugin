import React from 'react';
import { useFormContext } from 'react-hook-form';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { diskTypes, diskTypesLabels, } from '@kubevirt-utils/resources/vm/utils/disk/constants';
import { getDiskDrive } from '@kubevirt-utils/resources/vm/utils/disk/selectors';
import { FormGroup, SelectList, SelectOption } from '@patternfly/react-core';
import { getDefaultDiskType } from '../../utils/helpers';
import { InterfaceTypes } from '../../utils/types';
import { DISKTYPE_SELECT_FIELDID } from '../utils/constants';
var DiskTypeSelect = function (_a) {
    var _b, _c;
    var isVMRunning = _a.isVMRunning;
    var t = useKubevirtTranslation().t;
    var _d = useFormContext(), setValue = _d.setValue, watch = _d.watch;
    var diskState = watch();
    if (!diskState)
        return null;
    var diskType = getDiskDrive(diskState.disk);
    var defaultInterface = getDefaultDiskType(isVMRunning);
    var diskInterface = ((_c = (_b = diskState.disk) === null || _b === void 0 ? void 0 : _b[diskType]) === null || _c === void 0 ? void 0 : _c.bus) || defaultInterface;
    return (React.createElement("div", { "data-test-id": DISKTYPE_SELECT_FIELDID },
        React.createElement(FormGroup, { fieldId: DISKTYPE_SELECT_FIELDID, label: t('Type') },
            React.createElement(FormPFSelect, { onSelect: function (_, val) {
                    setValue('disk.cdrom', null);
                    setValue('disk.lun', null);
                    setValue('disk.disk', null);
                    // cdrom does not support virtio
                    var newDiskInterface = val === diskTypes.cdrom && diskInterface === InterfaceTypes.VIRTIO
                        ? InterfaceTypes.SCSI
                        : diskInterface;
                    setValue("disk.".concat(val), { bus: newDiskInterface });
                }, selected: diskType, selectedLabel: diskTypesLabels[diskType], toggleProps: { isFullWidth: true } },
                React.createElement(SelectList, null, Object.values(diskTypes).map(function (type) { return (React.createElement(SelectOption, { "data-test-id": "".concat(DISKTYPE_SELECT_FIELDID, "-").concat(type), isDisabled: isVMRunning && type === diskTypes.cdrom, key: type, value: type }, diskTypesLabels[type])); }))),
            React.createElement(FormGroupHelperText, null, t('Hot plug is enabled only for "Disk" and "Lun" types')))));
};
export default DiskTypeSelect;
//# sourceMappingURL=DiskTypeSelect.js.map