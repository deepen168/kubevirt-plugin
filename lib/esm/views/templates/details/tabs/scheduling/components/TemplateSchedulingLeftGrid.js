import React from 'react';
import AffinityRules from 'src/views/templates/details/tabs/scheduling/components/AffinityRules';
import Descheduler from 'src/views/templates/details/tabs/scheduling/components/Descheduler';
import NodeSelector from 'src/views/templates/details/tabs/scheduling/components/NodeSelector';
import Tolerations from 'src/views/templates/details/tabs/scheduling/components/Tolerations';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { DescriptionList } from '@patternfly/react-core';
var TemplateSchedulingLeftGrid = function (_a) {
    var editable = _a.editable, template = _a.template;
    var onSubmit = React.useCallback(function (updatedTemplate) {
        var _a, _b;
        return k8sUpdate({
            data: updatedTemplate,
            model: TemplateModel,
            name: (_a = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _a === void 0 ? void 0 : _a.name,
            ns: (_b = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        });
    }, []);
    return (React.createElement(DescriptionList, { className: "pf-c-description-list" },
        React.createElement(NodeSelector, { editable: editable, onSubmit: onSubmit, template: template }),
        React.createElement(Tolerations, { editable: editable, onSubmit: onSubmit, template: template }),
        React.createElement(AffinityRules, { editable: editable, onSubmit: onSubmit, template: template }),
        React.createElement(Descheduler, { onSubmit: onSubmit, template: template })));
};
export default TemplateSchedulingLeftGrid;
//# sourceMappingURL=TemplateSchedulingLeftGrid.js.map