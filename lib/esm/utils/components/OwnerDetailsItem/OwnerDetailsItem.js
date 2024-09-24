import * as React from 'react';
import { Trans } from 'react-i18next';
import OwnerReferences from '@kubevirt-utils/components/OwnerReferences/OwnerReferences';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Breadcrumb, BreadcrumbItem, DescriptionListDescription, DescriptionListGroup, DescriptionListTermHelpText, DescriptionListTermHelpTextButton, Popover, } from '@patternfly/react-core';
var OwnerDetailsItem = function (_a) {
    var obj = _a.obj;
    var t = useKubevirtTranslation().t;
    return (React.createElement(DescriptionListGroup, { className: "pf-c-description-list__group" },
        React.createElement(DescriptionListTermHelpText, { className: "pf-c-description-list__term" },
            React.createElement(Popover, { bodyContent: React.createElement(Trans, { ns: "plugin__kubevirt-plugin" },
                    React.createElement("div", null, "List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller."),
                    React.createElement(Breadcrumb, { className: "margin-top" },
                        React.createElement(BreadcrumbItem, null, { kind: obj === null || obj === void 0 ? void 0 : obj.kind }),
                        React.createElement(BreadcrumbItem, null, "metadata"),
                        React.createElement(BreadcrumbItem, null, "ownerReferences"))), hasAutoWidth: true, headerContent: t('Owner'), maxWidth: "30rem" },
                React.createElement(DescriptionListTermHelpTextButton, { className: "pf-c-description-list__text" }, t('Owner')))),
        React.createElement(DescriptionListDescription, { className: "pf-c-description-list__description" },
            React.createElement(OwnerReferences, { obj: obj }))));
};
export default OwnerDetailsItem;
//# sourceMappingURL=OwnerDetailsItem.js.map