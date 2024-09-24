import React from 'react';
import { modelToRef, TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageCreate } from '@openshift-console/dynamic-plugin-sdk';
var VirtualMachineTemplatesCreateButton = function (_a) {
    var namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    return (React.createElement(ListPageCreate, { createAccessReview: { groupVersionKind: modelToRef(TemplateModel), namespace: namespace }, groupVersionKind: modelToRef(TemplateModel) }, t('Create Template')));
};
export default VirtualMachineTemplatesCreateButton;
//# sourceMappingURL=VirtualMachineTemplatesCreateButton.js.map