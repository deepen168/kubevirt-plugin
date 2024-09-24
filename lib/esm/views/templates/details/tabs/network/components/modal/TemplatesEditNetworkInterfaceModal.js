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
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import NetworkInterfaceModal from '@kubevirt-utils/components/NetworkInterfaceModal/NetworkInterfaceModal';
import { createInterface, createNetwork, } from '@kubevirt-utils/components/NetworkInterfaceModal/utils/helpers';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { produceTemplateNetwork } from '../../utils';
var TemplatesEditNetworkInterfaceModal = function (_a) {
    var _b;
    var isOpen = _a.isOpen, nicPresentation = _a.nicPresentation, onClose = _a.onClose, template = _a.template;
    var t = useKubevirtTranslation().t;
    var vm = getTemplateVirtualMachineObject(template);
    var onSubmit = function (_a) {
        var interfaceMACAddress = _a.interfaceMACAddress, interfaceModel = _a.interfaceModel, interfaceType = _a.interfaceType, networkName = _a.networkName, nicName = _a.nicName;
        return function () {
            var _a, _b;
            var resultNetwork = createNetwork(nicName, networkName);
            var resultInterface = createInterface(nicName, interfaceModel, interfaceMACAddress, interfaceType);
            var updatedTemplate = produceTemplateNetwork(template, function (draftVM) {
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
            return k8sUpdate({
                data: updatedTemplate,
                model: TemplateModel,
                name: (_a = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _a === void 0 ? void 0 : _a.name,
                ns: (_b = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
            });
        };
    };
    return (React.createElement(NetworkInterfaceModal, { headerText: t('Edit network interface'), isOpen: isOpen, namespace: (_b = template === null || template === void 0 ? void 0 : template.metadata) === null || _b === void 0 ? void 0 : _b.namespace, nicPresentation: nicPresentation, onClose: onClose, onSubmit: onSubmit, vm: vm }));
};
export default TemplatesEditNetworkInterfaceModal;
//# sourceMappingURL=TemplatesEditNetworkInterfaceModal.js.map