import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Stack, StackItem, Title } from '@patternfly/react-core';
export var TemplatesCatalogPageHeader = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement("div", { className: "pf-c-page__main-breadcrumb" },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, { className: "co-m-pane__heading" },
                React.createElement(Title, { headingLevel: "h1" }, t('Create VirtualMachine from catalog'))),
            React.createElement(StackItem, null, t('Select an option to create a VirtualMachine')))));
};
TemplatesCatalogPageHeader.displayName = 'TemplatesCatalogPageHeader';
//# sourceMappingURL=TemplatesCatalogPageHeader.js.map