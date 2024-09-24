import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getEvictionStrategy } from '@kubevirt-utils/resources/vmi';
var EvictionStrategy = function (_a) {
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var evictionStrategy = getEvictionStrategy(vmi);
    return React.createElement(React.Fragment, null, evictionStrategy || t('No eviction strategy'));
};
export default EvictionStrategy;
//# sourceMappingURL=EvictionStrategy.js.map