import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Accordion, AccordionContent, AccordionItem, AccordionToggle, } from '@patternfly/react-core';
import CloudInitCredentialsContent from './CloudInitCredentialsContent';
import './cloud-init-credentials.scss';
var CloudInitCredentials = function (_a) {
    var vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var _b = React.useState(false), showCredentials = _b[0], setShowCredentials = _b[1];
    return (React.createElement(Accordion, { className: "cloud-init-credentials" },
        React.createElement(AccordionItem, null,
            React.createElement(AccordionToggle, { id: "consoles-accordion-toggle", isExpanded: showCredentials, onClick: function () { return setShowCredentials(!showCredentials); } }, t('Guest login credentials')),
            React.createElement(AccordionContent, { isHidden: !showCredentials },
                React.createElement(CloudInitCredentialsContent, { vm: vm })))));
};
export default CloudInitCredentials;
//# sourceMappingURL=CloudInitCredentials.js.map