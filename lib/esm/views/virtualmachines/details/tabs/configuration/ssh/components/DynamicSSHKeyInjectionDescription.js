import React from 'react';
import { DYNAMIC_SSH_KEY_INJECTION_LINK } from '@kubevirt-utils/components/DynamicSSHKeyInjection/constants/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, StackItem } from '@patternfly/react-core';
import { ExternalLinkSquareAltIcon } from '@patternfly/react-icons';
var DynamicSSHKeyInjectionDescription = function (_a) {
    var isDynamicSSHInjectionEnabled = _a.isDynamicSSHInjectionEnabled;
    var t = useKubevirtTranslation().t;
    if (isDynamicSSHInjectionEnabled)
        return React.createElement(React.Fragment, null, t('Store the key in a project secret.'));
    return (React.createElement(StackItem, { className: "text-muted" },
        t('Dynamic SSH key injection is not enabled in this virtual machine.'),
        ' ',
        React.createElement(Button, { component: "a", href: DYNAMIC_SSH_KEY_INJECTION_LINK, icon: React.createElement(ExternalLinkSquareAltIcon, null), iconPosition: "right", isInline: true, rel: "noopener noreferrer", size: "sm", target: "_blank", variant: "link" }, t('Learn more'))));
};
export default DynamicSSHKeyInjectionDescription;
//# sourceMappingURL=DynamicSSHKeyInjectionDescription.js.map