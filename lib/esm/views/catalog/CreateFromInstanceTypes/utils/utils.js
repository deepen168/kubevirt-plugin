var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import VirtualMachineInstancetypeModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineInstancetypeModel';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { addDNFUpdateToRunCMD, addSubscriptionManagerToRunCMD, convertUserDataObjectToYAML, } from '@kubevirt-utils/components/CloudinitModal/utils/cloudinit-utils';
import { InterfaceTypes } from '@kubevirt-utils/components/DiskModal/utils/types';
import { addSecretToVM } from '@kubevirt-utils/components/SSHSecretModal/utils/utils';
import { sysprepDisk, sysprepVolume } from '@kubevirt-utils/components/SysprepModal/sysprep-utils';
import { ROOTDISK } from '@kubevirt-utils/constants/constants';
import { isBootableVolumeISO, isBootableVolumePVCKind, } from '@kubevirt-utils/resources/bootableresources/helpers';
import { getLabel, getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { OS_NAME_TYPES, OS_NAME_TYPES_NOT_SUPPORTED } from '@kubevirt-utils/resources/template';
import { DEFAULT_NETWORK, DEFAULT_NETWORK_INTERFACE, } from '@kubevirt-utils/resources/vm/utils/constants';
import { OS_WINDOWS_PREFIX } from '@kubevirt-utils/resources/vm/utils/operation-system/operationSystem';
import { HEADLESS_SERVICE_LABEL, HEADLESS_SERVICE_NAME, } from '@kubevirt-utils/utils/headless-service';
import { generatePrettyName, getRandomChars, isEmpty } from '@kubevirt-utils/utils/utils';
import { AutomaticSubscriptionTypeEnum } from '../../../../views/clusteroverview/SettingsTab/ClusterTab/components/GuestManagmentSection/AutomaticSubscriptionRHELGuests/components/AutomaticSubscriptionType/utils/utils';
import { useInstanceTypeVMStore } from '../state/useInstanceTypeVMStore';
import { DEFAULT_INSTANCETYPE_LABEL, DEFAULT_PREFERENCE_KIND_LABEL, DEFAULT_PREFERENCE_LABEL, KUBEVIRT_OS, } from './constants';
var generateCloudInitPassword = function () {
    return "".concat(getRandomChars(4), "-").concat(getRandomChars(4), "-").concat(getRandomChars(4));
};
var getCloudInitUserNameByOS = function (selectedPreferenceName, osLabel) {
    for (var name_1 in __spreadArray(__spreadArray([], Object.values(OS_NAME_TYPES), true), Object.values(OS_NAME_TYPES_NOT_SUPPORTED), true)) {
        if ((selectedPreferenceName === null || selectedPreferenceName === void 0 ? void 0 : selectedPreferenceName.includes(name_1)) || (osLabel === null || osLabel === void 0 ? void 0 : osLabel.includes(name_1)))
            return name_1;
    }
    return 'cloud-user';
};
export var createPopulatedCloudInitYAML = function (selectedPreference, osLabel, subscriptionData, autoUpdateEnabled) {
    var activationKey = subscriptionData.activationKey, organizationID = subscriptionData.organizationID, type = subscriptionData.type;
    var cloudInitConfig = {
        chpasswd: { expire: false },
        password: generateCloudInitPassword(),
        user: getCloudInitUserNameByOS(selectedPreference, osLabel),
    };
    var isRHELVM = selectedPreference.includes(OS_NAME_TYPES.rhel);
    if (isRHELVM &&
        !isEmpty(activationKey) &&
        !isEmpty(organizationID) &&
        type !== AutomaticSubscriptionTypeEnum.NO_SUBSCRIPTION) {
        addSubscriptionManagerToRunCMD(cloudInitConfig, subscriptionData);
        addDNFUpdateToRunCMD(cloudInitConfig, autoUpdateEnabled);
    }
    return convertUserDataObjectToYAML(cloudInitConfig, true);
};
export var generateVM = function (instanceTypeState, targetNamespace, startVM, subscriptionData, autoUpdateEnabled) {
    var _a;
    var _b, _c, _d, _e, _f, _g, _h;
    var pvcSource = instanceTypeState.pvcSource, selectedBootableVolume = instanceTypeState.selectedBootableVolume, selectedInstanceType = instanceTypeState.selectedInstanceType, sshSecretCredentials = instanceTypeState.sshSecretCredentials, sysprepConfigMapData = instanceTypeState.sysprepConfigMapData, vmName = instanceTypeState.vmName;
    var sshSecretName = sshSecretCredentials.sshSecretName;
    var virtualmachineName = vmName !== null && vmName !== void 0 ? vmName : generatePrettyName();
    var selectedPreference = getLabel(selectedBootableVolume, DEFAULT_PREFERENCE_LABEL);
    var osLabel = getLabel(selectedBootableVolume, KUBEVIRT_OS);
    var selectPreferenceKind = getLabel(selectedBootableVolume, DEFAULT_PREFERENCE_KIND_LABEL, null);
    var isDynamic = instanceTypeState === null || instanceTypeState === void 0 ? void 0 : instanceTypeState.isDynamicSSHInjection;
    var isSysprep = !isEmpty(sysprepConfigMapData === null || sysprepConfigMapData === void 0 ? void 0 : sysprepConfigMapData.name);
    var isIso = isBootableVolumeISO(selectedBootableVolume);
    var storageClassName = instanceTypeState.selectedStorageClass || ((_b = pvcSource === null || pvcSource === void 0 ? void 0 : pvcSource.spec) === null || _b === void 0 ? void 0 : _b.storageClassName);
    var emptyVM = {
        apiVersion: "".concat(VirtualMachineModel.apiGroup, "/").concat(VirtualMachineModel.apiVersion),
        kind: VirtualMachineModel.kind,
        metadata: {
            name: virtualmachineName,
            namespace: targetNamespace,
        },
        spec: {
            dataVolumeTemplates: [
                {
                    metadata: {
                        name: "".concat(virtualmachineName, "-volume"),
                    },
                    spec: {
                        sourceRef: {
                            kind: DataSourceModel.kind,
                            name: getName(selectedBootableVolume),
                            namespace: getNamespace(selectedBootableVolume),
                        },
                        storage: {
                            resources: pvcSource
                                ? {
                                    requests: {
                                        storage: (_e = (_d = (_c = pvcSource === null || pvcSource === void 0 ? void 0 : pvcSource.spec) === null || _c === void 0 ? void 0 : _c.resources) === null || _d === void 0 ? void 0 : _d.requests) === null || _e === void 0 ? void 0 : _e.storage,
                                    },
                                }
                                : {},
                            storageClassName: storageClassName,
                        },
                    },
                },
            ],
            instancetype: __assign(__assign({}, (((_f = instanceTypeState === null || instanceTypeState === void 0 ? void 0 : instanceTypeState.selectedInstanceType) === null || _f === void 0 ? void 0 : _f.namespace) && {
                kind: VirtualMachineInstancetypeModel.kind,
            })), { name: (selectedInstanceType === null || selectedInstanceType === void 0 ? void 0 : selectedInstanceType.name) ||
                    ((_h = (_g = selectedBootableVolume === null || selectedBootableVolume === void 0 ? void 0 : selectedBootableVolume.metadata) === null || _g === void 0 ? void 0 : _g.labels) === null || _h === void 0 ? void 0 : _h[DEFAULT_INSTANCETYPE_LABEL]) }),
            preference: __assign({ name: selectedPreference }, (selectPreferenceKind && { kind: selectPreferenceKind })),
            running: startVM,
            template: {
                metadata: {
                    labels: (_a = {},
                        _a[HEADLESS_SERVICE_LABEL] = HEADLESS_SERVICE_NAME,
                        _a),
                },
                spec: {
                    domain: {
                        devices: {
                            autoattachPodInterface: false,
                            disks: [],
                            interfaces: [DEFAULT_NETWORK_INTERFACE],
                        },
                    },
                    networks: [DEFAULT_NETWORK],
                    subdomain: HEADLESS_SERVICE_NAME,
                    volumes: [
                        {
                            dataVolume: { name: "".concat(virtualmachineName, "-volume") },
                            name: ROOTDISK,
                        },
                        {
                            cloudInitNoCloud: {
                                userData: createPopulatedCloudInitYAML(selectedPreference, osLabel, subscriptionData, autoUpdateEnabled),
                            },
                            name: 'cloudinitdisk',
                        },
                    ],
                },
            },
        },
    };
    if (isBootableVolumePVCKind(selectedBootableVolume)) {
        emptyVM = addPVCAsSourceDiskToVM(emptyVM, selectedBootableVolume);
    }
    if (isIso) {
        emptyVM = addISOFlowToVM(emptyVM, storageClassName);
    }
    if (isSysprep) {
        emptyVM = addSysprepOrCloudInitToVM(emptyVM, sysprepConfigMapData.name);
    }
    if (instanceTypeState.customDiskSize) {
        emptyVM = addSizeToROOTDISKVM(emptyVM, instanceTypeState.customDiskSize, isIso);
    }
    if (sshSecretName) {
        emptyVM = addSecretToVM(emptyVM, sshSecretName, isDynamic);
    }
    return emptyVM;
};
export var addISOFlowToVM = function (vm, storageClassName) {
    return produce(vm, function (vmDraft) {
        vmDraft.spec.dataVolumeTemplates.push({
            metadata: {
                name: "".concat(vmDraft.metadata.name, "-volume-blank"),
            },
            spec: {
                source: {
                    blank: {},
                },
                storage: {
                    resources: { requests: { storage: '30Gi' } },
                    storageClassName: storageClassName,
                },
            },
        });
        var disks = vmDraft.spec.template.spec.domain.devices.disks;
        if (!disks)
            vmDraft.spec.template.spec.domain.devices.disks = [];
        vmDraft.spec.template.spec.domain.devices.disks = disks.concat([
            {
                bootOrder: 2,
                cdrom: {
                    bus: InterfaceTypes.SATA,
                },
                name: "".concat(vmDraft.metadata.name, "-cdrom-iso"),
            },
            {
                bootOrder: 1,
                name: ROOTDISK,
            },
        ]);
        var volumes = vmDraft.spec.template.spec.volumes;
        var volumeRootDisk = volumes.find(function (volume) { return volume.name === ROOTDISK; });
        volumeRootDisk.name = "".concat(vmDraft.metadata.name, "-cdrom-iso");
        vmDraft.spec.template.spec.volumes.push({
            dataVolume: { name: "".concat(vmDraft.metadata.name, "-volume-blank") },
            name: ROOTDISK,
        });
        vmDraft.spec.template.spec.domain.firmware = {
            bootloader: { bios: {} },
        };
    });
};
export var addSizeToROOTDISKVM = function (vm, storage, isIso) {
    return produce(vm, function (vmDraft) {
        var dvName = "".concat(vmDraft.metadata.name, "-volume").concat(isIso ? '-blank' : '');
        var rootDisk = vmDraft.spec.dataVolumeTemplates.find(function (dv) { return dv.metadata.name === dvName; });
        rootDisk.spec.storage.resources = {
            requests: {
                storage: storage,
            },
        };
    });
};
export var addSysprepOrCloudInitToVM = function (vm, sysprepName) {
    return produce(vm, function (vmDraft) {
        vmDraft.spec.template.spec.domain.devices.disks.push(sysprepDisk());
        var volumesWithoutCloudInit = vmDraft.spec.template.spec.volumes.filter(function (volume) { return volume.name !== 'cloudinitdisk'; });
        vmDraft.spec.template.spec.volumes = volumesWithoutCloudInit.concat([
            sysprepVolume(sysprepName),
        ]);
    });
};
export var addPVCAsSourceDiskToVM = function (vm, selectedBootableVolume) {
    return produce(vm, function (vmDraft) {
        var rootDiskIndex = vmDraft.spec.dataVolumeTemplates.findIndex(function (dv) { return dv.metadata.name === ROOTDISK; });
        var sourcePVC = {
            name: getName(selectedBootableVolume),
            namespace: getNamespace(selectedBootableVolume),
        };
        vmDraft.spec.dataVolumeTemplates[rootDiskIndex].spec = __assign({ source: {
                pvc: __assign({}, sourcePVC),
            } }, vmDraft.spec.dataVolumeTemplates[rootDiskIndex].spec.storage);
    });
};
export var groupVersionKindFromCommonResource = function (resource) {
    var _a = resource.apiVersion.split('/'), group = _a[0], version = _a[1];
    var kind = resource.kind;
    return { group: group, kind: kind, version: version };
};
export var useIsWindowsBootableVolume = function () {
    var instanceTypeVMState = useInstanceTypeVMStore().instanceTypeVMState;
    var selectedBootableVolume = instanceTypeVMState.selectedBootableVolume;
    var defaultPreferenceName = getLabel(selectedBootableVolume, DEFAULT_PREFERENCE_LABEL);
    return defaultPreferenceName === null || defaultPreferenceName === void 0 ? void 0 : defaultPreferenceName.startsWith(OS_WINDOWS_PREFIX);
};
//# sourceMappingURL=utils.js.map