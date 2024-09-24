import React from 'react';
import cn from 'classnames';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Badge } from '@patternfly/react-core';
import './DeprecatedBadge.scss';
var DeprecatedBadge = function (_a) {
    var _b;
    var className = _a.className;
    var t = useKubevirtTranslation().t;
    return (React.createElement(Badge, { className: cn('deprecated-badge', (_b = {}, _b[className] = Boolean(className), _b)) }, t('Deprecated')));
};
export default DeprecatedBadge;
//# sourceMappingURL=DeprecatedBadge.js.map