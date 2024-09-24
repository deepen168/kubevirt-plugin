import React, { useState } from 'react';
import SelectToggle from '@kubevirt-utils/components/toggles/SelectToggle';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { FormGroup, GridItem } from '@patternfly/react-core';
import { Select, SelectGroup, SelectOption } from '@patternfly/react-core';
var DeviceNameSelect = function (_a) {
    var _b, _c;
    var deviceName = _a.deviceName, index = _a.index, permittedHostDevices = _a.permittedHostDevices, setDeviceName = _a.setDeviceName;
    var t = useKubevirtTranslation().t;
    var _d = useState(false), isOpen = _d[0], setIsOpen = _d[1];
    var onToggle = function () { return setIsOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    var onSelect = function (event, value) {
        setDeviceName(value);
        setIsOpen(false);
    };
    return (React.createElement(GridItem, { span: 5 },
        React.createElement(FormGroup, { fieldId: "deviceName", isRequired: true, label: !index && t('Device name') },
            React.createElement(Select, { toggle: SelectToggle({
                    isExpanded: isOpen,
                    isFullWidth: true,
                    onClick: onToggle,
                    selected: deviceName,
                }), id: "deviceName", isOpen: isOpen, onOpenChange: function (open) { return setIsOpen(open); }, onSelect: onSelect, popperProps: { appendTo: function () { return document.getElementById('tab-modal'); } }, selected: deviceName },
                !isEmpty(permittedHostDevices === null || permittedHostDevices === void 0 ? void 0 : permittedHostDevices.mediatedDevices) && (React.createElement(SelectGroup, { key: "mediated", label: t('Mediated devices') }, (_b = permittedHostDevices === null || permittedHostDevices === void 0 ? void 0 : permittedHostDevices.mediatedDevices) === null || _b === void 0 ? void 0 : _b.map(function (_a) {
                    var resourceName = _a.resourceName;
                    return (React.createElement(SelectOption, { key: resourceName, value: resourceName }, resourceName));
                }))),
                !isEmpty(permittedHostDevices === null || permittedHostDevices === void 0 ? void 0 : permittedHostDevices.pciHostDevices) && (React.createElement(SelectGroup, { key: "pciHost", label: t('PCI host devices') }, (_c = permittedHostDevices === null || permittedHostDevices === void 0 ? void 0 : permittedHostDevices.pciHostDevices) === null || _c === void 0 ? void 0 : _c.map(function (_a) {
                    var resourceName = _a.resourceName;
                    return (React.createElement(SelectOption, { key: resourceName, value: resourceName }, resourceName));
                }))),
                isEmpty(permittedHostDevices === null || permittedHostDevices === void 0 ? void 0 : permittedHostDevices.mediatedDevices) &&
                    isEmpty(permittedHostDevices === null || permittedHostDevices === void 0 ? void 0 : permittedHostDevices.pciHostDevices) && (React.createElement(SelectOption, { isDisabled: true, key: "noDevices" }, t('No host devices exists')))))));
};
export default DeviceNameSelect;
//# sourceMappingURL=DeviceNameSelect.js.map