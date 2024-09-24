import React from 'react';
import { Button, ButtonVariant, Checkbox, Flex, FlexItem, Popover } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import ExternalLink from '../ExternalLink/ExternalLink';
import './EnableFeatureCheckbox.scss';
var EnableFeatureCheckboxControlled = function (_a) {
    var canEdit = _a.canEdit, description = _a.description, externalLink = _a.externalLink, featureEnabled = _a.featureEnabled, helpText = _a.helpText, id = _a.id, label = _a.label, loading = _a.loading, toggleFeature = _a.toggleFeature;
    return (React.createElement(Flex, null,
        React.createElement(FlexItem, { className: "enable-feature-checkbox" },
            React.createElement(Flex, { spaceItems: { default: 'spaceItemsNone' } },
                React.createElement(Checkbox, { onClick: function (event) {
                        var _a;
                        toggleFeature((_a = event === null || event === void 0 ? void 0 : event.currentTarget) === null || _a === void 0 ? void 0 : _a.checked);
                    }, checked: featureEnabled, description: description, id: id, isDisabled: !canEdit || loading, label: label }),
                helpText && (React.createElement(Popover, { bodyContent: helpText },
                    React.createElement(Button, { variant: ButtonVariant.plain },
                        React.createElement(HelpIcon, null)))))),
        externalLink && (React.createElement(FlexItem, null,
            React.createElement(ExternalLink, { href: externalLink })))));
};
export default EnableFeatureCheckboxControlled;
//# sourceMappingURL=EnableFeatureCheckboxConrolled.js.map