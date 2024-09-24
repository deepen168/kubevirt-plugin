import React from 'react';
import { Trans } from 'react-i18next';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, ButtonVariant } from '@patternfly/react-core';
import { ACTIVATION_KEYS_DOCUMENTATION_URL, ACTIVATION_KEYS_URL } from '../../utils/constants';
var ActivationKeyHelpIcon = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(HelpTextIcon, { bodyContent: React.createElement(React.Fragment, null,
            React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                "An activation key is a preshared authentication token that enables authorized users to register and configure systems. Organization administrators can browse to",
                ' ',
                React.createElement(Button, { component: "a", href: ACTIVATION_KEYS_URL, isInline: true, target: "_blank", variant: ButtonVariant.link }, "Activation keys"),
                ' ',
                "to track an existing Activation key or use the Create activation key button to create a new one."),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(ExternalLink, { href: ACTIVATION_KEYS_DOCUMENTATION_URL, text: t('Read more') })) }));
};
export default ActivationKeyHelpIcon;
//# sourceMappingURL=ActivationKeyHelpIcon.js.map