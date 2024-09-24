import React, { useCallback } from 'react';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import NetworkInterfaceModal from '@kubevirt-utils/components/NetworkInterfaceModal/NetworkInterfaceModal';
import { createInterface, createNetwork, } from '@kubevirt-utils/components/NetworkInterfaceModal/utils/helpers';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { produceTemplateNetwork } from '../../utils';
var TemplatesNetworkInterfaceModal = function (_a) {
    var _b;
    var headerText = _a.headerText, isOpen = _a.isOpen, onClose = _a.onClose, template = _a.template;
    var vm = getTemplateVirtualMachineObject(template);
    var onSubmit = useCallback(function (_a) {
        var interfaceMACAddress = _a.interfaceMACAddress, interfaceModel = _a.interfaceModel, interfaceType = _a.interfaceType, networkName = _a.networkName, nicName = _a.nicName;
        return function () {
            var _a, _b;
            var resultNetwork = createNetwork(nicName, networkName);
            var resultInterface = createInterface(nicName, interfaceModel, interfaceMACAddress, interfaceType);
            var updatedTemplate = produceTemplateNetwork(template, function (draftVM) {
                draftVM.spec.template.spec.domain.devices.interfaces.push(resultInterface);
                draftVM.spec.template.spec.networks.push(resultNetwork);
            });
            return k8sUpdate({
                data: updatedTemplate,
                model: TemplateModel,
                name: (_a = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _a === void 0 ? void 0 : _a.name,
                ns: (_b = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
            });
        };
    }, [template]);
    return (React.createElement(NetworkInterfaceModal, { headerText: headerText, isOpen: isOpen, namespace: (_b = template === null || template === void 0 ? void 0 : template.metadata) === null || _b === void 0 ? void 0 : _b.namespace, onClose: onClose, onSubmit: onSubmit, vm: vm }));
};
export default TemplatesNetworkInterfaceModal;
//# sourceMappingURL=TemplatesNetworkInterfaceModal.js.map