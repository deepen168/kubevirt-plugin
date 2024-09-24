import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom-v5-compat';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Checkbox, Flex, FlexItem, FormGroup, PopoverPosition } from '@patternfly/react-core';
import { ENABLE_PREALLOCATION_FIELDID, ENALBE_PREACCLOCATION_FIELD } from '../utils/constants';
var EnablePreallocationCheckbox = function (_a) {
    var isDisabled = _a.isDisabled;
    var t = useKubevirtTranslation().t;
    var control = useFormContext().control;
    return (React.createElement(FormGroup, { fieldId: ENABLE_PREALLOCATION_FIELDID },
        React.createElement(Flex, null,
            React.createElement(FlexItem, null,
                React.createElement(Controller, { render: function (_a) {
                        var _b = _a.field, onChange = _b.onChange, value = _b.value;
                        return (React.createElement(Checkbox, { id: ENABLE_PREALLOCATION_FIELDID, isChecked: value, isDisabled: isDisabled, label: t('Enable preallocation'), onChange: function (_, checked) { return onChange(checked); } }));
                    }, control: control, name: ENALBE_PREACCLOCATION_FIELD })),
            React.createElement(FlexItem, null,
                React.createElement(HelpTextIcon, { bodyContent: React.createElement(React.Fragment, null,
                        React.createElement(Trans, { ns: "plugin__kubevirt-plugin" },
                            "Refer to the",
                            React.createElement(Link, { to: {
                                    pathname: 'https://docs.openshift.com/container-platform/4.15/virt/storage/virt-using-preallocation-for-datavolumes.html',
                                }, target: "_blank" },
                                ' ',
                                "Documentation",
                                ' '),
                            "or contact your system administrator for more information. Enabling preallocation is available only for DataVolumes.")), position: PopoverPosition.right })))));
};
export default EnablePreallocationCheckbox;
//# sourceMappingURL=EnablePreallocationCheckbox.js.map