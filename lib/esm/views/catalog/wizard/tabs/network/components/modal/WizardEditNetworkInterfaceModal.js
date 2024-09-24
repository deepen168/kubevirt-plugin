var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from 'react';
import { produceVMNetworks } from '@catalog/utils/WizardVMContext';
import NetworkInterfaceModal from '@kubevirt-utils/components/NetworkInterfaceModal/NetworkInterfaceModal';
import { createInterface, createNetwork, } from '@kubevirt-utils/components/NetworkInterfaceModal/utils/helpers';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var WizardEditNetworkInterfaceModal = function (_a) {
    var isOpen = _a.isOpen, nicPresentation = _a.nicPresentation, onClose = _a.onClose, updateVM = _a.updateVM, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var onSubmit = function (_a) {
        var interfaceMACAddress = _a.interfaceMACAddress, interfaceModel = _a.interfaceModel, interfaceType = _a.interfaceType, networkName = _a.networkName, nicName = _a.nicName;
        return function (currentVM) {
            var resultNetwork = createNetwork(nicName, networkName);
            var resultInterface = createInterface(nicName, interfaceModel, interfaceMACAddress, interfaceType);
            var networkProducer = produceVMNetworks(currentVM, function (draftVM) {
                draftVM.spec.template.spec.domain.devices.interfaces = __spreadArray(__spreadArray([], (draftVM.spec.template.spec.domain.devices.interfaces.filter(function (_a) {
                    var _b;
                    var name = _a.name;
                    return name !== ((_b = nicPresentation === null || nicPresentation === void 0 ? void 0 : nicPresentation.network) === null || _b === void 0 ? void 0 : _b.name);
                }) || []), true), [
                    resultInterface,
                ], false);
                draftVM.spec.template.spec.networks = __spreadArray(__spreadArray([], (draftVM.spec.template.spec.networks.filter(function (_a) {
                    var _b;
                    var name = _a.name;
                    return name !== ((_b = nicPresentation === null || nicPresentation === void 0 ? void 0 : nicPresentation.network) === null || _b === void 0 ? void 0 : _b.name);
                }) || []), true), [
                    resultNetwork,
                ], false);
            });
            return updateVM(networkProducer);
        };
    };
    return (React.createElement(NetworkInterfaceModal, { headerText: t('Edit network interface'), isOpen: isOpen, nicPresentation: nicPresentation, onClose: onClose, onSubmit: onSubmit, vm: vm }));
};
export default WizardEditNetworkInterfaceModal;
//# sourceMappingURL=WizardEditNetworkInterfaceModal.js.map