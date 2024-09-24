import * as React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { FLAG_CONSOLE_CLI_DOWNLOAD } from '@kubevirt-utils/flags/consts';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { clusterBasePath } from '@kubevirt-utils/utils/utils';
import { useFlag } from '@openshift-console/dynamic-plugin-sdk';
import './ClusterOverviewPageHeader.scss';
var ClusterOverviewPageHeader = function (_a) {
    var children = _a.children;
    var t = useKubevirtTranslation().t;
    var hasConsoleTools = useFlag(FLAG_CONSOLE_CLI_DOWNLOAD);
    return (React.createElement("div", { className: "co-m-nav-title" },
        React.createElement("h1", { className: "co-m-pane__heading" },
            React.createElement("div", { className: "co-m-pane__name co-resource-item" },
                React.createElement("span", { className: "co-resource-item__resource-name", "data-test-id": "resource-title" }, t('Virtualization'))),
            React.createElement("span", null,
                hasConsoleTools && (React.createElement(React.Fragment, null,
                    React.createElement(Link, { className: "cluster-overview-header__virtctl-link", to: clusterBasePath.concat('command-line-tools') }, t('Download the virtctl command-line utility')),
                    ' ',
                    React.createElement(HelpTextIcon, { bodyContent: t('The virtctl client is a supplemental command-line utility for managing virtualization resources from the command line.'), helpIconClassName: "cluster-overview-header__virtctl-link--help-icon" }))),
                children))));
};
export default ClusterOverviewPageHeader;
//# sourceMappingURL=ClusterOverviewPageHeader.js.map