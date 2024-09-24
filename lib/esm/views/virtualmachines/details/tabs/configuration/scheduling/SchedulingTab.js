import React from 'react';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import { PATHS_TO_HIGHLIGHT } from '@kubevirt-utils/resources/vm/utils/constants';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
import { onSubmitYAML } from '../details/utils/utils';
import SchedulingSection from './components/SchedulingSection';
var SchedulingTab = function (_a) {
    var vm = _a.vm, vmi = _a.vmi;
    return (React.createElement(SidebarEditor, { onResourceUpdate: onSubmitYAML, pathsToHighlight: PATHS_TO_HIGHLIGHT.SCHEDULING_TAB, resource: vm }, function (resource) { return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(SchedulingSection, { vm: resource, vmi: vmi }))); }));
};
export default SchedulingTab;
//# sourceMappingURL=SchedulingTab.js.map