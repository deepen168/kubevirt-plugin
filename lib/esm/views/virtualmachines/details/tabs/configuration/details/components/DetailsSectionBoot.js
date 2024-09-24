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
import { useLocation } from 'react-router-dom-v5-compat';
import classNames from 'classnames';
import BootOrderSummary from '@kubevirt-utils/components/BootOrder/BootOrderSummary';
import BootOrderModal from '@kubevirt-utils/components/BootOrderModal/BootOrderModal';
import FirmwareBootloaderModal from '@kubevirt-utils/components/FirmwareBootloaderModal/FirmwareBootloaderModal';
import { getBootloaderTitleFromVM } from '@kubevirt-utils/components/FirmwareBootloaderModal/utils/utils';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useToggle } from '@kubevirt-utils/hooks/useToggle';
import { getName } from '@kubevirt-utils/resources/shared';
import { getDisks, getInterfaces } from '@kubevirt-utils/resources/vm';
import { updateCustomizeInstanceType } from '@kubevirt-utils/store/customizeInstanceType';
import { ExpandableSection, Switch } from '@patternfly/react-core';
import { printableVMStatus } from '@virtualmachines/utils';
import { getSearchItemsIds } from '../../search/utils/utils';
import { expandURLHash, getDetailsTabBootIds } from '../../utils/search';
import { updateBootLoader, updatedBootOrder, updateStartStrategy } from '../utils/utils';
var DetailsSectionBoot = function (_a) {
    var _b, _c, _d;
    var canUpdateVM = _a.canUpdateVM, instanceTypeVM = _a.instanceTypeVM, isCustomizeInstanceType = _a.isCustomizeInstanceType, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var location = useLocation();
    var _e = useState(!!((_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.startStrategy)), isChecked = _e[0], setIsChecked = _e[1];
    var _f = useToggle('boot-management'), isExpanded = _f[0], setIsExpanded = _f[1];
    var vmName = getName(vm);
    useEffect(function () {
        expandURLHash(getSearchItemsIds(getDetailsTabBootIds(vm)), location === null || location === void 0 ? void 0 : location.hash, setIsExpanded);
    }, [vm, location === null || location === void 0 ? void 0 : location.hash]);
    return (React.createElement(ExpandableSection, { isExpanded: isExpanded, isIndented: true, onToggle: function (_event, val) { return setIsExpanded(val); }, toggleContent: React.createElement(SearchItem, { id: "boot-management" }, t('Boot management')) },
        React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement("div", { className: classNames({ 'text-muted': !canUpdateVM }) }, getBootloaderTitleFromVM(instanceTypeVM || vm)), onEditClick: function () {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(FirmwareBootloaderModal, { onSubmit: function (updatedVM) {
                            return isCustomizeInstanceType
                                ? Promise.resolve(updateCustomizeInstanceType([{ data: updatedVM }]))
                                : updateBootLoader(updatedVM, vm);
                        }, isOpen: isOpen, onClose: onClose, vm: instanceTypeVM || vm, vmi: vmi }));
                });
            }, className: "DetailsSection-margin__bottom", "data-test-id": "".concat(vmName, "-boot-method"), descriptionHeader: React.createElement(SearchItem, { id: "boot-mode" }, t('Boot mode')), isEdit: canUpdateVM }),
        React.createElement(VirtualMachineDescriptionItem, { onEditClick: function () {
                return createModal(function (props) { return (React.createElement(BootOrderModal, __assign({}, props, { onSubmit: function (updatedVM) {
                        return isCustomizeInstanceType
                            ? Promise.resolve(updateCustomizeInstanceType([
                                {
                                    data: getDisks(updatedVM),
                                    path: "spec.template.spec.domain.devices.disks",
                                },
                                {
                                    data: getInterfaces(updatedVM),
                                    path: ".spec.template.spec.domain.devices.interfaces",
                                },
                            ]))
                            : updatedBootOrder(updatedVM);
                    }, vm: vm, vmi: vmi }))); });
            }, className: "DetailsSection-margin__bottom", "data-test-id": "".concat(vmName, "-boot-order"), descriptionData: React.createElement(BootOrderSummary, { vm: vm }), descriptionHeader: React.createElement(SearchItem, { id: "boot-order" }, t('Boot order')), isEdit: true }),
        React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('Applying the start/pause mode to this Virtual Machine will cause it to partially reboot and pause.'), descriptionData: React.createElement(Switch, { onChange: function (_event, checked) {
                    setIsChecked(checked);
                    isCustomizeInstanceType
                        ? Promise.resolve(updateCustomizeInstanceType([
                            {
                                data: checked ? printableVMStatus.Paused : null,
                                path: "spec.template.spec.startStrategy",
                            },
                        ]))
                        : updateStartStrategy(checked, vm);
                }, id: "start-in-pause-mode", isChecked: isChecked }), descriptionHeader: React.createElement(SearchItem, { id: "start-pause-mode" }, t('Start in pause mode')), className: "DetailsSection-margin__bottom", "data-test-id": "start-pause-mode", isPopover: true })));
};
export default DetailsSectionBoot;
//# sourceMappingURL=DetailsSectionBoot.js.map