import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, Stack, StackItem } from '@patternfly/react-core';
import { ExternalLinkSquareAltIcon } from '@patternfly/react-icons';
var CLOUD_INIT_DOC_LINK = 'https://cloudinit.readthedocs.io/en/latest/index.html';
var CloudInitInfoHelper = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Stack, { className: "kv-cloudinit-info-helper--main" },
        React.createElement(StackItem, null, t('You can use cloud-init to initialize the operating system with a specific configuration when the VirtualMachine is started.')),
        React.createElement(StackItem, null,
            React.createElement("div", { className: "text-muted" },
                t('The cloud-init service is enabled by default in Fedora and RHEL images.'),
                ' ',
                React.createElement(Button, { icon: React.createElement(ExternalLinkSquareAltIcon, null), iconPosition: "right", isInline: true, size: "sm", variant: "link" },
                    React.createElement("a", { href: CLOUD_INIT_DOC_LINK, rel: "noopener noreferrer", target: "_blank" }, t('Learn more')))))));
};
export default CloudInitInfoHelper;
//# sourceMappingURL=CloudinitInfoHelper.js.map