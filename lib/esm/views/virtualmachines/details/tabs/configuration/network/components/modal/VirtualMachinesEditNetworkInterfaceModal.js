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
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getInterfaces, getNetworks } from '@kubevirt-utils/resources/vm';
var VirtualMachinesEditNetworkInterfaceModal = function (_a) {
    var isOpen = _a.isOpen, nicPresentation = _a.nicPresentation, onClose = _a.onClose, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var onSubmit = useCallback(function (_a) {
        var interfaceMACAddress = _a.interfaceMACAddress, interfaceModel = _a.interfaceModel, interfaceType = _a.interfaceType, networkName = _a.networkName, nicName = _a.nicName;
        return function () {
            var _a, _b;
            var resultNetwork = createNetwork(nicName, networkName);
            var resultInterface = createInterface(nicName, interfaceModel, interfaceMACAddress, interfaceType);
            var updatedNetworks = __spreadArray(__spreadArray([], (((_a = getNetworks(vm)) === null || _a === void 0 ? void 0 : _a.filter(function (_a) {
                var _b;
                var name = _a.name;
                return name !== ((_b = nicPresentation === null || nicPresentation === void 0 ? void 0 : nicPresentation.network) === null || _b === void 0 ? void 0 : _b.name);
            })) || []), true), [
                resultNetwork,
            ], false);
            var updatedInterfaces = __spreadArray(__spreadArray([], (((_b = getInterfaces(vm)) === null || _b === void 0 ? void 0 : _b.filter(function (_a) {
                var _b;
                var name = _a.name;
                return name !== ((_b = nicPresentation === null || nicPresentation === void 0 ? void 0 : nicPresentation.network) === null || _b === void 0 ? void 0 : _b.name);
            })) ||
                []), true), [
                resultInterface,
            ], false);
            return updateVMNetworkInterfaces(vm, updatedNetworks, updatedInterfaces);
        };
    }, [vm, nicPresentation]);
    return (React.createElement(NetworkInterfaceModal, { fixedName: true, headerText: t('Edit network interface'), isOpen: isOpen, nicPresentation: nicPresentation, onClose: onClose, onSubmit: onSubmit, vm: vm }));
};
export default VirtualMachinesEditNetworkInterfaceModal;
//# sourceMappingURL=VirtualMachinesEditNetworkInterfaceModal.js.map