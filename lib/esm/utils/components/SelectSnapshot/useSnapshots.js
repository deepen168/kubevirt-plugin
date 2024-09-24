import { useMemo } from 'react';
import { modelToGroupVersionKind, ProjectModel, VolumeSnapshotModel, } from '@kubevirt-ui/kubevirt-api/console';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var useSnapshots = function (projectSelected) {
    var _a = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ProjectModel),
        isList: true,
        namespaced: false,
    }), projects = _a[0], projectsLoaded = _a[1], projectsErrors = _a[2];
    var projectsNames = useMemo(function () { var _a; return (_a = projects === null || projects === void 0 ? void 0 : projects.map(function (project) { var _a; return (_a = project === null || project === void 0 ? void 0 : project.metadata) === null || _a === void 0 ? void 0 : _a.name; })) === null || _a === void 0 ? void 0 : _a.sort(function (a, b) { return a === null || a === void 0 ? void 0 : a.localeCompare(b); }); }, [projects]);
    var snapshotWathcResource = projectSelected
        ? {
            groupVersionKind: modelToGroupVersionKind(VolumeSnapshotModel),
            isList: true,
            namespace: projectSelected,
            namespaced: true,
        }
        : null;
    var _b = useK8sWatchResource(snapshotWathcResource), snapshotsRaw = _b[0], snapshotsLoaded = _b[1], snapshotsErrors = _b[2];
    var snapshots = useMemo(function () { var _a; return (_a = (snapshotsRaw || [])) === null || _a === void 0 ? void 0 : _a.sort(function (a, b) { var _a, _b, _c; return (_b = (_a = a === null || a === void 0 ? void 0 : a.metadata) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.localeCompare((_c = b === null || b === void 0 ? void 0 : b.metadata) === null || _c === void 0 ? void 0 : _c.name); }); }, [snapshotsRaw]);
    return {
        error: projectsErrors || snapshotsErrors,
        projectsLoaded: projectsLoaded,
        projectsNames: projectsNames,
        snapshots: snapshots,
        snapshotsLoaded: snapshotsLoaded,
    };
};
export default useSnapshots;
//# sourceMappingURL=useSnapshots.js.map