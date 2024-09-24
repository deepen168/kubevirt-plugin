import { modelToGroupVersionKind, ProjectModel } from '@kubevirt-ui/kubevirt-api/console';
import { ALL_PROJECTS } from '@kubevirt-utils/hooks/constants';
import { getName } from '@kubevirt-utils/resources/shared';
export var getProjectOptions = function (includeAllProjects, projects) {
    var projectOptions = projects
        .sort(function (a, b) { return getName(a).localeCompare(getName(b)); })
        .map(function (proj) {
        var name = getName(proj);
        return {
            children: name,
            groupVersionKind: modelToGroupVersionKind(ProjectModel),
            value: name,
        };
    });
    var allProjects = includeAllProjects
        ? [
            {
                children: ALL_PROJECTS,
                groupVersionKind: modelToGroupVersionKind(ProjectModel),
                value: ALL_PROJECTS,
            },
        ].concat(projectOptions)
        : projectOptions;
    return allProjects;
};
//# sourceMappingURL=utils.js.map