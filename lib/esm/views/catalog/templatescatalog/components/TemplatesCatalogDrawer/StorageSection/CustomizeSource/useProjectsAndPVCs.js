import { useMemo } from 'react';
import { modelToGroupVersionKind, PersistentVolumeClaimModel, ProjectModel, } from '@kubevirt-ui/kubevirt-api/console';
import { convertResourceArrayToMap } from '@kubevirt-utils/resources/shared';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
export var useProjectsAndPVCs = function (projectSelected) {
    var _a = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ProjectModel),
        isList: true,
        namespaced: true,
    }), projects = _a[0], projectsLoaded = _a[1], projectsErrors = _a[2];
    var projectsNames = useMemo(function () { var _a; return (_a = projects === null || projects === void 0 ? void 0 : projects.map(function (project) { var _a; return (_a = project === null || project === void 0 ? void 0 : project.metadata) === null || _a === void 0 ? void 0 : _a.name; })) === null || _a === void 0 ? void 0 : _a.sort(function (a, b) { return a === null || a === void 0 ? void 0 : a.localeCompare(b); }); }, [projects]);
    var pvcWatchResource = projectSelected
        ? {
            groupVersionKind: modelToGroupVersionKind(PersistentVolumeClaimModel),
            isList: true,
            namespace: projectSelected,
            namespaced: true,
        }
        : null;
    var _b = useK8sWatchResource(pvcWatchResource), pvcs = _b[0], pvcsLoaded = _b[1], pvcsErrors = _b[2];
    var pvcNamesFilteredByProjects = useMemo(function () {
        var _a, _b, _c;
        return (_c = (_b = (_a = (pvcs || [])) === null || _a === void 0 ? void 0 : _a.filter(function (pvc) {
            var _a, _b, _c;
            return ((_a = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _a === void 0 ? void 0 : _a.namespace) === projectSelected &&
                !((_b = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _b === void 0 ? void 0 : _b.deletionTimestamp) &&
                ((_c = pvc === null || pvc === void 0 ? void 0 : pvc.status) === null || _c === void 0 ? void 0 : _c.phase) === 'Bound';
        })) === null || _b === void 0 ? void 0 : _b.map(function (pvc) { var _a; return (_a = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _a === void 0 ? void 0 : _a.name; })) === null || _c === void 0 ? void 0 : _c.sort(function (a, b) { return a === null || a === void 0 ? void 0 : a.localeCompare(b); });
    }, [projectSelected, pvcs]);
    return {
        error: projectsErrors || pvcsErrors,
        filteredPVCNames: pvcNamesFilteredByProjects,
        projectsLoaded: projectsLoaded,
        projectsNames: projectsNames,
        pvcMapper: convertResourceArrayToMap(pvcs, true),
        pvcsLoaded: pvcsLoaded,
    };
};
//# sourceMappingURL=useProjectsAndPVCs.js.map