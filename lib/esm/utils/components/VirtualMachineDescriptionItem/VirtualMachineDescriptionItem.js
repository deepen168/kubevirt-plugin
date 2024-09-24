import React from 'react';
import { DescriptionItemHeader } from '@kubevirt-utils/components/DescriptionItem/DescriptionItemHeader';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, DescriptionListDescription, DescriptionListGroup, DescriptionListTermHelpText, Flex, FlexItem, } from '@patternfly/react-core';
import { PencilAltIcon } from '@patternfly/react-icons';
import EditButtonWithTooltip from './EditButtonWithTooltip';
import './VirtualMachineDescriptionItem.scss';
var VirtualMachineDescriptionItem = function (_a) {
    var bodyContent = _a.bodyContent, breadcrumb = _a.breadcrumb, className = _a.className, testId = _a["data-test-id"], descriptionData = _a.descriptionData, descriptionHeader = _a.descriptionHeader, _b = _a.editOnTitleJustify, editOnTitleJustify = _b === void 0 ? false : _b, isDisabled = _a.isDisabled, isEdit = _a.isEdit, isPopover = _a.isPopover, label = _a.label, messageOnDisabled = _a.messageOnDisabled, moreInfoURL = _a.moreInfoURL, onEditClick = _a.onEditClick, showEditOnTitle = _a.showEditOnTitle, subTitle = _a.subTitle;
    var t = useKubevirtTranslation().t;
    var NotAvailable = React.createElement(MutedTextSpan, { text: t('Not available') });
    var description = (React.createElement(EditButtonWithTooltip, { isEditable: !isDisabled, onEditClick: onEditClick, testId: testId, tooltipContent: messageOnDisabled }, descriptionData !== null && descriptionData !== void 0 ? descriptionData : NotAvailable));
    return (React.createElement(DescriptionListGroup, { className: "pf-c-description-list__group ".concat(className && className) },
        React.createElement(DescriptionListTermHelpText, { className: "pf-c-description-list__term" },
            React.createElement(Flex, { justifyContent: {
                    default: editOnTitleJustify ? 'justifyContentSpaceBetween' : 'justifyContentFlexStart',
                } },
                (bodyContent || breadcrumb || descriptionHeader || label || moreInfoURL) && (React.createElement(FlexItem, null,
                    React.createElement(DescriptionItemHeader, { bodyContent: bodyContent, breadcrumb: breadcrumb, descriptionHeader: descriptionHeader, isPopover: isPopover, label: label, moreInfoURL: moreInfoURL }))),
                isEdit && showEditOnTitle && (React.createElement(FlexItem, null,
                    React.createElement(Button, { "data-test-id": "".concat(testId, "-edit"), isDisabled: isDisabled, isInline: true, onClick: onEditClick, type: "button", variant: "link" },
                        t('Edit'),
                        React.createElement(PencilAltIcon, { className: "co-icon-space-l pf-v5-c-button-icon--plain" })))))),
        React.createElement(DescriptionListDescription, { className: "pf-c-description-list__description", "data-test-id": testId },
            subTitle && React.createElement("div", { className: "pf-c-description-list__text pf-v5-u-my-sm" }, subTitle),
            isEdit && !showEditOnTitle ? description : descriptionData)));
};
export default VirtualMachineDescriptionItem;
//# sourceMappingURL=VirtualMachineDescriptionItem.js.map