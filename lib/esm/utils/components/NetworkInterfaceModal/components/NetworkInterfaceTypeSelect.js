import React, { useMemo } from 'react';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { interfacesTypes } from '@kubevirt-utils/resources/vm/utils/network/constants';
import { FormGroup, SelectOption } from '@patternfly/react-core';
import { networkNameStartWithPod } from '../utils/helpers';
var NetworkInterfaceTypeSelect = function (_a) {
    var _b, _c;
    var interfaceType = _a.interfaceType, networkName = _a.networkName, setInterfaceType = _a.setInterfaceType, showTypeHelperText = _a.showTypeHelperText;
    var t = useKubevirtTranslation().t;
    var isPodNetworkName = useMemo(function () { return networkNameStartWithPod(networkName); }, [networkName]);
    var interfaceTypeOptions = {
        bridge: {
            // in case of NAD network, networkName should be a string - enabled if nad type is bridge or undefined or no nad
            allowOption: !isPodNetworkName &&
                (interfaceType === interfacesTypes.bridge || !interfaceType || !networkName),
            description: t('The VirtualMachine will be bridged to the selected network, ideal for L2 devices'),
            id: interfacesTypes.bridge,
            name: t('Bridge'),
        },
        masquerade: {
            // in case of pod network, networkName is undefined
            allowOption: isPodNetworkName,
            description: t('Put the VirtualMachine behind a NAT Proxy for high compatibility with different network providers. The VirtualMachines IP will differ from the IP seen on the pod network'),
            id: interfacesTypes.masquerade,
            name: t('Masquerade'),
        },
        sriov: {
            // in case of NAD network, networkName should be a string - enabled if nad type is sriov or undefined or no nad
            allowOption: !isPodNetworkName &&
                (interfaceType === interfacesTypes.sriov || !interfaceType || !networkName),
            description: t('Attach a virtual function network device to the VirtualMachine for high performance'),
            id: interfacesTypes.sriov,
            name: t('SR-IOV'),
        },
    };
    var handleChange = function (event, value) {
        event.preventDefault();
        setInterfaceType(value);
    };
    return (React.createElement(FormGroup, { fieldId: "type", label: t('Type') },
        React.createElement("div", { "data-test-id": "network-interface-type-select" },
            React.createElement(FormPFSelect, { onSelect: handleChange, selected: interfaceType, toggleProps: { isFullWidth: true } }, (_c = (_b = Object.values(interfaceTypeOptions)) === null || _b === void 0 ? void 0 : _b.filter(function (_a) {
                var allowOption = _a.allowOption;
                return allowOption;
            })) === null || _c === void 0 ? void 0 : _c.map(function (_a) {
                var description = _a.description, id = _a.id, name = _a.name;
                return (React.createElement(SelectOption, { "data-test-id": "network-interface-type-select-".concat(id), description: description, key: id, value: id }, name));
            })),
            React.createElement(FormGroupHelperText, null, showTypeHelperText && t('Hot plug is enabled only for "Bridge" and "SR-IOV" types')))));
};
export default NetworkInterfaceTypeSelect;
//# sourceMappingURL=NetworkInterfaceTypeSelect.js.map