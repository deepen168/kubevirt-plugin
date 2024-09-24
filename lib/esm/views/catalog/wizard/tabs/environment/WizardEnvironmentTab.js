import React from 'react';
import EnvironmentForm from '@kubevirt-utils/components/EnvironmentEditor/EnvironmentForm';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import { PATHS_TO_HIGHLIGHT } from '@kubevirt-utils/resources/vm/utils/constants';
import { Bullseye, PageSection, PageSectionVariants } from '@patternfly/react-core';
import './wizard-environment-tab.scss';
var WizardEnvironmentTab = function (_a) {
    var updateVM = _a.updateVM, vm = _a.vm;
    if (!vm)
        return (React.createElement(Bullseye, null,
            React.createElement(Loading, null)));
    return (React.createElement(PageSection, { className: "wizard-environment-tab", variant: PageSectionVariants.light },
        React.createElement(SidebarEditor, { onResourceUpdate: updateVM, pathsToHighlight: PATHS_TO_HIGHLIGHT.ENV_TAB, resource: vm },
            React.createElement(EnvironmentForm, { updateVM: updateVM, vm: vm }))));
};
export default WizardEnvironmentTab;
//# sourceMappingURL=WizardEnvironmentTab.js.map