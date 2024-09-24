import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var Hostname = function (_a) {
    var _b;
    var guestAgentData = _a.guestAgentData;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null, (_b = guestAgentData === null || guestAgentData === void 0 ? void 0 : guestAgentData.hostname) !== null && _b !== void 0 ? _b : (React.createElement("div", { className: "text-muted" },
        t('Guest agent is required'),
        " "))));
};
export default Hostname;
//# sourceMappingURL=Hostname.js.map