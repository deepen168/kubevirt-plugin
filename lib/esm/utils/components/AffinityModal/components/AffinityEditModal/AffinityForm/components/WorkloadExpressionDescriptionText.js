import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Text, TextVariants } from '@patternfly/react-core';
var WorkloadExpressionDescriptionText = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Text, { className: "text-muted", component: TextVariants.p }, t('Select workloads that must have all the following expressions.')));
};
export default WorkloadExpressionDescriptionText;
//# sourceMappingURL=WorkloadExpressionDescriptionText.js.map