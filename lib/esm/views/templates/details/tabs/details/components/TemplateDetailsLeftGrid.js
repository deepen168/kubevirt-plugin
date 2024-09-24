import React from 'react';
import OwnerDetailsItem from '@kubevirt-utils/components/OwnerDetailsItem/OwnerDetailsItem';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
import { getMachineType } from '@kubevirt-utils/resources/vm';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { getOperatingSystemName } from '@kubevirt-utils/resources/vm/utils/operation-system/operationSystem';
import { DescriptionList } from '@patternfly/react-core';
import useEditTemplateAccessReview from '../../../hooks/useIsTemplateEditable';
import BootMethod from './BootMethod/BootMethod';
import Annotations from './Annotations';
import BaseTemplate from './BaseTemplate';
import CPUMemory from './CPUMemory';
import CreatedAt from './CreatedAt';
import Description from './Description';
import DisplayName from './DisplayName';
import Labels from './Labels';
import Name from './Name';
import Namespace from './Namespace';
import WorkloadProfile from './WorkloadProfile';
var TemplateDetailsLeftGrid = function (_a) {
    var template = _a.template;
    var t = useKubevirtTranslation().t;
    var machineType = getMachineType(getTemplateVirtualMachineObject(template)) || NO_DATA_DASH;
    var isTemplateEditable = useEditTemplateAccessReview(template).isTemplateEditable;
    return (React.createElement(DescriptionList, { className: "pf-c-description-list" },
        React.createElement(Name, { name: getName(template) }),
        React.createElement(Namespace, { namespace: getNamespace(template) }),
        React.createElement(Labels, { editable: isTemplateEditable, template: template }),
        React.createElement(Annotations, { editable: isTemplateEditable, template: template }),
        React.createElement(DisplayName, { editable: isTemplateEditable, template: template }),
        React.createElement(Description, { editable: isTemplateEditable, template: template }),
        React.createElement(VirtualMachineDescriptionItem, { descriptionData: getOperatingSystemName(template), descriptionHeader: t('Operating system') }),
        React.createElement(WorkloadProfile, { editable: isTemplateEditable, template: template }),
        React.createElement(CPUMemory, { editable: isTemplateEditable, template: template }),
        React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('The machine type defines the virtual hardware configuration while the operating system name and version refer to the hypervisor.'), descriptionData: machineType, descriptionHeader: t('Machine type'), isPopover: true }),
        React.createElement(BootMethod, { editable: isTemplateEditable, template: template }),
        React.createElement(BaseTemplate, { template: template }),
        React.createElement(CreatedAt, { template: template }),
        React.createElement(OwnerDetailsItem, { obj: template })));
};
export default TemplateDetailsLeftGrid;
//# sourceMappingURL=TemplateDetailsLeftGrid.js.map