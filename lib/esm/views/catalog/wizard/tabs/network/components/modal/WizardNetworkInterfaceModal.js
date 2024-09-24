import React, { useCallback } from 'react';
import { produceVMNetworks } from '@catalog/utils/WizardVMContext';
import NetworkInterfaceModal from '@kubevirt-utils/components/NetworkInterfaceModal/NetworkInterfaceModal';
import { createInterface, createNetwork, } from '@kubevirt-utils/components/NetworkInterfaceModal/utils/helpers';
var WizardNetworkInterfaceModal = function (_a) {
    var headerText = _a.headerText, isOpen = _a.isOpen, onClose = _a.onClose, updateVM = _a.updateVM, vm = _a.vm;
    var onSubmit = useCallback(function (_a) {
        var interfaceMACAddress = _a.interfaceMACAddress, interfaceModel = _a.interfaceModel, interfaceType = _a.interfaceType, networkName = _a.networkName, nicName = _a.nicName;
        return function (currentVM) {
            var resultNetwork = createNetwork(nicName, networkName);
            var resultInterface = createInterface(nicName, interfaceModel, interfaceMACAddress, interfaceType);
            var networkProducer = produceVMNetworks(currentVM, function (draft) {
                draft.spec.template.spec.domain.devices.interfaces.push(resultInterface);
                draft.spec.template.spec.networks.push(resultNetwork);
            });
            return updateVM(networkProducer);
        };
    }, [updateVM]);
    return (React.createElement(NetworkInterfaceModal, { headerText: headerText, isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, vm: vm }));
};
export default WizardNetworkInterfaceModal;
//# sourceMappingURL=WizardNetworkInterfaceModal.js.map