import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Checkbox, Flex, FlexItem, InputGroup, InputGroupItem, InputGroupText, Popover, StackItem, TextInput, } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import './grace-period-input.scss';
export var GracePeriodInput = function (_a) {
    var gracePeriodSeconds = _a.gracePeriodSeconds, isChecked = _a.isChecked, onCheckboxChange = _a.onCheckboxChange, setGracePeriodSeconds = _a.setGracePeriodSeconds;
    var t = useKubevirtTranslation().t;
    return (React.createElement(StackItem, null,
        React.createElement(Flex, { alignItems: { default: 'alignItemsCenter' }, className: "grace-period-input", spaceItems: { default: 'spaceItemsXs' } },
            React.createElement(FlexItem, null,
                React.createElement(Checkbox, { id: "grace-period-checkbox", isChecked: isChecked, label: t('With grace period'), onChange: function (_, checked) { return onCheckboxChange(checked); } })),
            React.createElement(FlexItem, null,
                React.createElement(Popover, { bodyContent: React.createElement("div", null, t('The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.')) },
                    React.createElement(HelpIcon, null))),
            isChecked && (React.createElement(FlexItem, null,
                React.createElement(InputGroup, null,
                    React.createElement(InputGroupItem, { isFill: true },
                        React.createElement(TextInput, { onChange: function (_event, value) {
                                return setGracePeriodSeconds(isEmpty(value) ? null : parseInt(value));
                            }, "aria-label": t('seconds'), "data-test": "grace-period-seconds-input", min: 0, type: "number", value: gracePeriodSeconds })),
                    React.createElement(InputGroupText, null, t('seconds'))))))));
};
//# sourceMappingURL=GracePeriodInput.js.map