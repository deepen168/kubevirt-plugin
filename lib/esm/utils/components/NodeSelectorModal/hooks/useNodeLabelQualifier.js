import * as React from 'react';
import { isEmpty } from '@kubevirt-utils/utils/utils';
export var useNodeLabelQualifier = function (nodes, isNodesLoaded, constraints) {
    var _a = React.useState([]), qualifiedNodes = _a[0], setQualifiedNodes = _a[1];
    React.useEffect(function () {
        var _a;
        var filteredConstraints = constraints.filter(function (_a) {
            var key = _a.key;
            return !!key;
        });
        if (!isEmpty(filteredConstraints) && isNodesLoaded) {
            var suitableNodes_1 = [];
            (_a = (nodes || [])) === null || _a === void 0 ? void 0 : _a.forEach(function (node) {
                var _a;
                var nodeLabels = ((_a = node === null || node === void 0 ? void 0 : node.metadata) === null || _a === void 0 ? void 0 : _a.labels) || {};
                if (nodeLabels &&
                    filteredConstraints.every(function (_a) {
                        var key = _a.key, value = _a.value;
                        return value ? nodeLabels[key] === value : nodeLabels[key] === '';
                    })) {
                    suitableNodes_1.push(node);
                }
            });
            setQualifiedNodes(suitableNodes_1);
        }
    }, [constraints, nodes, isNodesLoaded]);
    return qualifiedNodes;
};
//# sourceMappingURL=useNodeLabelQualifier.js.map