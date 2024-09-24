import React from 'react';
import { Alert, AlertVariant, Button, EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateFooter, EmptyStateHeader, EmptyStateVariant, } from '@patternfly/react-core';
// Display and empty with a Call to add new source if no sources are defined.
export var BootOrderEmptyState = function (_a) {
    var addItemDisabledMessage = _a.addItemDisabledMessage, addItemIsDisabled = _a.addItemIsDisabled, addItemMessage = _a.addItemMessage, message = _a.message, onClick = _a.onClick, title = _a.title;
    return (React.createElement(EmptyState, { variant: EmptyStateVariant.full },
        React.createElement(EmptyStateHeader, { headingLevel: "h5", titleText: React.createElement(React.Fragment, null, title) }),
        React.createElement(EmptyStateBody, null, message),
        React.createElement(EmptyStateFooter, null,
            React.createElement(EmptyStateActions, null, !addItemIsDisabled ? (React.createElement(Button, { onClick: onClick, variant: "secondary" }, addItemMessage)) : (React.createElement(Alert, { title: addItemDisabledMessage, variant: AlertVariant.info }))))));
};
//# sourceMappingURL=BootOrderEmptyState.js.map