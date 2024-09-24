import React from 'react';
import DedicatedResources from 'src/views/templates/details/tabs/scheduling/components//DedicatedResources';
import EvictionStrategy from 'src/views/templates/details/tabs/scheduling/components//EvictionStrategy';
import { TemplateModel } from '@kubevirt-utils/models';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { DescriptionList } from '@patternfly/react-core';
var TemplateSchedulingRightGrid = function (_a) {
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
        React.createElement(DedicatedResources, { editable: editable, onSubmit: onSubmit, template: template }),
        React.createElement(EvictionStrategy, { editable: editable, onSubmit: onSubmit, template: template })));
};
export default TemplateSchedulingRightGrid;
//# sourceMappingURL=TemplateSchedulingRightGrid.js.map