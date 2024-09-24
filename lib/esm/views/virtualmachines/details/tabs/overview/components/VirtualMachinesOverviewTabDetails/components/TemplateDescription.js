import React from 'react';
import { modelToGroupVersionKind, TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getLabel } from '@kubevirt-utils/resources/shared';
import { LABEL_USED_TEMPLATE_NAMESPACE } from '@kubevirt-utils/resources/template';
import { VM_TEMPLATE_ANNOTATION } from '@kubevirt-utils/resources/vm';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
var TemplateDescription = function (_a) {
    var vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var templateName = getLabel(vm, VM_TEMPLATE_ANNOTATION);
    var templateNamespace = getLabel(vm, LABEL_USED_TEMPLATE_NAMESPACE);
    var None = React.createElement(MutedTextSpan, { text: t('None') });
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: templateName && templateNamespace ? (React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(TemplateModel), name: templateName, namespace: templateNamespace })) : (None), "data-test-id": "virtual-machine-overview-details-template", descriptionHeader: t('Template') }));
};
export default TemplateDescription;
//# sourceMappingURL=TemplateDescription.js.map