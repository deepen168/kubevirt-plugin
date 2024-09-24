import * as React from 'react';
import { Button, FormGroup, GridItem } from '@patternfly/react-core';
var PlainIconButton = function (_a) {
    var fieldId = _a.fieldId, icon = _a.icon, onClick = _a.onClick;
    return (React.createElement(GridItem, { span: 1 },
        React.createElement(FormGroup, { fieldId: fieldId, label: " " },
            React.createElement(Button, { onClick: onClick, variant: "plain" }, icon))));
};
export default PlainIconButton;
//# sourceMappingURL=PlainIconButton.js.map