var _a, _b;
import { AffinityCondition, AffinityType } from '../../../utils/types';
export var AFFINITY_CONDITION_LABELS = (_a = {},
    _a[AffinityCondition.preferred] = 'Preferred during scheduling',
    _a[AffinityCondition.required] = 'Required during scheduling',
    _a);
export var AFFINITY_TYPE_LABLES = (_b = {},
    _b[AffinityType.node] = 'Node Affinity',
    _b[AffinityType.pod] = 'Workload (pod) Affinity',
    _b[AffinityType.podAnti] = 'Workload (pod) Anti-Affinity',
    _b);
//# sourceMappingURL=constants.js.map