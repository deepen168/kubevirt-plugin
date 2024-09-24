import React from 'react';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { PATHS_TO_HIGHLIGHT } from '@kubevirt-utils/resources/vm/utils/constants';
import { PageSection, PageSectionVariants, Title } from '@patternfly/react-core';
import { onSubmitYAML } from '../details/utils/utils';
import AddNetworkInterfaceButton from './components/AddNetworkInterfaceButton';
import NetworkInterfaceList from './components/list/NetworkInterfaceList';
import './network-tab.scss';
var NetworkTab = function (_a) {
    var vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    return (React.createElement(SidebarEditor, { onResourceUpdate: onSubmitYAML, pathsToHighlight: PATHS_TO_HIGHLIGHT.NETWORK_TAB, resource: vm },
        React.createElement(PageSection, { variant: PageSectionVariants.light },
            React.createElement(Title, { headingLevel: "h2" },
                React.createElement(SearchItem, { id: "network" }, t('Network interfaces'))),
            React.createElement(AddNetworkInterfaceButton, { vm: vm, vmi: vmi }),
            React.createElement(NetworkInterfaceList, { vm: vm, vmi: vmi }))));
};
export default NetworkTab;
//# sourceMappingURL=NetworkTab.js.map