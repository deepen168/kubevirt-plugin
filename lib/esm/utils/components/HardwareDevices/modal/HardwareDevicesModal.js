var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState } from 'react';
import { produceVMDevices } from '@catalog/utils/WizardVMContext';
import ModalPendingChangesAlert from '@kubevirt-utils/components/PendingChanges/ModalPendingChangesAlert/ModalPendingChangesAlert';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { generatePrettyName, isEmpty } from '@kubevirt-utils/utils/utils';
import { Button, ButtonVariant, Form, FormGroup, Grid, GridItem } from '@patternfly/react-core';
import { MinusCircleIcon, PlusCircleIcon } from '@patternfly/react-icons';
import DeviceNameSelect from '../form/DeviceNameSelect';
import NameFormField from '../form/NameFormField';
import useHCPermittedHostDevices from '../hooks/useHCPermittedHostDevices';
import { getInitialDevices } from '../utils/helpers';
import HardwareDeviceModalDescription from './HardwareDeviceModalDescription';
import '../hardware-devices-table.scss';
var HardwareDevicesModal = function (_a) {
    var btnText = _a.btnText, headerText = _a.headerText, initialDevices = _a.initialDevices, isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, type = _a.type, vm = _a.vm, vmi = _a.vmi;
    var _b = useState(getInitialDevices(initialDevices, type)), devices = _b[0], setDevices = _b[1];
    var permittedHostDevices = useHCPermittedHostDevices().permittedHostDevices;
    var onAddDevice = function () {
        setDevices(function (listDevices) { return __spreadArray(__spreadArray([], listDevices, true), [
            { deviceIndex: devices.length, deviceName: '', name: generatePrettyName(type) },
        ], false); });
    };
    var onDelete = function (index) {
        setDevices(function (listDevices) {
            return listDevices === null || listDevices === void 0 ? void 0 : listDevices.filter(function (device) { return (device === null || device === void 0 ? void 0 : device.deviceIndex) !== index; }).map(function (device, deviceIndex) { return (__assign(__assign({}, device), { deviceIndex: deviceIndex })); });
        });
    };
    var disableSubmit = devices.some(function (device) { return isEmpty(device === null || device === void 0 ? void 0 : device.deviceName); });
    var updatedVM = produceVMDevices(vm, function (vmDraft) {
        vmDraft.spec.template.spec.domain.devices[type] = !isEmpty(devices) ? devices : null;
    });
    return (React.createElement(TabModal, { headerText: headerText, isDisabled: disableSubmit, isOpen: isOpen, obj: updatedVM, onClose: onClose, onSubmit: onSubmit },
        vmi && React.createElement(ModalPendingChangesAlert, null),
        React.createElement(Form, null,
            React.createElement(HardwareDeviceModalDescription, { type: type }),
            devices.map(function (_a) {
                var deviceIndex = _a.deviceIndex, deviceName = _a.deviceName, name = _a.name;
                return (React.createElement(Grid, { hasGutter: true, key: deviceIndex },
                    React.createElement(GridItem, { span: 5 },
                        React.createElement(NameFormField, { setName: function (newName) {
                                setDevices(function (prevDevices) {
                                    var newDevices = __spreadArray([], prevDevices, true);
                                    newDevices[deviceIndex] = __assign(__assign({}, newDevices[deviceIndex]), { name: newName });
                                    return newDevices;
                                });
                            }, index: deviceIndex, name: name })),
                    React.createElement(GridItem, { span: 5 },
                        React.createElement(DeviceNameSelect, { setDeviceName: function (newDeviceName) {
                                setDevices(function (prevDevices) {
                                    var newDevices = __spreadArray([], prevDevices, true);
                                    newDevices[deviceIndex] = __assign(__assign({}, newDevices[deviceIndex]), { deviceName: newDeviceName });
                                    return newDevices;
                                });
                            }, deviceName: deviceName, index: deviceIndex, permittedHostDevices: permittedHostDevices })),
                    React.createElement(GridItem, { className: "hardware-devices-form-button", span: 2 },
                        React.createElement(Button, { onClick: function () { return onDelete(deviceIndex); }, variant: ButtonVariant.plain },
                            React.createElement(MinusCircleIcon, null)))));
            }),
            React.createElement(FormGroup, { fieldId: "add-button" },
                React.createElement(Button, { className: "pf-m-link--align-left", icon: React.createElement(PlusCircleIcon, null), onClick: onAddDevice, variant: "link" }, btnText)))));
};
export default HardwareDevicesModal;
//# sourceMappingURL=HardwareDevicesModal.js.map