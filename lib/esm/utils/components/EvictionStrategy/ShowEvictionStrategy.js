import React from 'react';
import useHyperConvergeConfiguration from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
import { EVICTION_STRATEGY_DEFAULT } from './constants';
var ShowEvictionStrategy = function (_a) {
    var _b;
    var evictionStrategy = _a.evictionStrategy;
    var _c = useHyperConvergeConfiguration(), hyperConverge = _c[0], hyperLoaded = _c[1], hyperLoadingError = _c[2];
    if (evictionStrategy)
        return React.createElement(React.Fragment, null, evictionStrategy);
    if (hyperLoaded && !hyperLoadingError && !hyperConverge)
        return React.createElement(React.Fragment, null, EVICTION_STRATEGY_DEFAULT);
    return React.createElement(React.Fragment, null, (_b = hyperConverge === null || hyperConverge === void 0 ? void 0 : hyperConverge.spec) === null || _b === void 0 ? void 0 : _b.evictionStrategy);
};
export default ShowEvictionStrategy;
//# sourceMappingURL=ShowEvictionStrategy.js.map