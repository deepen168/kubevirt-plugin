import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button } from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { SUPPORT_URL } from '../../../utils/constants';
import './VirtualMachineTemplateSupport.scss';
var VirtualMachineTemplateSupport = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        t('Supported operating systems are labeled below. '),
        React.createElement(Button, { className: "no-left-padding", component: "a", href: SUPPORT_URL, icon: React.createElement(ExternalLinkAltIcon, null), iconPosition: "right", target: "_blank", variant: "link" }, t('Learn more about Red Hat support'))));
};
export default VirtualMachineTemplateSupport;
//# sourceMappingURL=VirtualMachineTemplateSupport.js.map