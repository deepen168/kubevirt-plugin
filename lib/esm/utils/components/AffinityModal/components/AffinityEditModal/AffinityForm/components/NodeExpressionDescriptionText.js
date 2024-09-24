import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Text, TextVariants } from '@patternfly/react-core';
var NodeExpressionDescriptionText = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { className: "text-muted", component: TextVariants.p }, t('Select Nodes that must have all the following expressions.')),
        React.createElement(Text, { className: "text-muted", component: TextVariants.p }, t('Label selectors let you select Nodes based on the value of one or more labels.')),
        React.createElement(Text, { className: "text-muted", component: TextVariants.p }, t('A list of matching Nodes will be provided on label input below.'))));
};
export default NodeExpressionDescriptionText;
//# sourceMappingURL=NodeExpressionDescriptionText.js.map