import React, { useEffect, useState } from 'react';
import { VirtualMachineModel } from 'src/views/dashboard-extensions/utils';
import { DescriptionModal } from '@kubevirt-utils/components/DescriptionModal/DescriptionModal';
import HeadlessMode from '@kubevirt-utils/components/HeadlessMode/HeadlessMode';
import HostnameModal from '@kubevirt-utils/components/HostnameModal/HostnameModal';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { DISABLED_GUEST_SYSTEM_LOGS_ACCESS } from '@kubevirt-utils/hooks/useFeatures/constants';
import { useFeatures } from '@kubevirt-utils/hooks/useFeatures/useFeatures';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { asAccessReview, getAnnotation, getName } from '@kubevirt-utils/resources/shared';
import { DESCRIPTION_ANNOTATION, getDevices, getHostname } from '@kubevirt-utils/resources/vm';
import { updateCustomizeInstanceType, vmSignal } from '@kubevirt-utils/store/customizeInstanceType';
import { useAccessReview } from '@openshift-console/dynamic-plugin-sdk';
import { DescriptionList, Grid, GridItem, Switch, Title } from '@patternfly/react-core';
import DetailsSectionBoot from '@virtualmachines/details/tabs/configuration/details/components/DetailsSectionBoot';
import DetailsSectionHardware from '@virtualmachines/details/tabs/configuration/details/components/DetailsSectionHardware';
var CustomizeInstanceTypeDetailsTab = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var vm = vmSignal.value;
    var createModal = useModal().createModal;
    var t = useKubevirtTranslation().t;
    var accessReview = asAccessReview(VirtualMachineModel, vm, 'update');
    var canUpdateVM = useAccessReview(accessReview || {})[0];
    var isGuestSystemLogsDisabled = useFeatures(DISABLED_GUEST_SYSTEM_LOGS_ACCESS).featureEnabled;
    var logSerialConsole = (_e = (_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.domain) === null || _d === void 0 ? void 0 : _d.devices) === null || _e === void 0 ? void 0 : _e.logSerialConsole;
    var _j = useState(), isCheckedGuestSystemAccessLog = _j[0], setIsCheckedGuestSystemAccessLog = _j[1];
    useEffect(function () {
        return setIsCheckedGuestSystemAccessLog(logSerialConsole || (logSerialConsole === undefined && !isGuestSystemLogsDisabled));
    }, [isGuestSystemLogsDisabled, logSerialConsole]);
    var vmName = getName(vm);
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
                                return (React.createElement(DescriptionModal, { onSubmit: function (description) {
                                        return Promise.resolve(updateCustomizeInstanceType([
                                            {
                                                data: description,
                                                path: "metadata.annotations.".concat(DESCRIPTION_ANNOTATION),
                                            },
                                        ]));
                                    }, isOpen: isOpen, obj: vm, onClose: onClose }));
                            });
                        }, "data-test-id": "".concat(vmName, "-description"), descriptionHeader: React.createElement(SearchItem, { id: "description" }, t('Description')), isEdit: true }),
                    React.createElement(VirtualMachineDescriptionItem, { onEditClick: function () {
                            return createModal(function (_a) {
                                var isOpen = _a.isOpen, onClose = _a.onClose;
                                return (React.createElement(HostnameModal, { onSubmit: function (updatedVM) {
                                        return Promise.resolve(updateCustomizeInstanceType([
                                            {
                                                data: getHostname(updatedVM),
                                                path: "spec.template.spec.hostname",
                                            },
                                        ]));
                                    }, isOpen: isOpen, onClose: onClose, vm: vm }));
                            });
                        }, "data-test-id": "".concat(vmName, "-hostname"), descriptionData: ((_h = (_g = (_f = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _f === void 0 ? void 0 : _f.template) === null || _g === void 0 ? void 0 : _g.spec) === null || _h === void 0 ? void 0 : _h.hostname) || vmName, descriptionHeader: React.createElement(SearchItem, { id: "hostname" }, t('Hostname')), isEdit: true }),
                    React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('Whether to attach the default graphics device or not. VNC will not be available if checked.'), descriptionData: React.createElement(HeadlessMode, { updateHeadlessMode: function (checked) {
                                return Promise.resolve(updateCustomizeInstanceType([
                                    {
                                        data: checked ? false : null,
                                        path: "spec.template.spec.domain.devices.autoattachGraphicsDevice",
                                    },
                                ]));
                            }, vm: vm }), breadcrumb: "VirtualMachine.spec.template.devices.autoattachGraphicsDevice", "data-test-id": "".concat(vmName, "-headless"), descriptionHeader: React.createElement(SearchItem, { id: "headless-mode" }, t('Headless mode')), isPopover: true }),
                    React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('Applying the start/pause mode to this Virtual Machine will cause it to partially reboot and pause.'), descriptionData: React.createElement(Switch, { onChange: function (_event, checked) {
                                setIsCheckedGuestSystemAccessLog(checked);
                                updateCustomizeInstanceType([
                                    {
                                        data: checked,
                                        path: "spec.template.spec.domain.devices.logSerialConsole",
                                    },
                                ]);
                            }, id: "guest-system-log-access", isChecked: isCheckedGuestSystemAccessLog, isDisabled: isGuestSystemLogsDisabled }), descriptionHeader: React.createElement(SearchItem, { id: "guest-system-log-access" }, t('Guest system log access')), "data-test-id": "guest-system-log-access", isPopover: true }))),
            React.createElement(GridItem, { span: 5 },
                React.createElement(DescriptionList, { className: "pf-c-description-list" },
                    React.createElement(DetailsSectionHardware, { onSubmit: function (type, updatedVM) {
                            var _a;
                            return Promise.resolve(updateCustomizeInstanceType([
                                {
                                    data: (_a = getDevices(updatedVM)) === null || _a === void 0 ? void 0 : _a[type],
                                    path: "spec.template.spec.domain.devices.".concat(type),
                                },
                            ]));
                        }, vm: vm }),
                    React.createElement(DetailsSectionBoot, { canUpdateVM: canUpdateVM, isCustomizeInstanceType: true, vm: vm }))))));
};
export default CustomizeInstanceTypeDetailsTab;
//# sourceMappingURL=CustomizeInstanceTypeDetailsTab.js.map