import * as React from 'react';
import { withOperatorPredicate } from '../utils/helpers';
export var useAffinitiesQualifiedNodes = function (nodes, isNodesLoaded, affinities, filter) {
    return React.useMemo(function () {
        if (isNodesLoaded) {
            var suitableNodes = affinities.map(function (aff) {
                return (nodes || []).filter(function (node) {
                    var _a;
                    return ((_a = node === null || node === void 0 ? void 0 : node.metadata) === null || _a === void 0 ? void 0 : _a.labels) &&
                        ((aff === null || aff === void 0 ? void 0 : aff.expressions) || []).every(function (exp) { var _a; return withOperatorPredicate((_a = node === null || node === void 0 ? void 0 : node.metadata) === null || _a === void 0 ? void 0 : _a.labels, exp); }) &&
                        ((aff === null || aff === void 0 ? void 0 : aff.fields) || []).every(function (field) { return withOperatorPredicate(node, field); });
                });
            });
            // OR/AND relation between nodes
            return filter(suitableNodes);
        }
        return [];
    }, [affinities, filter, isNodesLoaded, nodes]);
};
//# sourceMappingURL=useAffinitiesQualifiedNodes.js.map