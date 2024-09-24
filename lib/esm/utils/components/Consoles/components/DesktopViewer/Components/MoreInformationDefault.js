import React from 'react';
import { Trans } from 'react-i18next';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { DescriptionList } from '@patternfly/react-core';
import Detail from './Detail';
var MoreInformationDefault = function (_a) {
    var textMoreInfoContent = _a.textMoreInfoContent;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        textMoreInfoContent || (React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
            React.createElement("p", null,
                "Clicking \"Launch Remote Viewer\" will download a .vv file and launch",
                ' ',
                React.createElement("i", null, "Remote Viewer")),
            React.createElement("p", null,
                React.createElement("i", null, "Remote Viewer"),
                " is available for most operating systems. To install it, search for it in GNOME Software or run the following:"))),
        React.createElement(DescriptionList, { className: "pf-c-description-list", isHorizontal: true },
            React.createElement(Detail, { title: 'RHEL, CentOS', value: 'sudo yum install virt-viewer' }),
            React.createElement(Detail, { title: 'Fedora', value: 'sudo dnf install virt-viewer' }),
            React.createElement(Detail, { title: 'Ubuntu, Debian', value: 'sudo apt-get install virt-viewer' }),
            React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement("div", null,
                    t('Download the MSI from '),
                    React.createElement("a", { href: "https://virt-manager.org/download/", rel: "noopener noreferrer", target: "_blank" }, "virt-manager.org")), descriptionHeader: t('Windows') }))));
};
export default MoreInformationDefault;
//# sourceMappingURL=MoreInformationDefault.js.map