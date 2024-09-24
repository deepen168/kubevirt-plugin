import React from 'react';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import { PATHS_TO_HIGHLIGHT } from '@kubevirt-utils/resources/vm/utils/constants';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
import WizardOverviewGrid from './components/WizardOverviewGrid';
import './WizardOverviewTab.scss';
var WizardOverviewTab = function (_a) {
    var tabsData = _a.tabsData, updateVM = _a.updateVM, vm = _a.vm;
    return (React.createElement(PageSection, { className: "wizard-overview-tab", variant: PageSectionVariants.light },
        React.createElement(SidebarEditor, { onResourceUpdate: function (newVM) { return updateVM(newVM); }, pathsToHighlight: PATHS_TO_HIGHLIGHT.DETAILS_TAB, resource: vm }, function (resource) { return React.createElement(WizardOverviewGrid, { tabsData: tabsData, updateVM: updateVM, vm: resource }); })));
};
export default WizardOverviewTab;
//# sourceMappingURL=WizardOverviewTab.js.map