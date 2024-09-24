import * as React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { InProgressIcon } from '@patternfly/react-icons';
import BlueArrowCircleUpIcon from '../../../../../../utils/Components/BlueArrowCircleUpIcon';
import { upgradeRequiresApproval } from '../utils/utils';
var SubscriptionStateUpgradePending = function (_a) {
    var _b;
    var operatorLink = _a.operatorLink, subscription = _a.subscription;
    var t = useKubevirtTranslation().t;
    var isApproved = upgradeRequiresApproval(subscription) && ((_b = subscription === null || subscription === void 0 ? void 0 : subscription.status) === null || _b === void 0 ? void 0 : _b.installPlanRef);
    return isApproved ? (React.createElement("span", { className: "co-icon-and-text" },
        React.createElement(Link, { to: operatorLink },
            React.createElement(BlueArrowCircleUpIcon, null),
            " ",
            t('Upgrade available')))) : (React.createElement("span", null,
        React.createElement(InProgressIcon, { className: "text-primary" }),
        " ",
        t('Upgrading')));
};
export default SubscriptionStateUpgradePending;
//# sourceMappingURL=SubscriptionStateUpgradePending.js.map