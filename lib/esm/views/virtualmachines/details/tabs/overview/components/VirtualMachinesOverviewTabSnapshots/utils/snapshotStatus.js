import * as React from 'react';
import { CheckCircleIcon, ExclamationCircleIcon, InProgressIcon, UnknownIcon, } from '@patternfly/react-icons';
export var snapshotStatuses = {
    Error: 'Error',
    Failed: 'Failed',
    Succeeded: 'Succeeded',
    Unknown: 'Unknown',
};
var iconHandler = {
    get: function (mapper, prop) {
        var icon = mapper[prop === null || prop === void 0 ? void 0 : prop.toLowerCase()];
        if (icon)
            return icon;
        return InProgressIcon;
    },
};
var iconMapper = {
    error: ExclamationCircleIcon,
    failed: ExclamationCircleIcon,
    succeeded: function () { return React.createElement(CheckCircleIcon, { color: "green" }); },
    unknown: UnknownIcon,
};
export var icon = new Proxy(iconMapper, iconHandler);
//# sourceMappingURL=snapshotStatus.js.map