import { modelToGroupVersionKind, ProjectModel } from '@kubevirt-ui/kubevirt-api/console';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
export var useProjectNames = function () {
    var projects = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ProjectModel),
        isList: true,
        namespaced: false,
    })[0];
    var projectNames = (projects || []).map(function (project) { return project.metadata.name; });
    if (isEmpty(projectNames) || !(projectNames === null || projectNames === void 0 ? void 0 : projectNames.includes('openshift'))) {
        projectNames.push('openshift');
    }
    return projectNames;
};
//# sourceMappingURL=useProjectNames.js.map