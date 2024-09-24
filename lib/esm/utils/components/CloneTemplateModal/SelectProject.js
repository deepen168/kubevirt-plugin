import React from 'react';
import { modelToGroupVersionKind, ProjectModel } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName } from '@kubevirt-utils/resources/shared';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import InlineFilterSelect from '../FilterSelect/InlineFilterSelect';
import Loading from '../Loading/Loading';
var SelectProject = function (_a) {
    var selectedProject = _a.selectedProject, setSelectedProject = _a.setSelectedProject;
    var t = useKubevirtTranslation().t;
    var _b = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ProjectModel),
        isList: true,
        namespaced: false,
    }), projects = _b[0], projectsLoaded = _b[1];
    if (!projectsLoaded)
        return React.createElement(Loading, null);
    return (React.createElement(InlineFilterSelect, { options: projects === null || projects === void 0 ? void 0 : projects.map(function (project) { return ({
            children: getName(project),
            groupVersionKind: modelToGroupVersionKind(ProjectModel),
            value: getName(project),
        }); }), selected: selectedProject, setSelected: setSelectedProject, toggleProps: { isFullWidth: true, placeholder: t('Select project') } }));
};
export default SelectProject;
//# sourceMappingURL=SelectProject.js.map