import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getAffinityRules } from '@kubevirt-utils/resources/vmi';
var Affinity = function (_a) {
    var _b, _c, _d, _e, _f;
    var vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var affinity = (_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.affinity;
    return React.createElement(React.Fragment, null, t('{{rules}} Affinity rules', { rules: (_f = (_e = getAffinityRules(affinity)) === null || _e === void 0 ? void 0 : _e.length) !== null && _f !== void 0 ? _f : 0 }));
};
export default Affinity;
//# sourceMappingURL=Affinity.js.map