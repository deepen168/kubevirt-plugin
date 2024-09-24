import React from 'react';
import classnames from 'classnames';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, DescriptionListDescription, DescriptionListGroup, DescriptionListTerm, DescriptionListTermHelpText, DescriptionListTermHelpTextButton, Flex, FlexItem, Popover, } from '@patternfly/react-core';
import { PencilAltIcon } from '@patternfly/react-icons';
export var WizardDescriptionItem = React.memo(function (_a) {
    var className = _a.className, count = _a.count, description = _a.description, helperPopover = _a.helperPopover, helpTextIcon = _a.helpTextIcon, isDisabled = _a.isDisabled, isEdit = _a.isEdit, label = _a.label, onEditClick = _a.onEditClick, onTitleClick = _a.onTitleClick, showEditOnTitle = _a.showEditOnTitle, testId = _a.testId, title = _a.title;
    var t = useKubevirtTranslation().t;
    var titleWithCount = title.concat(count ? " (".concat(count, ")") : '');
    var getItemHeader = function () {
        if (onTitleClick)
            return (React.createElement(Button, { isDisabled: isDisabled, isInline: true, onClick: onTitleClick, variant: "link" },
                React.createElement(DescriptionListTerm, null, titleWithCount)));
        if (helperPopover) {
            return (React.createElement(Popover, { bodyContent: helperPopover === null || helperPopover === void 0 ? void 0 : helperPopover.content, headerContent: helperPopover === null || helperPopover === void 0 ? void 0 : helperPopover.header },
                React.createElement(DescriptionListTermHelpTextButton, { className: "pf-c-description-list__text" },
                    ' ',
                    title,
                    ' ')));
        }
        return (React.createElement(DescriptionListTerm, null,
            titleWithCount,
            " ",
            label,
            " ",
            helpTextIcon));
    };
    return (React.createElement(DescriptionListGroup, { className: classnames('pf-c-description-list__group', className) },
        React.createElement(DescriptionListTermHelpText, { className: "pf-c-description-list__term" },
            React.createElement(Flex, { className: "wizard-description-item__title", justifyContent: { default: 'justifyContentFlexStart' } },
                React.createElement(FlexItem, null, getItemHeader()),
                isEdit && showEditOnTitle && (React.createElement(FlexItem, null,
                    React.createElement(Button, { "data-test-id": "".concat(testId, "-edit"), isDisabled: isDisabled, isInline: true, onClick: onEditClick, type: "button", variant: "link" },
                        t('Edit'),
                        React.createElement(PencilAltIcon, { className: "co-icon-space-l pf-v5-c-button-icon--plain" })))))),
        isEdit && !showEditOnTitle ? (React.createElement(DescriptionListDescription, null,
            React.createElement(Button, { className: "pf-c-description-list__description", "data-test-id": "".concat(testId, "-edit"), isDisabled: isDisabled, isInline: true, onClick: onEditClick, type: "button", variant: "link" }, description !== null && description !== void 0 ? description : React.createElement("span", { className: "text-muted" }, t('Not available')),
                React.createElement(PencilAltIcon, { className: "co-icon-space-l pf-v5-c-button-icon--plain" })))) : (React.createElement("div", { "data-test-id": testId },
            React.createElement(DescriptionListDescription, { className: "pf-c-description-list__description" }, description !== null && description !== void 0 ? description : React.createElement("span", { className: "text-muted" }, t('Not available')))))));
});
WizardDescriptionItem.displayName = 'WizardDescriptionItem';
//# sourceMappingURL=WizardDescriptionItem.js.map