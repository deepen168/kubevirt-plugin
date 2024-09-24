import React from 'react';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import { PATHS_TO_HIGHLIGHT } from '@kubevirt-utils/resources/vm/utils/constants';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
import { onSubmitYAML } from './utils/utils';
import DetailsSection from './DetailsSection';
var DetailsTab = function (_a) {
    var allInstanceTypes = _a.allInstanceTypes, instanceTypeVM = _a.instanceTypeVM, vm = _a.vm, vmi = _a.vmi;
    return (React.createElement(SidebarEditor, { onResourceUpdate: onSubmitYAML, pathsToHighlight: PATHS_TO_HIGHLIGHT.DETAILS_TAB, resource: vm }, function (resource) { return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(DetailsSection, { allInstanceTypes: allInstanceTypes, instanceTypeVM: instanceTypeVM, vm: resource, vmi: vmi }))); }));
};
export default DetailsTab;
//# sourceMappingURL=DetailsTab.js.map