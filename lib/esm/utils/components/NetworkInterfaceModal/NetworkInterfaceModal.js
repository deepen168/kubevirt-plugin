import React, { useCallback, useState } from 'react';
import NICHotPlugModalAlert from '@kubevirt-utils/components/BridgedNICHotPlugModalAlert/NICHotPlugModalAlert';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { interfacesTypes, } from '@kubevirt-utils/resources/vm/utils/network/constants';
import { getNetworkInterfaceType } from '@kubevirt-utils/resources/vm/utils/network/selectors';
import { generatePrettyName } from '@kubevirt-utils/utils/utils';
import { ExpandableSection, Form } from '@patternfly/react-core';
import { isRunning } from '@virtualmachines/utils';
import NameFormField from './components/NameFormField';
import NetworkInterfaceMACAddressInput from './components/NetworkInterfaceMacAddressInput';
import NetworkInterfaceModelSelect from './components/NetworkInterfaceModelSelect';
import NetworkInterfaceNetworkSelect from './components/NetworkInterfaceNetworkSelect/NetworkInterfaceNetworkSelect';
import { interfaceModelType } from './utils/constants';
import { getNetworkName, podNetworkExists } from './utils/helpers';
import './NetworkInterfaceModal.scss';
var NetworkInterfaceModal = function (_a) {
    var _b = _a.fixedName, fixedName = _b === void 0 ? false : _b, _c = _a.Header, Header = _c === void 0 ? null : _c, headerText = _a.headerText, isOpen = _a.isOpen, namespace = _a.namespace, _d = _a.nicPresentation, nicPresentation = _d === void 0 ? { iface: null, network: null } : _d, onClose = _a.onClose, onSubmit = _a.onSubmit, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var _e = nicPresentation.iface, iface = _e === void 0 ? null : _e, _f = nicPresentation.network, network = _f === void 0 ? null : _f;
    var _g = useState((network === null || network === void 0 ? void 0 : network.name) || generatePrettyName('nic')), nicName = _g[0], setNicName = _g[1];
    var _h = useState((iface === null || iface === void 0 ? void 0 : iface.model) || interfaceModelType.VIRTIO), interfaceModel = _h[0], setInterfaceModel = _h[1];
    var _j = useState(getNetworkName(network)), networkName = _j[0], setNetworkName = _j[1];
    var _k = useState(interfacesTypes[getNetworkInterfaceType(iface)] ||
        (podNetworkExists(vm) ? null : interfacesTypes.masquerade)), interfaceType = _k[0], setInterfaceType = _k[1];
    var _l = useState(iface === null || iface === void 0 ? void 0 : iface.macAddress), interfaceMACAddress = _l[0], setInterfaceMACAddress = _l[1];
    var _m = useState(true), submitDisabled = _m[0], setSubmitDisabled = _m[1];
    var _o = useState(false), isExpanded = _o[0], setIsExpanded = _o[1];
    var onSubmitModal = useCallback(function () {
        return (onSubmit &&
            onSubmit({ interfaceMACAddress: interfaceMACAddress, interfaceModel: interfaceModel, interfaceType: interfaceType, networkName: networkName, nicName: nicName }));
    }, [nicName, networkName, interfaceModel, interfaceMACAddress, interfaceType, onSubmit]);
    var isHotPlugNIC = interfaceType === interfacesTypes.bridge || interfaceType === interfacesTypes.sriov;
    var vmIsRunning = isRunning(vm);
    var showRestartHeader = !isHotPlugNIC;
    var showRestartOrMigrateHeader = vmIsRunning && isHotPlugNIC;
    return (React.createElement(TabModal, { headerText: headerText, isDisabled: submitDisabled, isOpen: isOpen, obj: vm, onClose: onClose, onSubmit: onSubmitModal() },
        React.createElement(Form, null,
            showRestartHeader && Header,
            showRestartOrMigrateHeader && React.createElement(NICHotPlugModalAlert, null),
            React.createElement(NameFormField, { isDisabled: fixedName, objName: nicName, setObjName: setNicName }),
            React.createElement(NetworkInterfaceModelSelect, { interfaceModel: interfaceModel, setInterfaceModel: setInterfaceModel }),
            React.createElement(NetworkInterfaceNetworkSelect, { iface: iface, interfaceType: interfaceType, isEditing: Boolean(network) && Boolean(iface), namespace: namespace, networkName: networkName, setInterfaceType: setInterfaceType, setNetworkName: setNetworkName, setSubmitDisabled: setSubmitDisabled, vm: vm }),
            React.createElement(ExpandableSection, { className: "NetworkInterfaceModal__advanced", isExpanded: isExpanded, onToggle: function (_, expand) { return setIsExpanded(expand); }, toggleText: t('Advanced') },
                React.createElement(NetworkInterfaceMACAddressInput, { interfaceMACAddress: interfaceMACAddress, isDisabled: !networkName, setInterfaceMACAddress: setInterfaceMACAddress, setIsError: setSubmitDisabled })))));
};
export default NetworkInterfaceModal;
//# sourceMappingURL=NetworkInterfaceModal.js.map