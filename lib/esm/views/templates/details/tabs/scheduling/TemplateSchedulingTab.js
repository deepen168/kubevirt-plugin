import React, { useCallback } from 'react';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { Grid, GridItem, PageSection, PageSectionVariants, Title } from '@patternfly/react-core';
import useEditTemplateAccessReview from '../../hooks/useIsTemplateEditable';
import TemplateSchedulingLeftGrid from './components/TemplateSchedulingLeftGrid';
import TemplateSchedulingRightGrid from './components/TemplateSchedulingRightGrid';
import './TemplateSchedulingTab.scss';
var TemplateSchedulingTab = function (_a) {
    var template = _a.obj;
    var isTemplateEditable = useEditTemplateAccessReview(template).isTemplateEditable;
    var t = useKubevirtTranslation().t;
    var onSubmitTemplate = useCallback(function (updatedTemplate) {
        var _a, _b;
        return k8sUpdate({
            data: updatedTemplate,
            model: TemplateModel,
            name: (_a = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _a === void 0 ? void 0 : _a.name,
            ns: (_b = updatedTemplate === null || updatedTemplate === void 0 ? void 0 : updatedTemplate.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        });
    }, []);
    return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(SidebarEditor, { onResourceUpdate: onSubmitTemplate, resource: template }, function (resource) { return (React.createElement(React.Fragment, null,
            React.createElement(Title, { headingLevel: "h2" }, t('Scheduling and resource requirements')),
            React.createElement(Grid, { className: "margin-top" },
                React.createElement(GridItem, { span: 5 },
                    React.createElement(TemplateSchedulingLeftGrid, { editable: isTemplateEditable, template: resource })),
                React.createElement(GridItem, { lg: 1 }),
                React.createElement(GridItem, { span: 5 },
                    React.createElement(TemplateSchedulingRightGrid, { editable: isTemplateEditable, template: resource }))))); })));
};
export default TemplateSchedulingTab;
//# sourceMappingURL=TemplateSchedulingTab.js.map