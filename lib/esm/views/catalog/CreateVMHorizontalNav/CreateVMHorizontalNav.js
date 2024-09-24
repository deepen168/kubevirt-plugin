import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom-v5-compat';
import CreateFromInstanceType from '@catalog/CreateFromInstanceTypes/CreateFromInstanceType';
import TemplatesCatalog from '@catalog/templatescatalog/TemplatesCatalog';
import { ALL_NAMESPACES } from '@kubevirt-utils/hooks/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Stack, StackItem, Tab, Tabs, Title } from '@patternfly/react-core';
import { CatalogIcon, ImageIcon } from '@patternfly/react-icons';
import CreateVMTabTitle from './components/CreateVMTabTitle/CreateVMTabTitle';
import { CREATE_VM_TAB } from './constants';
import './CreateVMHorizontalNav.scss';
var CreateVMHorizontalNav = function () {
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var params = useParams();
    var _a = useState(location.pathname.endsWith(CREATE_VM_TAB.TEMPLATE)
        ? CREATE_VM_TAB.TEMPLATE
        : CREATE_VM_TAB.INSTANCE_TYPES), currentTab = _a[0], setCurrentTab = _a[1];
    var catalogURL = useMemo(function () { return "/k8s/".concat((params === null || params === void 0 ? void 0 : params.ns) ? "ns/".concat(params === null || params === void 0 ? void 0 : params.ns) : ALL_NAMESPACES, "/catalog"); }, [params]);
    var handleTabClick = function (_event, tabIndex) {
        setCurrentTab(tabIndex);
        navigate("".concat(catalogURL).concat(tabIndex));
    };
    return (React.createElement("div", { className: "create-vm-horizontal-nav" },
        React.createElement("div", { className: "pf-c-page__main-breadcrumb" },
            React.createElement(Stack, { className: "co-m-pane__heading", hasGutter: true },
                React.createElement(StackItem, null,
                    React.createElement(Title, { headingLevel: "h1" }, t('Create new VirtualMachine'))),
                React.createElement(StackItem, null, t('Select an option to create a VirtualMachine from.')))),
        React.createElement(Tabs, { activeKey: currentTab, onSelect: handleTabClick, usePageInsets: true },
            React.createElement(Tab, { "data-test": "instancetypes-tab", eventKey: CREATE_VM_TAB.INSTANCE_TYPES, title: React.createElement(CreateVMTabTitle, { Icon: ImageIcon, titleText: t('InstanceTypes') }) },
                React.createElement(CreateFromInstanceType, { currentTab: currentTab })),
            React.createElement(Tab, { "data-test": "templates-tab", eventKey: CREATE_VM_TAB.TEMPLATE, title: React.createElement(CreateVMTabTitle, { Icon: CatalogIcon, titleText: t('Template catalog') }) },
                React.createElement(TemplatesCatalog, { currentTab: currentTab })))));
};
export default CreateVMHorizontalNav;
//# sourceMappingURL=CreateVMHorizontalNav.js.map