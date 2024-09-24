import React from 'react';
import CPUMemory from '@kubevirt-utils/components/CPUMemory/CPUMemory';
import GuestAgentIsRequiredText from '@kubevirt-utils/components/GuestAgentIsRequiredText/GuestAgentIsRequiredText';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getAnnotation } from '@kubevirt-utils/resources/shared';
import { getDisks, getInterfaces, useVMIAndPodsForVM, VM_WORKLOAD_ANNOTATION, } from '@kubevirt-utils/resources/vm';
import { getOperatingSystem, getOperatingSystemName, } from '@kubevirt-utils/resources/vm/utils/operation-system/operationSystem';
import { useGuestOS } from '@kubevirt-utils/resources/vmi';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { FormGroup, TextListItem, TextListItemVariants } from '@patternfly/react-core';
import InstanceTypeConfiguration from './InstanceTypeConfiguration';
var ConfigurationSummary = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var itMatcher = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.instancetype;
    var vmi = useVMIAndPodsForVM((_c = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _c === void 0 ? void 0 : _c.name, (_d = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _d === void 0 ? void 0 : _d.namespace).vmi;
    var guestAgentData = useGuestOS(vmi)[0];
    var osName = (_g = (((_e = guestAgentData === null || guestAgentData === void 0 ? void 0 : guestAgentData.os) === null || _e === void 0 ? void 0 : _e.prettyName) || ((_f = guestAgentData === null || guestAgentData === void 0 ? void 0 : guestAgentData.os) === null || _f === void 0 ? void 0 : _f.name))) !== null && _g !== void 0 ? _g : (React.createElement(GuestAgentIsRequiredText, { vmi: vmi }));
    var interfaces = getInterfaces(vm);
    return (React.createElement(FormGroup, { fieldId: "configuration", hasNoPaddingTop: true, label: t('Configuration') },
        React.createElement(TextListItem, { className: "text-muted", component: TextListItemVariants.dt }, t('Operating system')),
        React.createElement(TextListItem, { component: TextListItemVariants.dd }, getOperatingSystemName(vm) || getOperatingSystem(vm) || osName),
        itMatcher ? (React.createElement(InstanceTypeConfiguration, { itMatcher: itMatcher })) : (React.createElement(React.Fragment, null,
            React.createElement(TextListItem, { className: "text-muted", component: TextListItemVariants.dt }, t('Flavor')),
            React.createElement(TextListItem, { component: TextListItemVariants.dd },
                React.createElement(CPUMemory, { vm: vm, vmi: vmi })),
            React.createElement(TextListItem, { className: "text-muted", component: TextListItemVariants.dt }, t('Workload profile')),
            React.createElement(TextListItem, { component: TextListItemVariants.dd }, getAnnotation((_h = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _h === void 0 ? void 0 : _h.template, VM_WORKLOAD_ANNOTATION) || (React.createElement(MutedTextSpan, { text: t('Not available') }))))),
        React.createElement(TextListItem, { className: "text-muted", component: TextListItemVariants.dt }, t('NICs')),
        React.createElement(TextListItem, { component: TextListItemVariants.dd }, (_j = (interfaces || [])) === null || _j === void 0 ? void 0 :
            _j.map(function (_a) {
                var model = _a.model, name = _a.name;
                return (React.createElement("div", { key: name }, model ? "".concat(name, " - ").concat(model) : name));
            }),
            isEmpty(interfaces) && React.createElement("span", { className: "text-muted" }, "None")),
        React.createElement(TextListItem, { className: "text-muted", component: TextListItemVariants.dt }, t('Disks')),
        React.createElement(TextListItem, { component: TextListItemVariants.dd }, (_k = (getDisks(vm) || [])) === null || _k === void 0 ? void 0 : _k.map(function (disk) { return (React.createElement("div", { key: disk.name }, disk.name)); }))));
};
export default ConfigurationSummary;
//# sourceMappingURL=ConfigurationSummary.js.map