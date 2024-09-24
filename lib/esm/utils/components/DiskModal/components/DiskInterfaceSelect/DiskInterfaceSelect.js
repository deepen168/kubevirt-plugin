import React from 'react';
import { useFormContext } from 'react-hook-form';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { diskTypes } from '@kubevirt-utils/resources/vm/utils/disk/constants';
import { getDiskDrive } from '@kubevirt-utils/resources/vm/utils/disk/selectors';
import { FormGroup, SelectOption } from '@patternfly/react-core';
import { InterfaceTypes } from '../../utils/types';
import { diskInterfaceOptions } from './utils/constants';
var DiskInterfaceSelect = function (_a) {
    var _b, _c;
    var isVMRunning = _a.isVMRunning;
    var t = useKubevirtTranslation().t;
    var _d = useFormContext(), setValue = _d.setValue, watch = _d.watch;
    var disk = watch('disk');
    var diskType = getDiskDrive(disk);
    var diskInterface = ((_b = disk === null || disk === void 0 ? void 0 : disk[diskType]) === null || _b === void 0 ? void 0 : _b.bus) || InterfaceTypes.VIRTIO;
    var selectedLabel = (_c = diskInterfaceOptions === null || diskInterfaceOptions === void 0 ? void 0 : diskInterfaceOptions[diskInterface]) === null || _c === void 0 ? void 0 : _c.label;
    return (React.createElement(FormGroup, { fieldId: "disk-interface", isRequired: true, label: t('Interface') },
        React.createElement("div", { "data-test-id": "disk-interface-select" },
            React.createElement(FormPFSelect, { onSelect: function (_, val) { return setValue("disk.".concat(diskType, ".bus"), val); }, selected: diskInterface, selectedLabel: selectedLabel, toggleProps: { isDisabled: isVMRunning, isFullWidth: true } }, Object.entries(diskInterfaceOptions).map(function (_a) {
                var id = _a[0], _b = _a[1], description = _b.description, label = _b.label;
                var isDisabled = diskType === diskTypes.cdrom && id === InterfaceTypes.VIRTIO;
                return (React.createElement(SelectOption, { "data-test-id": "disk-interface-select-".concat(id), description: description, isDisabled: isDisabled, key: id, value: id }, label));
            })),
            React.createElement(FormGroupHelperText, null, t('Hot plug is enabled only for "SCSI" interface')))));
};
export default DiskInterfaceSelect;
//# sourceMappingURL=DiskInterfaceSelect.js.map