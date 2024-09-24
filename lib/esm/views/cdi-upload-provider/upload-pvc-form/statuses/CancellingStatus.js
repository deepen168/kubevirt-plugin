import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { EmptyStateBody, EmptyStateIcon, Spinner, Title } from '@patternfly/react-core';
var CancellingStatus = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(EmptyStateIcon, { icon: Spinner }),
        React.createElement(Title, { headingLevel: "h4", size: "lg" }, t('Cancelling upload')),
        React.createElement(EmptyStateBody, null,
            " ",
            t('Resources are being removed, please wait.'))));
};
export default CancellingStatus;
//# sourceMappingURL=CancellingStatus.js.map