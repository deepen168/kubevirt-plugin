import * as React from 'react';
import classnames from 'classnames';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { DescriptionList, Stack, StackItem } from '@patternfly/react-core';
import VirtualMachineDescriptionItem from '../VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import './hardware-devices-table.scss';
var HardwareDevicesTable = function (_a) {
    var devices = _a.devices;
    var t = useKubevirtTranslation().t;
    if (!(devices === null || devices === void 0 ? void 0 : devices.length))
        return React.createElement("span", { className: "text-muted" }, t('Not available'));
    return (React.createElement(DescriptionList, { className: classnames('pf-c-description-list', 'hardware-devices-table'), columnModifier: { default: '2Col' } },
        React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(Stack, null, devices.map(function (device) { return (React.createElement(StackItem, { key: "".concat(device === null || device === void 0 ? void 0 : device.name, "-").concat(device === null || device === void 0 ? void 0 : device.deviceName) }, device.deviceName)); })), descriptionHeader: t('Name') }),
        React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(Stack, null, devices.map(function (device) { return (React.createElement(StackItem, { key: device.name }, device.name)); })), descriptionHeader: t('Device name') })));
};
export default HardwareDevicesTable;
//# sourceMappingURL=HardwareDevicesTable.js.map