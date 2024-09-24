import React, { memo, useState } from 'react';
import { useParams } from 'react-router-dom-v5-compat';
import { updateVMCPUMemory } from '@catalog/templatescatalog/utils/helpers';
import { WizardOverviewDisksTable } from '@catalog/wizard/tabs/overview/components/WizardOverviewDisksTable/WizardOverviewDisksTable';
import { WizardOverviewNetworksTable } from '@catalog/wizard/tabs/overview/components/WizardOverviewNetworksTable/WizardOverviewNetworksTable';
import AdditionalResources from '@kubevirt-utils/components/AdditionalResources/AdditionalResources';
import CPUDescription from '@kubevirt-utils/components/CPUDescription/CPUDescription';
import { CpuMemHelperTextResources } from '@kubevirt-utils/components/CPUDescription/utils/utils';
import CPUMemory from '@kubevirt-utils/components/CPUMemory/CPUMemory';
import CPUMemoryModal from '@kubevirt-utils/components/CPUMemoryModal/CPUMemoryModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { WORKLOADS_LABELS } from '@kubevirt-utils/resources/template/utils/constants';
import { getTemplateDescription, getTemplateDocumentationURL, getTemplateInterfaces, getTemplateName, getTemplateNetworks, getTemplateWorkload, isDefaultVariantTemplate, } from '@kubevirt-utils/resources/template/utils/selectors';
import { getCPU, getDisks } from '@kubevirt-utils/resources/vm';
import { Button, ButtonVariant, DescriptionList, ExpandableSection } from '@patternfly/react-core';
import { ExternalLinkSquareAltIcon } from '@patternfly/react-icons';
import { useDrawerContext } from './hooks/useDrawerContext';
import TemplateExpandableDescription from './TemplateExpandableDescription';
export var TemplateInfoSection = memo(function () {
    var _a;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _b = useDrawerContext(), setVM = _b.setVM, template = _b.template, vm = _b.vm;
    var ns = useParams().ns;
    var vmNamespace = ns || DEFAULT_NAMESPACE;
    var notAvailable = t('N/A');
    var displayName = getTemplateName(template);
    var description = getTemplateDescription(template) || notAvailable;
    var documentationUrl = getTemplateDocumentationURL(template);
    var workload = getTemplateWorkload(template);
    var networks = getTemplateNetworks(template);
    var interfaces = getTemplateInterfaces(template);
    var disks = getDisks(vm);
    var isDefaultTemplate = isDefaultVariantTemplate(template);
    var _c = useState(true), isTemplateInfoExpanded = _c[0], setIsTemplateInfoExpanded = _c[1];
    return (React.createElement(ExpandableSection, { isExpanded: isTemplateInfoExpanded, isIndented: true, onToggle: function (_event, val) { return setIsTemplateInfoExpanded(val); }, toggleText: t('Template info') },
        React.createElement(DescriptionList, { className: "pf-c-description-list" },
            React.createElement(VirtualMachineDescriptionItem, { descriptionData: displayName, descriptionHeader: t('Operating system') }),
            React.createElement(VirtualMachineDescriptionItem, { descriptionData: "".concat((_a = WORKLOADS_LABELS[workload]) !== null && _a !== void 0 ? _a : t('Other'), " ").concat(isDefaultTemplate && t('(default)')), descriptionHeader: t('Workload type') }),
            React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(TemplateExpandableDescription, { description: description }), descriptionHeader: t('Description') }),
            React.createElement(VirtualMachineDescriptionItem, { descriptionData: documentationUrl ? (React.createElement(Button, { icon: React.createElement(ExternalLinkSquareAltIcon, null), iconPosition: "right", isInline: true, size: "sm", variant: ButtonVariant.link },
                    React.createElement("a", { href: documentationUrl, rel: "noopener noreferrer", target: "_blank" }, t('Refer to documentation')))) : (notAvailable), descriptionHeader: t('Documentation') }),
            React.createElement(AdditionalResources, { template: template }),
            React.createElement(VirtualMachineDescriptionItem, { bodyContent: React.createElement(CPUDescription, { cpu: getCPU(vm), helperTextResource: CpuMemHelperTextResources.FutureVM }), onEditClick: function () {
                    return createModal(function (_a) {
                        var _b;
                        var isOpen = _a.isOpen, onClose = _a.onClose;
                        return (React.createElement(CPUMemoryModal, { isOpen: isOpen, onClose: onClose, onSubmit: updateVMCPUMemory(vmNamespace, setVM, setVM), templateNamespace: (_b = template === null || template === void 0 ? void 0 : template.metadata) === null || _b === void 0 ? void 0 : _b.namespace, vm: vm }));
                    });
                }, descriptionData: React.createElement(CPUMemory, { vm: vm }), descriptionHeader: t('CPU | Memory'), isEdit: true, isPopover: true }),
            React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(WizardOverviewNetworksTable, { interfaces: interfaces, networks: networks }), descriptionHeader: t('Network interfaces ({{networks}})', { networks: networks === null || networks === void 0 ? void 0 : networks.length }) }),
            React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(WizardOverviewDisksTable, { vm: vm }), descriptionHeader: t('Disks ({{disks}})', { disks: disks === null || disks === void 0 ? void 0 : disks.length }) }))));
});
//# sourceMappingURL=TemplateInfoSection.js.map