import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { FEATURE_HCO_PERSISTENT_RESERVATION } from '@kubevirt-utils/hooks/useFeatures/constants';
import { useFeatures } from '@kubevirt-utils/hooks/useFeatures/useFeatures';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { diskTypes } from '@kubevirt-utils/resources/vm/utils/disk/constants';
import { getDiskDrive } from '@kubevirt-utils/resources/vm/utils/disk/selectors';
import { Checkbox, ExpandableSection, Split, Stack, StackItem } from '@patternfly/react-core';
import { LUN_RESERVATION_FIELD, SHARABLE_FIELD } from '../utils/constants';
import { getDiskSharable, getLunReservation } from '../utils/selectors';
var AdvancedSettings = function () {
    var _a;
    var t = useKubevirtTranslation().t;
    var _b = useFormContext(), control = _b.control, setValue = _b.setValue, watch = _b.watch;
    var disk = watch('disk');
    var diskType = getDiskDrive(disk);
    var sharable = getDiskSharable(disk);
    var lunReservation = getLunReservation(disk);
    var featureEnabled = useFeatures(FEATURE_HCO_PERSISTENT_RESERVATION).featureEnabled;
    var isLunType = diskType === diskTypes.lun;
    return (React.createElement(ExpandableSection, { toggleText: t('Advanced settings') },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null,
                React.createElement(Split, { hasGutter: true },
                    React.createElement(Controller, { render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, value = _b.value;
                            return (React.createElement(Checkbox, { id: "sharable-disk", isChecked: value || isLunType, isDisabled: lunReservation || isLunType, label: t('Share this disk between multiple VirtualMachines'), onChange: function (_event, checked) { return onChange(checked); } }));
                        }, control: control, name: SHARABLE_FIELD }),
                    React.createElement(HelpTextIcon, { bodyContent: t('Allows concurrent access by multiple VirtualMachines') }))),
            React.createElement(StackItem, null,
                React.createElement(Split, { hasGutter: true },
                    React.createElement(Checkbox, { id: "lun-reservation", isChecked: (_a = disk === null || disk === void 0 ? void 0 : disk.lun) === null || _a === void 0 ? void 0 : _a.reservation, isDisabled: sharable || !isLunType || !featureEnabled, label: t('Set SCSI reservation for disk'), onChange: function (_event, checked) { return setValue(LUN_RESERVATION_FIELD, checked); } }),
                    React.createElement(HelpTextIcon, { bodyContent: t('The disk must be attached to the VirtualMAchine as a SCSI LUN for this option to work. It should only be used for cluster-aware applications') }))))));
};
export default AdvancedSettings;
//# sourceMappingURL=AdvancedSettings.js.map