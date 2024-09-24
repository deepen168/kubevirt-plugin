import React from 'react';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { YellowExclamationTriangleIcon } from '@openshift-console/dynamic-plugin-sdk';
var SubscriptionStateUpgradeAvailable = function (_a) {
    var operatorLink = _a.operatorLink;
    var t = useKubevirtTranslation().t;
    return (React.createElement("span", null,
        React.createElement(YellowExclamationTriangleIcon, null),
        " ",
        t('Upgrade available'),
        React.createElement("div", { className: "general-tab__upgrade" },
            React.createElement(ExternalLink, { href: operatorLink }, t('Upgrade')))));
};
export default SubscriptionStateUpgradeAvailable;
//# sourceMappingURL=SubscriptionStateUpgradeAvailable.js.map