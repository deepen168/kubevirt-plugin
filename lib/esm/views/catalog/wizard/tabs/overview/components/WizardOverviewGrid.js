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
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom-v5-compat';
import CPUDescription from '@kubevirt-utils/components/CPUDescription/CPUDescription';
import { CpuMemHelperTextResources } from '@kubevirt-utils/components/CPUDescription/utils/utils';
import CPUMemoryModal from '@kubevirt-utils/components/CPUMemoryModal/CPUMemoryModal';
import { DescriptionModal } from '@kubevirt-utils/components/DescriptionModal/DescriptionModal';
import FirmwareBootloaderModal from '@kubevirt-utils/components/FirmwareBootloaderModal/FirmwareBootloaderModal';
import { getBootloaderTitleFromVM } from '@kubevirt-utils/components/FirmwareBootloaderModal/utils/utils';
import HardwareDevices from '@kubevirt-utils/components/HardwareDevices/HardwareDevices';
import HostnameModal from '@kubevirt-utils/components/HostnameModal/HostnameModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import WorkloadProfileModal from '@kubevirt-utils/components/WorkloadProfileModal/WorkloadProfileModal';
import { DISABLED_GUEST_SYSTEM_LOGS_ACCESS } from '@kubevirt-utils/hooks/useFeatures/constants';
import { useFeatures } from '@kubevirt-utils/hooks/useFeatures/useFeatures';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getAnnotation } from '@kubevirt-utils/resources/shared';
import { getVmCPUMemory, WORKLOADS_LABELS } from '@kubevirt-utils/resources/template';
import { getCPU, getGPUDevices, getHostDevices, getMachineType, getWorkload, VM_WORKLOAD_ANNOTATION, } from '@kubevirt-utils/resources/vm';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
import { DescriptionList, Grid, GridItem, Switch } from '@patternfly/react-core';
import { printableVMStatus } from '@virtualmachines/utils';
import { WizardDescriptionItem } from '../../../components/WizardDescriptionItem';
import VMNameModal from './VMNameModal/VMNameModal';
import { WizardOverviewDisksTable } from './WizardOverviewDisksTable/WizardOverviewDisksTable';
import { WizardOverviewNetworksTable } from './WizardOverviewNetworksTable/WizardOverviewNetworksTable';
var WizardOverviewGrid = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
    var tabsData = _a.tabsData, updateVM = _a.updateVM, vm = _a.vm;
    var navigate = useNavigate();
    var ns = useParams().ns;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _9 = getVmCPUMemory(vm), cpuCount = _9.cpuCount, memory = _9.memory;
    var isDisabledGuestSystemLogs = useFeatures(DISABLED_GUEST_SYSTEM_LOGS_ACCESS).featureEnabled;
    var description = getAnnotation(vm, 'description');
    var workloadAnnotation = getWorkload(vm);
    var startStrategy = (_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.startStrategy;
    var hostname = (_g = (_f = (_e = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _e === void 0 ? void 0 : _e.template) === null || _f === void 0 ? void 0 : _f.spec) === null || _g === void 0 ? void 0 : _g.hostname;
    var vmName = (_h = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _h === void 0 ? void 0 : _h.name;
    var networks = (_l = (_k = (_j = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _j === void 0 ? void 0 : _j.template) === null || _k === void 0 ? void 0 : _k.spec) === null || _l === void 0 ? void 0 : _l.networks;
    var interfaces = (_r = (_q = (_p = (_o = (_m = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _m === void 0 ? void 0 : _m.template) === null || _o === void 0 ? void 0 : _o.spec) === null || _p === void 0 ? void 0 : _p.domain) === null || _q === void 0 ? void 0 : _q.devices) === null || _r === void 0 ? void 0 : _r.interfaces;
    var disks = (_w = (_v = (_u = (_t = (_s = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _s === void 0 ? void 0 : _s.template) === null || _t === void 0 ? void 0 : _t.spec) === null || _u === void 0 ? void 0 : _u.domain) === null || _v === void 0 ? void 0 : _v.devices) === null || _w === void 0 ? void 0 : _w.disks;
    var displayName = (_y = (_x = tabsData === null || tabsData === void 0 ? void 0 : tabsData.overview) === null || _x === void 0 ? void 0 : _x.templateMetadata) === null || _y === void 0 ? void 0 : _y.displayName;
    var logSerialConsole = (_3 = (_2 = (_1 = (_0 = (_z = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _z === void 0 ? void 0 : _z.template) === null || _0 === void 0 ? void 0 : _0.spec) === null || _1 === void 0 ? void 0 : _1.domain) === null || _2 === void 0 ? void 0 : _2.devices) === null || _3 === void 0 ? void 0 : _3.logSerialConsole;
    var hostDevicesCount = ((_4 = getHostDevices(vm)) === null || _4 === void 0 ? void 0 : _4.length) || 0;
    var gpusCount = ((_5 = getGPUDevices(vm)) === null || _5 === void 0 ? void 0 : _5.length) || 0;
    var nDevices = hostDevicesCount + gpusCount;
    var _10 = useState(!!startStrategy), isChecked = _10[0], setIsChecked = _10[1];
    var _11 = useState(), isCheckedGuestSystemLogAccess = _11[0], setIsCheckedGuestSystemLogAccess = _11[1];
    useEffect(function () {
        setIsCheckedGuestSystemLogAccess((logSerialConsole || logSerialConsole === undefined) && !isDisabledGuestSystemLogs);
    }, [isDisabledGuestSystemLogs, logSerialConsole]);
    var updateWorkload = function (newWorkload) {
        return updateVM(function (draftVM) {
            var _a;
            if (!((_a = draftVM.spec.template.metadata) === null || _a === void 0 ? void 0 : _a.annotations))
                draftVM.spec.template.metadata.annotations = {};
            draftVM.spec.template.metadata.annotations[VM_WORKLOAD_ANNOTATION] = newWorkload;
        });
    };
    var updateStartStrategy = function (checked) {
        return updateVM(function (vmDraft) {
            vmDraft.spec.template.spec.startStrategy = checked ? printableVMStatus.Paused : null;
        });
    };
    return (React.createElement(Grid, { className: "wizard-overview-tab__grid", hasGutter: true },
        React.createElement(GridItem, { rowSpan: 4, span: 6 },
            React.createElement(DescriptionList, { className: "pf-c-description-list" },
                React.createElement(WizardDescriptionItem, { onEditClick: function () {
                        return createModal(function (modalProps) { return (React.createElement(VMNameModal, __assign({}, modalProps, { onSubmit: updateVM, vm: vm }))); });
                    }, description: (_6 = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _6 === void 0 ? void 0 : _6.name, helperPopover: { content: t('Name of the VirtualMachine'), header: t('Name') }, isEdit: true, testId: "wizard-overview-name", title: t('Name') }),
                React.createElement(WizardDescriptionItem, { helperPopover: {
                        content: t('Namespace of the VirtualMachine'),
                        header: t('Namespace'),
                    }, description: (_7 = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _7 === void 0 ? void 0 : _7.namespace, testId: "wizard-overview-namespace", title: t('Namespace') }),
                React.createElement(WizardDescriptionItem, { helperPopover: {
                        content: t('Description of the VirtualMachine'),
                        header: t('Description'),
                    }, onEditClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(DescriptionModal, { onSubmit: function (updatedDescription) {
                                    return updateVM(function (vmDraft) {
                                        if (updatedDescription) {
                                            vmDraft.metadata.annotations['description'] = updatedDescription;
                                        }
                                        else {
                                            delete vmDraft.metadata.annotations['description'];
                                        }
                                    });
                                }, isOpen: isOpen, obj: vm, onClose: onClose }));
                        });
                    }, description: description, isEdit: true, testId: "wizard-overview-description", title: t('Description') }),
                React.createElement(WizardDescriptionItem, { description: displayName, testId: "wizard-overview-operating-system", title: t('Operating system') }),
                React.createElement(WizardDescriptionItem, { description: t('{{cpuCount}} CPU | {{memory}} Memory', {
                        cpuCount: cpuCount,
                        memory: readableSizeUnit(memory),
                    }), helperPopover: {
                        content: (React.createElement(CPUDescription, { cpu: getCPU(vm), helperTextResource: CpuMemHelperTextResources.FutureVM })),
                        header: t('CPU | Memory'),
                    }, onEditClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(CPUMemoryModal, { isOpen: isOpen, onClose: onClose, onSubmit: updateVM, vm: vm }));
                        });
                    }, className: "wizard-overview-description-left-column", isEdit: true, testId: "wizard-overview-cpu-memory", title: t('CPU | Memory') }),
                React.createElement(WizardDescriptionItem, { helperPopover: {
                        content: t('The machine type defines the virtual hardware configuration while the operating system name and version refer to the hypervisor.'),
                        header: t('Machine type'),
                    }, className: "wizard-overview-description-left-column", description: getMachineType(vm), testId: "wizard-overview-machine-type", title: t('Machine type') }),
                React.createElement(WizardDescriptionItem, { onEditClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(FirmwareBootloaderModal, { isOpen: isOpen, onClose: onClose, onSubmit: updateVM, vm: vm }));
                        });
                    }, description: getBootloaderTitleFromVM(vm), isEdit: true, testId: "wizard-overview-boot-method", title: t('Boot mode') }),
                React.createElement(WizardDescriptionItem, { description: React.createElement(Switch, { onChange: function (_event, checked) {
                            setIsChecked(checked);
                            updateStartStrategy(checked);
                        }, id: "start-in-pause-mode", isChecked: isChecked }), helperPopover: {
                        content: t('Applying the start/pause mode to this Virtual Machine will cause it to partially reboot and pause.'),
                        header: t('Start in pause mode'),
                    }, testId: "start-in-pause-mode", title: t('Start in pause mode') }),
                React.createElement(WizardDescriptionItem, { onEditClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(WorkloadProfileModal, { initialWorkload: workloadAnnotation, isOpen: isOpen, onClose: onClose, onSubmit: updateWorkload }));
                        });
                    }, className: "wizard-overview-description-left-column", description: (_8 = WORKLOADS_LABELS === null || WORKLOADS_LABELS === void 0 ? void 0 : WORKLOADS_LABELS[workloadAnnotation]) !== null && _8 !== void 0 ? _8 : t('Other'), isEdit: true, testId: "wizard-overview-workload-profile", title: t('Workload profile') }))),
        React.createElement(GridItem, { rowSpan: 4, span: 6 },
            React.createElement(DescriptionList, { className: "pf-c-description-list" },
                React.createElement(WizardDescriptionItem, { description: React.createElement(WizardOverviewNetworksTable, { interfaces: interfaces, isInlineGrid: true, networks: networks }), onTitleClick: function () {
                        return navigate("/k8s/ns/".concat(ns, "/catalog/template/review/network-interfaces"));
                    }, count: networks === null || networks === void 0 ? void 0 : networks.length, testId: "wizard-overview-network-interfaces", title: t('Network interfaces') }),
                React.createElement(WizardDescriptionItem, { count: disks === null || disks === void 0 ? void 0 : disks.length, description: React.createElement(WizardOverviewDisksTable, { isInlineGrid: true, vm: vm }), onTitleClick: function () { return navigate("/k8s/ns/".concat(ns, "/catalog/template/review/disks")); }, testId: "wizard-overview-disks", title: t('Disks') }),
                React.createElement(WizardDescriptionItem, { count: nDevices, description: React.createElement(HardwareDevices, { onSubmit: updateVM, vm: vm }), testId: "wizard-overview-hardware-devices", title: t('Hardware devices') }),
                React.createElement(WizardDescriptionItem, { onEditClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(HostnameModal, { isOpen: isOpen, onClose: onClose, onSubmit: updateVM, vm: vm }));
                        });
                    }, description: hostname || vmName, isEdit: true, testId: "wizard-overview-hostname", title: t('Hostname') }),
                React.createElement(WizardDescriptionItem, { description: React.createElement(Switch, { onChange: function (_event, checked) {
                            setIsCheckedGuestSystemLogAccess(checked);
                            updateVM(function (vmDraft) {
                                vmDraft.spec.template.spec.domain.devices.logSerialConsole = checked ? null : false;
                                return vmDraft;
                            });
                        }, id: "guest-system-log-access", isChecked: isCheckedGuestSystemLogAccess, isDisabled: isDisabledGuestSystemLogs }), helperPopover: {
                        content: isDisabledGuestSystemLogs
                            ? t('Guest system logs disabled at cluster')
                            : t('Enables access to the VirtualMachine guest system log. Wait a few seconds for logging to start before viewing the log.'),
                        header: t('Guest system log access'),
                    }, testId: "guest-system-log-access", title: t('Guest system log access') })))));
};
export default WizardOverviewGrid;
//# sourceMappingURL=WizardOverviewGrid.js.map