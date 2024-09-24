import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom-v5-compat';
import SidebarEditorSwitch from '@kubevirt-utils/components/SidebarEditor/SidebarEditorSwitch';
import { VirtualMachineDetailsTab } from '@kubevirt-utils/constants/tabs-constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useLastNamespacePath } from '@kubevirt-utils/hooks/useLastNamespacePath';
import { isDeprecatedTemplate } from '@kubevirt-utils/resources/template';
import { Breadcrumb, BreadcrumbItem, Button, Label, Split, SplitItem, Title, } from '@patternfly/react-core';
import VirtualMachineTemplatesActions from '../actions/VirtualMachineTemplatesActions';
import useEditTemplateAccessReview from './hooks/useIsTemplateEditable';
import CommonTemplateAlert from './CommonTemplateAlert';
import NoPermissionTemplateAlert from './NoPermissionTemplateAlert';
var TemplatePageTitle = function (_a) {
    var _b, _c, _d;
    var template = _a.template;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var location = useLocation();
    var lastNamespacePath = useLastNamespacePath();
    var _e = useEditTemplateAccessReview(template), hasEditPermission = _e.hasEditPermission, isCommonTemplate = _e.isCommonTemplate;
    var isSidebarEditorDisplayed = !location.pathname.includes("/templates/".concat((_b = template === null || template === void 0 ? void 0 : template.metadata) === null || _b === void 0 ? void 0 : _b.name, "/").concat(VirtualMachineDetailsTab.YAML));
    return (React.createElement("div", { className: "pf-c-page__main-breadcrumb TemplatePageTitle" },
        React.createElement(Breadcrumb, null,
            React.createElement(BreadcrumbItem, null,
                React.createElement(Button, { isInline: true, onClick: function () { return navigate("/k8s/".concat(lastNamespacePath, "/templates")); }, variant: "link" }, t('Templates'))),
            React.createElement(BreadcrumbItem, null, (_c = template === null || template === void 0 ? void 0 : template.metadata) === null || _c === void 0 ? void 0 : _c.name)),
        React.createElement(Title, { className: "co-m-pane__heading", headingLevel: "h1" },
            React.createElement("span", { className: "co-resource-item__resource-name" },
                React.createElement("span", { className: "co-m-resource-icon co-m-resource-icon--lg" }, "T"),
                React.createElement("span", { className: "co-resource-item__resource-name" }, (_d = template === null || template === void 0 ? void 0 : template.metadata) === null || _d === void 0 ? void 0 :
                    _d.name,
                    ' ',
                    isDeprecatedTemplate(template) && React.createElement(Label, { isCompact: true }, t('Deprecated')))),
            React.createElement(Split, { hasGutter: true },
                isSidebarEditorDisplayed && (React.createElement(SplitItem, null,
                    React.createElement(SidebarEditorSwitch, null))),
                React.createElement(SplitItem, null,
                    React.createElement(VirtualMachineTemplatesActions, { template: template })))),
        isCommonTemplate && React.createElement(CommonTemplateAlert, { template: template }),
        !isCommonTemplate && !hasEditPermission && React.createElement(NoPermissionTemplateAlert, null)));
};
export default TemplatePageTitle;
//# sourceMappingURL=TemplatePageTitle.js.map