var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import differenceWith from 'lodash/differenceWith';
import isEqual from 'lodash/isEqual';
import { VirtualMachineModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { convertYAMLToNetworkDataObject, convertYAMLUserDataObject, getCloudInitData, getCloudInitVolume, } from '@kubevirt-utils/components/CloudinitModal/utils/cloudinit-utils';
import { isEqualObject } from '@kubevirt-utils/components/NodeSelectorModal/utils/helpers';
import { RESTART_REQUIRED } from '@kubevirt-utils/components/PendingChanges/utils/constants';
import { VirtualMachineConfigurationTabInner, VirtualMachineDetailsTab, VirtualMachineDetailsTabLabel, } from '@kubevirt-utils/constants/tabs-constants';
import { getAffinity, getCPU, getCPUSockets, getDevices, getEvictionStrategy, getGPUDevices, getHostDevices, getInterfaces, getMemory, getNodeSelector, getStatusConditions, getTolerations, getVolumes, } from '@kubevirt-utils/resources/vm';
import { DEFAULT_NETWORK_INTERFACE } from '@kubevirt-utils/resources/vm/utils/constants';
import { DESCHEDULER_EVICT_LABEL, getEvictionStrategy as getVMIEvictionStrategy, } from '@kubevirt-utils/resources/vmi';
import { getVMIBootLoader, getVMIDevices, getVMIInterfaces, getVMIVolumes, } from '@kubevirt-utils/resources/vmi/utils/selectors';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { isPendingHotPlugNIC } from '@virtualmachines/details/tabs/configuration/network/utils/utils';
import { getAutoAttachPodInterface, getBootloader, getDisks, } from '../../../resources/vm/utils/selectors';
export var checkCPUMemoryChanged = function (vm, vmi) {
    if (isEmpty(vm) || isEmpty(vmi)) {
        return false;
    }
    var vmMemory = getMemory(vm);
    var vmCPUSockets = getCPUSockets(vm);
    var vmiMemory = getMemory(vmi) || '';
    var vmiCPUSockets = getCPUSockets(vmi);
    return vmMemory !== vmiMemory || vmCPUSockets !== vmiCPUSockets;
};
export var checkBootOrderChanged = function (vm, vmi) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (isEmpty(vm) || isEmpty(vmi) || isEmpty(getDisks(vm))) {
        return false;
    }
    var getCleanDisk = function (disk) { return ({ bootOrder: disk === null || disk === void 0 ? void 0 : disk.bootOrder, name: disk === null || disk === void 0 ? void 0 : disk.name }); };
    var sortDisks = function (a, b) { return ((a === null || a === void 0 ? void 0 : a.name) > (b === null || b === void 0 ? void 0 : b.name) ? 1 : -1); };
    var vmDisks = (((_e = (_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.domain) === null || _d === void 0 ? void 0 : _d.devices) === null || _e === void 0 ? void 0 : _e.disks) || [])
        .map(getCleanDisk)
        .sort(sortDisks);
    var vmiDisks = (((_h = (_g = (_f = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _f === void 0 ? void 0 : _f.domain) === null || _g === void 0 ? void 0 : _g.devices) === null || _h === void 0 ? void 0 : _h.disks) || []).map(getCleanDisk).sort(sortDisks);
    if ((vmDisks === null || vmDisks === void 0 ? void 0 : vmDisks.length) !== (vmiDisks === null || vmiDisks === void 0 ? void 0 : vmiDisks.length))
        return true;
    var hasChanges = vmDisks === null || vmDisks === void 0 ? void 0 : vmDisks.some(function (val, idx) { return !isEqualObject(val, vmiDisks[idx]); });
    return hasChanges;
};
export var checkBootModeChanged = function (vm, vmi) {
    if (isEmpty(vm) || isEmpty(vmi)) {
        return false;
    }
    var vmiBootloader = getVMIBootLoader(vmi);
    var vmBootloader = getBootloader(vm);
    return !isEqualObject(vmiBootloader, vmBootloader);
};
export var getChangedEnvDisks = function (vm, vmi) {
    var _a, _b, _c;
    if (isEmpty(vm) || isEmpty(vmi)) {
        return [];
    }
    // to get env disks, we want to filter the volumes with configMap/ prop set
    var vmVolumes = (_a = getVolumes(vm)) === null || _a === void 0 ? void 0 : _a.filter(function (vol) { return (vol === null || vol === void 0 ? void 0 : vol.configMap) || (vol === null || vol === void 0 ? void 0 : vol.secret) || (vol === null || vol === void 0 ? void 0 : vol.serviceAccount); });
    var vmiVolumes = (_c = (_b = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _b === void 0 ? void 0 : _b.volumes) === null || _c === void 0 ? void 0 : _c.filter(function (vol) { return (vol === null || vol === void 0 ? void 0 : vol.configMap) || (vol === null || vol === void 0 ? void 0 : vol.secret) || (vol === null || vol === void 0 ? void 0 : vol.serviceAccount); });
    var vmEnvDisksNames = vmVolumes === null || vmVolumes === void 0 ? void 0 : vmVolumes.map(function (vol) { return vol === null || vol === void 0 ? void 0 : vol.name; });
    var vmiEnvDisksNames = vmiVolumes === null || vmiVolumes === void 0 ? void 0 : vmiVolumes.map(function (vol) { return vol === null || vol === void 0 ? void 0 : vol.name; });
    // to get the changed disks, we want to intersect between the two name arrays
    // and get the disks that are NOT in the intersection
    var unchangedEnvDisks = vmEnvDisksNames === null || vmEnvDisksNames === void 0 ? void 0 : vmEnvDisksNames.filter(function (vmDiskName) {
        return vmiEnvDisksNames === null || vmiEnvDisksNames === void 0 ? void 0 : vmiEnvDisksNames.some(function (vmiDiskName) { return vmDiskName === vmiDiskName; });
    });
    var changedEnvDisks = __spreadArray(__spreadArray([], ((vmEnvDisksNames === null || vmEnvDisksNames === void 0 ? void 0 : vmEnvDisksNames.filter(function (disk) { return !(unchangedEnvDisks === null || unchangedEnvDisks === void 0 ? void 0 : unchangedEnvDisks.includes(disk)); })) || []), true), ((vmiEnvDisksNames === null || vmiEnvDisksNames === void 0 ? void 0 : vmiEnvDisksNames.filter(function (disk) { return !(unchangedEnvDisks === null || unchangedEnvDisks === void 0 ? void 0 : unchangedEnvDisks.includes(disk)); })) || []), true);
    return changedEnvDisks;
};
export var getInterfaceByName = function (name, vm, vmi) {
    var _a, _b;
    return ((_a = getInterfaces(vm)) === null || _a === void 0 ? void 0 : _a.find(function (iface) { return (iface === null || iface === void 0 ? void 0 : iface.name) === name; })) ||
        ((_b = getVMIInterfaces(vmi)) === null || _b === void 0 ? void 0 : _b.find(function (iface) { return (iface === null || iface === void 0 ? void 0 : iface.name) === name; }));
};
export var getChangedNICs = function (vm, vmi) {
    if (isEmpty(vm) || isEmpty(vmi)) {
        return [];
    }
    var vmInterfaces = getInterfaces(vm);
    var vmiInterfaces = getVMIInterfaces(vmi);
    var vmNICsNames = (vmInterfaces === null || vmInterfaces === void 0 ? void 0 : vmInterfaces.map(function (nic) { return nic === null || nic === void 0 ? void 0 : nic.name; })) || [];
    var vmiNICsNames = (vmiInterfaces === null || vmiInterfaces === void 0 ? void 0 : vmiInterfaces.map(function (nic) { return nic === null || nic === void 0 ? void 0 : nic.name; })) || [];
    var autoAttachPodInterface = getAutoAttachPodInterface(vm) !== false;
    if (autoAttachPodInterface &&
        (vmiInterfaces === null || vmiInterfaces === void 0 ? void 0 : vmiInterfaces.find(function (nic) { return nic.name === DEFAULT_NETWORK_INTERFACE.name; })) &&
        !vmNICsNames.includes(DEFAULT_NETWORK_INTERFACE.name)) {
        vmNICsNames.push(DEFAULT_NETWORK_INTERFACE.name);
    }
    var unchangedNICs = vmNICsNames === null || vmNICsNames === void 0 ? void 0 : vmNICsNames.filter(function (vmNicName) {
        return vmiNICsNames === null || vmiNICsNames === void 0 ? void 0 : vmiNICsNames.some(function (vmiNicName) { return vmNicName === vmiNicName; });
    });
    var changedNICs = __spreadArray(__spreadArray(__spreadArray([], ((vmNICsNames === null || vmNICsNames === void 0 ? void 0 : vmNICsNames.filter(function (nic) { return !(unchangedNICs === null || unchangedNICs === void 0 ? void 0 : unchangedNICs.includes(nic)); })) || []), true), ((vmiNICsNames === null || vmiNICsNames === void 0 ? void 0 : vmiNICsNames.filter(function (nic) { return !(unchangedNICs === null || unchangedNICs === void 0 ? void 0 : unchangedNICs.includes(nic)); })) || []), true), ((unchangedNICs === null || unchangedNICs === void 0 ? void 0 : unchangedNICs.filter(function (nic) { return isPendingHotPlugNIC(vm, vmi, nic); })) || []), true);
    return changedNICs;
};
export var hasPendingChange = function (pendingChange) {
    return pendingChange === null || pendingChange === void 0 ? void 0 : pendingChange.some(function (p) { return p.hasPendingChange; });
};
// Checks for other types of changes and non-hot-plug NIC changes
export var nonHotPlugNICChangesExist = function (pendingChanges, nonHotPlugNICsExist) {
    var _a;
    var moreChangeTypesExist = (_a = pendingChanges === null || pendingChanges === void 0 ? void 0 : pendingChanges.filter(function (change) { return change === null || change === void 0 ? void 0 : change.hasPendingChange; })) === null || _a === void 0 ? void 0 : _a.some(function (change) { return (change === null || change === void 0 ? void 0 : change.tabLabel) !== VirtualMachineDetailsTabLabel.Network; });
    return moreChangeTypesExist || nonHotPlugNICsExist;
};
var isHotPlugNIC = function (nicName, vm, vmi) {
    var iface = getInterfaceByName(nicName, vm, vmi);
    return Boolean((iface === null || iface === void 0 ? void 0 : iface.bridge) || (iface === null || iface === void 0 ? void 0 : iface.sriov));
};
export var getSortedNICs = function (changedNICs, vm, vmi) {
    return changedNICs === null || changedNICs === void 0 ? void 0 : changedNICs.reduce(function (acc, nicName) {
        var isHotPlug = isHotPlugNIC(nicName, vm, vmi);
        isHotPlug ? acc.hotPlugNICs.push(nicName) : acc.nonHotPlugNICs.push(nicName);
        return acc;
    }, { hotPlugNICs: [], nonHotPlugNICs: [] });
};
export var getChangedGPUDevices = function (vm, vmi) {
    var _a, _b, _c;
    if (isEmpty(vm) || isEmpty(vmi)) {
        return [];
    }
    var vmGPUDevices = getGPUDevices(vm);
    var vmiGPUDevices = (_c = (_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.domain) === null || _b === void 0 ? void 0 : _b.devices) === null || _c === void 0 ? void 0 : _c.gpus;
    var vmGPUDevicesNames = vmGPUDevices === null || vmGPUDevices === void 0 ? void 0 : vmGPUDevices.map(function (gpu) { return gpu === null || gpu === void 0 ? void 0 : gpu.name; });
    var vmiGPUDevicesNames = vmiGPUDevices === null || vmiGPUDevices === void 0 ? void 0 : vmiGPUDevices.map(function (gpu) { return gpu === null || gpu === void 0 ? void 0 : gpu.name; });
    var unchangedGPUDevices = vmGPUDevicesNames === null || vmGPUDevicesNames === void 0 ? void 0 : vmGPUDevicesNames.filter(function (vmGPUDeviceName) {
        return vmiGPUDevicesNames === null || vmiGPUDevicesNames === void 0 ? void 0 : vmiGPUDevicesNames.some(function (vmiGPUDeviceName) { return vmGPUDeviceName === vmiGPUDeviceName; });
    });
    var changedGPUDevices = __spreadArray(__spreadArray([], ((vmGPUDevicesNames === null || vmGPUDevicesNames === void 0 ? void 0 : vmGPUDevicesNames.filter(function (gpu) { return !(unchangedGPUDevices === null || unchangedGPUDevices === void 0 ? void 0 : unchangedGPUDevices.includes(gpu)); })) || []), true), ((vmiGPUDevicesNames === null || vmiGPUDevicesNames === void 0 ? void 0 : vmiGPUDevicesNames.filter(function (gpu) { return !(unchangedGPUDevices === null || unchangedGPUDevices === void 0 ? void 0 : unchangedGPUDevices.includes(gpu)); })) || []), true);
    return changedGPUDevices;
};
export var getChangedHostDevices = function (vm, vmi) {
    var _a, _b, _c;
    if (isEmpty(vm) || isEmpty(vmi)) {
        return [];
    }
    var vmHostDevices = getHostDevices(vm);
    var vmiHostDevices = (_c = (_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.domain) === null || _b === void 0 ? void 0 : _b.devices) === null || _c === void 0 ? void 0 : _c.hostDevices;
    var vmHostDevicesNames = vmHostDevices === null || vmHostDevices === void 0 ? void 0 : vmHostDevices.map(function (hostDevice) { return hostDevice === null || hostDevice === void 0 ? void 0 : hostDevice.name; });
    var vmiHostDevicesNames = vmiHostDevices === null || vmiHostDevices === void 0 ? void 0 : vmiHostDevices.map(function (hostDevice) { return hostDevice === null || hostDevice === void 0 ? void 0 : hostDevice.name; });
    var unchangedHostDevices = vmHostDevicesNames === null || vmHostDevicesNames === void 0 ? void 0 : vmHostDevicesNames.filter(function (vmHostDeviceName) {
        return vmiHostDevicesNames === null || vmiHostDevicesNames === void 0 ? void 0 : vmiHostDevicesNames.some(function (vmiHostDeviceName) { return vmHostDeviceName === vmiHostDeviceName; });
    });
    var changedHostDevices = __spreadArray(__spreadArray([], ((vmHostDevicesNames === null || vmHostDevicesNames === void 0 ? void 0 : vmHostDevicesNames.filter(function (hostDevice) { return !(unchangedHostDevices === null || unchangedHostDevices === void 0 ? void 0 : unchangedHostDevices.includes(hostDevice)); })) ||
        []), true), ((vmiHostDevicesNames === null || vmiHostDevicesNames === void 0 ? void 0 : vmiHostDevicesNames.filter(function (hostDevice) { return !(unchangedHostDevices === null || unchangedHostDevices === void 0 ? void 0 : unchangedHostDevices.includes(hostDevice)); })) ||
        []), true);
    return changedHostDevices;
};
export var getChangedVolumesHotplug = function (vm, vmi) {
    if (isEmpty(vm) || isEmpty(vmi)) {
        return [];
    }
    var differentVolumes = differenceWith(getVMIVolumes(vmi), getVolumes(vm), isEqual);
    if (!isEmpty(differentVolumes)) {
        return differentVolumes.filter(function (volume) { var _a, _b; return ((_a = volume === null || volume === void 0 ? void 0 : volume.dataVolume) === null || _a === void 0 ? void 0 : _a.hotpluggable) || ((_b = volume === null || volume === void 0 ? void 0 : volume.persistentVolumeClaim) === null || _b === void 0 ? void 0 : _b.hotpluggable); });
    }
};
export var getChangedDedicatedResources = function (vm, vmi, currentSelection) {
    var _a, _b;
    if (isEmpty(vm) || isEmpty(vmi)) {
        return false;
    }
    var vmDedicatedResources = ((_a = getCPU(vm)) === null || _a === void 0 ? void 0 : _a.dedicatedCpuPlacement) || false;
    var vmiDedicatedResources = ((_b = getCPU(vmi)) === null || _b === void 0 ? void 0 : _b.dedicatedCpuPlacement) || false;
    return (vmDedicatedResources !== vmiDedicatedResources || currentSelection !== vmiDedicatedResources);
};
export var getChangedEvictionStrategy = function (vm, vmi, clusterEvictionStrategy) {
    if (isEmpty(vm) || isEmpty(vmi)) {
        return false;
    }
    var vmEvictionStrategy = getEvictionStrategy(vm);
    var vmiEvictionStrategy = getVMIEvictionStrategy(vmi);
    if (!vmEvictionStrategy)
        return clusterEvictionStrategy !== vmiEvictionStrategy;
    return vmEvictionStrategy !== vmiEvictionStrategy;
};
export var getChangedStartStrategy = function (vm, vmi) {
    var _a, _b, _c, _d;
    if (isEmpty(vm) || isEmpty(vmi)) {
        return false;
    }
    var vmStartStrategy = !!((_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.startStrategy);
    var vmiStartStrategy = !!((_d = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _d === void 0 ? void 0 : _d.startStrategy);
    return vmStartStrategy !== vmiStartStrategy;
};
export var getChangedHostname = function (vm, vmi) {
    var _a, _b, _c, _d;
    if (isEmpty(vm) || isEmpty(vmi)) {
        return false;
    }
    var vmHostname = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.hostname;
    var vmiHostname = (_d = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _d === void 0 ? void 0 : _d.hostname;
    return vmHostname !== vmiHostname;
};
export var getChangedNodeSelector = function (vm, vmi) {
    var _a;
    if (isEmpty(vm) || isEmpty(vmi)) {
        return false;
    }
    var vmNodeSelector = getNodeSelector(vm) || {};
    var vmiNodeSelector = ((_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.nodeSelector) || {};
    return !isEqualObject(vmNodeSelector, vmiNodeSelector);
};
export var getChangedTolerations = function (vm, vmi) {
    var _a;
    if (isEmpty(vm) || isEmpty(vmi)) {
        return false;
    }
    var vmTolerations = getTolerations(vm) || [];
    var vmiTolerations = ((_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.tolerations) || [];
    return !isEqualObject(vmTolerations, vmiTolerations);
};
export var getChangedAffinity = function (vm, vmi) {
    var _a;
    if (isEmpty(vm) || isEmpty(vmi)) {
        return false;
    }
    var vmAffinity = getAffinity(vm) || {};
    var vmiAffinity = ((_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.affinity) || {};
    return !isEqualObject(vmAffinity, vmiAffinity);
};
export var getChangedDescheduler = function (vm, vmi, currentSelection) {
    var _a, _b, _c, _d, _e, _f;
    if (isEmpty(vm) || isEmpty(vmi)) {
        return false;
    }
    var vmDescheduler = !!((_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.metadata) === null || _c === void 0 ? void 0 : _c.annotations) === null || _d === void 0 ? void 0 : _d[DESCHEDULER_EVICT_LABEL]);
    var vmiDescheduler = !!((_f = (_e = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _e === void 0 ? void 0 : _e.annotations) === null || _f === void 0 ? void 0 : _f[DESCHEDULER_EVICT_LABEL]);
    return vmDescheduler !== vmiDescheduler || currentSelection !== vmiDescheduler;
};
export var getChangedCloudInit = function (vm, vmi) {
    var _a, _b;
    if (isEmpty(vm) || isEmpty(vmi)) {
        return false;
    }
    var vmCloudInit = getCloudInitData(getCloudInitVolume(vm)) || {};
    var vmiCloudInit = getCloudInitData((_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.volumes) === null || _b === void 0 ? void 0 : _b.find(function (vol) { return !!vol.cloudInitConfigDrive || !!vol.cloudInitNoCloud; })) || {};
    return (!isEqualObject(convertYAMLUserDataObject(vmCloudInit === null || vmCloudInit === void 0 ? void 0 : vmCloudInit.userData), convertYAMLUserDataObject(vmiCloudInit === null || vmiCloudInit === void 0 ? void 0 : vmiCloudInit.userData)) ||
        !isEqualObject(convertYAMLToNetworkDataObject(vmCloudInit === null || vmCloudInit === void 0 ? void 0 : vmCloudInit.networkData), convertYAMLToNetworkDataObject(vmiCloudInit === null || vmiCloudInit === void 0 ? void 0 : vmiCloudInit.networkData)));
};
export var getChangedAuthorizedSSHKey = function (vm, vmi) {
    var _a, _b, _c, _d, _e, _f;
    if (isEmpty(vm) || isEmpty(vmi)) {
        return false;
    }
    var vmAccessCredentials = ((_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.accessCredentials) === null || _d === void 0 ? void 0 : _d[0]) || {};
    var vmiAccessCredentials = ((_f = (_e = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _e === void 0 ? void 0 : _e.accessCredentials) === null || _f === void 0 ? void 0 : _f[0]) || {};
    return !isEqualObject(vmAccessCredentials, vmiAccessCredentials);
};
export var getChangedGuestSystemAccessLog = function (vm, vmi) {
    var _a, _b;
    if (isEmpty(vm) || isEmpty(vmi)) {
        return false;
    }
    var vmLogSerialConsole = (_a = getDevices(vm)) === null || _a === void 0 ? void 0 : _a.logSerialConsole;
    var vmiLogSerialConsole = (_b = getVMIDevices(vmi)) === null || _b === void 0 ? void 0 : _b.logSerialConsole;
    return vmLogSerialConsole !== vmiLogSerialConsole;
};
export var getChangedHeadlessMode = function (vm, vmi) {
    var _a, _b, _c, _d, _e, _f;
    if (isEmpty(vm) || isEmpty(vmi)) {
        return false;
    }
    var vmDevices = (_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.domain) === null || _d === void 0 ? void 0 : _d.devices;
    var vmiDevices = (_f = (_e = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _e === void 0 ? void 0 : _e.domain) === null || _f === void 0 ? void 0 : _f.devices;
    var vmHeadless = !!(vmDevices === null || vmDevices === void 0 ? void 0 : vmDevices.autoattachGraphicsDevice);
    var vmiHeadless = !!(vmiDevices === null || vmiDevices === void 0 ? void 0 : vmiDevices.autoattachGraphicsDevice);
    return (vmHeadless !== vmiHeadless ||
        (vmDevices === null || vmDevices === void 0 ? void 0 : vmDevices.hasOwnProperty('autoattachGraphicsDevice')) !==
            (vmiDevices === null || vmiDevices === void 0 ? void 0 : vmiDevices.hasOwnProperty('autoattachGraphicsDevice')));
};
export var getTabURL = function (vm, tab) {
    var _a, _b;
    var tabPath = VirtualMachineConfigurationTabInner[tab]
        ? "".concat(VirtualMachineDetailsTab.Configurations, "/").concat(VirtualMachineConfigurationTabInner[tab])
        : tab;
    return "/k8s/ns/".concat((_a = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _a === void 0 ? void 0 : _a.namespace, "/").concat(VirtualMachineModelRef, "/").concat((_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.name, "/").concat(tabPath);
};
export var getPendingChangesByTab = function (pendingChanges) {
    var pendingChangesDetailsTab = pendingChanges === null || pendingChanges === void 0 ? void 0 : pendingChanges.filter(function (change) {
        return (change === null || change === void 0 ? void 0 : change.tabLabel) === VirtualMachineDetailsTabLabel.Details && (change === null || change === void 0 ? void 0 : change.hasPendingChange);
    });
    var pendingChangesSchedulingTab = pendingChanges === null || pendingChanges === void 0 ? void 0 : pendingChanges.filter(function (change) {
        return (change === null || change === void 0 ? void 0 : change.tabLabel) === VirtualMachineDetailsTabLabel.Scheduling && (change === null || change === void 0 ? void 0 : change.hasPendingChange);
    });
    var pendingChangesEnvTab = pendingChanges === null || pendingChanges === void 0 ? void 0 : pendingChanges.filter(function (change) {
        return (change === null || change === void 0 ? void 0 : change.tabLabel) === VirtualMachineDetailsTabLabel.Environment && (change === null || change === void 0 ? void 0 : change.hasPendingChange);
    });
    var pendingChangesNICsTab = pendingChanges === null || pendingChanges === void 0 ? void 0 : pendingChanges.filter(function (change) {
        return (change === null || change === void 0 ? void 0 : change.tabLabel) === VirtualMachineDetailsTabLabel.Network && (change === null || change === void 0 ? void 0 : change.hasPendingChange);
    });
    var pendingChangesScriptsTab = pendingChanges === null || pendingChanges === void 0 ? void 0 : pendingChanges.filter(function (change) {
        return (change === null || change === void 0 ? void 0 : change.tabLabel) === VirtualMachineDetailsTabLabel.Scripts && (change === null || change === void 0 ? void 0 : change.hasPendingChange);
    });
    var pendingChangesDisksTab = pendingChanges === null || pendingChanges === void 0 ? void 0 : pendingChanges.filter(function (change) {
        return (change === null || change === void 0 ? void 0 : change.tabLabel) === VirtualMachineDetailsTabLabel.Disks && (change === null || change === void 0 ? void 0 : change.hasPendingChange);
    });
    return {
        pendingChangesDetailsTab: pendingChangesDetailsTab,
        pendingChangesDisksTab: pendingChangesDisksTab,
        pendingChangesEnvTab: pendingChangesEnvTab,
        pendingChangesNICsTab: pendingChangesNICsTab,
        pendingChangesSchedulingTab: pendingChangesSchedulingTab,
        pendingChangesScriptsTab: pendingChangesScriptsTab,
    };
};
export var restartRequired = function (vm) {
    return getStatusConditions(vm).some(function (condition) { return (condition === null || condition === void 0 ? void 0 : condition.type) === RESTART_REQUIRED && (condition === null || condition === void 0 ? void 0 : condition.status) === 'True'; });
};
//# sourceMappingURL=helpers.js.map