import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getGPUDevices, getHostDevices } from '@kubevirt-utils/resources/vm';
import { DescriptionList, DescriptionListDescription, DescriptionListGroup, } from '@patternfly/react-core';
import { useModal } from '../ModalProvider/ModalProvider';
import HardwareDevicesModal from './modal/HardwareDevicesModal';
import { HARDWARE_DEVICE_TYPE } from './utils/constants';
import HardwareDevicesHeadlessMode from './HardwareDevicesHeadlessMode';
import HardwareDevicesTable from './HardwareDevicesTable';
import HardwareDeviceTitle from './HardwareDeviceTitle';
var HardwareDevices = function (_a) {
    var _b = _a.canEdit, canEdit = _b === void 0 ? true : _b, _c = _a.hideEdit, hideEdit = _c === void 0 ? false : _c, onSubmit = _a.onSubmit, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var hostDevices = getHostDevices(vm);
    var gpus = getGPUDevices(vm);
    var onEditGPU = function () {
        createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(HardwareDevicesModal, { btnText: t('Add GPU device'), headerText: t('GPU devices'), initialDevices: gpus, isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, type: HARDWARE_DEVICE_TYPE.GPUS, vm: vm, vmi: vmi }));
        });
    };
    var onEditHostDevices = function () {
        createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(HardwareDevicesModal, { btnText: t('Add Host device'), headerText: t('Host devices'), initialDevices: hostDevices, isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, type: HARDWARE_DEVICE_TYPE.HOST_DEVICES, vm: vm, vmi: vmi }));
        });
    };
    return (React.createElement(DescriptionList, { className: "pf-c-description-list" },
        React.createElement(DescriptionListGroup, { className: "pf-c-description-list__group" },
            React.createElement(HardwareDeviceTitle, { canEdit: canEdit, hideEdit: hideEdit, onClick: onEditGPU, title: t('GPU devices') }),
            React.createElement(DescriptionListDescription, { className: "pf-c-description-list__description" },
                React.createElement(HardwareDevicesTable, { devices: gpus }))),
        React.createElement(DescriptionListGroup, { className: "pf-c-description-list__group" },
            React.createElement(HardwareDeviceTitle, { canEdit: canEdit, hideEdit: hideEdit, onClick: onEditHostDevices, title: t('Host devices') }),
            React.createElement(DescriptionListDescription, { className: "pf-c-description-list__description" },
                React.createElement(HardwareDevicesTable, { devices: hostDevices }))),
        canEdit && !hideEdit && React.createElement(HardwareDevicesHeadlessMode, { onSubmit: onSubmit, vm: vm })));
};
export default HardwareDevices;
//# sourceMappingURL=HardwareDevices.js.map