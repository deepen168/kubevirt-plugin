import * as React from 'react';
import { intersectionWith, unionWith } from '../utils/helpers';
import { AffinityCondition, AffinityType } from '../utils/types';
import { useAffinitiesQualifiedNodes } from './useAffinitiesQualifiedNodes';
export var useRequiredAndPrefferedQualifiedNodes = function (nodes, nodesLoaded, affinities) {
    var _a = React.useMemo(function () { return [
        affinities === null || affinities === void 0 ? void 0 : affinities.filter(function (aff) { return (aff === null || aff === void 0 ? void 0 : aff.type) === AffinityType.node && (aff === null || aff === void 0 ? void 0 : aff.condition) === AffinityCondition.required; }),
        affinities === null || affinities === void 0 ? void 0 : affinities.filter(function (aff) { return (aff === null || aff === void 0 ? void 0 : aff.type) === AffinityType.node && (aff === null || aff === void 0 ? void 0 : aff.condition) === AffinityCondition.preferred; }),
    ]; }, [affinities]), requiredNodeAffinities = _a[0], preferredNodeAffinities = _a[1];
    var qualifiedRequiredNodes = useAffinitiesQualifiedNodes(nodes, nodesLoaded, requiredNodeAffinities, React.useCallback(function (suitableNodes) { return suitableNodes.reduce(function (acc, curr) { return unionWith(acc, curr); }, []); }, []));
    // AND Relation between Preferred Affinities
    var qualifiedPreferredNodes = useAffinitiesQualifiedNodes(nodes, nodesLoaded, preferredNodeAffinities, React.useCallback(function (suitableNodes) {
        return suitableNodes.reduce(function (acc, curr) { return intersectionWith(acc, curr); }, suitableNodes[0]);
    }, []));
    return [qualifiedRequiredNodes, qualifiedPreferredNodes];
};
//# sourceMappingURL=useRequiredAndPrefferedQualifiedNodes.js.map