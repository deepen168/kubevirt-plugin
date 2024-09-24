import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getCPU } from '@kubevirt-utils/resources/vm';
var DedicatedResources = function (_a) {
    var _b;
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var isDedicatedResources = (_b = getCPU(vmi)) === null || _b === void 0 ? void 0 : _b.dedicatedCpuPlacement;
    return isDedicatedResources
        ? t('Workload scheduled with dedicated resources (guaranteed policy)')
        : t('No dedicated resources applied');
};
export default DedicatedResources;
//# sourceMappingURL=DedicatedResources.js.map