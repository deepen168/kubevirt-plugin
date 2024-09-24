import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var Tolerations = function (_a) {
    var _b, _c;
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var tolerations = (_b = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _b === void 0 ? void 0 : _b.tolerations;
    return React.createElement(React.Fragment, null, t('{{rules}} Tolerations rules', { rules: (_c = tolerations === null || tolerations === void 0 ? void 0 : tolerations.length) !== null && _c !== void 0 ? _c : 0 }));
};
export default Tolerations;
//# sourceMappingURL=Tolerations.js.map