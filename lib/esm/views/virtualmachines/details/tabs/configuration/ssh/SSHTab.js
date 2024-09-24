import React from 'react';
import LinuxLabel from '@kubevirt-utils/components/Labels/LinuxLabel';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { PATHS_TO_HIGHLIGHT } from '@kubevirt-utils/resources/vm/utils/constants';
import { DescriptionList, Grid, GridItem, PageSection, PageSectionVariants, Stack, Title, } from '@patternfly/react-core';
import { onSubmitYAML } from '../details/utils/utils';
import SSHTabAuthorizedSSHKey from './components/SSHTabAuthorizedSSHKey';
import SSHTabSSHAccess from './components/SSHTabSSHAccess';
var SSHTab = function (_a) {
    var vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    return (React.createElement(SidebarEditor, { onResourceUpdate: onSubmitYAML, pathsToHighlight: PATHS_TO_HIGHLIGHT.SCRIPTS_TAB, resource: vm },
        React.createElement(PageSection, { variant: PageSectionVariants.light },
            React.createElement(Title, { headingLevel: "h2" },
                React.createElement(SearchItem, { id: "ssh" },
                    t('SSH settings'),
                    " ",
                    React.createElement(LinuxLabel, null))),
            React.createElement(Grid, { span: 6 },
                React.createElement(GridItem, null,
                    React.createElement(Stack, { hasGutter: true },
                        React.createElement(DescriptionList, { className: "pf-c-description-list" },
                            React.createElement(SSHTabSSHAccess, { vm: vm, vmi: vmi }),
                            React.createElement(SSHTabAuthorizedSSHKey, { vm: vm }))))))));
};
export default SSHTab;
//# sourceMappingURL=SSHTab.js.map