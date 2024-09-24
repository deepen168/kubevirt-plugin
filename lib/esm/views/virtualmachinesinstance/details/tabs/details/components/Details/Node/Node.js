import * as React from 'react';
import { NodeModel } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
var Node = function (_a) {
    var nodeName = _a.nodeName;
    var t = useKubevirtTranslation().t;
    return nodeName ? (React.createElement(ResourceLink, { kind: NodeModel.kind, name: nodeName })) : (React.createElement("div", { className: "text-muted" },
        t('Not available'),
        " "));
};
export default Node;
//# sourceMappingURL=Node.js.map