import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { GenericStatus, YellowExclamationTriangleIcon, } from '@openshift-console/dynamic-plugin-sdk';
var SourceMissingStatus = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(GenericStatus, { Icon: YellowExclamationTriangleIcon, title: t('Cannot update') }),
        React.createElement("span", { className: "text-muted" }, t('CatalogSource not found'))));
};
export default SourceMissingStatus;
//# sourceMappingURL=SourceMissingStatus.js.map