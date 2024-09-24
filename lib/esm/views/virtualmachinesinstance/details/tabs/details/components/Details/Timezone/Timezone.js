import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var Timezone = function (_a) {
    var _b, _c, _d;
    var guestAgentData = _a.guestAgentData;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null, (_d = (_c = (_b = guestAgentData === null || guestAgentData === void 0 ? void 0 : guestAgentData.timezone) === null || _b === void 0 ? void 0 : _b.split(',')) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : (React.createElement("div", { className: "text-muted" },
        t('Guest agent is required'),
        " "))));
};
export default Timezone;
//# sourceMappingURL=Timezone.js.map