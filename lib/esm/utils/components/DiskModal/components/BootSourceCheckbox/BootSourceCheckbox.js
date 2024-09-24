import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getBootDisk } from '@kubevirt-utils/resources/vm';
import { Alert, AlertVariant, Checkbox, FormGroup, PopoverPosition, Split, Stack, } from '@patternfly/react-core';
import { IS_BOOT_SOURCE_FIELD } from '../utils/constants';
import './BootSourceCheckbox.scss';
var BootSourceCheckbox = function (_a) {
    var _b;
    var editDiskName = _a.editDiskName, isDisabled = _a.isDisabled, vm = _a.vm;
    var initialBootDiskName = (_b = getBootDisk(vm)) === null || _b === void 0 ? void 0 : _b.name;
    var isInitialBootDisk = initialBootDiskName === editDiskName;
    var t = useKubevirtTranslation().t;
    var _c = useFormContext(), control = _c.control, watch = _c.watch;
    var isBootSource = watch(IS_BOOT_SOURCE_FIELD);
    var showOverrideAlert = !isDisabled && isBootSource && !isInitialBootDisk;
    return (React.createElement(FormGroup, { fieldId: "enable-bootsource" },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(Split, { className: "enable-bootsource-checkbox", hasGutter: true },
                React.createElement(Controller, { render: function (_a) {
                        var _b = _a.field, onChange = _b.onChange, value = _b.value;
                        return (React.createElement(Checkbox, { id: "enable-bootsource", isChecked: value, isDisabled: isDisabled, label: t('Use this disk as a boot source'), onChange: onChange }));
                    }, control: control, name: IS_BOOT_SOURCE_FIELD }),
                React.createElement(HelpTextIcon, { bodyContent: t('Only one disk can be bootable at a time, this option is disabled if the VirtualMachine is running or if this disk is the current boot source'), position: PopoverPosition.right })),
            showOverrideAlert && (React.createElement(Alert, { isInline: true, title: t('Warning'), variant: AlertVariant.warning }, t('Only one disk can be bootable at a time. The bootable flag will be removed from "{{initialBootDiskName}}" and placed on this disk.', { initialBootDiskName: initialBootDiskName }))))));
};
export default BootSourceCheckbox;
//# sourceMappingURL=BootSourceCheckbox.js.map