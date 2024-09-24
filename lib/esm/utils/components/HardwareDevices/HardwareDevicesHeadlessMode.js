import React, { useState } from 'react';
import produce from 'immer';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ensurePath } from '@kubevirt-utils/utils/utils';
import { Flex, FlexItem, Switch } from '@patternfly/react-core';
import VirtualMachineDescriptionItem from '../VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
var HardwareDevicesHeadlessMode = function (_a) {
    var _b, _c, _d, _e;
    var onSubmit = _a.onSubmit, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var devices = (_e = (_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.domain) === null || _e === void 0 ? void 0 : _e.devices;
    var _f = useState((devices === null || devices === void 0 ? void 0 : devices.hasOwnProperty('autoattachGraphicsDevice')) && !(devices === null || devices === void 0 ? void 0 : devices.autoattachGraphicsDevice)), isChecked = _f[0], setIsChecked = _f[1];
    var updateHeadlessMode = function (checked) {
        var updatedVM = produce(vm, function (vmDraft) {
            if (vm) {
                ensurePath(vmDraft, ['spec.template.spec.domain.devices']);
                if (checked) {
                    vmDraft.spec.template.spec.domain.devices.autoattachGraphicsDevice = !checked;
                    return vmDraft;
                }
                delete vmDraft.spec.template.spec.domain.devices.autoattachGraphicsDevice;
                return vmDraft;
            }
        });
        return onSubmit(updatedVM);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('Whether to attach the default graphics device or not. VNC will not be available if checked'), descriptionData: React.createElement(Flex, { spaceItems: { default: 'spaceItemsNone' } },
                React.createElement(FlexItem, null,
                    React.createElement(Switch, { onChange: function (_event, checked) {
                            setIsChecked(checked);
                            updateHeadlessMode(checked);
                        }, id: "headless-mode", isChecked: isChecked }))), breadcrumb: "VirtualMachine.spec.template.devices.autoattachGraphicsDevice", descriptionHeader: t('Headless mode'), isPopover: true })));
};
export default HardwareDevicesHeadlessMode;
//# sourceMappingURL=HardwareDevicesHeadlessMode.js.map