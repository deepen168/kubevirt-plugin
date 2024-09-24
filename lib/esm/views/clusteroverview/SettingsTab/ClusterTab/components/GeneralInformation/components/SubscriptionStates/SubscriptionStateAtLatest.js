import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { GreenCheckCircleIcon } from '@openshift-console/dynamic-plugin-sdk';
var SubscriptionStateAtLatest = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement("span", null,
        React.createElement(GreenCheckCircleIcon, null),
        " ",
        t('Up to date')));
};
export default SubscriptionStateAtLatest;
//# sourceMappingURL=SubscriptionStateAtLatest.js.map