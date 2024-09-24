import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Breadcrumb, BreadcrumbItem, DescriptionListTerm, DescriptionListTermHelpTextButton, Popover, } from '@patternfly/react-core';
import './DescriptionItem.scss';
export var DescriptionItemHeader = function (_a) {
    var bodyContent = _a.bodyContent, breadcrumb = _a.breadcrumb, descriptionHeader = _a.descriptionHeader, isPopover = _a.isPopover, label = _a.label, maxWidth = _a.maxWidth, moreInfoURL = _a.moreInfoURL;
    var t = useKubevirtTranslation().t;
    if (isPopover && bodyContent) {
        return (React.createElement(Popover, { bodyContent: React.createElement(React.Fragment, null,
                bodyContent,
                moreInfoURL && (React.createElement(React.Fragment, null,
                    t('More info: '),
                    React.createElement("a", { href: moreInfoURL }, moreInfoURL))),
                breadcrumb && (React.createElement("div", { className: "margin-top" },
                    React.createElement(Breadcrumb, null, breadcrumb.split('.').map(function (item) { return (React.createElement(BreadcrumbItem, { key: item }, item)); }))))), hasAutoWidth: true, headerContent: descriptionHeader, maxWidth: maxWidth || '30rem' },
            React.createElement(DescriptionListTermHelpTextButton, { className: "pf-c-description-list__text" }, descriptionHeader)));
    }
    return (React.createElement(DescriptionListTerm, { className: "DescriptionItemHeader--list-term" },
        descriptionHeader,
        " ",
        label));
};
//# sourceMappingURL=DescriptionItemHeader.js.map