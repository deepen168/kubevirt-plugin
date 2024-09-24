import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Label } from '@patternfly/react-core';
import './PendingBadge.scss';
var PendingBadge = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Label, { className: "pending-badge", color: "orange" }, t('Pending')));
};
export default PendingBadge;
//# sourceMappingURL=PendingBadge.js.map