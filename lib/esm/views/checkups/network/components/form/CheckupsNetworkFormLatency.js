import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, ButtonVariant, Checkbox, Flex, FormGroup, Popover, PopoverPosition, TextInput, } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
var CheckupsNetworkFormLatency = function (_a) {
    var desiredLatency = _a.desiredLatency, isDesiredLatency = _a.isDesiredLatency, setDesiredLatency = _a.setDesiredLatency, setIsDesiredLatency = _a.setIsDesiredLatency;
    var t = useKubevirtTranslation().t;
    return (React.createElement(FormGroup, { fieldId: "desired-latency" },
        React.createElement(Flex, null,
            React.createElement(Checkbox, { id: "desired-latency", isChecked: isDesiredLatency, label: t('Set maximum desired latency (milliseconds)'), name: "desired-latency", onChange: function (_event, check) { return setIsDesiredLatency(check); } }),
            React.createElement(Popover, { bodyContent: t('If the measured latency exceeds this value, the checkup fails.'), position: PopoverPosition.right },
                React.createElement(Button, { variant: ButtonVariant.plain },
                    React.createElement(HelpIcon, null)))),
        isDesiredLatency && (React.createElement(TextInput, { className: "CheckupsNetworkForm--main__number-input", id: "desired-latency-value", name: "desired-latency-value", onChange: function (_event, value) { return setDesiredLatency(value); }, type: "number", value: desiredLatency }))));
};
export default CheckupsNetworkFormLatency;
//# sourceMappingURL=CheckupsNetworkFormLatency.js.map