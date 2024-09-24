import * as React from 'react';
import { SubscriptionState } from '../../../../../utils/types';
import SubscriptionStateAtLatest from './SubscriptionStates/SubscriptionStateAtLatest';
import SubscriptionStateDefault from './SubscriptionStates/SubscriptionStateDefault';
import SubscriptionStateUpgradeAvailable from './SubscriptionStates/SubscriptionStateUpgradeAvailable';
import SubscriptionStateUpgradePending from './SubscriptionStates/SubscriptionStateUpgradePending';
var SubscriptionStatus = function (_a) {
    var _b;
    var _c;
    var operatorLink = _a.operatorLink, subscription = _a.subscription;
    var Component = (_b = {
            default: React.createElement(SubscriptionStateDefault, { subscription: subscription })
        },
        _b[SubscriptionState.SubscriptionStateAtLatest] = React.createElement(SubscriptionStateAtLatest, null),
        _b[SubscriptionState.SubscriptionStateUpgradeAvailable] = (React.createElement(SubscriptionStateUpgradeAvailable, { operatorLink: operatorLink })),
        _b[SubscriptionState.SubscriptionStateUpgradePending] = (React.createElement(SubscriptionStateUpgradePending, { operatorLink: operatorLink, subscription: subscription })),
        _b);
    return Component[((_c = subscription === null || subscription === void 0 ? void 0 : subscription.status) === null || _c === void 0 ? void 0 : _c.state) || 'default'];
};
export default SubscriptionStatus;
//# sourceMappingURL=SubscriptionStatus.js.map