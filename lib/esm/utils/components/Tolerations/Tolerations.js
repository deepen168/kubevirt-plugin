import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var Tolerations = function (_a) {
    var _b, _c, _d, _e;
    var vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var tolerations = (_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.tolerations;
    return React.createElement(React.Fragment, null, t('{{rules}} Tolerations rules', { rules: (_e = tolerations === null || tolerations === void 0 ? void 0 : tolerations.length) !== null && _e !== void 0 ? _e : 0 }));
};
export default Tolerations;
//# sourceMappingURL=Tolerations.js.map