import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { EmptyStateBody, EmptyStateIcon, Spinner, Title } from '@patternfly/react-core';
var AllocatingStatus = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(EmptyStateIcon, { icon: Spinner }),
        React.createElement(Title, { headingLevel: "h4", size: "lg" }, t('Allocating resources')),
        React.createElement(EmptyStateBody, null, t('Please wait, once the Data Volume has been created the data will start uploading into this Persistent Volume Claims.'))));
};
export default AllocatingStatus;
//# sourceMappingURL=AllocatingStatus.js.map