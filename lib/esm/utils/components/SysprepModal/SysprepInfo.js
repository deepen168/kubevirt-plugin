import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, Stack, StackItem, Text, TextVariants } from '@patternfly/react-core';
import { ExternalLinkSquareAltIcon } from '@patternfly/react-icons';
import { SYSPREP_DOC_URL } from './consts';
var SysprepInfo = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement("div", { "data-test": "sysprep-info" },
        React.createElement(Stack, null,
            React.createElement(StackItem, null,
                React.createElement(Text, { className: "kv-sysprep-info", component: TextVariants.p }, t('Sysprep is an automation tool for Windows that automates Windows setup, and custom software provisioning.'))),
            React.createElement(StackItem, { className: "text-muted" },
                t('An answer file is an XML-based file that contains setting definitions and values to use during Windows Setup'),
                ' ',
                React.createElement(Button, { icon: React.createElement(ExternalLinkSquareAltIcon, null), iconPosition: "right", isInline: true, size: "sm", variant: "link" },
                    React.createElement("a", { href: SYSPREP_DOC_URL, rel: "noopener noreferrer", target: "_blank" }, t('Learn more')))))));
};
export default SysprepInfo;
//# sourceMappingURL=SysprepInfo.js.map