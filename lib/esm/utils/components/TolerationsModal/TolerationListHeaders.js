import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { GridItem, Text, TextVariants } from '@patternfly/react-core';
var TolerationListHeaders = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(GridItem, { span: 4 },
            React.createElement(Text, { component: TextVariants.h4 }, t('Taint key'))),
        React.createElement(GridItem, { span: 4 },
            React.createElement(Text, { component: TextVariants.h4 }, t('Value'))),
        React.createElement(GridItem, { span: 4 },
            React.createElement(Text, { component: TextVariants.h4 }, t('Effect')))));
};
export default TolerationListHeaders;
//# sourceMappingURL=TolerationListHeaders.js.map