import { V1AccessCredential, V1Bootloader, V1CPU, V1Devices, V1Disk, V1DomainSpec, V1Features, V1InstancetypeMatcher, V1PreferenceMatcher, V1VirtualMachine, V1VirtualMachineCondition } from '@kubevirt-ui/kubevirt-api/kubevirt';
/**
 * A selector for the virtual machine's networks
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine networks
 */
export declare const getNetworks: (vm: V1VirtualMachine) => import("@kubevirt-ui/kubevirt-api/kubevirt").V1Network[] | undefined;
/**
 * A selector for the virtual machine's interfaces
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine interfaces
 */
export declare const getInterfaces: (vm: V1VirtualMachine) => import("@kubevirt-ui/kubevirt-api/kubevirt").V1Interface[] | undefined;
/**
 * A selector for the virtual machine's disks
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine disks
 */
export declare const getDisks: (vm: V1VirtualMachine) => V1Disk[] | undefined;
/**
 * A selector for the virtual machine's volumes
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine volumes
 */
export declare const getVolumes: (vm: V1VirtualMachine) => import("@kubevirt-ui/kubevirt-api/kubevirt").V1Volume[] | undefined;
/**
 * A selector for the virtual machine's GPUs
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine GPUs
 */
export declare const getGPUDevices: (vm: V1VirtualMachine) => import("@kubevirt-ui/kubevirt-api/kubevirt").V1GPU[];
/**
 * A selector for the virtual machine's host devices
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine host devices
 */
export declare const getHostDevices: (vm: V1VirtualMachine) => import("@kubevirt-ui/kubevirt-api/kubevirt").V1HostDevice[];
/**
 * A selector for the virtual machine's volumes snapshot statuses
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine volumes snapshot statuses
 */
export declare const getVolumeSnapshotStatuses: (vm: V1VirtualMachine) => import("@kubevirt-ui/kubevirt-api/kubevirt").V1VolumeSnapshotStatus[] | undefined;
/**
 * A selector for the virtual machine's data volumes templates
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine host devices
 */
export declare const getDataVolumeTemplates: (vm: V1VirtualMachine) => import("@kubevirt-ui/kubevirt-api/kubevirt").V1DataVolumeTemplateSpec[];
/**
 * A selector for the virtual machine's config maps
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine config maps
 */
export declare const getConfigMaps: (vm: V1VirtualMachine) => import("@kubevirt-ui/kubevirt-api/kubevirt").V1Volume[];
/**
 * A selector for the virtual machine's secrets
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine secrets
 */
export declare const getSecrets: (vm: V1VirtualMachine) => import("@kubevirt-ui/kubevirt-api/kubevirt").V1Volume[];
/**
 * A selector for the virtual machine's service accounts
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine service accounts
 */
export declare const getServiceAccounts: (vm: V1VirtualMachine) => import("@kubevirt-ui/kubevirt-api/kubevirt").V1Volume[];
/**
 * A selector for the virtual machine's nodeSelector
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine nodeSelector
 */
export declare const getNodeSelector: (vm: V1VirtualMachine) => {
    [key: string]: string;
} | undefined;
/**
 * A selector for the virtual machine's tolerations
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine tolerations
 */
export declare const getTolerations: (vm: V1VirtualMachine) => import("@kubevirt-ui/kubevirt-api/kubevirt").K8sIoApiCoreV1Toleration[] | undefined;
/**
 * A selector for the virtual machine's affinity
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine affinity
 */
export declare const getAffinity: (vm: V1VirtualMachine) => import("@kubevirt-ui/kubevirt-api/kubevirt").K8sIoApiCoreV1Affinity | undefined;
/**
 * A selector for the virtual machine's boot disk.
 * If disks with bootOrder are available, returns the disk with lowest bootOrder integer value.
 * If not, returns the first disk
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns the virtual machine boot disk
 */
export declare const getBootDisk: (vm: V1VirtualMachine) => V1Disk;
/**
 * A selector for the QEMU machine's type
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns {string} the machine type
 */
export declare const getMachineType: (vm: V1VirtualMachine) => string;
/**
 * A selector that returns the workload of a given virtual machine
 * @param {V1VirtualMachine} vm the virtual machine
 */
export declare const getWorkload: (vm: V1VirtualMachine) => WORKLOADS;
/**
 * A selector that returns the VM accessCredentials array
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns {V1AccessCredential[]} an array of access credential object
 */
export declare const getAccessCredentials: (vm: V1VirtualMachine) => V1AccessCredential[];
export declare const getIsDynamicSSHInjectionEnabled: (vm: V1VirtualMachine, bootableVolume?: any) => boolean;
/**
 * A selector that finds the SSH secret name of the VM
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns {string} the name of secret resource
 */
export declare const getVMSSHSecretName: (vm: V1VirtualMachine) => string;
/**
 * A selector that returns the autoAttachPodInterface of the VM
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns {boolean} the autoAttachPodInterface
 */
export declare const getAutoAttachPodInterface: (vm: V1VirtualMachine) => boolean;
export declare const getDomain: <T extends Record<string, any>>(obj: T) => V1DomainSpec;
export declare const getMemory: <T>(obj: T) => string;
export declare const getCPU: <T>(obj: T) => V1CPU;
export declare const getMemoryCPU: <T>(obj: T) => {
    cpu: V1CPU;
    memory: string;
};
/**
 * A selector that returns the amount of CPU cores of the resource
 * @param {T} obj resource such as VM or VMI
 * @returns {number} the number of CPU cores
 */
export declare const getCPUCores: <T>(obj: T) => number;
/**
 * A selector that returns  the amount of CPU sockets of the resource
 * @param {T} obj resource such as VM or VMI
 * @returns {number} the number of CPU sockets
 */
export declare const getCPUSockets: <T>(obj: T) => number;
/**
 * A selector that returns the amount of CPU threads of the resource
 * @param {T} obj resource such as VM or VMI
 * @returns {number} the number of CPU threads
 */
export declare const getCPUThreads: <T>(obj: T) => number;
/**
 * A selector that returns virtual machine evictionStrategy
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns {string} the evictionStrategy
 */
export declare const getEvictionStrategy: (vm: V1VirtualMachine) => string;
export declare const getDevices: (vm: V1VirtualMachine) => V1Devices;
export declare const getDomainFeatures: (vm: V1VirtualMachine) => V1Features;
export declare const getBootloader: (vm: V1VirtualMachine) => V1Bootloader;
export declare const getHostname: (vm: V1VirtualMachine) => string;
export declare const getInstanceTypeMatcher: (vm: V1VirtualMachine) => V1InstancetypeMatcher;
export declare const getPreferenceMatcher: (vm: V1VirtualMachine) => V1PreferenceMatcher;
/**
 * A selector that returns the VM's status conditions
 * @param {V1VirtualMachine} vm the virtual machine
 * @returns {V1VirtualMachineCondition[]} the VM's status conditions
 */
export declare const getStatusConditions: (vm: V1VirtualMachine) => V1VirtualMachineCondition[];
