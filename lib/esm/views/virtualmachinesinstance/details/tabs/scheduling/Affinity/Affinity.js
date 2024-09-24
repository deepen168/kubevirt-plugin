import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getAffinityRules } from '@kubevirt-utils/resources/vmi';
var Affinity = function (_a) {
    var _b, _c, _d;
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var affinity = (_b = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _b === void 0 ? void 0 : _b.affinity;
    return React.createElement(React.Fragment, null, t('{{rules}} Affinity rules', { rules: (_d = (_c = getAffinityRules(affinity)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0 }));
};
export default Affinity;
//# sourceMappingURL=Affinity.js.map