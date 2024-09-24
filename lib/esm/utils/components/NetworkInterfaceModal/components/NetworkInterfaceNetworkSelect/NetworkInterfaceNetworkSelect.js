import React, { useEffect, useMemo } from 'react';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { interfacesTypes } from '@kubevirt-utils/resources/vm/utils/network/constants';
import { getNetworkInterfaceType } from '@kubevirt-utils/resources/vm/utils/network/selectors';
import { FormGroup, Label, SelectList, SelectOption, ValidatedOptions, } from '@patternfly/react-core';
import { getNadType, networkNameStartWithPod, podNetworkExists } from '../../utils/helpers';
import useNADsData from '../hooks/useNADsData';
import NetworkSelectHelperPopover from './components/NetworkSelectHelperPopover/NetworkSelectHelperPopover';
var NetworkInterfaceNetworkSelect = function (_a) {
    var _b;
    var editInitValueNetworkName = _a.editInitValueNetworkName, iface = _a.iface, interfaceType = _a.interfaceType, isEditing = _a.isEditing, namespace = _a.namespace, networkName = _a.networkName, setInterfaceType = _a.setInterfaceType, setNetworkName = _a.setNetworkName, setSubmitDisabled = _a.setSubmitDisabled, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var _c = useNADsData(((_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.namespace) || namespace), loaded = _c.loaded, loadError = _c.loadError, nads = _c.nads;
    var hasPodNetwork = useMemo(function () { return podNetworkExists(vm); }, [vm]);
    var hasNads = useMemo(function () { return (nads === null || nads === void 0 ? void 0 : nads.length) > 0; }, [nads]);
    var isPodNetworkingOptionExists = !hasPodNetwork || (isEditing && networkNameStartWithPod(editInitValueNetworkName));
    var canCreateNetworkInterface = useMemo(function () { return hasNads || !hasPodNetwork; }, [hasNads, hasPodNetwork]);
    var podNetworkingText = useMemo(function () { return t('Pod Networking'); }, [t]);
    var networkOptions = useMemo(function () {
        var options = nads === null || nads === void 0 ? void 0 : nads.map(function (nad) {
            var _a = nad === null || nad === void 0 ? void 0 : nad.metadata, name = _a.name, nadNamespace = _a.namespace, uid = _a.uid;
            return {
                key: uid,
                type: getNadType(nad),
                value: "".concat(nadNamespace, "/").concat(name),
            };
        });
        if (isPodNetworkingOptionExists) {
            options.unshift({
                key: 'pod-networking',
                type: interfacesTypes.bridge,
                value: podNetworkingText,
            });
        }
        return options;
    }, [isPodNetworkingOptionExists, nads, podNetworkingText]);
    useEffect(function () {
        if (!loaded)
            return;
        var initialInterfaceType = interfacesTypes[getNetworkInterfaceType(iface)];
        if (!initialInterfaceType)
            return;
        setInterfaceType(initialInterfaceType);
    }, [loaded, nads, setInterfaceType, iface]);
    var validated = canCreateNetworkInterface || isEditing ? ValidatedOptions.default : ValidatedOptions.error;
    var handleChange = function (event, value) {
        var _a;
        event.preventDefault();
        setNetworkName(value);
        setInterfaceType(value === podNetworkingText
            ? interfacesTypes.masquerade
            : (_a = networkOptions.find(function (netOption) { return value === (netOption === null || netOption === void 0 ? void 0 : netOption.value); })) === null || _a === void 0 ? void 0 : _a.type);
    };
    // This useEffect is to handle the submit button and init value
    useEffect(function () {
        var _a;
        // if networkName exists, we have the option to create a NIC either with pod networking or by existing NAD
        if (networkName) {
            setSubmitDisabled(false);
        }
        // if networkName is empty, and pod network exists we can create a NIC with existing NAD if there is one
        else if (loaded && !loadError) {
            setNetworkName((_a = networkOptions === null || networkOptions === void 0 ? void 0 : networkOptions[0]) === null || _a === void 0 ? void 0 : _a.value);
        }
        // if no nads and pod network already exists, we can't create a NIC
        else if (loaded && (loadError || !canCreateNetworkInterface)) {
            setSubmitDisabled(true);
        }
    }, [
        loadError,
        canCreateNetworkInterface,
        loaded,
        networkName,
        networkOptions,
        setNetworkName,
        setSubmitDisabled,
    ]);
    return (React.createElement(FormGroup, { fieldId: "network-attachment-definition", isRequired: true, label: t('Network'), labelIcon: React.createElement(NetworkSelectHelperPopover, null) },
        React.createElement("div", { "data-test-id": "network-attachment-definition-select" }, hasPodNetwork && !loaded ? (React.createElement(Loading, null)) : (React.createElement(FormPFSelect, { selectedLabel: React.createElement(React.Fragment, null,
                networkName,
                " ",
                React.createElement(Label, { isCompact: true },
                    interfaceType,
                    " Binding")), onSelect: handleChange, selected: networkName, toggleProps: { isDisabled: !canCreateNetworkInterface, isFullWidth: true } },
            React.createElement(SelectList, null, networkOptions === null || networkOptions === void 0 ? void 0 : networkOptions.map(function (_a) {
                var key = _a.key, type = _a.type, value = _a.value;
                return (React.createElement(SelectOption, { "data-test-id": "network-attachment-definition-select-".concat(key), key: key, value: value },
                    value,
                    " ",
                    React.createElement(Label, { isCompact: true },
                        type,
                        " Binding")));
            }))))),
        loaded && validated === ValidatedOptions.error && (React.createElement(FormGroupHelperText, { validated: validated }, t('No NetworkAttachmentDefinitions available. Contact your system administrator for additional support.')))));
};
export default NetworkInterfaceNetworkSelect;
//# sourceMappingURL=NetworkInterfaceNetworkSelect.js.map