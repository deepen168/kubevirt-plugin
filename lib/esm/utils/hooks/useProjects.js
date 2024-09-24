import { modelToGroupVersionKind, ProjectModel } from '@kubevirt-ui/kubevirt-api/console';
import { getName } from '@kubevirt-utils/resources/shared';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var useProjects = function () {
    var _a;
    var _b = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ProjectModel),
        isList: true,
    }), projectsData = _b[0], loaded = _b[1], error = _b[2];
    return [(_a = projectsData === null || projectsData === void 0 ? void 0 : projectsData.map(getName)) === null || _a === void 0 ? void 0 : _a.sort(function (a, b) { return a === null || a === void 0 ? void 0 : a.localeCompare(b); }), loaded, error];
};
export default useProjects;
//# sourceMappingURL=useProjects.js.map