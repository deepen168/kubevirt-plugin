import React from 'react';
import { Trans } from 'react-i18next';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button } from '@patternfly/react-core';
import { REDHAT_CONSOLE_URL } from '../../utils/constants';
var OrganizationIDHelpIcon = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(HelpTextIcon, { bodyContent: React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
            "Log into",
            ' ',
            React.createElement(Button, { component: "a", href: REDHAT_CONSOLE_URL, isInline: true, target: "_blank", variant: "link" }, "Hybrid Cloud Console"),
            ' ',
            "to track your Organization ID.") }));
};
export default OrganizationIDHelpIcon;
//# sourceMappingURL=OrganizationIDHelpIcon.js.map