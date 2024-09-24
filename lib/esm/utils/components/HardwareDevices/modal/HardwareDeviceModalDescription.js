import * as React from 'react';
import { Trans } from 'react-i18next';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Text, TextVariants } from '@patternfly/react-core';
import { HARDWARE_DEVICE_TYPE } from '../utils/constants';
var HardwareDeviceModalDescription = function (_a) {
    var type = _a.type;
    var t = useKubevirtTranslation().t;
    return (React.createElement(Text, { className: "text-muted", component: TextVariants.p },
        React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
            "Enter a name for the device to be assigned and select it from the dropdown menu. Click",
            ' ',
            React.createElement("b", null, " Save"),
            ".",
            React.createElement("br", null),
            " Click",
            ' ',
            React.createElement("b", null,
                "+ Add ",
                { hardwareType: type === HARDWARE_DEVICE_TYPE.GPUS ? 'GPU' : 'Host' },
                " device"),
            ' ',
            "to add another devices.")));
};
export default HardwareDeviceModalDescription;
//# sourceMappingURL=HardwareDeviceModalDescription.js.map