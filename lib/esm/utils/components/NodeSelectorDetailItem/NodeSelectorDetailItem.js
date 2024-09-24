import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { getNodeSelectorLabel } from './utils';
var NodeSelectorDetailItem = function (_a) {
    var nodeSelector = _a.nodeSelector;
    var t = useKubevirtTranslation().t;
    var nodeSelectorLabel = getNodeSelectorLabel(nodeSelector);
    return !isEmpty(nodeSelector) ? (React.createElement("span", { className: "co-text-node" }, nodeSelectorLabel)) : (React.createElement(React.Fragment, null, t('No selector')));
};
export default NodeSelectorDetailItem;
//# sourceMappingURL=NodeSelectorDetailItem.js.map