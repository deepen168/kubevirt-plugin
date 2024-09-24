import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Checkbox, Flex, FlexItem, FormGroup, Popover } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
var CloneStorageCheckbox = function (_a) {
    var isChecked = _a.isChecked, onChange = _a.onChange;
    var t = useKubevirtTranslation().t;
    return (React.createElement(FormGroup, { fieldId: "clone-storage" },
        React.createElement(Flex, { alignItems: { default: 'alignItemsCenter' } },
            React.createElement(FlexItem, null,
                React.createElement(Checkbox, { id: "clone-storage", isChecked: isChecked, label: t("Copy template's boot source disk"), onChange: function (_, checked) { return onChange(checked); } })),
            React.createElement(FlexItem, null,
                React.createElement(Popover, { bodyContent: function () { return (React.createElement("div", null, t('Checking this option will create a new PVC of the bootsource for the new template'))); }, "aria-label": 'Help' },
                    React.createElement(HelpIcon, null))))));
};
export default CloneStorageCheckbox;
//# sourceMappingURL=CloneStorageCheckbox.js.map