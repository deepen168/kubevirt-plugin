import * as React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var DataSourceAnnotations = function (_a) {
    var annotations = _a.annotations;
    var t = useKubevirtTranslation().t;
    var keys = Object.keys(annotations || {});
    return React.createElement(Link, { to: "#" }, t('{{annotations}} Annotations', { annotations: keys === null || keys === void 0 ? void 0 : keys.length }));
};
export default DataSourceAnnotations;
//# sourceMappingURL=DataSourceAnnotations.js.map