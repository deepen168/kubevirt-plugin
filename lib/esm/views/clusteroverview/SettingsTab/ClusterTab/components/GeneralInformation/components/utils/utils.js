import { SubscriptionState } from '../../../../../../utils/types';
var REQUIRES_APPROVAL = 'RequiresApproval';
export var upgradeRequiresApproval = function (subscription) {
    var _a, _b, _c;
    return ((_a = subscription === null || subscription === void 0 ? void 0 : subscription.status) === null || _a === void 0 ? void 0 : _a.state) === SubscriptionState.SubscriptionStateUpgradePending &&
        ((_c = (_b = subscription === null || subscription === void 0 ? void 0 : subscription.status) === null || _b === void 0 ? void 0 : _b.conditions) !== null && _c !== void 0 ? _c : []).filter(function (_a) {
            var reason = _a.reason, status = _a.status;
            return status === 'True' && reason === REQUIRES_APPROVAL;
        }).length > 0;
};
//# sourceMappingURL=utils.js.map