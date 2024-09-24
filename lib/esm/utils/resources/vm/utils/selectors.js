import { DYNAMIC_CREDENTIALS_SUPPORT } from '@kubevirt-utils/components/DynamicSSHKeyInjection/constants/constants';
import { ROOTDISK } from '@kubevirt-utils/constants/constants';
import { getAnnotation, getLabel } from '@kubevirt-utils/resources/shared';
import { VM_WORKLOAD_ANNOTATION } from './annotations';
/**
 * A selector for the virtual machine's networks
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine networks
 */
export var getNetworks = function (vm) { var _a, _b, _c; return (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.networks; };
/**
 * A selector for the virtual machine's interfaces
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine interfaces
 */
export var getInterfaces = function (vm) { var _a, _b, _c, _d, _e; return (_e = (_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.domain) === null || _d === void 0 ? void 0 : _d.devices) === null || _e === void 0 ? void 0 : _e.interfaces; };
/**
 * A selector for the virtual machine's disks
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine disks
 */
export var getDisks = function (vm) { var _a, _b, _c, _d, _e; return (_e = (_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.domain) === null || _d === void 0 ? void 0 : _d.devices) === null || _e === void 0 ? void 0 : _e.disks; };
/**
 * A selector for the virtual machine's volumes
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine volumes
 */
export var getVolumes = function (vm) { var _a, _b, _c; return (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.volumes; };
/**
 * A selector for the virtual machine's GPUs
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine GPUs
 */
export var getGPUDevices = function (vm) { var _a, _b, _c, _d, _e; return ((_e = (_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.domain) === null || _d === void 0 ? void 0 : _d.devices) === null || _e === void 0 ? void 0 : _e.gpus) || []; };
/**
 * A selector for the virtual machine's host devices
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine host devices
 */
export var getHostDevices = function (vm) { var _a, _b, _c, _d, _e; return ((_e = (_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.domain) === null || _d === void 0 ? void 0 : _d.devices) === null || _e === void 0 ? void 0 : _e.hostDevices) || []; };
/**
 * A selector for the virtual machine's volumes snapshot statuses
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine volumes snapshot statuses
 */
export var getVolumeSnapshotStatuses = function (vm) { var _a; return (_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.volumeSnapshotStatuses; };
/**
 * A selector for the virtual machine's data volumes templates
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine host devices
 */
export var getDataVolumeTemplates = function (vm) { var _a; return ((_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.dataVolumeTemplates) || []; };
/**
 * A selector for the virtual machine's config maps
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine config maps
 */
export var getConfigMaps = function (vm) {
    return (getVolumes(vm) || []).filter(function (volume) { return volume.configMap; });
};
/**
 * A selector for the virtual machine's secrets
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine secrets
 */
export var getSecrets = function (vm) {
    return (getVolumes(vm) || []).filter(function (volume) { return volume.secret; });
};
/**
 * A selector for the virtual machine's service accounts
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine service accounts
 */
export var getServiceAccounts = function (vm) {
    return (getVolumes(vm) || []).filter(function (volume) { return volume.serviceAccount; });
};
/**
 * A selector for the virtual machine's nodeSelector
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine nodeSelector
 */
export var getNodeSelector = function (vm) { var _a, _b, _c; return (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.nodeSelector; };
/**
 * A selector for the virtual machine's tolerations
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine tolerations
 */
export var getTolerations = function (vm) { var _a, _b, _c; return (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.tolerations; };
/**
 * A selector for the virtual machine's affinity
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine affinity
 */
export var getAffinity = function (vm) { var _a, _b, _c; return (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.affinity; };
/**
 * A selector for the virtual machine's boot disk.
 * If disks with bootOrder are available, returns the disk with lowest bootOrder integer value.
 * If not, returns the first disk
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine boot disk
 */
export var getBootDisk = function (vm) {
    var disks = getDisks(vm);
    var isInstanceTypeVM = Boolean(getInstanceTypeMatcher(vm));
    var rootDiskVolume = (getVolumes(vm) || []).find(function (volume) { return volume.name === ROOTDISK; });
    var defaultRootDisk = isInstanceTypeVM && Boolean(rootDiskVolume) ? { name: ROOTDISK } : disks === null || disks === void 0 ? void 0 : disks[0];
    return (disks || [])
        .filter(function (d) { return d.bootOrder; })
        .reduce(function (acc, disk) {
        return acc.bootOrder < disk.bootOrder ? acc : disk;
    }, defaultRootDisk);
};
/**
 * A selector for the QEMU machine's type
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns {string} the machine type
 */
export var getMachineType = function (vm) { var _a, _b, _c, _d, _e; return (_e = (_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.domain) === null || _d === void 0 ? void 0 : _d.machine) === null || _e === void 0 ? void 0 : _e.type; };
/**
 * A selector that returns the workload of a given virtual machine
 * @param {V1VirtualMachine} vm the virtual machine
 */
export var getWorkload = function (vm) { var _a; return getAnnotation((_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template, VM_WORKLOAD_ANNOTATION); };
/**
 * A selector that returns the VM accessCredentials array
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns {V1AccessCredential[]} an array of access credential object
 */
export var getAccessCredentials = function (vm) { var _a, _b, _c; return (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.accessCredentials; };
export var getIsDynamicSSHInjectionEnabled = function (vm, bootableVolume) {
    var _a, _b, _c, _d;
    return getLabel(bootableVolume || vm, DYNAMIC_CREDENTIALS_SUPPORT) === 'true' &&
        Boolean((_d = (_c = (_b = (_a = getAccessCredentials(vm)) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.sshPublicKey) === null || _c === void 0 ? void 0 : _c.propagationMethod) === null || _d === void 0 ? void 0 : _d.qemuGuestAgent);
};
/**
 * A selector that finds the SSH secret name of the VM
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns {string} the name of secret resource
 */
export var getVMSSHSecretName = function (vm) {
    var _a, _b, _c, _d, _e;
    return (_e = (_d = (_c = (_b = (_a = getAccessCredentials(vm)) === null || _a === void 0 ? void 0 : _a.find(function (ac) { var _a, _b, _c; return (_c = (_b = (_a = ac === null || ac === void 0 ? void 0 : ac.sshPublicKey) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.secret) === null || _c === void 0 ? void 0 : _c.secretName; })) === null || _b === void 0 ? void 0 : _b.sshPublicKey) === null || _c === void 0 ? void 0 : _c.source) === null || _d === void 0 ? void 0 : _d.secret) === null || _e === void 0 ? void 0 : _e.secretName;
};
/**
 * A selector that returns the autoAttachPodInterface of the VM
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns {boolean} the autoAttachPodInterface
 */
export var getAutoAttachPodInterface = function (vm) { var _a, _b, _c, _d, _e; return (_e = (_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.domain) === null || _d === void 0 ? void 0 : _d.devices) === null || _e === void 0 ? void 0 : _e.autoattachPodInterface; };
export var getDomain = function (obj) { var _a, _b, _c, _d; return ((_a = obj === null || obj === void 0 ? void 0 : obj.spec) === null || _a === void 0 ? void 0 : _a.domain) || ((_d = (_c = (_b = obj === null || obj === void 0 ? void 0 : obj.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.domain); };
export var getMemory = function (obj) { var _a, _b, _c, _d, _e; return ((_b = (_a = getDomain(obj)) === null || _a === void 0 ? void 0 : _a.memory) === null || _b === void 0 ? void 0 : _b.guest) || ((_e = (_d = (_c = getDomain(obj)) === null || _c === void 0 ? void 0 : _c.resources) === null || _d === void 0 ? void 0 : _d.requests) === null || _e === void 0 ? void 0 : _e['memory']); };
export var getCPU = function (obj) { var _a; return (_a = getDomain(obj)) === null || _a === void 0 ? void 0 : _a.cpu; };
export var getMemoryCPU = function (obj) { return ({
    cpu: getCPU(obj),
    memory: getMemory(obj),
}); };
/**
 * A selector that returns the amount of CPU cores of the resource
 * @param {T} obj resource such as VM or VMI
 * @returns {number} the number of CPU cores
 */
export var getCPUCores = function (obj) { var _a; return ((_a = getCPU(obj)) === null || _a === void 0 ? void 0 : _a.cores) || 1; };
/**
 * A selector that returns  the amount of CPU sockets of the resource
 * @param {T} obj resource such as VM or VMI
 * @returns {number} the number of CPU sockets
 */
export var getCPUSockets = function (obj) { var _a; return ((_a = getCPU(obj)) === null || _a === void 0 ? void 0 : _a.sockets) || 1; };
/**
 * A selector that returns the amount of CPU threads of the resource
 * @param {T} obj resource such as VM or VMI
 * @returns {number} the number of CPU threads
 */
export var getCPUThreads = function (obj) { var _a; return ((_a = getCPU(obj)) === null || _a === void 0 ? void 0 : _a.threads) || 1; };
/**
 * A selector that returns virtual machine evictionStrategy
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns {string} the evictionStrategy
 */
export var getEvictionStrategy = function (vm) { var _a, _b, _c; return (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.evictionStrategy; };
export var getDevices = function (vm) { var _a, _b, _c, _d; return (_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.domain) === null || _d === void 0 ? void 0 : _d.devices; };
export var getDomainFeatures = function (vm) { var _a, _b, _c, _d; return (_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.domain) === null || _d === void 0 ? void 0 : _d.features; };
export var getBootloader = function (vm) { var _a, _b, _c, _d, _e; return (_e = (_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.domain) === null || _d === void 0 ? void 0 : _d.firmware) === null || _e === void 0 ? void 0 : _e.bootloader; };
export var getHostname = function (vm) { var _a, _b, _c; return (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.hostname; };
export var getInstanceTypeMatcher = function (vm) { var _a; return (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.instancetype; };
export var getPreferenceMatcher = function (vm) { var _a; return (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.preference; };
/**
 * A selector that returns the VM's status conditions
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns {V1VirtualMachineCondition[]} the VM's status conditions
 */
export var getStatusConditions = function (vm) { var _a; return (_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.conditions; };
//# sourceMappingURL=selectors.js.map