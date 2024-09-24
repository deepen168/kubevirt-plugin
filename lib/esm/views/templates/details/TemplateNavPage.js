import React from 'react';
import { modelToGroupVersionKind, TemplateModel, } from '@kubevirt-ui/kubevirt-api/console';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { SidebarEditorProvider } from '@kubevirt-utils/components/SidebarEditor/SidebarEditorContext';
import { HorizontalNav, useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye } from '@patternfly/react-core';
import useEditTemplateAccessReview from './hooks/useIsTemplateEditable';
import { useVirtualMachineTabs } from './hooks/useTemplateTabs';
import TemplatePageTitle from './TemplatePageTitle';
import './TemplateNavPage.scss';
var TemplateNavPage = function (_a) {
    var name = _a.name, namespace = _a.namespace;
    var _b = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(TemplateModel),
        isList: false,
        name: name,
        namespace: namespace,
        namespaced: true,
    }), template = _b[0], loaded = _b[1];
    var pages = useVirtualMachineTabs();
    var isTemplateEditable = useEditTemplateAccessReview(template).isTemplateEditable;
    if (!loaded)
        return (React.createElement(Bullseye, null,
            React.createElement(Loading, null)));
    return (React.createElement(SidebarEditorProvider, { isEditable: isTemplateEditable },
        React.createElement(TemplatePageTitle, { template: template }),
        React.createElement(HorizontalNav, { pages: pages, resource: template })));
};
export default TemplateNavPage;
//# sourceMappingURL=TemplateNavPage.js.map