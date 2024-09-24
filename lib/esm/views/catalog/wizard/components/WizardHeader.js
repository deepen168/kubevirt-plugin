import React, { memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom-v5-compat';
import { useWizardVMContext } from '@catalog/utils/WizardVMContext';
import SidebarEditorSwitch from '@kubevirt-utils/components/SidebarEditor/SidebarEditorSwitch';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { VirtualMachineDetailsTab } from '@kubevirt-utils/constants/tabs-constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Breadcrumb, BreadcrumbItem, Button, Split, Text, TextVariants, Title, } from '@patternfly/react-core';
export var WizardHeader = memo(function (_a) {
    var _b, _c, _d, _e;
    var namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    var tabsData = useWizardVMContext().tabsData;
    var navigate = useNavigate();
    var location = useLocation();
    var templateName = (_c = (_b = tabsData === null || tabsData === void 0 ? void 0 : tabsData.overview) === null || _b === void 0 ? void 0 : _b.templateMetadata) === null || _c === void 0 ? void 0 : _c.name;
    var templateDisplayName = ((_e = (_d = tabsData === null || tabsData === void 0 ? void 0 : tabsData.overview) === null || _d === void 0 ? void 0 : _d.templateMetadata) === null || _e === void 0 ? void 0 : _e.displayName) || templateName;
    var onBreadcrumbClick = function (url) {
        return confirm(t('Are you sure you want to leave this page?')) && navigate(url);
    };
    var isSidebarEditorDisplayed = !location.pathname.includes("/catalog/template/review/".concat(VirtualMachineDetailsTab.YAML));
    return (React.createElement("div", { className: "pf-c-page__main-breadcrumb wizard-header" },
        React.createElement(Breadcrumb, { className: "pf-c-breadcrumb co-breadcrumb" },
            React.createElement(BreadcrumbItem, null,
                React.createElement(Button, { onClick: function () {
                        return onBreadcrumbClick("/k8s/ns/".concat(namespace || DEFAULT_NAMESPACE, "/catalog/template"));
                    }, isInline: true, variant: "link" }, t('Catalog')))),
        React.createElement(Split, { hasGutter: true },
            React.createElement(Title, { headingLevel: "h1" }, t('Customize and create VirtualMachine')),
            isSidebarEditorDisplayed && React.createElement(SidebarEditorSwitch, null)),
        React.createElement(Text, { component: TextVariants.small, "data-test": "wizard title help" }, t('Template: {{templateDisplayName}}', { templateDisplayName: templateDisplayName }))));
});
WizardHeader.displayName = 'WizardHeader';
//# sourceMappingURL=WizardHeader.js.map