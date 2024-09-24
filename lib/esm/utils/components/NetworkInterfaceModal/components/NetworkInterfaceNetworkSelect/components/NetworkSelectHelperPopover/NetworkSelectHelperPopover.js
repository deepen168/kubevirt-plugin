import React from 'react';
import { Trans } from 'react-i18next';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, ButtonVariant, Popover } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import styles from '@patternfly/react-styles/css/components/Form/form';
import './NetworkSelectHelperPopover.scss';
var NetworkSelectHelperPopover = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Popover, { bodyContent: React.createElement(React.Fragment, null,
            React.createElement(Trans, { t: t },
                React.createElement("div", null,
                    React.createElement("b", null, "Bridge binding"),
                    ": Connects the VirtualMachine to the selected network, which is ideal for L2 devices."),
                React.createElement("div", { className: "NetworkSelectPopoverSriovLabel" },
                    React.createElement("b", null, "SR-IOV binding"),
                    ": Attaches a virtual function network device to the VirtualMachine for high performance.")),
            React.createElement(ExternalLink, { href: "https://docs.openshift.com/container-platform/4.15/virt/vm_networking/virt-networking-overview.html#secondary-network-config", text: t('Learn more') })), headerContent: t('Network binding types') },
        React.createElement(Button, { className: styles.formGroupLabelHelp, variant: ButtonVariant.plain },
            React.createElement(HelpIcon, null))));
};
export default NetworkSelectHelperPopover;
//# sourceMappingURL=NetworkSelectHelperPopover.js.map