import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Label } from '@patternfly/react-core';
import './new-badge.scss';
var NewBadge = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Label, { className: 'NewBadge--main', color: "blue", isCompact: true }, t('New')));
};
export default NewBadge;
//# sourceMappingURL=NewBadge.js.map