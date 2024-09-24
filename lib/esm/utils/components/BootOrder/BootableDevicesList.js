import * as React from 'react';
import TemplateValue from '@kubevirt-utils/components/TemplateValue/TemplateValue';
import { List, ListComponent, ListItem, OrderType } from '@patternfly/react-core';
var BootableDevicesList = function (_a) {
    var devices = _a.devices;
    return (React.createElement(List, { component: ListComponent.ol, type: OrderType.number }, devices === null || devices === void 0 ? void 0 : devices.map(function (device) {
        var _a, _b, _c;
        return (React.createElement(ListItem, { key: "".concat((_a = device === null || device === void 0 ? void 0 : device.value) === null || _a === void 0 ? void 0 : _a.name, "-").concat((_b = device === null || device === void 0 ? void 0 : device.value) === null || _b === void 0 ? void 0 : _b.bootOrder) },
            React.createElement(TemplateValue, { value: (_c = device === null || device === void 0 ? void 0 : device.value) === null || _c === void 0 ? void 0 : _c.name })));
    })));
};
export default BootableDevicesList;
//# sourceMappingURL=BootableDevicesList.js.map