var _a;
import { CPUComponent } from '@kubevirt-utils/components/CPUMemoryModal/components/CPUInput/utils/utils';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var cpuComponentToTitle = (_a = {},
    _a[CPUComponent.cores] = t('Cores'),
    _a[CPUComponent.sockets] = t('Sockets'),
    _a[CPUComponent.threads] = t('Threads'),
    _a);
export var getCPUComponentTitle = function (cpuComponent) {
    return cpuComponentToTitle[cpuComponent];
};
//# sourceMappingURL=utils.js.map