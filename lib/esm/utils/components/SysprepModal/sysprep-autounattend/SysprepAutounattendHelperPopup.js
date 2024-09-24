import React from 'react';
import { Trans } from 'react-i18next';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, Popover, Text, TextVariants } from '@patternfly/react-core';
import { ExternalLinkSquareAltIcon, OutlinedQuestionCircleIcon } from '@patternfly/react-icons';
import { SYSPREP_DOC_URL } from '../consts';
var SysprepUnattendHelperPopup = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Popover, { bodyContent: React.createElement("div", { "data-test": "sysprep-autounattend-popover" },
            React.createElement(Trans, { ns: "plugin__kubevirt-plugin" },
                React.createElement(Text, { component: TextVariants.h6 }, "Autounattend.xml"),
                React.createElement(Text, { component: TextVariants.p }, "Autounattend will be picked up automatically during windows installation. it can be used with destructive actions such as disk formatting. Autounattend will only be used once during installation."),
                React.createElement(Button, { icon: React.createElement(ExternalLinkSquareAltIcon, null), iconPosition: "right", isInline: true, size: "sm", variant: "link" },
                    React.createElement("a", { href: SYSPREP_DOC_URL, rel: "noopener noreferrer", target: "_blank" }, t('Learn more'))))), "aria-label": t('Help'), hasAutoWidth: true },
        React.createElement(Button, { "aria-label": t('Help'), className: "co-field-level-help", "data-test-id": "ssh-popover-button", isInline: true, variant: "link" },
            React.createElement(OutlinedQuestionCircleIcon, { className: "co-field-level-help__icon" }))));
};
export default SysprepUnattendHelperPopup;
//# sourceMappingURL=SysprepAutounattendHelperPopup.js.map