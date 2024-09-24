import * as React from 'react';
import HardwareDevicesTable from '@kubevirt-utils/components/HardwareDevices/HardwareDevicesTable';
import HardwareDeviceTitle from '@kubevirt-utils/components/HardwareDevices/HardwareDeviceTitle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { DescriptionList, DescriptionListDescription, DescriptionListGroup, } from '@patternfly/react-core';
var HardwareDevices = function (_a) {
    var devices = _a.devices;
    var t = useKubevirtTranslation().t;
    return (React.createElement(DescriptionList, { className: "pf-c-description-list" },
        React.createElement(DescriptionListGroup, null,
            React.createElement(HardwareDeviceTitle, { canEdit: false, title: t('GPU devices') }),
            React.createElement(DescriptionListDescription, null,
                React.createElement(HardwareDevicesTable, { devices: devices === null || devices === void 0 ? void 0 : devices.gpus }))),
        React.createElement(DescriptionListGroup, null,
            React.createElement(HardwareDeviceTitle, { canEdit: false, title: t('Host devices') }),
            React.createElement(DescriptionListDescription, null,
                React.createElement(HardwareDevicesTable, { devices: devices === null || devices === void 0 ? void 0 : devices.hostDevices })))));
};
export default HardwareDevices;
//# sourceMappingURL=HardwareDevices.js.map