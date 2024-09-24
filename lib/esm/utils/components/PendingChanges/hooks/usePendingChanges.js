import React from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { modelToGroupVersionKind, NodeModel } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import AffinityModal from '@kubevirt-utils/components/AffinityModal/AffinityModal';
import BootOrderModal from '@kubevirt-utils/components/BootOrderModal/BootOrderModal';
import CloudinitModal from '@kubevirt-utils/components/CloudinitModal/CloudinitModal';
import CPUMemoryModal from '@kubevirt-utils/components/CPUMemoryModal/CPUMemoryModal';
import DedicatedResourcesModal from '@kubevirt-utils/components/DedicatedResourcesModal/DedicatedResourcesModal';
import DeschedulerModal from '@kubevirt-utils/components/DeschedulerModal/DeschedulerModal';
import { EVICTION_STRATEGY_DEFAULT } from '@kubevirt-utils/components/EvictionStrategy/constants';
import EvictionStrategyModal from '@kubevirt-utils/components/EvictionStrategy/EvictionStrategyModal';
import FirmwareBootloaderModal from '@kubevirt-utils/components/FirmwareBootloaderModal/FirmwareBootloaderModal';
import HardwareDevicesHeadlessModeModal from '@kubevirt-utils/components/HardwareDevices/modal/HardwareDevicesHeadlessModeModal';
import HardwareDevicesModal from '@kubevirt-utils/components/HardwareDevices/modal/HardwareDevicesModal';
import { HARDWARE_DEVICE_TYPE } from '@kubevirt-utils/components/HardwareDevices/utils/constants';
import HostnameModal from '@kubevirt-utils/components/HostnameModal/HostnameModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import NodeSelectorModal from '@kubevirt-utils/components/NodeSelectorModal/NodeSelectorModal';
import StartPauseModal from '@kubevirt-utils/components/StartPauseModal/StartPauseModal';
import TolerationsModal from '@kubevirt-utils/components/TolerationsModal/TolerationsModal';
import VMSSHSecretModal from '@kubevirt-utils/components/VMSSHSecretModal/VMSSHSecretModal';
import { VirtualMachineDetailsTab, VirtualMachineDetailsTabLabel, } from '@kubevirt-utils/constants/tabs-constants';
import useHyperConvergeConfiguration from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettings from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettings';
import { getCPU, getGPUDevices, getHostDevices } from '@kubevirt-utils/resources/vm';
import { isInstanceTypeVM } from '@kubevirt-utils/resources/vm/utils/instanceTypes';
import { DESCHEDULER_EVICT_LABEL } from '@kubevirt-utils/resources/vmi';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sUpdate, useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { checkBootModeChanged, checkBootOrderChanged, checkCPUMemoryChanged, getChangedAffinity, getChangedAuthorizedSSHKey, getChangedCloudInit, getChangedDedicatedResources, getChangedDescheduler, getChangedEnvDisks, getChangedEvictionStrategy, getChangedGPUDevices, getChangedGuestSystemAccessLog, getChangedHeadlessMode, getChangedHostDevices, getChangedHostname, getChangedNICs, getChangedNodeSelector, getChangedStartStrategy, getChangedTolerations, getChangedVolumesHotplug, getSortedNICs, getTabURL, restartRequired, } from '../utils/helpers';
export var usePendingChanges = function (vm, vmi) {
    var _a, _b, _c, _d, _e, _f;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var createModal = useModal().createModal;
    var _g = useKubevirtUserSettings('ssh'), authorizedSSHKeys = _g[0], updateAuthorizedSSHKeys = _g[1];
    var _h = useHyperConvergeConfiguration(), hyperConverge = _h[0], hyperLoaded = _h[1], hyperLoadingError = _h[2];
    var _j = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(NodeModel),
        isList: true,
    }), nodes = _j[0], nodesLoaded = _j[1];
    var cpuMemoryChanged = checkCPUMemoryChanged(vm, vmi);
    var bootOrderChanged = checkBootOrderChanged(vm, vmi);
    var bootModeChanged = checkBootModeChanged(vm, vmi);
    var dedicatedResourcesChanged = getChangedDedicatedResources(vm, vmi, ((_a = getCPU(vm)) === null || _a === void 0 ? void 0 : _a.dedicatedCpuPlacement) || false);
    var startStrategyChanged = getChangedStartStrategy(vm, vmi);
    var hostnameChanged = getChangedHostname(vm, vmi);
    var evictionStrategyChanged = hyperLoaded &&
        !hyperLoadingError &&
        getChangedEvictionStrategy(vm, vmi, ((_b = hyperConverge === null || hyperConverge === void 0 ? void 0 : hyperConverge.spec) === null || _b === void 0 ? void 0 : _b.evictionStrategy) || EVICTION_STRATEGY_DEFAULT);
    var nodeSelectorChanged = getChangedNodeSelector(vm, vmi);
    var tolerationsChanged = getChangedTolerations(vm, vmi);
    var affinityChanged = getChangedAffinity(vm, vmi);
    var deschedulerChanged = getChangedDescheduler(vm, vmi, !!((_f = (_e = (_d = (_c = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _c === void 0 ? void 0 : _c.template) === null || _d === void 0 ? void 0 : _d.metadata) === null || _e === void 0 ? void 0 : _e.annotations) === null || _f === void 0 ? void 0 : _f[DESCHEDULER_EVICT_LABEL]) || false);
    var cloudInitChanged = getChangedCloudInit(vm, vmi);
    var sshServiceChanged = getChangedAuthorizedSSHKey(vm, vmi);
    var modifiedEnvDisks = getChangedEnvDisks(vm, vmi);
    var modifiedNICs = getChangedNICs(vm, vmi);
    var _k = getSortedNICs(modifiedNICs, vm, vmi), hotPlugNICs = _k.hotPlugNICs, nonHotPlugNICs = _k.nonHotPlugNICs;
    var modifiedGPUDevices = getChangedGPUDevices(vm, vmi);
    var modifiedHostDevices = getChangedHostDevices(vm, vmi);
    var modifiedVolumesHotplug = getChangedVolumesHotplug(vm, vmi);
    var modifiedHedlessMode = getChangedHeadlessMode(vm, vmi);
    var modifiedGuestSystemAccessLog = getChangedGuestSystemAccessLog(vm, vmi);
    var onSubmit = function (updatedVM) {
        var _a, _b;
        return k8sUpdate({
            data: updatedVM,
            model: VirtualMachineModel,
            name: (_a = updatedVM === null || updatedVM === void 0 ? void 0 : updatedVM.metadata) === null || _a === void 0 ? void 0 : _a.name,
            ns: (_b = updatedVM === null || updatedVM === void 0 ? void 0 : updatedVM.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        });
    };
    return [
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Details));
                createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(CPUMemoryModal, { isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, vm: vm }));
                });
            },
            hasPendingChange: !isInstanceTypeVM(vm) && cpuMemoryChanged && restartRequired(vm),
            label: t('CPU | Memory'),
            tabLabel: VirtualMachineDetailsTabLabel.Details,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Details));
                createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(BootOrderModal, { isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, vm: vm, vmi: vmi }));
                });
            },
            hasPendingChange: bootOrderChanged,
            label: t('Boot disk'),
            tabLabel: VirtualMachineDetailsTabLabel.Details,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Details));
                createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(HostnameModal, { isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, vm: vm, vmi: vmi }));
                });
            },
            hasPendingChange: hostnameChanged,
            label: t('Hostname'),
            tabLabel: VirtualMachineDetailsTabLabel.Details,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Details));
                createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(FirmwareBootloaderModal, { isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, vm: vm, vmi: vmi }));
                });
            },
            hasPendingChange: bootModeChanged,
            label: t('Boot mode'),
            tabLabel: VirtualMachineDetailsTabLabel.Details,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Environment));
            },
            hasPendingChange: !isEmpty(modifiedEnvDisks),
            label: !isEmpty(modifiedEnvDisks) && (modifiedEnvDisks === null || modifiedEnvDisks === void 0 ? void 0 : modifiedEnvDisks.length) > 1
                ? modifiedEnvDisks.join(', ')
                : modifiedEnvDisks[0],
            tabLabel: VirtualMachineDetailsTabLabel.Environment,
        },
        {
            appliedOnLiveMigration: true,
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Network));
            },
            hasPendingChange: !isEmpty(hotPlugNICs),
            label: (hotPlugNICs === null || hotPlugNICs === void 0 ? void 0 : hotPlugNICs.length) > 1 ? hotPlugNICs.join(', ') : hotPlugNICs[0],
            tabLabel: VirtualMachineDetailsTabLabel.Network,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Network));
            },
            hasPendingChange: !isEmpty(nonHotPlugNICs),
            label: (nonHotPlugNICs === null || nonHotPlugNICs === void 0 ? void 0 : nonHotPlugNICs.length) > 1 ? nonHotPlugNICs.join(', ') : nonHotPlugNICs[0],
            tabLabel: VirtualMachineDetailsTabLabel.Network,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Details));
                createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(HardwareDevicesModal, { btnText: t('Add GPU device'), headerText: t('GPU devices'), initialDevices: getGPUDevices(vm), isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, type: HARDWARE_DEVICE_TYPE.GPUS, vm: vm, vmi: vmi }));
                });
            },
            hasPendingChange: !isEmpty(modifiedGPUDevices),
            label: !isEmpty(modifiedGPUDevices) && (modifiedGPUDevices === null || modifiedGPUDevices === void 0 ? void 0 : modifiedGPUDevices.length) > 1
                ? modifiedGPUDevices.join(', ')
                : modifiedGPUDevices[0],
            tabLabel: VirtualMachineDetailsTabLabel.Details,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Details));
                createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(HardwareDevicesModal, { btnText: t('Add Host device'), headerText: t('Host devices'), initialDevices: getHostDevices(vm), isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, type: HARDWARE_DEVICE_TYPE.HOST_DEVICES, vm: vm, vmi: vmi }));
                });
            },
            hasPendingChange: !isEmpty(modifiedHostDevices),
            label: !isEmpty(modifiedHostDevices) && (modifiedHostDevices === null || modifiedHostDevices === void 0 ? void 0 : modifiedHostDevices.length) > 1
                ? modifiedHostDevices.join(', ')
                : modifiedHostDevices[0],
            tabLabel: VirtualMachineDetailsTabLabel.Details,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Scheduling));
                createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(DedicatedResourcesModal, { headerText: t('Dedicated resources'), isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, vm: vm, vmi: vmi }));
                });
            },
            hasPendingChange: dedicatedResourcesChanged,
            label: t('Dedicated resources'),
            tabLabel: VirtualMachineDetailsTabLabel.Scheduling,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Scheduling));
                createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(EvictionStrategyModal, { headerText: t('Eviction strategy'), isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, vm: vm, vmi: vmi }));
                });
            },
            hasPendingChange: evictionStrategyChanged,
            label: t('Eviction strategy'),
            tabLabel: VirtualMachineDetailsTabLabel.Scheduling,
        },
        {
            handleAction: function () {
                createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(StartPauseModal, { headerText: t('Start in pause mode'), isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, vm: vm, vmi: vmi }));
                });
            },
            hasPendingChange: startStrategyChanged,
            label: t('Start in pause mode'),
            tabLabel: VirtualMachineDetailsTabLabel.Details,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Scheduling));
                createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(NodeSelectorModal, { isOpen: isOpen, nodes: nodes, nodesLoaded: nodesLoaded, onClose: onClose, onSubmit: onSubmit, vm: vm }));
                });
            },
            hasPendingChange: nodeSelectorChanged,
            label: t('Node selector'),
            tabLabel: VirtualMachineDetailsTabLabel.Scheduling,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Scripts));
                createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(CloudinitModal, { isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, vm: vm, vmi: vmi }));
                });
            },
            hasPendingChange: cloudInitChanged,
            label: t('Cloud-init'),
            tabLabel: VirtualMachineDetailsTabLabel.Scripts,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Scheduling));
                createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(TolerationsModal, { isOpen: isOpen, nodes: nodes, nodesLoaded: nodesLoaded, onClose: onClose, onSubmit: onSubmit, vm: vm, vmi: vmi }));
                });
            },
            hasPendingChange: tolerationsChanged,
            label: t('Tolerations'),
            tabLabel: VirtualMachineDetailsTabLabel.Scheduling,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Scheduling));
                createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(AffinityModal, { isOpen: isOpen, nodes: nodes, nodesLoaded: nodesLoaded, onClose: onClose, onSubmit: onSubmit, vm: vm }));
                });
            },
            hasPendingChange: affinityChanged,
            label: t('Affinity rules'),
            tabLabel: VirtualMachineDetailsTabLabel.Scheduling,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Scheduling));
                createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(DeschedulerModal, { isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, vm: vm, vmi: vmi }));
                });
            },
            hasPendingChange: deschedulerChanged,
            label: t('Descheduler'),
            tabLabel: VirtualMachineDetailsTabLabel.Scheduling,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Scripts));
                createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(VMSSHSecretModal, { authorizedSSHKeys: authorizedSSHKeys, isOpen: isOpen, onClose: onClose, updateAuthorizedSSHKeys: updateAuthorizedSSHKeys, updateVM: onSubmit, vm: vm }));
                });
            },
            hasPendingChange: sshServiceChanged,
            label: t('Public SSH key'),
            tabLabel: VirtualMachineDetailsTabLabel.Scripts,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Storage));
            },
            hasPendingChange: !isEmpty(modifiedVolumesHotplug),
            label: "".concat(t('Make persistent disk'), " - (").concat((modifiedVolumesHotplug || [])
                .map(function (volume) { return volume === null || volume === void 0 ? void 0 : volume.name; })
                .join(', '), ")"),
            tabLabel: VirtualMachineDetailsTabLabel.Disks,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Details));
                createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(HardwareDevicesHeadlessModeModal, { isOpen: isOpen, onClose: onClose, onSubmit: onSubmit, vm: vm, vmi: vmi }));
                });
            },
            hasPendingChange: modifiedHedlessMode,
            label: t('Headless mode'),
            tabLabel: VirtualMachineDetailsTabLabel.Details,
        },
        {
            handleAction: function () {
                navigate(getTabURL(vm, VirtualMachineDetailsTab.Details));
            },
            hasPendingChange: modifiedGuestSystemAccessLog,
            label: t('Guest system log access'),
            tabLabel: VirtualMachineDetailsTabLabel.Details,
        },
    ];
};
//# sourceMappingURL=usePendingChanges.js.map