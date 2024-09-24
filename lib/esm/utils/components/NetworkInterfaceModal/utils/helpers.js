var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import produce from 'immer';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getAutoAttachPodInterface, getInterfaces, getNetworks, } from '@kubevirt-utils/resources/vm';
import { interfacesTypes, } from '@kubevirt-utils/resources/vm/utils/network/constants';
import { isEmpty, kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import { ABSENT } from '@virtualmachines/details/tabs/configuration/network/utils/constants';
import { isStopped } from '@virtualmachines/utils';
export var podNetworkExists = function (vm) { var _a, _b, _c, _d; return !!((_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.networks) === null || _d === void 0 ? void 0 : _d.find(function (network) { return typeof network.pod === 'object'; })); };
export var networkNameStartWithPod = function (networkName) {
    return networkName === null || networkName === void 0 ? void 0 : networkName.startsWith('Pod');
};
export var getNetworkName = function (network) {
    var _a;
    if (network) {
        return (network === null || network === void 0 ? void 0 : network.pod) ? t('Pod networking') : (_a = network === null || network === void 0 ? void 0 : network.multus) === null || _a === void 0 ? void 0 : _a.networkName;
    }
    return null;
};
export var updateVMNetworkInterfaces = function (vm, updatedNetworks, updatedInterfaces) {
    return k8sPatch({
        data: __spreadArray([
            {
                op: 'replace',
                path: '/spec/template/spec/networks',
                value: updatedNetworks,
            },
            {
                op: 'replace',
                path: '/spec/template/spec/domain/devices/interfaces',
                value: updatedInterfaces,
            }
        ], (isEmpty(updatedInterfaces)
            ? [
                {
                    op: getAutoAttachPodInterface(vm) === undefined ? 'add' : 'replace',
                    path: '/spec/template/spec/domain/devices/autoattachPodInterface',
                    value: false,
                },
            ]
            : []), true),
        model: VirtualMachineModel,
        resource: vm,
    });
};
var getInterface = function (interfaces, nicName) {
    return interfaces === null || interfaces === void 0 ? void 0 : interfaces.find(function (iface) { return (iface === null || iface === void 0 ? void 0 : iface.name) === nicName; });
};
/**
 * To delete a hot plug NIC the state of the interface is set to 'absent'. The
 * NIC will then be removed when the VM is live migrated or restarted.
 * @param interfaces {V1Interface[]}
 * @param nicName {string}
 * @return the virtual machine's interfaces with the hot plug NIC's state set to 'absent;
 */
export var markInterfaceAbsent = function (interfaces, nicName) {
    if (!getInterface(interfaces, nicName))
        return null;
    return produce(interfaces, function (draftInterfaces) {
        var ifaceToDelete = getInterface(draftInterfaces, nicName);
        ifaceToDelete.state = ABSENT;
    });
};
var removeInterfaceToBeDeleted = function (nicName, vm) { var _a; return (_a = getInterfaces(vm)) === null || _a === void 0 ? void 0 : _a.filter(function (_a) {
    var name = _a.name;
    return name !== nicName;
}); };
export var updateInterfacesForDeletion = function (nicName, vm, canBeMarkedAbsent) {
    return canBeMarkedAbsent
        ? markInterfaceAbsent(getInterfaces(vm), nicName)
        : removeInterfaceToBeDeleted(nicName, vm);
};
var removeNetworkToBeDeleted = function (nicName, vm) { var _a; return (_a = getNetworks(vm)) === null || _a === void 0 ? void 0 : _a.filter(function (_a) {
    var name = _a.name;
    return name !== nicName;
}); };
export var updateNetworksForDeletion = function (nicName, vm, canBeMarkedAbsent) {
    return canBeMarkedAbsent ? getNetworks(vm) : removeNetworkToBeDeleted(nicName, vm);
};
export var createNetwork = function (nicName, networkName) {
    var network = {
        name: nicName,
    };
    if (!networkNameStartWithPod(networkName) && networkName) {
        var _a = networkName === null || networkName === void 0 ? void 0 : networkName.split('/'), namespace = _a[0], name_1 = _a[1];
        network.multus = { networkName: namespace === DEFAULT_NAMESPACE ? networkName : name_1 };
    }
    else {
        network.pod = {};
    }
    return network;
};
export var createInterface = function (nicName, interfaceModel, interfaceMACAddress, interfaceType) {
    var _a;
    var _b;
    return _a = {},
        _a[(_b = interfaceType === null || interfaceType === void 0 ? void 0 : interfaceType.replace('-', '')) === null || _b === void 0 ? void 0 : _b.toLowerCase()] = {},
        _a.macAddress = interfaceMACAddress,
        _a.model = interfaceModel,
        _a.name = nicName,
        _a;
};
export var getNadType = function (nad) {
    var _a, _b, _c;
    try {
        var config = JSON.parse((_a = nad === null || nad === void 0 ? void 0 : nad.spec) === null || _a === void 0 ? void 0 : _a.config);
        //can be config.type or config.plugin first element only!'
        return (interfacesTypes === null || interfacesTypes === void 0 ? void 0 : interfacesTypes[config === null || config === void 0 ? void 0 : config.type]) || (interfacesTypes === null || interfacesTypes === void 0 ? void 0 : interfacesTypes[(_c = (_b = config === null || config === void 0 ? void 0 : config.plugins) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.type]);
    }
    catch (e) {
        kubevirtConsole.log('Cannot convert NAD config: ', e);
    }
};
export var deleteNetworkInterface = function (vm, nicName, nicPresentation) {
    var _a, _b;
    var vmInterfaces = getInterfaces(vm);
    var noAutoAttachPodInterface = getAutoAttachPodInterface(vm) === false;
    var isDefaultInterface = noAutoAttachPodInterface && ((_a = vmInterfaces === null || vmInterfaces === void 0 ? void 0 : vmInterfaces[0]) === null || _a === void 0 ? void 0 : _a.name) === nicName;
    var isHotPlug = Boolean((_b = nicPresentation === null || nicPresentation === void 0 ? void 0 : nicPresentation.iface) === null || _b === void 0 ? void 0 : _b.bridge);
    var canBeMarkedAbsent = isHotPlug && !isStopped(vm) && !isDefaultInterface;
    var networks = updateNetworksForDeletion(nicName, vm, canBeMarkedAbsent);
    var interfaces = updateInterfacesForDeletion(nicName, vm, canBeMarkedAbsent);
    return updateVMNetworkInterfaces(vm, networks, interfaces);
};
//# sourceMappingURL=helpers.js.map