// import { Operator } from '@openshift-console/dynamic-plugin-sdk';
import { AffinityCondition, AffinityType } from './types';
export var TOPOLOGY_KEY_DEFAULT = 'kubernetes.io/hostname';
export var defaultNewAffinity = {
    condition: AffinityCondition.required,
    expressions: [],
    fields: [],
    topologyKey: TOPOLOGY_KEY_DEFAULT,
    type: AffinityType.node,
};
//# sourceMappingURL=constants.js.map