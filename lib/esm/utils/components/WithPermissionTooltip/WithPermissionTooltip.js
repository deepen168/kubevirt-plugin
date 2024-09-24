import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Tooltip, TooltipPosition } from '@patternfly/react-core';
var WithPermissionTooltip = function (_a) {
    var allowed = _a.allowed, children = _a.children, title = _a.title;
    var t = useKubevirtTranslation().t;
    return allowed ? (React.createElement(React.Fragment, null, children)) : (React.createElement(Tooltip, { content: title || t("You don't have permission to perform this action"), position: TooltipPosition.right },
        React.createElement(React.Fragment, null, children)));
};
export default WithPermissionTooltip;
//# sourceMappingURL=WithPermissionTooltip.js.map