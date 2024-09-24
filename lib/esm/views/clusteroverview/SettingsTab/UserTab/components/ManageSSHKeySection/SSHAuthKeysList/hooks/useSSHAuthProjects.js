import { useEffect, useMemo, useState } from 'react';
import { modelToGroupVersionKind, ProjectModel, SecretModel, } from '@kubevirt-ui/kubevirt-api/console';
import { getName } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { checkAccess, useK8sWatchResource, } from '@openshift-console/dynamic-plugin-sdk';
var useSSHAuthProjects = function (authKeyRows) {
    var _a = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ProjectModel),
        isList: true,
        namespaced: false,
    }), projects = _a[0], loaded = _a[1];
    var _b = useState([]), selectableProjects = _b[0], setSelectableProjects = _b[1];
    var _c = useState(true), loading = _c[0], setLoading = _c[1];
    var selectedProjects = useMemo(function () {
        return authKeyRows.reduce(function (acc, row) {
            !isEmpty(row.projectName) && !isEmpty(row.secretName) && acc.push(row.projectName);
            return acc;
        }, []) || [];
    }, [authKeyRows]);
    useEffect(function () {
        if (loaded) {
            var projectNames = projects === null || projects === void 0 ? void 0 : projects.reduce(function (acc, project) {
                var projName = getName(project);
                !selectedProjects.includes(projName) && acc.push(projName);
                return acc;
            }, []);
            var promises = projectNames.map(function (projectName) {
                return checkAccess({
                    group: SecretModel.apiGroup,
                    namespace: projectName,
                    resource: SecretModel.plural,
                    verb: 'create',
                });
            });
            Promise.all(promises)
                .then(function (accessReviewResults) {
                var projectsAllowedCreateSecret = accessReviewResults
                    .reduce(function (acc, accessReview) {
                    var _a, _b, _c;
                    ((_a = accessReview === null || accessReview === void 0 ? void 0 : accessReview.status) === null || _a === void 0 ? void 0 : _a.allowed) &&
                        acc.push((_c = (_b = accessReview === null || accessReview === void 0 ? void 0 : accessReview.spec) === null || _b === void 0 ? void 0 : _b.resourceAttributes) === null || _c === void 0 ? void 0 : _c.namespace);
                    return acc;
                }, [])
                    .sort(function (a, b) { return a === null || a === void 0 ? void 0 : a.localeCompare(b); });
                setSelectableProjects(projectsAllowedCreateSecret);
            })
                .finally(function () { return setLoading(false); });
        }
    }, [projects, selectedProjects, loaded]);
    return { loaded: loaded && !loading, selectableProjects: selectableProjects };
};
export default useSSHAuthProjects;
//# sourceMappingURL=useSSHAuthProjects.js.map