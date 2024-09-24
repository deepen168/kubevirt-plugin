import React, { useState } from 'react';
import produce from 'immer';
import ModalPendingChangesAlert from '@kubevirt-utils/components/PendingChanges/ModalPendingChangesAlert/ModalPendingChangesAlert';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getDisks, getInterfaces } from '@kubevirt-utils/resources/vm';
import { DeviceType, transformDevices, } from '@kubevirt-utils/resources/vm/utils/boot-order/bootOrder';
import { ensurePath } from '@kubevirt-utils/utils/utils';
import TabModal from '../TabModal/TabModal';
import { BootOrderModalBody } from './BootOrderModalBody';
import './boot-order.scss';
var BootOrderModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var transformedDevices = transformDevices(getDisks(vm), getInterfaces(vm));
    var _b = useState(transformedDevices.sort(function (a, b) { return a.value.bootOrder - b.value.bootOrder; })), devices = _b[0], setDevices = _b[1];
    var _c = useState(transformedDevices.some(function (device) { return !!device.value.bootOrder; })), isEditMode = _c[0], setIsEditMode = _c[1];
    var updatedVirtualMachine = produce(vm, function (draftVM) {
        ensurePath(draftVM, ['spec.template.spec.domain.devices']);
        draftVM.spec.template.spec.domain.devices.disks = devices
            .filter(function (source) { return source.type === DeviceType.DISK; })
            .map(function (source) { return source.value; });
        draftVM.spec.template.spec.domain.devices.interfaces = devices
            .filter(function (source) { return source.type === DeviceType.NIC; })
            .map(function (source) { return source.value; });
    });
    return (React.createElement(TabModal, { headerText: t('VirtualMachine boot order'), isOpen: isOpen, onClose: onClose, onSubmit: function () { return onSubmit(updatedVirtualMachine); } },
        vmi && React.createElement(ModalPendingChangesAlert, null),
        React.createElement(BootOrderModalBody, { changeEditMode: function (v) { return setIsEditMode(v); }, devices: devices, isEditMode: isEditMode, onChange: setDevices })));
};
export default BootOrderModal;
//# sourceMappingURL=BootOrderModal.js.map