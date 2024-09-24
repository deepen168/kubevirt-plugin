import React from 'react';
import { modelToGroupVersionKind, ProjectModel } from '@kubevirt-ui/kubevirt-api/console';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import { getProjectOptions } from '@kubevirt-utils/components/ProjectDropdown/utils/utils';
import { ALL_PROJECTS } from '@kubevirt-utils/hooks/constants';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var ProjectDropdown = function (_a) {
    var _b = _a.includeAllProjects, includeAllProjects = _b === void 0 ? true : _b, onChange = _a.onChange, selectedProject = _a.selectedProject;
    var projects = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ProjectModel),
        isList: true,
        namespaced: false,
    })[0];
    return (React.createElement("div", { className: "project-dropdown" },
        React.createElement(InlineFilterSelect, { options: getProjectOptions(includeAllProjects, projects), selected: selectedProject || ALL_PROJECTS, setSelected: onChange, toggleProps: { isFullWidth: true } })));
};
export default ProjectDropdown;
//# sourceMappingURL=ProjectDropdown.js.map