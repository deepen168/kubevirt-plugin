var _a;
import { timestampFor } from '@kubevirt-utils/components/Timestamp/utils/datetime';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { METRICS } from './constants';
export var getCurrentValue = function (chartData) { var _a; return (_a = chartData === null || chartData === void 0 ? void 0 : chartData[(chartData === null || chartData === void 0 ? void 0 : chartData.length) - 1]) === null || _a === void 0 ? void 0 : _a.y; };
export var labelUnits = (_a = {},
    _a[METRICS.VCPU_USAGE] = t('vCPU'),
    _a[METRICS.VM] = t('VMs'),
    _a);
export var hasUnit = function (metric) {
    return metric === METRICS.MEMORY || metric === METRICS.STORAGE;
};
export var getLabelUnit = function (metric, unit) { return (hasUnit(metric) ? unit : labelUnits[metric]); };
// Maps number of days of available data to which indexes to label
export var labeledTickIndexes = {
    1: [0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 3],
    5: [0, 2, 4],
    6: [1, 3, 5],
    7: [0, 3, 6],
};
export var formatPopoverLabel = function (displayUnit) {
    return function (_a) {
        var _b;
        var datum = _a.datum;
        return "".concat(timestampFor(datum === null || datum === void 0 ? void 0 : datum.x, new Date(), false), "\n ").concat((_b = datum === null || datum === void 0 ? void 0 : datum.y) === null || _b === void 0 ? void 0 : _b.toLocaleString(), " ").concat(displayUnit);
    };
};
//# sourceMappingURL=utils.js.map