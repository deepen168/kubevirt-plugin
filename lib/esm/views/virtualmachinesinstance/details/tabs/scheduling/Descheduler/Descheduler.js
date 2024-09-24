import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { DESCHEDULER_EVICT_LABEL } from '@kubevirt-utils/resources/vmi';
var Descheduler = function (_a) {
    var _b, _c;
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var deschedulerLabel = Boolean((_c = (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.annotations) === null || _c === void 0 ? void 0 : _c[DESCHEDULER_EVICT_LABEL]);
    return deschedulerLabel ? t('ON') : t('OFF');
};
export default Descheduler;
//# sourceMappingURL=Descheduler.js.map