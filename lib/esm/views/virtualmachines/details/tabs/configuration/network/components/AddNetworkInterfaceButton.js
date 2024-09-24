import React from 'react';
import classNames from 'classnames';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import WithPermissionTooltip from '@kubevirt-utils/components/WithPermissionTooltip/WithPermissionTooltip';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import usePermissions from '@kubevirt-utils/hooks/usePermissions/usePermissions';
import { ListPageCreateButton } from '@openshift-console/dynamic-plugin-sdk';
import VirtualMachinesNetworkInterfaceModal from './modal/VirtualMachinesNetworkInterfaceModal';
var AddNetworkInterfaceButton = function (_a) {
    var _b;
    var onAddNetworkInterface = _a.onAddNetworkInterface, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var capabilitiesData = usePermissions().capabilitiesData;
    var isAddNetworkDisabled = !((_b = capabilitiesData === null || capabilitiesData === void 0 ? void 0 : capabilitiesData.attacheNetworks) === null || _b === void 0 ? void 0 : _b.allowed);
    var actionText = t('Add network interface');
    return (React.createElement(WithPermissionTooltip, { allowed: !isAddNetworkDisabled },
        React.createElement(ListPageCreateButton, { onClick: function () {
                return !isAddNetworkDisabled &&
                    createModal(function (_a) {
                        var isOpen = _a.isOpen, onClose = _a.onClose;
                        return (React.createElement(VirtualMachinesNetworkInterfaceModal, { headerText: actionText, isOpen: isOpen, onAddNetworkInterface: onAddNetworkInterface, onClose: onClose, vm: vm, vmi: vmi }));
                    });
            }, className: classNames('add-network-interface-button', { isDisabled: isAddNetworkDisabled }) }, actionText)));
};
export default AddNetworkInterfaceButton;
//# sourceMappingURL=AddNetworkInterfaceButton.js.map