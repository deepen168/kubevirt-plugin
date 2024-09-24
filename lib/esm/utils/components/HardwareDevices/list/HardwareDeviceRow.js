import * as React from 'react';
import { TableData } from '@openshift-console/dynamic-plugin-sdk';
import { Button } from '@patternfly/react-core';
import { MinusCircleIcon } from '@patternfly/react-icons';
var HardwareDeviceRow = function (_a) {
    var activeColumnIDs = _a.activeColumnIDs, device = _a.obj, handleRemoveDevice = _a.rowData.handleRemoveDevice;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-20", id: "name" }, device.name),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-30", id: "deviceName" }, device.deviceName),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-v5-c-table__action", id: "" },
            React.createElement(Button, { onClick: function () { return handleRemoveDevice(device); }, variant: "plain" },
                React.createElement(MinusCircleIcon, null)))));
};
export default HardwareDeviceRow;
//# sourceMappingURL=HardwareDeviceRow.js.map