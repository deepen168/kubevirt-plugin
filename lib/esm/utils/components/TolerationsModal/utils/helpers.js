import { isEmpty } from '@kubevirt-utils/utils/utils';
export var getNodeTaintQualifier = function (nodes, isNodesLoaded, constraints) {
    var _a;
    var filteredConstraints = constraints.filter(Boolean);
    if (!isEmpty(filteredConstraints) && isNodesLoaded) {
        var suitableNodes = (_a = (nodes || [])) === null || _a === void 0 ? void 0 : _a.filter(function (node) {
            var _a;
            var nodeTaints = ((_a = node === null || node === void 0 ? void 0 : node.spec) === null || _a === void 0 ? void 0 : _a.taints) || [];
            // we check for every constraint if the node has the required taint
            var isConstraintsExistInNodeTaints = filteredConstraints.every(function (_a) {
                var effect = _a.effect, key = _a.key, value = _a.value;
                return nodeTaints.some(function (taint) {
                    // value is optional for node taints
                    if ((taint === null || taint === void 0 ? void 0 : taint.value) && value) {
                        return taint.key === key && taint.value === value && taint.effect === effect;
                    }
                    return taint.key === key && taint.effect === effect;
                });
            });
            return isConstraintsExistInNodeTaints;
        });
        return suitableNodes;
    }
};
//# sourceMappingURL=helpers.js.map