import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Checkbox, Flex, FlexItem, FormGroup, Popover } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
var BootCDCheckbox = function (_a) {
    var hasCDSource = _a.hasCDSource, onChange = _a.onChange;
    var t = useKubevirtTranslation().t;
    return (React.createElement(FormGroup, { className: "disk-source-form-group", fieldId: "customize-boot-from-cd" },
        React.createElement(Flex, null,
            React.createElement(FlexItem, null,
                React.createElement(Checkbox, { "data-test-id": "boot-cd", id: "boot-cd", isChecked: hasCDSource, label: t('Boot from CD'), onChange: function (_, checked) { return onChange(checked); } })),
            React.createElement(FlexItem, null,
                React.createElement(Popover, { bodyContent: function () { return (React.createElement("div", null, t('Boot from CD requires an image file i.e. ISO, qcow, etc. that will be mounted to the VirtualMachine as a CD'))); }, "aria-label": 'Help' },
                    React.createElement(HelpIcon, null))))));
};
export default BootCDCheckbox;
//# sourceMappingURL=BootCDCheckboxLabel.js.map