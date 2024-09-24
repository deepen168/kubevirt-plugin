import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Text, TextVariants } from '@patternfly/react-core';
var AffinityDescriptionText = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { className: "text-muted", component: TextVariants.p }, t('Set scheduling requirements and affect the ranking of the Node candidates for scheduling.')),
        React.createElement(Text, { className: "text-muted", component: TextVariants.p }, t('Rules with "Preferred" condition will stack with an "AND" relation between them.')),
        React.createElement(Text, { className: "text-muted", component: TextVariants.p }, t('Rules with "Required" condition will stack with an "OR" relation between them.'))));
};
export default AffinityDescriptionText;
//# sourceMappingURL=AffinityDescriptionText.js.map