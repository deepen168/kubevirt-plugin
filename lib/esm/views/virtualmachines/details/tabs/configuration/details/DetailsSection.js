import React, { useEffect, useMemo, useState } from 'react';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { INSTANCETYPE_CLASS_DISPLAY_NAME } from '@kubevirt-utils/components/AddBootableVolumeModal/components/VolumeMetadata/components/InstanceTypeDrilldownSelect/utils/constants';
import CPUDescription from '@kubevirt-utils/components/CPUDescription/CPUDescription';
import CPUMemory from '@kubevirt-utils/components/CPUMemory/CPUMemory';
import CPUMemoryModal from '@kubevirt-utils/components/CPUMemoryModal/CPUMemoryModal';
import { DescriptionModal } from '@kubevirt-utils/components/DescriptionModal/DescriptionModal';
import HeadlessMode from '@kubevirt-utils/components/HeadlessMode/HeadlessMode';
import HostnameModal from '@kubevirt-utils/components/HostnameModal/HostnameModal';
import InstanceTypeModal from '@kubevirt-utils/components/InstanceTypeModal/InstanceTypeModal';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import WorkloadProfileModal from '@kubevirt-utils/components/WorkloadProfileModal/WorkloadProfileModal';
import { DISABLED_GUEST_SYSTEM_LOGS_ACCESS } from '@kubevirt-utils/hooks/useFeatures/constants';
import { useFeatures } from '@kubevirt-utils/hooks/useFeatures/useFeatures';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { asAccessReview, getAnnotation, getName } from '@kubevirt-utils/resources/shared';
import { WORKLOADS_LABELS } from '@kubevirt-utils/resources/template';
import { DESCRIPTION_ANNOTATION, getCPU, getInstanceTypeMatcher, getWorkload, } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useAccessReview } from '@openshift-console/dynamic-plugin-sdk';
import { DescriptionList, Grid, GridItem, Switch, Title } from '@patternfly/react-core';
import DetailsSectionBoot from './components/DetailsSectionBoot';
import DetailsSectionHardware from './components/DetailsSectionHardware';
import { updateDescription, updatedHostname, updatedInstanceType, updatedVirtualMachine, updateGuestSystemAccessLog, updateHeadlessMode, updateWorkload, } from './utils/utils';
import './details-section.scss';
var DetailsSection = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var allInstanceTypes = _a.allInstanceTypes, instanceTypeVM = _a.instanceTypeVM, vm = _a.vm, vmi = _a.vmi;
    var createModal = useModal().createModal;
    var t = useKubevirtTranslation().t;
    var accessReview = asAccessReview(VirtualMachineModel, vm, 'update');
    var canUpdateVM = useAccessReview(accessReview || {})[0];
    var isGuestSystemLogsDisabled = useFeatures(DISABLED_GUEST_SYSTEM_LOGS_ACCESS).featureEnabled;
    var logSerialConsole = (_f = (_e = (_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.domain) === null || _e === void 0 ? void 0 : _e.devices) === null || _f === void 0 ? void 0 : _f.logSerialConsole;
    var _o = useState(), isCheckedGuestSystemAccessLog = _o[0], setIsCheckedGuestSystemAccessLog = _o[1];
    var instanceType = useMemo(function () { return allInstanceTypes.find(function (it) { var _a, _b; return it.metadata.name === ((_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.instancetype) === null || _b === void 0 ? void 0 : _b.name); }); }, [allInstanceTypes, (_h = (_g = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _g === void 0 ? void 0 : _g.instancetype) === null || _h === void 0 ? void 0 : _h.name]);
    useEffect(function () {
        return setIsCheckedGuestSystemAccessLog(logSerialConsole || (logSerialConsole === undefined && !isGuestSystemLogsDisabled));
    }, [isGuestSystemLogsDisabled, logSerialConsole]);
    var vmWorkload = getWorkload(vm);
    var vmName = getName(vm);
    var isInstanceType = !isEmpty((_j = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _j === void 0 ? void 0 : _j.instancetype);
    if (!vm) {
        return React.createElement(Loading, null);
    }
    return (React.createElement("div", { className: "VirtualMachinesDetailsSection" },
        React.createElement(Title, { headingLevel: "h2" },
            React.createElement(SearchItem, { id: "details" }, t('VirtualMachine details'))),
        React.createElement(Grid, null,
            React.createElement(GridItem, { span: 5 },
                React.createElement(DescriptionList, { className: "pf-c-description-list" },
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: getAnnotation(vm, DESCRIPTION_ANNOTATION) || React.createElement(MutedTextSpan, { text: t('None') }), onEditClick: function () {
                            return createModal(function (_a) {
                                var isOpen = _a.isOpen, onClose = _a.onClose;
                                return (React.createElement(DescriptionModal, { isOpen: isOpen, obj: vm, onClose: onClose, onSubmit: function (description) { return updateDescription(vm, description); } }));
                            });
                        }, "data-test-id": "".concat(vmName, "-description"), descriptionHeader: React.createElement(SearchItem, { id: "description" }, t('Description')), isEdit: true }),
                    !getInstanceTypeMatcher(vm) && (React.createElement(VirtualMachineDescriptionItem, { descriptionData: vmWorkload ? (WORKLOADS_LABELS[vmWorkload] || vmWorkload) : (React.createElement(MutedTextSpan, { text: t('Not available') })), descriptionHeader: React.createElement(SearchItem, { id: "workload-profile" }, t('Workload profile')), onEditClick: function () {
                            return createModal(function (_a) {
                                var isOpen = _a.isOpen, onClose = _a.onClose;
                                return (React.createElement(WorkloadProfileModal, { initialWorkload: vmWorkload, isOpen: isOpen, onClose: onClose, onSubmit: function (workload) { return updateWorkload(vm, workload); } }));
                            });
                        }, "data-test-id": "".concat(vmName, "-workload-profile"), isEdit: true })),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionHeader: React.createElement(SearchItem, { id: "cpu-memory" }, isInstanceType ? t('InstanceType') : t('CPU | Memory')), onEditClick: function () {
                            return createModal(function (_a) {
                                var isOpen = _a.isOpen, onClose = _a.onClose;
                                return isInstanceType ? (React.createElement(InstanceTypeModal, { allInstanceTypes: allInstanceTypes, instanceType: instanceType, instanceTypeVM: instanceTypeVM, isOpen: isOpen, onClose: onClose, onSubmit: updatedInstanceType })) : (React.createElement(CPUMemoryModal, { isOpen: isOpen, onClose: onClose, onSubmit: updatedVirtualMachine, vm: vm }));
                            });
                        }, subTitle: instanceType && getAnnotation(instanceType, INSTANCETYPE_CLASS_DISPLAY_NAME), bodyContent: isInstanceType ? null : React.createElement(CPUDescription, { cpu: getCPU(vm) }), "data-test-id": "".concat(vmName, "-cpu-memory"), descriptionData: React.createElement(CPUMemory, { vm: instanceTypeVM || vm, vmi: vmi }), isEdit: canUpdateVM, isPopover: true }),
                    React.createElement(VirtualMachineDescriptionItem, { onEditClick: function () {
                            return createModal(function (_a) {
                                var isOpen = _a.isOpen, onClose = _a.onClose;
                                return (React.createElement(HostnameModal, { isOpen: isOpen, onClose: onClose, onSubmit: updatedHostname, vm: vm, vmi: vmi }));
                            });
                        }, "data-test-id": "".concat(vmName, "-hostname"), descriptionData: ((_m = (_l = (_k = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _k === void 0 ? void 0 : _k.template) === null || _l === void 0 ? void 0 : _l.spec) === null || _m === void 0 ? void 0 : _m.hostname) || vmName, descriptionHeader: React.createElement(SearchItem, { id: "hostname" }, t('Hostname')), isEdit: true }),
                    React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('Whether to attach the default graphics device or not. VNC will not be available if checked.'), descriptionData: React.createElement(HeadlessMode, { updateHeadlessMode: function (checked) { return updateHeadlessMode(vm, checked); }, vm: vm }), breadcrumb: "VirtualMachine.spec.template.devices.autoattachGraphicsDevice", "data-test-id": "".concat(vmName, "-headless"), descriptionHeader: React.createElement(SearchItem, { id: "headless-mode" }, t('Headless mode')), isPopover: true }),
                    React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('Applying the start/pause mode to this Virtual Machine will cause it to partially reboot and pause.'), descriptionData: React.createElement(Switch, { onChange: function (_event, checked) {
                                setIsCheckedGuestSystemAccessLog(checked);
                                updateGuestSystemAccessLog(vm, checked);
                            }, id: "guest-system-log-access", isChecked: isCheckedGuestSystemAccessLog, isDisabled: isGuestSystemLogsDisabled }), descriptionHeader: React.createElement(SearchItem, { id: "guest-system-log-access" }, t('Guest system log access')), "data-test-id": "guest-system-log-access", isPopover: true }))),
            React.createElement(GridItem, { span: 5 },
                React.createElement(DescriptionList, { className: "pf-c-description-list" },
                    React.createElement(DetailsSectionHardware, { vm: vm, vmi: vmi }),
                    React.createElement(DetailsSectionBoot, { canUpdateVM: canUpdateVM, instanceTypeVM: instanceTypeVM, vm: vm, vmi: vmi }))))));
};
export default DetailsSection;
//# sourceMappingURL=DetailsSection.js.map