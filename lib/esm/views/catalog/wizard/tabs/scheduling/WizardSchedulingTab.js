import React from 'react';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import { PATHS_TO_HIGHLIGHT } from '@kubevirt-utils/resources/vm/utils/constants';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
import WizardSchedulingGrid from './components/WizardSchedulingGrid';
import './wizard-scheduling-tab.scss';
var WizardSchedulingTab = function (_a) {
    var updateVM = _a.updateVM, vm = _a.vm;
    return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(SidebarEditor, { onResourceUpdate: updateVM, pathsToHighlight: PATHS_TO_HIGHLIGHT.SCHEDULING_TAB, resource: vm }, function (resource) { return React.createElement(WizardSchedulingGrid, { updateVM: updateVM, vm: resource }); })));
};
export default WizardSchedulingTab;
//# sourceMappingURL=WizardSchedulingTab.js.map