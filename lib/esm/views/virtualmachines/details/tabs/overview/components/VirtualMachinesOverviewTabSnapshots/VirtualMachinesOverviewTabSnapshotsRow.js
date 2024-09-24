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
import React, { useState } from 'react';
import classnames from 'classnames';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import RestoreModal from '@kubevirt-utils/components/SnapshotModal/RestoreModal';
import { timestampFor } from '@kubevirt-utils/components/Timestamp/utils/datetime';
import KebabToggle from '@kubevirt-utils/components/toggles/KebabToggle';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { DescriptionList, DescriptionListTermHelpText, DescriptionListTermHelpTextButton, Dropdown, DropdownItem, DropdownList, Popover, PopoverPosition, } from '@patternfly/react-core';
import { printableVMStatus } from '../../../../../utils';
import IndicationLabelList from '../../../snapshots/components/IndicationLabel/IndicationLabelList';
import SnapshotDeleteModal from './component/SnapshotDeleteModal';
import { icon } from './utils/snapshotStatus';
import './virtual-machines-overview-tab-snapshots.scss';
var VirtualMachinesOverviewTabSnapshotsRow = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var snapshot = _a.snapshot, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var _h = useState(false), isKebabOpen = _h[0], setIsKebabOpen = _h[1];
    var createModal = useModal().createModal;
    var timestamp = timestampFor(new Date((_b = snapshot === null || snapshot === void 0 ? void 0 : snapshot.metadata) === null || _b === void 0 ? void 0 : _b.creationTimestamp), new Date(Date.now()), false);
    var Icon = icon[(_c = snapshot === null || snapshot === void 0 ? void 0 : snapshot.status) === null || _c === void 0 ? void 0 : _c.phase];
    var onToggle = function () { return setIsKebabOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    return (React.createElement("div", { className: "VirtualMachinesOverviewTabSnapshotsRow--main" },
        React.createElement("div", { className: "name" },
            React.createElement(Icon, null),
            React.createElement(DescriptionListTermHelpText, { className: "pf-c-description-list__term" },
                React.createElement(Popover, { bodyContent: React.createElement(DescriptionList, { className: "pf-c-description-list", isHorizontal: true },
                        React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(React.Fragment, null,
                                React.createElement(Icon, null),
                                React.createElement("span", { className: "icon-spacer" }, (_d = snapshot === null || snapshot === void 0 ? void 0 : snapshot.status) === null || _d === void 0 ? void 0 : _d.phase)), descriptionHeader: t('Status') }),
                        React.createElement(VirtualMachineDescriptionItem, { descriptionData: timestamp, descriptionHeader: t('Created') }),
                        React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(IndicationLabelList, { snapshot: snapshot }), descriptionHeader: t('Indications') })), headerContent: (_e = snapshot === null || snapshot === void 0 ? void 0 : snapshot.metadata) === null || _e === void 0 ? void 0 : _e.name, position: PopoverPosition.left },
                    React.createElement(DescriptionListTermHelpTextButton, { className: classnames('pf-c-description-list__text', 'icon-spacer__offset') }, (_f = snapshot === null || snapshot === void 0 ? void 0 : snapshot.metadata) === null || _f === void 0 ? void 0 : _f.name))),
            React.createElement("span", { className: "text-muted timestamp" }, "(".concat(timestamp, ")"))),
        React.createElement(Dropdown, { isOpen: isKebabOpen, onOpenChange: function (open) { return setIsKebabOpen(open); }, onSelect: function () { return setIsKebabOpen(false); }, popperProps: { position: 'right' }, toggle: KebabToggle({ isExpanded: isKebabOpen, onClick: onToggle }) },
            React.createElement(DropdownList, null,
                React.createElement(DropdownItem, { isDisabled: ((_g = vm === null || vm === void 0 ? void 0 : vm.status) === null || _g === void 0 ? void 0 : _g.printableStatus) !== printableVMStatus.Stopped, key: "restore", onClick: function () { return createModal(function (props) { return React.createElement(RestoreModal, __assign({ snapshot: snapshot }, props)); }); } }, t('Restore')),
                React.createElement(DropdownItem, { onClick: function () {
                        return createModal(function (props) { return React.createElement(SnapshotDeleteModal, __assign({ snapshot: snapshot }, props)); });
                    }, key: "delete" }, t('Delete'))))));
};
export default VirtualMachinesOverviewTabSnapshotsRow;
//# sourceMappingURL=VirtualMachinesOverviewTabSnapshotsRow.js.map