var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useCallback } from 'react';
import NetworkInterfaceModal from '@kubevirt-utils/components/NetworkInterfaceModal/NetworkInterfaceModal';
import { createInterface, createNetwork, updateVMNetworkInterfaces, } from '@kubevirt-utils/components/NetworkInterfaceModal/utils/helpers';
import ModalPendingChangesAlert from '@kubevirt-utils/components/PendingChanges/ModalPendingChangesAlert/ModalPendingChangesAlert';
import { getInterfaces, getNetworks } from '@kubevirt-utils/resources/vm';
var VirtualMachinesNetworkInterfaceModal = function (_a) {
    var headerText = _a.headerText, isOpen = _a.isOpen, onAddNetworkInterface = _a.onAddNetworkInterface, onClose = _a.onClose, vm = _a.vm, vmi = _a.vmi;
    var onSubmit = useCallback(function (_a) {
        var interfaceMACAddress = _a.interfaceMACAddress, interfaceModel = _a.interfaceModel, interfaceType = _a.interfaceType, networkName = _a.networkName, nicName = _a.nicName;
        return function () {
            var resultNetwork = createNetwork(nicName, networkName);
            var resultInterface = createInterface(nicName, interfaceModel, interfaceMACAddress, interfaceType);
            var updatedNetworks = __spreadArray(__spreadArray([], (getNetworks(vm) || []), true), [resultNetwork], false);
            var updatedInterfaces = __spreadArray(__spreadArray([], (getInterfaces(vm) || []), true), [resultInterface], false);
            return onAddNetworkInterface
                ? onAddNetworkInterface(updatedNetworks, updatedInterfaces)
                : updateVMNetworkInterfaces(vm, updatedNetworks, updatedInterfaces);
        };
    }, [onAddNetworkInterface, vm]);
    return (React.createElement(NetworkInterfaceModal, { Header: vmi && React.createElement(ModalPendingChangesAlert, null), headerText: headerText, isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, vm: vm }));
};
export default VirtualMachinesNetworkInterfaceModal;
//# sourceMappingURL=VirtualMachinesNetworkInterfaceModal.js.map