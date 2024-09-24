import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom-v5-compat';
import { getConsoleVirtctlCommand } from '@kubevirt-utils/components/SSHAccess/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { DescriptionListDescription, DescriptionListGroup, DescriptionListTerm, Grid, GridItem, Popover, } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import VirtctlSSHCommandClipboardCopy from './VirtctlSSHCommandClipboardCopy';
import './ConsoleOverVirtctl.scss';
var ConsoleOverVirtctl = function (_a) {
    var vm = _a.vm;
    var t = useKubevirtTranslation().t;
    return (React.createElement(DescriptionListGroup, { className: "pf-c-description-list__group" },
        React.createElement(DescriptionListTerm, { className: "pf-u-font-size-xs" },
            t('SSH using virtctl'),
            ' ',
            React.createElement(Popover, { bodyContent: React.createElement(React.Fragment, null,
                    React.createElement(Trans, { t: t },
                        React.createElement("div", null, "Open an SSH connection with the VM using the cluster API server. You must be able to access the API server and have virtctl command line tool installed."),
                        React.createElement("br", null),
                        React.createElement("div", null,
                            "For more details, see",
                            ' ',
                            React.createElement(Link, { to: 'https://docs.openshift.com/container-platform/4.15/virt/getting_started/virt-using-the-cli-tools.html' }, "Installing virtctl"),
                            ' ',
                            "in Getting started with OpenShift Virtualization.")),
                    React.createElement("br", null),
                    React.createElement(Grid, null,
                        React.createElement(GridItem, { span: 2 }, t('Example: ')),
                        React.createElement(GridItem, { id: "ssh-using-virtctl--example", span: 10 }, getConsoleVirtctlCommand(vm)))), "aria-label": "Help", className: "virtctl-popover", position: "right" },
                React.createElement(HelpIcon, null))),
        React.createElement(DescriptionListDescription, { className: "pf-c-description-list__description" },
            React.createElement(VirtctlSSHCommandClipboardCopy, { vm: vm }))));
};
export default ConsoleOverVirtctl;
//# sourceMappingURL=ConsoleOverVirtctl.js.map