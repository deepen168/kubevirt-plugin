import React from 'react';
import cn from 'classnames';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
var SubscriptionStateDefault = function (_a) {
    var _b, _c;
    var subscription = _a.subscription;
    var t = useKubevirtTranslation().t;
    return (React.createElement("span", { className: cn({ 'text-muted': isEmpty((_b = subscription === null || subscription === void 0 ? void 0 : subscription.status) === null || _b === void 0 ? void 0 : _b.state) }) }, ((_c = subscription === null || subscription === void 0 ? void 0 : subscription.status) === null || _c === void 0 ? void 0 : _c.state) || t('Unknown failure')));
};
export default SubscriptionStateDefault;
//# sourceMappingURL=SubscriptionStateDefault.js.map